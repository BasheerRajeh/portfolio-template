"use client";

import Container from "@/components/ui/Container";
import Hero from "./components/Hero";
import AboutMe from "./components/about-me/AboutMe";
import Services from "./components/services/Services";

export default function Home() {
    return (
        <>
            <Hero />
            <Container>
                <AboutMe />
                <Services />
            </Container>
        </>
        // <div className='bg-primary'>
        //   <h1 className='text-primary-foreground'>Hello Ahmed-m Portfolio</h1>
        // </div>
    );
}
