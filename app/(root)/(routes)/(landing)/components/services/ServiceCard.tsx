import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
    icon: React.ReactNode;
    label: string;
    link: { href: string; label: string };
    primary?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    icon: Icon,
    label,
    link,
    primary = false,
}) => {
    return (
        <Card
            className={cn(
                "p-8 flex flex-col justify-center items-center",
                primary ? "bg-accent" : ""
            )}
        >
            <CardHeader className="px-4 flex flex-col items-center">
                {Icon}
                <h3
                    className={cn(
                        "font-bold py-4",
                        primary ? "text-white" : ""
                    )}
                >
                    {label}
                </h3>
            </CardHeader>
            <CardContent>
                <Link
                    href={link.href}
                    className={cn(
                        "font-semibold flex justify-between items-center gap-2",
                        primary ? "text-white" : "text-accent"
                    )}
                >
                    {link.label}
                    <ArrowRight size={20} />
                </Link>
            </CardContent>
        </Card>
    );
};

export default ServiceCard;
