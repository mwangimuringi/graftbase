import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  return NextResponse.json({ message: "Delete comment endpoint" });
}
