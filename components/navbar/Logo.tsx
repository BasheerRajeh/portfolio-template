"use client";

import Link from "next/link";
import { Irish_Grover, Nanum_Myeongjo } from "next/font/google";

const irish = Irish_Grover({ weight: ["400"], subsets: ["latin"] });
const myeon = Nanum_Myeongjo({ weight: ["400"], subsets: ["latin"] });

const Logo = () => {
    return (
        <Link
            href="/"
            className={`md:flex-grow-0 flex-grow text-2xl py-2 ${myeon.className}`}
        >
            <span>A.</span>
            <span className={`text-secondary ${irish.className}`}>M</span>
            <span>.H</span>
        </Link>
    );
};

export default Logo;
