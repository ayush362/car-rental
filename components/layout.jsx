import { Footer } from "./footer";
import { Navbar } from "./navbar";

const Layout = ({ children }) => {
  return (
    <main className="overflow-hidden">
      <Footer />
      {children}
      <Navbar />
    </main>
  );
};

export default Layout;
