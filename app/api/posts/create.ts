import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authenticateUser } from "@/lib/auth";

export async function POST(req: NextRequest) {
    try {
        const authUser = await authenticateUser(req);
        if (!authUser) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { title, content } = await req.json();
        if (!title || !content) {
            return NextResponse.json({ error: "Title and content are required" }, { status: 400 });
        }

        const newPost = await prisma.post.create({
            data: {
                title,
                content,
                userId: authUser.id,
            },
        });

        return NextResponse.json({ message: "Post created successfully", post: newPost });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
    }
}
