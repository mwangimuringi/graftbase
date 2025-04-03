import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authenticateUser } from "@/lib/auth";

export async function GET(req: NextRequest) {
    const authUser = await authenticateUser(req);
    if (!authUser || authUser.role !== "admin") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const { page = "1", limit = "20" } = req.nextUrl.searchParams;
    const pageNum = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);

    const logs = await prisma.log.findMany({
        take: pageSize,
        skip: (pageNum - 1) * pageSize,
        select: { id: true, level: true, message: true, createdAt: true },
        orderBy: { createdAt: "desc" }
    });

    const totalLogs = await prisma.log.count();

    return NextResponse.json({ success: true, logs, totalLogs, pageNum, pageSize });
}
