import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authenticateUser } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const authUser = await authenticateUser(req);
  if (!authUser || authUser.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const { page = "1", limit = "10" } = req.nextUrl.searchParams;
  const pageNum = parseInt(page, 10);
  const pageSize = parseInt(limit, 10);

  const users = await prisma.user.findMany({
    take: pageSize,
    skip: (pageNum - 1) * pageSize,
    select: { id: true, name: true, email: true, role: true, createdAt: true },
  });

  const totalUsers = await prisma.user.count();

  return NextResponse.json({
    success: true,
    users,
    totalUsers,
    pageNum,
    pageSize,
  });
}
