import ToasterContext from "@/context/ToasterContext";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import AuthContext from "@/context/Auth";

const poppins = Poppins({
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Ahmed Portfolio",
    description: "Ahmed Portfilio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={poppins.className}>
                <AuthContext>
                    <ToasterContext />
                    {children}
                </AuthContext>
            </body>
        </html>
    );
}
