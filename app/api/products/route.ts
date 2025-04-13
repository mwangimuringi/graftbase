export async function GET() {
    const products = [
      { id: 1, name: 'Product A', price: 19.99 },
      { id: 2, name: 'Product B', price: 29.99 }
    ]
    return Response.json(products)
  }
  