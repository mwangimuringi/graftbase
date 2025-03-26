import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/", "/api/public"],
    afterAuth(auth, req) {
        if (!auth.userId && !auth.isPublicRoute) {
            return NextResponse.redirect(new URL("/login", req.url));
        }
        return NextResponse.next();
    },
});
