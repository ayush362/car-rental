import React from "react";
import { RoutersMain } from "../components/routersMain";
import { Testimonials } from "../sections/testimonials";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";

const testimonials = () => {
  return (
    <section>
      <div>
        <RoutersMain path="Home / Testimonials" sectionName="Testimonials" />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </section>
  );
};

export default testimonials;
