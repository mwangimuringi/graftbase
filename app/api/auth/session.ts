export async function GET(req: Request) {
    try {
        const session = auth();

        if (!session) {
            return NextResponse.json({ error: "No active session found" }, { status: 401 });
        }

        if (session.status !== "active") {
            return NextResponse.json({ error: "Session expired or invalid" }, { status: 403 });
        }

        return NextResponse.json({
            userId: session.userId,
            email: session.user?.emailAddresses[0]?.emailAddress || "N/A",
            status: session.status,
        });
    } catch (error) {
        console.error("Session retrieval error:", error);
        return NextResponse.json({ error: "Failed to fetch session" }, { status: 500 });
    }
}
