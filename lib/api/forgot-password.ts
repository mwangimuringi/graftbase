import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  const { token, newPassword } = await req.json();

  const resetToken = await db.passwordResetToken.findUnique({
    where: { token },
  });

  if (!resetToken || resetToken.expiresAt < new Date()) {
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await db.user.update({
    where: { email: resetToken.email },
    data: { password: hashedPassword },
  });
  await db.passwordResetToken.delete({ where: { token } });

  console.log(`Password successfully reset for: ${resetToken.email}`);
  return NextResponse.json({
    message: "Password has been reset successfully.",
  });
}
