// app/api/products/route.ts

interface Product {
    id: number
    name: string
    price: number
  }
  
  // In-memory mock database
  const products: Product[] = []
  
  export async function GET() {
    return Response.json(products)
  }
  
  export async function POST(request: Request) {
    try {
      const body = await request.json()
  
      if (!body.name || !body.price) {
        return Response.json(
          { error: 'Name and price are required' },
          { status: 400 }
        )
      }
  
      const newProduct: Product = {
        id: Date.now(), // unique enough for demo
        name: body.name,
        price: parseFloat(body.price),
      }
  
      products.push(newProduct)
  
      return Response.json(newProduct, { status: 201 })
    } catch (error) {
      return Response.json(
        { error: 'Invalid JSON format' },
        { status: 400 }
      )
    }
  }
  