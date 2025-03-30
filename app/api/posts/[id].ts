import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authenticateUser } from "@/lib/auth";
import { logError } from "@/lib/logger";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    if (!params.id) {
      return NextResponse.json(
        { error: "Post ID is required" },
        { status: 400 }
      );
    }

    const authUser = await authenticateUser(req);

    const post = await prisma.post.findUnique({
      where: { id: params.id },
      include: { author: { select: { id: true, name: true } } },
    });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    if (post.isPrivate && (!authUser || authUser.id !== post.userId)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    return NextResponse.json({
      post,
      metadata: {
        requestedAt: new Date().toISOString(),
        author: post.author,
      },
    });
  } catch (error) {
    logError("Error fetching post", error);
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}
