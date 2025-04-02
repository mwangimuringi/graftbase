import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authenticateUser } from "@/lib/auth";
import { logError } from "@/lib/logger";

export async function GET(req: NextRequest) {
    try {
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
    } catch (error) {
        logError("Error fetching admin dashboard stats", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
