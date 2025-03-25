import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const session = auth();

    if (!session) {
        return NextResponse.json({ error: "No active session" }, { status: 401 });
    }

    return NextResponse.json({ session });
}
