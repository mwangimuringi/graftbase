import { NextRequest, NextResponse } from "next/server";
import { authenticateUser } from "@/lib/auth";

export async function DELETE(req: NextRequest) {
    try {
        const authUser = await authenticateUser(req);
        if (!authUser) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        return NextResponse.json({ message: "User authenticated, ready to delete account" });
    } catch (error) {
        return NextResponse.json({ error: "Authentication failed" }, { status: 401 });
    }
}
