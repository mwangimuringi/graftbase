import { NextRequest, NextResponse } from "next/server";
import { authenticateUser } from "@/lib/auth";

export async function GET(req: NextRequest) {
    const authUser = await authenticateUser(req);
    if (!authUser || authUser.role !== "admin") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    return NextResponse.json({ message: "Admin authenticated, fetching stats..." });
}
