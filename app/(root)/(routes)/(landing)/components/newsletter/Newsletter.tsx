import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import primaryArrow from '@/public/assets/images/primary-arrow.svg';
import Image from "next/image";
const Newsletter = () => {
    return (
        <div className="px-4 flex flex-col lg:flex-row lg:items-center justify-center my-14 space-y-4">
            <div className="flex flex-col relative">
                <h3 className="py-6 text-4xl leading-relaxed tracking-wider font-extrabold">
                    Subscribe To Get Latest Update From Us
                </h3>
                <h4 className="-order-1 text-accent text-xl font-semibold uppercase tracking-wider">
                    subscribe
                </h4>
                <Image alt="" src={primaryArrow} className="absolute rotate-[135deg] lg:rotate-0 right-0 -bottom-20 lg:-bottom-14" />
            </div>
            <div className="lg:w-1/2">
                <p className="my-5 text-muted-foreground text-2xl tracking-wide">
                    Enter your email here to subscribe
                </p>
                <div className="h-14 flex drop-shadow-xl rounded-xl overflow-hidden">
                    <Input
                        type="email"
                        className="h-full px-6 rounded-none outline-none border-0 flex-grow ring-0 focus-visible:ring-0 focus-visible:border-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                    />
                    <Button
                        variant="default"
                        className="h-full uppercase rounded-2xl rounded-tl-none rounded-bl-none"
                    >
                        Subscribe
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
