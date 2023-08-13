import Navbar from "@/components/navbar/Navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <main>
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default LandingLayout;
