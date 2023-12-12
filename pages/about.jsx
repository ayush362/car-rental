import React from "react";
import { Navbar } from "../components/navbar";
import { About } from "../sections/about";
import { PlanSection } from "../sections/plan";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { RoutersMain } from "../components/routersMain";

const about = () => {
  return (
    <section className="text-xl">
      <RoutersMain sectionName="About" path="Home / About" />
      <About />
      <PlanSection />
      <Contact />
      <Footer />
    </section>
  );
};

export default about;
