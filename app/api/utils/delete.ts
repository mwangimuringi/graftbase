import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authenticateUser } from "@/lib/auth";

export async function DELETE(req: NextRequest) {
  try {
    const authUser = await authenticateUser(req);
    if (!authUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await prisma.user.delete({
      where: { id: authUser.id },
    });

    return NextResponse.json({ message: "User account deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete user account" },
      { status: 500 }
    );
  }
}
