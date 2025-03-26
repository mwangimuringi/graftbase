export default authMiddleware({
    publicRoutes: ["/", "/api/public"],
    afterAuth(auth, req) {
        if (!auth.userId && !auth.isPublicRoute) {
            return NextResponse.redirect(new URL("/login", req.url));
        }

        if (req.nextUrl.pathname.startsWith("/admin") && auth.sessionClaims?.role !== "admin") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        return NextResponse.next();
    },
});
