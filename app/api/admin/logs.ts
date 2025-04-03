import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authenticateUser } from "@/lib/auth";

export async function GET(req: NextRequest) {
    const authUser = await authenticateUser(req);
    if (!authUser || authUser.role !== "admin") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const logs = await prisma.log.findMany({
        select: { id: true, level: true, message: true, createdAt: true },
        orderBy: { createdAt: "desc" }
    });

    return NextResponse.json({ success: true, logs });
}
