"use client";

import useBreadcrumb from "@/hooks/use-breadcrumb";
import { cn } from "@/lib/utils";
import { Home, Minus } from "lucide-react";
import Link from "next/link";
import React from "react";

interface BreadcrumbProps {
    className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ className }) => {
    const breadcrumbPaths = useBreadcrumb();

    return (
        <nav
            className={cn("flex items-center space-x-2 text-white", className)}
            aria-label="breadcrumb"
        >
            <Link href="/">
                <Home />
            </Link>
            {breadcrumbPaths.map((path) => (
                <React.Fragment key={path.href}>
                    <Minus className="-rotate-[70deg]" />
                    <Link key={path.href} href={path.href} className="capitalize font-bold">
                        {path.label}
                    </Link>
                </React.Fragment>
            ))}
        </nav>
    );
};

export default Breadcrumb;
