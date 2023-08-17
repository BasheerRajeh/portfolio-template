"use client";

import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Globe, Menu } from "lucide-react";

const routes = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About Me",
        href: "/#about-me",
    },
    {
        label: "Services",
        href: "/#services",
    },
    {
        label: "Portfolio",
        href: "/#portfolio",
    },
    {
        label: "Blog",
        href: "/blog",
    },
];

interface NavbarProps {
    type?: "primary" | "secondary";
    auth?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ type = "primary", auth = false }) => {
    return (
        <div
            className={cn(
                "fixed w-full flex items-center z-20 h-20",
                type === "primary" ? "bg-primary" : ""
            )}
        >
            <Container>
                <div className=" flex flex-row items-center justify-between gap-3">
                    <div
                        className={`text-${type}-foreground flex-grow md:flex-grow-0`}
                    >
                        <Logo />
                    </div>
                    {!auth && (
                        <>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="md:hidden order-first flex-grow-0 text-primary-foreground"
                                    >
                                        <Menu className="h-6 w-6" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-screen">
                                    <NavMenu
                                        active="/"
                                        position="vertical"
                                        routes={routes}
                                    />
                                </PopoverContent>
                            </Popover>
                            <div
                                className={`hidden py-2 w-full md:w-auto flex-grow md:block text-${type}-foreground`}
                            >
                                <NavMenu active="/" routes={routes} />
                            </div>
                            <div
                                className={`hidden py-2 lg:block text-${type}-foreground`}
                            >
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            className="px-1 hover:bg-transparent"
                                        >
                                            <ChevronDown className="w-4 h-4 mr-2" />
                                            EN
                                            <Globe className="w-4 h-4 ml-2" />
                                        </Button>
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent>
                                        <DropdownMenuLabel>
                                            Language
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>EN</DropdownMenuItem>
                                        <DropdownMenuItem>AR</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            <Button
                                variant="accent"
                                className="px-4 text-xs md:text-lg md:px-7 rounded-2xl"
                            >
                                Contact Me
                            </Button>
                        </>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
