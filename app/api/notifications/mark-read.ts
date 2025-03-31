import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authenticateUser } from "@/lib/auth";

export async function PUT(req: NextRequest) {
  const authUser = await authenticateUser(req);
  if (!authUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { notificationIds } = await req.json();

  if (!notificationIds || !Array.isArray(notificationIds)) {
    return NextResponse.json(
      { error: "Invalid request format" },
      { status: 400 }
    );
  }

  await prisma.notification.updateMany({
    where: { id: { in: notificationIds }, userId: authUser.id },
    data: { read: true },
  });

  return NextResponse.json({
    success: true,
    message: "Notifications marked as read",
  });
}
