import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { sendEmail } from "@/lib/email";
import { generateToken } from "@/lib/utils";
import { rateLimit } from "@/lib/rateLimit";
import validator from "validator";
import bcrypt from "bcrypt";

// Password Reset Request Handler
export async function POST(req: NextRequest) {
    const { email } = await req.json();

    // Validate email format
    if (!validator.isEmail(email)) {
        return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Rate limiting to prevent abuse
    const limitExceeded = await rateLimit(email);
    if (limitExceeded) {
        return NextResponse.json({ error: "Too many requests. Try again later." }, { status: 429 });
    }

    // Check if user exists
    const user = await db.user.findUnique({ where: { email } });
    if (!user) {
        return NextResponse.json({ message: "If this email exists, a reset link will be sent." });
    }

    // Generate reset token
    const token = generateToken();
    await db.passwordResetToken.create({
        data: { email, token, expiresAt: new Date(Date.now() + 3600000) }, // Expires in 1 hour
    });

    // Send reset link via email
    const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`;
    await sendEmail(email, "Password Reset", `Click here to reset your password: ${resetLink}`);

    console.log(`Password reset request processed for: ${email}`);
    return NextResponse.json({ message: "If this email exists, a reset link will be sent." });
}

// Password Reset Token Verification and Update Handler
export async function PUT(req: NextRequest) {
    const { token, newPassword } = await req.json();

    // Find the reset token in the database
    const resetToken = await db.passwordResetToken.findUnique({ where: { token } });

    if (!resetToken || resetToken.expiresAt < new Date()) {
        return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await db.user.update({
        where: { email: resetToken.email },
        data: { password: hashedPassword },
    });

    // Remove used token
    await db.passwordResetToken.delete({ where: { token } });

    console.log(`Password successfully reset for: ${resetToken.email}`);
    return NextResponse.json({ message: "Password has been reset successfully." });
}

// Cleanup function to delete expired tokens automatically
export async function cleanExpiredTokens() {
    await db.passwordResetToken.deleteMany({
        where: { expiresAt: { lt: new Date() } },
    });
    console.log("Expired password reset tokens cleaned up.");
}

// Call cleanup function periodically (e.g., on server start)
cleanExpiredTokens();
