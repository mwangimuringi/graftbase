export async function POST(req: Request) {
    try {
        const { email, password, name } = await req.json();
        if (!email || !password || !name) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const user = await clerkClient.users.createUser({
            emailAddress: [email],
            password,
            firstName: name
        });

        return NextResponse.json({
            message: "User registered successfully",
            user: { id: user.id, email: user.emailAddresses[0].emailAddress }
        });
    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json({ error: "Registration failed" }, { status: 500 });
    }
}
