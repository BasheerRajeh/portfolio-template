import Section from "../Section";
import project1Img from "@/public/assets/images/project-1.jpeg";
import project2Img from "@/public/assets/images/project-2.jpeg";
import project3Img from "@/public/assets/images/project-3.jpeg";
import Image from "next/image";
import ProjectMediaCard from "./ProjectMediaCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
    {
        demoPic: project1Img,
        category: "Web Development",
        title: "Front End Social",
        description:
            "Lorem ipsum dolor sit amet consectetur. Vestibulum nec ut aliquam velit tristique mattis.",
    },
    {
        demoPic: project2Img,
        category: "Web Development",
        title: "Tip Calculator App",
        description:
            "Lorem ipsum dolor sit amet consectetur. Vestibulum nec ut aliquam velit tristique mattis.",
    },
    {
        demoPic: project3Img,
        category: "Web Development",
        title: "Tracking Dashboard",
        description:
            "Lorem ipsum dolor sit amet consectetur. Vestibulum nec ut aliquam velit tristique mattis.",
    },
];

const MyPortfolio = () => {
    return (
        <Section title="My Portfolio">
            <div className="p-3 sm:px-6 md:px-16 flex flex-col space-y-8">
                {projects.map((project, idx) => (
                    <ProjectMediaCard
                        category={project.category}
                        description={project.description}
                        imageUrl={project.demoPic}
                        title={project.title}
                        key={idx}
                    />
                ))}
                <Link href='https://github.com' className="m-auto inline-block py-4 px-8 bg-accent text-white text-center rounded-lg">See More</Link>
            </div>
        </Section>
    );
};

export default MyPortfolio;
