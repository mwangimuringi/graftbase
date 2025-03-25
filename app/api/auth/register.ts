import { clerkClient } from "@clerk/nextjs";

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

        return NextResponse.json({ message: "User registered successfully", userId: user.id });
    } catch (error) {
        return NextResponse.json({ error: "Registration failed" }, { status: 500 });
    }
}
