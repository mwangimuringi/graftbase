import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { email } = await req.json();
    console.log(`Password reset requested for: ${email}`);
    return NextResponse.json({ message: "If this email exists, a reset link will be sent." });
}
