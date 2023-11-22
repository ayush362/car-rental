import { Footer } from "./footer";
import { Navbar } from "./navbar";

const Layout = ({ children }) => {
  return (
    <main className="overflow-hidden mt-5">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
