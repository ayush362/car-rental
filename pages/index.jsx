import Layout from "../components/layout";
import React from "react";
import { HeroSection } from "../sections/hero";
import { PickupSection } from "../sections/pickup";
import { PlanSection } from "../sections/plan";
import { RentalFleet } from "../sections/rental-fleet";
import { Advertisement } from "../sections/advertisement";
import { Main } from "../sections/main";
import { Testimonials } from "../sections/testimonials";
import { Faq } from "../sections/faq";
import { Download } from "../sections/download";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <PickupSection />
      <PlanSection />
      <RentalFleet />
      <Advertisement />
      <Main />
      <Testimonials />
      <Faq />
      <Download />
      <ScrollToTopButton />
    </Layout>
  );
}
