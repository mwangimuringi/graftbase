import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authenticateUser } from "@/lib/auth";
import { validateSettings } from "@/lib/validation";
import { logInfo, logError } from "@/lib/logger";

export async function PUT(req: NextRequest) {
    try {
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
            data: { settings: { ...authUser.settings, ...body } },
        });

        logInfo(`User ${authUser.id} updated settings successfully`);

        return NextResponse.json({
            success: true,
            message: "Settings updated",
            data: updatedSettings.settings,
        });
    } catch (error) {
        logError("Error updating user settings", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
