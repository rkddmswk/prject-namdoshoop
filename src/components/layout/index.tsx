import NavCustomer from "./NavCustomer";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  const hasCustomerNav = className?.includes("nav_customer");
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
        {hasCustomerNav ? (
          <main className="sub_content">
            <NavCustomer children={children} />
          </main>
        ) : (
          children
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
