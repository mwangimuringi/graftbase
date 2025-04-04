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
      
      // Simulated user check
if (email !== 'admin@example.com' || password !== 'admin123') {
    return NextResponse.json({ status: 'error', message: 'User not found or password incorrect' }, { status: 401 });
  }
  
  const token = `mock-token-${Date.now()}`;
return NextResponse.json({ status: 'success', token });

  }

  export async function handler(req: Request) {
    if (req.method === 'POST') return POST(req);
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }
  
  