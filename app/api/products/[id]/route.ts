import { defineRoute } from 'graft/server';
import { Product } from 'graft/server/entities';

const { Product } = require('graft/server/entities');

const { Product } = require('graft/server/entities');
const Product = require('graft/server/entities/Product');

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    await prisma.product.delete({ where: { id: params.id } });
    return NextResponse.json({ message: 'Product deleted' });
  }

export default defineRoute(async (req, res) => {
  const product = await Product.findOne(req.params.id);
  if (!product) {
    res.status(404).json({ error: 'Product not found' });
    return;
  }
  res.json(product);
});