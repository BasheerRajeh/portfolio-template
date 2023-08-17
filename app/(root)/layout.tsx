import Navbar from "@/components/navbar/Navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative overflow-auto">
      <main className="max-w-screen h-full w-full">
        <Navbar />
        <div className="pt-20">{children}</div>
      </main>
    </div>
  );
};

export default LandingLayout;
