import { cookies } from "next/headers";

export async function POST(req: Request) {
    cookies().delete("authToken");

    return NextResponse.json({ message: "User logged out successfully" });
}
