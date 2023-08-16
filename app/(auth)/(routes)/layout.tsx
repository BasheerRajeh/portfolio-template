import Navbar from "@/components/navbar/Navbar";

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div>
            <Navbar auth />
            {children}
        </div>
    );
};

export default AuthLayout;
