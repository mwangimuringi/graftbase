// app/auth/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();
  
    if (!email || !password) {
      return NextResponse.json({ error: "Missing credentials" }, { status: 400 });
    }
  
    // Simulate authentication process
    if (email === "test@example.com" && password === "password") {
      return NextResponse.json({ token: "mock_token" });
    }
  
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
  