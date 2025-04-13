const products: Product[] = []

export async function GET() {
  return Response.json(products)
}

export async function POST(request: Request) {
  const body = await request.json()
  const newProduct = { id: Date.now(), ...body }
  products.push(newProduct)
  return Response.json(newProduct, { status: 201 })
}
