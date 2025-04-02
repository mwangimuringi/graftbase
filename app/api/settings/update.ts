import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authenticateUser } from "@/lib/auth";

export async function PUT(req: NextRequest) {
    const authUser = await authenticateUser(req);
    if (!authUser) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();

    const updatedSettings = await prisma.user.update({
        where: { id: authUser.id },
        data: { settings: body },
    });

    return NextResponse.json({ success: true, message: "Settings updated", data: updatedSettings });
}
