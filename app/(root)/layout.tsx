import Navbar from "@/components/navbar/Navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <main>
        <Navbar />
        <div className="pt-20">{children}</div>
      </main>
    </div>
  );
};

export default LandingLayout;
