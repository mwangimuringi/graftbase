export async function POST(req: Request) {
    const { email, password } = await req.json();
    // Placeholder auth logic
    if (email && password) {
      return NextResponse.json({ status: 'success', token: 'fake-jwt' });
    }
    return NextResponse.json({ status: 'error', message: 'Invalid credentials' }, { status: 401 });

    if (!email || !password) {
        return NextResponse.json({ status: 'error', message: 'Email and password required' }, { status: 400 });
      }
      
  }
  