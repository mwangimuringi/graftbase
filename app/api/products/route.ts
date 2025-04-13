export async function GET() {
    const products = [
      { id: 1, name: 'Product A', price: 19.99 },
      { id: 2, name: 'Product B', price: 29.99 }
    ]
    return Response.json(products)
  }
  
  export async function POST(request: Request) {
    const body = await request.json()
    // In real apps, save to DB
    return Response.json({ message: 'Product created', product: body }, { status: 201 })
  }
  
  if (!body.name || !body.price) {
    return Response.json({ error: 'Name and price are required' }, { status: 400 })
  }
  