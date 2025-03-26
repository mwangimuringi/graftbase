export default authMiddleware({
    publicRoutes: ["/", "/api/public"],
    afterAuth(auth, req) {
        if (!auth.userId && !auth.isPublicRoute) {
            return NextResponse.redirect(new URL("/login", req.url));
        }

        if (auth.sessionClaims?.expired) {
            return NextResponse.json({ error: "Session expired" }, { status: 401 });
        }

        return NextResponse.next();
    },
});
