import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authenticateUser } from "@/lib/auth";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const authUser = await authenticateUser(req);
  if (!authUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = params;
  if (!id) {
    return NextResponse.json(
      { error: "Comment ID is required" },
      { status: 400 }
    );
  }

  const comment = await prisma.comment.findUnique({
    where: { id },
    include: { post: true },
  });

  if (!comment) {
    return NextResponse.json({ error: "Comment not found" }, { status: 404 });
  }

  // Allow access only if the user is the comment owner or the post author
  if (comment.userId !== authUser.id && comment.post.authorId !== authUser.id) {
    return NextResponse.json({ error: "Access denied" }, { status: 403 });
  }

  return NextResponse.json({ comment });
}
