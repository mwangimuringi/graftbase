import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email } = body;

        if (!name || !email) {
            return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
        }

        return NextResponse.json({ message: "Validated input successfully" });
    } catch (error) {
        return NextResponse.json({ error: "Invalid request format" }, { status: 400 });
    }
}
