import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
        return NextResponse.json({ error: "Comment ID is required" }, { status: 400 });
    }

    return NextResponse.json({ message: `Validated comment ID: ${id}` });
}
