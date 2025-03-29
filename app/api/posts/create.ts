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

    const { title, content } = await req.json();
    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    if (title.length > 100) {
      return NextResponse.json(
        { error: "Title must be under 100 characters" },
        { status: 400 }
      );
    }
    if (content.length > 5000) {
      return NextResponse.json(
        { error: "Content must be under 5000 characters" },
        { status: 400 }
      );
    }

    const sanitizedTitle = title.trim();
    const sanitizedContent = content.trim();

    const newPost = await prisma.post.create({
      data: {
        title: sanitizedTitle,
        content: sanitizedContent,
        userId: authUser.id,
      },
    });

    return NextResponse.json({
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    logError("Post creation failed", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
