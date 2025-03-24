import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: "Missing credentials" }, { status: 400 });
    }

    const session = await auth().signInWithPassword({ email, password });
    return NextResponse.json({ session });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Authentication failed" }, { status: 401 });
  }
}
