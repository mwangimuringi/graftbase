import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/", "/api/public"],
  ignoredRoutes: ["/api/health", "/api/status"],
  afterAuth(auth: { userId: any; isPublicRoute: any; sessionClaims: { role: string; }; }, req: { nextUrl: { pathname: string; }; url: string | URL | undefined; }) {
    if (!auth.userId && !auth.isPublicRoute) {
      console.warn(`Unauthorized access attempt: ${req.nextUrl.pathname}`);
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (
      req.nextUrl.pathname.startsWith("/admin") &&
      auth.sessionClaims?.role !== "admin"
    ) {
      console.warn(`Forbidden admin access: ${auth.userId}`);
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    return NextResponse.next();
  },
});
