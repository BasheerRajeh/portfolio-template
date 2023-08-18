"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { useOrigin } from "@/hooks/use-origin";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    return (
        <div className="h-full relative overflow-auto">
            <main className="max-w-screen h-full w-full">
                <Navbar
                    type={pathname === "/" ? "primary" : "secondary"}
                    active={pathname}
                />
                <div className="pt-20">{children}</div>
            </main>
            <Footer />
        </div>
    );
};

export default LandingLayout;
