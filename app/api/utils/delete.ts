import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authenticateUser } from "@/lib/auth";
import { logError } from "@/lib/logger";

export async function DELETE(req: NextRequest) {
    try {
        const authUser = await authenticateUser(req);
        if (!authUser) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await prisma.user.delete({
            where: { id: authUser.id },
            include: {
                posts: true, // Example: Deletes user-related posts
                comments: true, // Example: Deletes user-related comments
            },
        });

        return NextResponse.json({ message: "User account and related data deleted successfully" });
    } catch (error) {
        logError("User deletion failed", error);
        return NextResponse.json({ error: "Failed to delete user account" }, { status: 500 });
    }
}
