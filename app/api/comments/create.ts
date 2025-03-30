import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { postId, content } = body;

        if (!postId || !content) {
            return NextResponse.json({ error: "Post ID and content are required" }, { status: 400 });
        }

        return NextResponse.json({ message: "Validated comment input" });
    } catch (error) {
        return NextResponse.json({ error: "Invalid request format" }, { status: 400 });
    }
}
