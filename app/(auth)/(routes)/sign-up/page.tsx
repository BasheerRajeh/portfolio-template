import RegisterForm from "@/components/auth/RegisterForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="min-h-screen pt-24 flex justify-center items-center px-2 sm:px-6 md:px-10 lg:px-16 xl:px-20">
            <Card className="w-full md:w-4/6 lg:w-6/12">
                <CardHeader className="text-center">
                    <h2 className="font-bold text-xl">Sign in</h2>
                    <p className="font-semibold text-sm">
                        Do you have an account?{" "}
                        <Link href="/sign-in" className="text-accent">Sign in</Link>
                    </p>
                </CardHeader>
                <CardContent>
                    <RegisterForm />
                </CardContent>
            </Card>
        </div>
  );
};

export default RegisterPage;