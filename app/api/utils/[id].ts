import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authenticateUser } from "@/lib/auth";
import { logError } from "@/lib/logger";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const userId = params.id;
    const authUser = await authenticateUser(req);

    if (!authUser) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const isAdmin = authUser.role === "admin";
    const isOwner = authUser.id === userId;

    if (!isAdmin && !isOwner) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { id: true, name: true, email: true, createdAt: true }
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch (error) {
        logError("Error fetching user:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
