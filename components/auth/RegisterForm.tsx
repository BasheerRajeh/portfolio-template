"use client";

import React, { useEffect, useState } from "react";
import * as z from "zod";
import Image from "next/image";
import { Tajawal } from "next/font/google";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeOff } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
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
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const tajawal = Tajawal({ weight: ["500"], subsets: ["latin"] });

const formRegisterSchema = z
    .object({
        name: z.string().min(1, { message: "Name can not be empty!" }),
        mobile: z
            .string()
            .regex(/^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/, {
                message: "Invalid phone number!",
            }),
        password: z.string().min(8, { message: "Password Invalid" }),
        confirmPassword: z.string().min(8),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });

const RegisterForm = () => {
    const session = useSession();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (session.status === "authenticated") {
            router.push("/blog");
        }
    }, [session.status, router]);

    const form = useForm<z.infer<typeof formRegisterSchema>>({
        resolver: zodResolver(formRegisterSchema),
        defaultValues: {
            name: "",
            mobile: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formRegisterSchema>) => {
        setIsLoading(true);
        axios
            .post("/api/register", values)
            .then(() => {
                toast.success("Logged in successfully");
                signIn("credentials", values);
            })
            .catch(() => {
                toast.error("Something went wrong");
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="rounded-lg w-full p-2 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2 items-center"
            >
                <FormField
                    name="name"
                    render={({ field }) => (
                        <>
                            <label htmlFor="name" className="col-span-12">
                                Name
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
                                            placeholder="Enter your name"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            </div>
                            <FormMessage className="col-span-12" />
                        </>
                    )}
                />
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
                                            placeholder="05xxxxxxxx"
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
                <FormField
                    name="confirmPassword"
                    render={({ field }) => (
                        <>
                            <label
                                htmlFor="confirmPassword"
                                className="col-span-12 mt-4"
                            >
                                Confirm Password
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
                <Button
                    variant="accent"
                    className="col-span-12 justify-center px-28 mt-12 rounded-full"
                    disabled={isLoading}
                    type="submit"
                >
                    Sign up
                </Button>
            </form>
        </Form>
    );
};

export default RegisterForm;
