import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authenticateUser } from "@/lib/auth";
import { logError } from "@/lib/logger";

export async function POST(req: NextRequest) {
  try {
    const authUser = await authenticateUser(req);
    if (!authUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { postId, content } = body;

    if (!postId || !content) {
      return NextResponse.json(
        { error: "Post ID and content are required" },
        { status: 400 }
      );
    }

    const newComment = await prisma.comment.create({
      data: {
        postId,
        content,
        userId: authUser.id,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Comment created successfully",
      comment: newComment,
    });
  } catch (error) {
    logError("Error creating comment", error);
    return NextResponse.json(
      { error: "Failed to create comment" },
      { status: 500 }
    );
  }
}
