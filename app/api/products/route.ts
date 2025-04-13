export async function POST(request: Request) {
    try {
      const body = await request.json()
      if (!body.name || !body.price) {
        return Response.json({ error: 'Name and price are required' }, { status: 400 })
      }
      const newProduct = { id: Date.now(), ...body }
      products.push(newProduct)
      return Response.json(newProduct, { status: 201 })
    } catch (error) {
      return Response.json({ error: 'Invalid JSON' }, { status: 400 })
    }
  }
  