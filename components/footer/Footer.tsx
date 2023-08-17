import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";

const Footer = () => {
    return (
        <div className="bg-primary h-20">
            <Container className="h-full flex items-center">
                <div className="flex-grow">
                    <Link href="mailto:ahmed@gmail.com" className="text-lg text-white tracking-widest">Contact Me</Link>
                </div>
                <div className="flex space-x-8 text-white">
                    <Link href='/'><Facebook className="w-10 h-10" /></Link>
                    <Link href='/'><Twitter className="w-10 h-10" /></Link>
                    <Link href='/'><Github className="w-10 h-10" /></Link>
                    <Link href='/'><Linkedin className="w-10 h-10" /></Link>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
