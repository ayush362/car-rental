import Layout from "../components/layout";
import React from "react";
import { Hero } from "../sections/hero";
import { Pickup } from "../sections/pickup";
import { Plan } from "../sections/plan";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Pickup />
      <Plan />
    </Layout>
  );
}
