import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authenticateUser } from "@/lib/auth";

export async function PUT(req: NextRequest) {
  const authUser = await authenticateUser(req);
  if (!authUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const notificationId = searchParams.get("id");

  if (!notificationId) {
    return NextResponse.json(
      { error: "Notification ID is required" },
      { status: 400 }
    );
  }

  await prisma.notification.update({
    where: { id: notificationId, userId: authUser.id },
    data: { read: true },
  });

  return NextResponse.json({
    success: true,
    message: "Notification marked as read",
  });
}
