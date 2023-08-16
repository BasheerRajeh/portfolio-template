"use client";

import React, { useState, useEffect } from "react";
import * as z from "zod";
import Link from "next/link";
import Image from "next/image";
import { Tajawal } from "next/font/google";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeOff } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import flagSrc from "@/public/assets/images/twemoji_flag-saudi-arabia.svg";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const tajawal = Tajawal({ weight: ["500"], subsets: ["latin"] });

const formLoginSchema = z.object({
    mobile: z
        .string()
        .regex(/^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/, {
            message: "Invalid phone number!",
        }),
    password: z
        .string()
        .min(8, { message: "Password must contain at least 8 characters" }),
});

const LoginForm = () => {
    const session = useSession();
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (session.status === "authenticated") {
            router.push("/blog");
        }
    }, [session.status, router]);

    const form = useForm<z.infer<typeof formLoginSchema>>({
        resolver: zodResolver(formLoginSchema),
        defaultValues: {
            mobile: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formLoginSchema>) => {
        signIn("credentials", {
            ...values,
            redirect: false,
        }).then((callback) => {
            if (callback?.error) {
                toast.error("Invalid credentials");
            }
            if (callback?.ok && !callback?.error) {
                toast.success("Logged in!");
                router.push("/blog");
            }
        });
    };

    const isLoading = form.formState.isSubmitting;

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="rounded-lg w-full p-2 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2 items-center"
            >
                <FormField
                    name="mobile"
                    render={({ field }) => (
                        <>
                            <label htmlFor="mobile" className="col-span-12">
                                Mobile Number
                            </label>
                            <div className="border col-span-12 flex items-center px-4 bg-white rounded-full overflow-hidden">
                                <FormItem className="flex-grow">
                                    <FormControl>
                                        <Input
                                            className={cn(
                                                "border-0 px-2 py-1 outline-none focus-visible:ring-0 focus-visible:ring-transparent",
                                                tajawal.className
                                            )}
                                            disabled={isLoading}
                                            placeholder="05XXXXXXXX"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                                <Image
                                    alt=""
                                    src={flagSrc}
                                    height={24}
                                    width={24}
                                />
                            </div>
                            <FormMessage className="col-span-12" />
                        </>
                    )}
                />
                <FormField
                    name="password"
                    render={({ field }) => (
                        <>
                            <label
                                htmlFor="password"
                                className="col-span-12 mt-4"
                            >
                                Password
                            </label>
                            <div className="border col-span-12 flex items-center px-4 bg-white rounded-full overflow-hidden">
                                <FormItem className="flex-grow">
                                    <FormControl>
                                        <Input
                                            type={
                                                !showPassword
                                                    ? "password"
                                                    : "text"
                                            }
                                            className={cn(
                                                "border-0 px-2 py-1 outline-none focus-visible:ring-0 focus-visible:ring-transparent",
                                                tajawal.className
                                            )}
                                            disabled={isLoading}
                                            autoComplete="no"
                                            placeholder="********"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                                {showPassword ? (
                                    <EyeOff
                                        className="text-muted-foreground cursor-pointer"
                                        onClick={() => setShowPassword(false)}
                                    />
                                ) : (
                                    <EyeIcon
                                        className="text-muted-foreground cursor-pointer"
                                        onClick={() => setShowPassword(true)}
                                    />
                                )}
                            </div>
                            <FormMessage className="col-span-12" />
                        </>
                    )}
                />
                <Link
                    href="/"
                    className="col-span-12 text-right font-bold text-xs text-accent"
                >
                    Did you forget your password ?
                </Link>
                <Button
                    variant="accent"
                    className="col-span-12 justify-center px-28 mt-12 rounded-full"
                    disabled={isLoading}
                    type="submit"
                >
                    Sign in
                </Button>
            </form>
        </Form>
    );
};

export default LoginForm;
