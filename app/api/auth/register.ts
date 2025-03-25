export async function POST(req: Request) {
    try {
        const { email, password, name } = await req.json();

        if (!email || !password || !name) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        return NextResponse.json({ message: "User input parsed" });
    } catch (error) {
        return NextResponse.json({ error: "Invalid request format" }, { status: 400 });
    }
}
