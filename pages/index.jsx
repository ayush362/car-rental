import Layout from "../components/layout";
import React from "react";
import { Hero } from "../sections/hero";
import { Pickup } from "../sections/pickup";
import { Plan } from "../sections/plan";
import { RentalFleet } from "../sections/rental-fleet";
import { Advertisement } from "../sections/advertisement";
import { Main } from "../sections/main";
import { Testimonials } from "../sections/testimonials";
import { Faq } from "../sections/faq";
import { Download } from "../sections/download";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Pickup />
      <Plan />
      <RentalFleet />
      <Advertisement />
      <Main />
      <Testimonials />
      <Faq />
      <Download />
    </Layout>
  );
}
