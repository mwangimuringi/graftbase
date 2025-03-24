import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

// Handle GET request (Basic endpoint check)
export async function GET(req: NextRequest) {
  return NextResponse.json({ message: "Authentication route active" });
}

// Handle POST request (Login)
export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: "Missing credentials" }, { status: 400 });
    }

    const session = await auth().signInWithPassword({ email, password });
    return NextResponse.json({ session });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
}

// Middleware for protected routes
export async function middleware(req: NextRequest) {
  const session = auth();
  if (!session) {
    return NextResponse.redirect("/login");
  }
  return NextResponse.next();
}
