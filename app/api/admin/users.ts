import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authenticateUser } from "@/lib/auth";
import { logInfo, logError } from "@/lib/logger";

export async function GET(req: NextRequest) {
  try {
    const authUser = await authenticateUser(req);
    if (!authUser || authUser.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const { page = "1", limit = "10", role } = req.nextUrl.searchParams;
    const pageNum = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);

    const roleFilter = role ? { role } : {};

    const users = await prisma.user.findMany({
      where: roleFilter,
      take: pageSize,
      skip: (pageNum - 1) * pageSize,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    const totalUsers = await prisma.user.count({ where: roleFilter });

    logInfo(`Admin ${authUser.id} fetched user list successfully`);

    return NextResponse.json({
      success: true,
      users,
      totalUsers,
      pageNum,
      pageSize,
    });
  } catch (error) {
    logError("Error fetching users in admin panel", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
