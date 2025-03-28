import { rateLimit } from "@/lib/rateLimit";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!validator.isEmail(email)) {
    return NextResponse.json(
      { error: "Invalid email format" },
      { status: 400 }
    );
  }

  const limitExceeded = await rateLimit(email);
  if (limitExceeded) {
    return NextResponse.json(
      { error: "Too many requests. Try again later." },
      { status: 429 }
    );
  }

  const user = await db.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({
      message: "If this email exists, a reset link will be sent.",
    });
  }

  const token = generateToken();
  await db.passwordResetToken.create({
    data: { email, token, expiresAt: new Date(Date.now() + 3600000) },
  });

  const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`;
  await sendEmail(
    email,
    "Password Reset",
    `Click here to reset your password: ${resetLink}`
  );

  console.log(`Password reset request processed for: ${email}`);
  return NextResponse.json({
    message: "If this email exists, a reset link will be sent.",
  });
}
