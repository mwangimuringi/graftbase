import validator from "validator";

export async function POST(req: NextRequest) {
    const { email } = await req.json();

    if (!validator.isEmail(email)) {
        return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    console.log(`Password reset requested for: ${email}`);
    return NextResponse.json({ message: "If this email exists, a reset link will be sent." });
}
