import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authenticateUser } from "@/lib/auth";

export async function DELETE(req: NextRequest) {
  const authUser = await authenticateUser(req);
  if (!authUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Comment ID is required" },
      { status: 400 }
    );
  }

  const comment = await prisma.comment.findUnique({ where: { id } });

  if (!comment) {
    return NextResponse.json({ error: "Comment not found" }, { status: 404 });
  }

  return NextResponse.json({
    message: "User authenticated, comment ready for deletion",
  });
}
