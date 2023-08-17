"use client";

import Container from "@/components/ui/Container";
import Hero from "./components/Hero";
import AboutMe from "./components/about-me/AboutMe";
import Services from "./components/services/Services";
import MyPortfolio from "./components/my-portfolio/MyPortfolio";

export default function Home() {
    return (
        <>
            <Hero />
            <Container>
                <AboutMe />
                <Services />
                <MyPortfolio />
            </Container>
        </>
        // <div className='bg-primary'>
        //   <h1 className='text-primary-foreground'>Hello Ahmed-m Portfolio</h1>
        // </div>
    );
}
