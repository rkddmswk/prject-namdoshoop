import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className={className ? className : ""}>
      <Header />
      <div
        className="body_container"
        style={{
          width: "100%",
          height: "auto",
          overflowY: "hidden",
          overflowX: "hidden",
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
