export async function POST(req: Request) {
    try {
        const session = auth();
        if (!session) {
            return NextResponse.json({ error: "No active session to log out" }, { status: 401 });
        }

        await session.revoke();

        return NextResponse.json({ message: "User logged out successfully" });
    } catch (error) {
        console.error("Logout error:", error);
        return NextResponse.json({ error: "Logout process encountered an issue" }, { status: 500 });
    }
}
