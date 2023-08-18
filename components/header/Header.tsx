import Breadcrumb from "../breadcrumb/Breadcrumb";

const Header = () => {
  return (
    <div className="w-full h-[200px] flex items-end rounded-2xl bg-bottom bg-blend-hard-light bg-no-repeat bg-[length:100%] bg-header object-cover">
        <Breadcrumb className="py-5 px-8" />
    </div>
  );
};

export default Header;