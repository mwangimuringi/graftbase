export async function GET(req: Request) {
    try {
        let session = auth();

        if (!session) {
            return NextResponse.json({ error: "No active session" }, { status: 401 });
        }

        if (session.status !== "active") {
            session = await session.refresh();
        }

        return NextResponse.json({
            userId: session.userId,
            email: session.user?.emailAddresses[0]?.emailAddress || "N/A",
            status: session.status,
        });
    } catch (error) {
        console.error("Session error:", error);
        return NextResponse.json({ error: "Failed to fetch session" }, { status: 500 });
    }
}
