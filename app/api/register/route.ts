import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, mobile, password } = body;

        if (!name || !mobile || !password) {
            return new NextResponse("Missing Info", { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                name,
                mobile,
                hashedPassword,
            },
        });

        return NextResponse.json(user);
    } catch (error) {
        console.log("REGISTRATION_ERROR", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
