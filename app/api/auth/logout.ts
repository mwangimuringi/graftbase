import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { cookies } from "next/headers";

export async function POST(req: Request) {
    try {
        const session = auth();
        if (session) {
            await session.revoke();
        }

        cookies().delete("authToken");

        return NextResponse.redirect(new URL("/", req.url));
    } catch (error) {
        console.error("Logout error:", error);
        return NextResponse.json({ error: "Logout process encountered an issue" }, { status: 500 });
    }
}
