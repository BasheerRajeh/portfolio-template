"use client";

import PostCard from "@/components/PostCard";
import Image from "next/image";
import profilePic from "@/public/assets/images/profile-pic.jpeg";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import heroArrow from '@/public/assets/images/hero-arrow.svg';
const Hero = () => {
    return (
        <div className="w-full h-full py-12 lg:py-12 bg-primary overflow-hidden lg:bg-[length:400px] lg:bg-[right_top_-3rem] lg:bg-no-repeat lg:bg-hero-pattern">
            <Container>
                <div className="flex flex-col justify-between items-center lg:flex-row-reverse">
                    <div className="w-full md:w-1/2">
                        <div className="max-w-[400px] m-auto -rotate-6 md:-rotate-12">
                            <PostCard
                                imgUrl={profilePic}
                                title="Ahmed Mohammad"
                                description="frontend web developer"
                            />
                        </div>
                    </div>
                    <div className="h-full mt-24 lg:mt-12 p-10 self-start text-white relative">
                        <Image alt='' src={heroArrow} width={300} className="absolute w-[200px] md:w-[300px] right-3 -top-16 lg:top-36 lg:-right-16" />
                        <h1 className="text-4xl md:text-5xl font-bold leading-relaxed md:leading-loose tracking-wider">
                            Hello I&apos;m
                            <br />
                            Ahmed Mohammad
                        </h1>
                        <p className="mt-4 text-3xl md:text-4xl leading-relaxed md:leading-loose tracking-wider">
                            I work as freelancer frontend web developer
                        </p>
                        <div className="mt-9 flex justify-center gap-3">
                            <Button
                                variant="secondary"
                                className="w-1/2 md:w-auto md:px-8 p-6 text-white font-bold text-lg"
                            >
                                Contact Me
                            </Button>
                            <Button
                                variant="outline"
                                className="w-1/2 md:w-auto md:px-8 p-6 bg-transparent text-secondary font-bold text-lg border-secondary outline-secondary  hover:bg-secondary hover:text-white"
                            >
                                Download CV
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Hero;
