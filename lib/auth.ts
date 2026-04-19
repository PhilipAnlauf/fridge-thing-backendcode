import "server-only";

import {cookies} from "next/headers";
import jwt from "jsonwebtoken";
import {prisma} from "@/lib/prisma";

export async function getAuthUser() {
    const cookieStore = await cookies();
    const token = cookieStore.get("fridge_auth_token")?.value;

    if (!token) return null;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
            userId: string;
            email: string;
            firstName: string;
        };

        return await prisma.user.findUnique({
            where: {id: decoded.userId}
        });
    } catch (error) {
        return null;
    }
}