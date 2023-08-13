"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavMenuProps {
    active?: string;
    routes: { label: string; href: string }[];
    position?: "horizontal" | "vertical";
}

const NavMenu: React.FC<NavMenuProps> = ({
    routes,
    active = "/",
    position = "horizontal",
}) => {
    return (
        <div
            className={cn(
                "flex items-center justify-center text-md",
                position === "vertical"
                    ? "space-y-6 flex-col"
                    : "space-x-6 flex-row"
            )}
        >
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={`hover:text-secondary transition ${active === route.href
                            ? "text-secondary first-letter:border-b-2  first-letter:border-x-0 first-letter:border-t-0 first-letter:border-secondary first-letter:border-solid"
                            : ""
                        }`}
                >
                    {route.label}
                </Link>
            ))}
        </div>
    );
};

export default NavMenu;
