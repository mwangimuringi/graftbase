import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authenticateUser } from "@/lib/auth";

export async function GET(req: NextRequest) {
    const authUser = await authenticateUser(req);
    if (!authUser || authUser.role !== "admin") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const userCount = await prisma.user.count();
    const postCount = await prisma.post.count();
    const commentCount = await prisma.comment.count();
    const activeUsers = await prisma.user.count({ where: { lastLogin: { not: null } } });

    return NextResponse.json({
        success: true,
        stats: { userCount, postCount, commentCount, activeUsers },
    });
}
