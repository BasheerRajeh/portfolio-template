"use client";

import Header from "@/components/header/Header";
import Container from "@/components/ui/Container";
import articleUrl1 from "@/public/assets/images/article-1.jpeg";
import articleUrl2 from "@/public/assets/images/article-2.jpeg";
import articleUrl3 from "@/public/assets/images/article-3.jpeg";
import articleUrl4 from "@/public/assets/images/article-4.jpeg";
import articleUrl5 from "@/public/assets/images/article-5.jpeg";
import articleUrl6 from "@/public/assets/images/article-6.jpeg";
import BlogCard from "./components/BlogCard";
const blogs = [
    {
        imageUrl: articleUrl1,
        title: "Article Number One",
        description:
            "Lorem ipsum dolor sit amet consectetur. Volutpat eu a habitasse habitasse",
        link: { href: "/", label: "Learn More" },
    },
    {
        imageUrl: articleUrl2,
        title: "Article Number One",
        description:
            "Lorem ipsum dolor sit amet consectetur. Volutpat eu a habitasse habitasse",
        link: { href: "/", label: "Learn More" },
    },
    {
        imageUrl: articleUrl3,
        title: "Article Number One",
        description:
            "Lorem ipsum dolor sit amet consectetur. Volutpat eu a habitasse habitasse",
        link: { href: "/", label: "Learn More" },
    },
    {
        imageUrl: articleUrl4,
        title: "Article Number One",
        description:
            "Lorem ipsum dolor sit amet consectetur. Volutpat eu a habitasse habitasse",
        link: { href: "/", label: "Learn More" },
    },
    {
        imageUrl: articleUrl5,
        title: "Article Number One",
        description:
            "Lorem ipsum dolor sit amet consectetur. Volutpat eu a habitasse habitasse",
        link: { href: "/", label: "Learn More" },
    },
    {
        imageUrl: articleUrl6,
        title: "Article Number One",
        description:
            "Lorem ipsum dolor sit amet consectetur. Volutpat eu a habitasse habitasse",
        link: { href: "/", label: "Learn More" },
    },
];

const BlogPage = () => {
    return (
        <Container className="pb-20">
            <div className="flex flex-col space-y-4">
                <Header />
                <section className="py-6 px-4  space-y-4">
                    <h2 className="text-center lg:text-left text-lg font-bold tracking-wide">
                        Here We Provide a Set of Tips,{" "}
                        <strong className="text-secondary">
                            Instructions and Articles
                        </strong>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {blogs.map((blog, idx) => (
                            <BlogCard
                                key={idx}
                                imgUrl={blog.imageUrl}
                                title={blog.title}
                                description={blog.description}
                                link={blog.link}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </Container>
    );
};

export default BlogPage;
