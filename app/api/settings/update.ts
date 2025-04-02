import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authenticateUser } from "@/lib/auth";
import { validateSettings } from "@/lib/validation";

export async function PUT(req: NextRequest) {
    const authUser = await authenticateUser(req);
    if (!authUser) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const validationError = validateSettings(body);
    if (validationError) {
        return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const updatedSettings = await prisma.user.update({
        where: { id: authUser.id },
        data: { settings: { ...authUser.settings, ...body } }, // Merge old settings with new ones
    });

    return NextResponse.json({ success: true, message: "Settings updated", data: updatedSettings });
}
