import Image, { StaticImageData } from "next/image";

interface PostCardProps{
    imgUrl: StaticImageData;
    title: string;
    description: string;
}

const PostCard:React.FC<PostCardProps> = ({
    imgUrl, title, description
}) => {
  return (
    <div className="w-full rounded-3xl p-6 bg-white flex flex-col">
        <Image className="w-full rounded-2xl aspect-square object-cover" src={imgUrl} alt='Picture of Ahmed Mohammad' />
        <h2 className="text-center text-2xl font-bold mt-5">{title}</h2>
        <p className="text-center text-xl mt-3">{description}</p>
    </div>
  );
};

export default PostCard;