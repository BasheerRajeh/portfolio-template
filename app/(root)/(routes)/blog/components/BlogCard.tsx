import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BlogCardProps {
    imgUrl: StaticImageData;
    title: string;
    description: string;
    link: { href: string; label: string };
}

const BlogCard: React.FC<BlogCardProps> = ({ imgUrl, title, description, link }) => {
    return (
        <Card className="bg-gray-200 drop-shadow-md">
            <CardHeader className="space-y-4">
                <Image
                    className="w-full rounded-2xl aspect-video object-cover"
                    src={imgUrl}
                    alt="Picture of Ahmed Mohammad"
                />
                <h2 className="text-center text-xl font-bold mt-5">{title}</h2>
            </CardHeader>
            <CardContent>
                <p className="text-center text-lg ">{description}</p>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Link
                    href={link.href}
                    className={cn(
                        "px-8 py-2 rounded-full bg-accent hover:bg-accent/70 text-white flex justify-between items-center gap-2",'')}
                >
                    {link.label}
                    <ArrowRight size={20} />
                </Link>
            </CardFooter>
        </Card>
    );
};

export default BlogCard;
