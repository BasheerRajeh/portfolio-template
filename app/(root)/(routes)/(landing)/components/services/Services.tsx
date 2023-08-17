import Image from "next/image";
import Section from "../Section";
import htmlIcon from "@/public/assets/images/html-service.svg";
import cssIcon from "@/public/assets/images/css-service.svg";
import gitIcon from "@/public/assets/images/git-service.svg";
import javascriptIcon from "@/public/assets/images/javascript-service.svg";
import ServiceCard from "./ServiceCard";

const services = [
    {
        icon: <Image src={htmlIcon} width={100} height={100} alt="" />,
        label: "HTML Development",
        link: { href: "https://github.com", label: "Show Projects" },
        primary: false,
    },
    {
        icon: <Image src={gitIcon} width={100} height={100} alt="" />,
        label: "HTML Development",
        link: { href: "https://github.com", label: "Show Projects" },
        primary: true,
    },
    {
        icon: <Image src={cssIcon} width={100} height={100} alt="" />,
        label: "HTML Development",
        link: { href: "https://github.com", label: "Show Projects" },
        primary: false,
    },
    {
        icon: <Image src={javascriptIcon} width={100} height={100} alt="" />,
        label: "HTML Development",
        link: { href: "https://github.com", label: "Show Projects" },
        primary: false,
    },
];

const Services = () => {
    return (
        <Section title="Services">
            <div className="p-4 sm:px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-center">
                {services.map((service, idx) => (
                    <ServiceCard
                        key={idx}
                        icon={service.icon}
                        label={service.label}
                        link={service.link}
                        primary={service.primary}
                    />
                ))}
            </div>
        </Section>
    );
};

export default Services;
