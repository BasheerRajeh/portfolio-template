import Image from "next/image";
import personUrl from "@/public/assets/images/young-man.png";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import heroArrow from "@/public/assets/images/hero-arrow.svg";

const Callouts = () => {
    return (
        <div className="relative bg-primary min-h-[600px]">
            <div className="after:content-[''] after:absolute after:w-full after:h-full after:block after:bg-no-repeat after:bg-[length:200px] after:bg-[right_top_-4rem] after:bg-hero-pattern before:absolute before:content-[''] before:w-full before:h-full before:block before:bg-no-repeat before:bg-[length:170px] before:bg-[left_bottom_-2rem] before:bg-callouts-pattern"></div>
            <Container className=" overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:justify-between items-center">
                    <Image
                        src={personUrl}
                        alt="inspired young man"
                        className="w-[200px] md:w-[400px] h-[275px] md:h-[500px] lg:w-full lg:h-auto lg:max-w-[1000px] lg:max-h-[600px] absolute -top-10 object-left lg:object-top object-cover"
                    />
                    <div className="w-[200px] md:w-[400px] h-[275px] md:h-[500px] lg:w-1/2 lg:h-auto lg:max-w-[1000px] lg:max-h-[600px]"></div>
                    <div className="pt-20 px-4 lg:w-1/2 z-10">
                        <h3 className="py-4 self-start text-white text-3xl lg:text-5xl lg:leading-loose tracking-widest font-semibold leading-relaxed">
                            Got A Project! Let&apos;s Talk ...
                        </h3>
                        <p className="text-white font-light text-2xl leading-loose tracking-wider">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Quod consequatur dicta delectus enim repellat
                            voluptatem? Facilis at eum dolore et.
                        </p>
                        <div className="py-6 overflow-clip">
                            <Button
                                variant="secondary"
                                className="w-1/2 md:w-1/3 md:px-8 p-6 text-white font-bold text-lg tracking-wider"
                            >
                                Contact Me
                            </Button>
                            <Image
                                alt=""
                                src={heroArrow}
                                width={300}
                                className="absolute w-[200px] md:w-[300px] right-3 -bottom-0 lg:right-10"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Callouts;
