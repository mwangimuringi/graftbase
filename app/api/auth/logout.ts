import { auth } from "@clerk/nextjs";

export async function POST(req: Request) {
    try {
        const session = auth();
        if (!session) {
            return NextResponse.json({ error: "No active session" }, { status: 401 });
        }

        await session.revoke();

        return NextResponse.json({ message: "User logged out successfully" });
    } catch (error) {
        return NextResponse.json({ error: "Logout failed" }, { status: 500 });
    }
}
