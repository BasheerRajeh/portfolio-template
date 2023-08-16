"use client";

import LoginForm from "@/components/auth/LoginForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

const LoginPage = () => {
    return (
        <div className="min-h-screen flex justify-center items-center px-2 sm:px-6 md:px-10 lg:px-16 xl:px-20">
            <Card className="w-full md:w-4/6 lg:w-6/12">
                <CardHeader className="text-center">
                    <h2 className="font-bold text-xl">Sign in</h2>
                    <p className="font-semibold text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/sign-up" className="text-accent">Create an account</Link>
                    </p>
                </CardHeader>
                <CardContent>
                    <LoginForm />
                </CardContent>
            </Card>
        </div>
    );
};

export default LoginPage;
