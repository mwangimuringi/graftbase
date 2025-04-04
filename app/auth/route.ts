// app/auth/route.ts
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  try {
    const { email, password } = await req.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
    }

    // Simulated user check
    if (email !== 'admin@example.com' || password !== 'admin123') {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Generate a mock token (Replace with real JWT logic)
    const token = `mock-token-${Date.now()}`;
    return NextResponse.json({ token });
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
};

// Handle GET requests (Optional)
export async function GET() {
  return NextResponse.json({ message: 'Auth endpoint' });
}

// Generic handler to block unsupported methods
export async function handler(req: Request) {
  if (req.method === 'POST') return POST(req);
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}
