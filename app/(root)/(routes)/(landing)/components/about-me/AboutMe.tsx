import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "../Section";
import ImageFrame from "./ImageFrame";
import profileSrc from "@/public/assets/images/profile-pic.jpeg";
import { Button } from "@/components/ui/button";

const AboutMe = () => {
    return (
            <Section id='about-me' title="About Me">
                <div className="flex flex-col lg:flex-row justify-center items-center">
                    <div className="w-full sm:w-4/5 md:w-1/2">
                        <ImageFrame className="shadow-md">
                            <Image
                                alt=""
                                src={profileSrc}
                                width={200}
                                className="w-full h-auto m-auto rounded-lg "
                            />
                        </ImageFrame>
                    </div>
                    <div className="w-full p-4 sm:px-6 md:px-16 ">
                        <div>
                            <h3 className="mt-4 mb-2 uppercase text-3xl font-bold leading-relaxed">
                                hello there!, I&apos;m ahmad
                            </h3>
                            <p className="text-2xl leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur.
                                Vestibulum nec ut aliquam velit tristique
                                mattis. Turpis sed et volutpat suspendisse ut
                                dapibus pretium. Vitae ultrices consectetur.
                            </p>
                        </div>
                        <div className="bg-gray-200 my-8 p-8 rounded-2xl shadow-sm">
                            <div className="grid grid-cols-2 gap-4 font-semibold">
                                <div className="col-span-2 md:col-span-1">
                                    Name: Ahmed Mohammad
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    Age: 00 Years
                                </div>
                                <div className="col-span-2">
                                    Current Skills: frontend web developer HTML,
                                    CSS, JAVA
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    Email: ahmad123@gmail.com
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    Experience: 5 Years
                                </div>
                            </div>
                        </div>
                        <div className="mt-9 flex justify-center gap-3">
                            <Button
                                variant="accent"
                                className="w-1/2 md:w-auto md:px-8 rounded-2xl p-6 text-white font-bold text-lg"
                            >
                                Contact Me
                            </Button>
                            <Button
                                variant="outline"
                                className="w-1/2 md:w-auto md:px-8 rounded-2xl p-6 bg-transparent text-accent font-bold text-lg border-accent outline-accent  hover:bg-accent hover:text-white"
                            >
                                Download CV
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
    );
};

export default AboutMe;
