import { Card } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

interface ProjectMediaCardProps {
    imageUrl: StaticImageData;
    category: string;
    title: string;
    description: string;
}

const ProjectMediaCard: React.FC<ProjectMediaCardProps> = ({
    imageUrl,category,title,description
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
        <Card className="py-4 px-10 w-full aspect-video md:w-2/3 lg:w-1/3 bg-gray-300">
            <Image src={imageUrl} alt={description} className="w-full h-full object-fill" />
        </Card>
        <div className="flex flex-col justify-center items-start">
            <h3 className="py-4 text-2xl font-bold leading-normal">{title}</h3>
            <h4 className="-order-1 font-bold text-base">{category}</h4>
            <p className="text-md leading-normal">{description}</p>
        </div>
    </div>
  );
};

export default ProjectMediaCard;