import { cn } from "@/lib/utils";

interface ImageFrameProps {
    className?: string;
    children: React.ReactNode;
}

const ImageFrame: React.FC<ImageFrameProps> = ({ className, children }) => {
    return (
        <div
            className={cn("min-h-[300px] overflow-hidden relative", className)}
        >
            <div className="w-1/4 h-1/3  absolute  border-secondary border-l-8 border-t-8 z-1" />
            {children}
            <div className="w-1/4 h-1/3 bottom-0 right-0 absolute  border-accent border-r-8 border-b-8 z-1" />
        </div>
    );
};

export default ImageFrame;
