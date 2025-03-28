import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const userId = params.id;
  return NextResponse.json({ message: `Fetching user with ID: ${userId}` });
}
