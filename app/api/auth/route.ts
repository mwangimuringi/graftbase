import { auth } from "@clerk/nextjs";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Missing credentials" }, { status: 400 });
  }

  // Simulate authentication process
  if (email === "test@example.com" && password === "password") {
    return NextResponse.json({ token: "mock_token" });
  }
  
  try {
    const session = await auth().signInWithPassword({ email, password });
    return NextResponse.json({ session });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
}
