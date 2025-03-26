import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    console.log(`Incoming request: ${req.nextUrl.pathname}`);
    return NextResponse.next();
}
