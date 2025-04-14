// /app/api/products/[id]/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const product = await prisma.product.findUnique({ where: { id: params.id } });
    return NextResponse.json(product);
  }

export async function DELETE(req: Request, { params }: { params: { id: string, slug: string } }) {
    const product = await prisma.product.findUnique({ where: { id: params.id } });
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
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