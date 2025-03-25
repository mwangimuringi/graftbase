export async function GET(req: Request) {
    const session = auth();

    if (!session) {
        return NextResponse.json({ error: "No active session" }, { status: 401 });
    }

    return NextResponse.json({
        userId: session.userId,
        email: session.user?.emailAddresses[0]?.emailAddress || "N/A",
        status: session.status,
    });
}
