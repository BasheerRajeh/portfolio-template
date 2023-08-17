
interface SectionProps{
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({title, children}) => {
  return (
    <section className="my-24">
        <h2 className="text-2xl lg:text-5xl text-center py-5 font-bold first-letter:border-b-4  first-letter:border-x-0 first-letter:border-t-0 first-letter:border-secondary first-letter:border-solid">{title}</h2>
        {children}
    </section>
  );
};

export default Section;