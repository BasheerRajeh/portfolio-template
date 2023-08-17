"use client";

import { cn } from "@/lib/utils";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return (
        <div
            className={cn(
                " w-full max-w-[1440px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 ",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Container;
