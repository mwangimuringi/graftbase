import { db } from "@/lib/db";
import { generateToken } from "@/lib/utils";

export async function POST(req: NextRequest) {
    const { email } = await req.json();

    if (!validator.isEmail(email)) {
        return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const user = await db.user.findUnique({ where: { email } });
    if (!user) {
        return NextResponse.json({ message: "If this email exists, a reset link will be sent." });
    }

    const token = generateToken();
    await db.passwordResetToken.create({ data: { email, token, expiresAt: new Date(Date.now() + 3600000) } });

    console.log(`Generated reset token for: ${email}`);
    return NextResponse.json({ message: "If this email exists, a reset link will be sent." });
}
