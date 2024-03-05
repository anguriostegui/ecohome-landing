import React from "react";
import Hero from "./Hero";
import Layout from "@/components/Layout";
import Features from "./Features";
import StrongPoints from "./StrongPoints";
import Showcase from "./Showcase";
import Builtwith from "./Builtwith";
import Process from "./Process";
import Price from "./Price";
import GetStarted from "./GetStarted";
import CTA from "./CTA";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Features />
      <StrongPoints />
      <Showcase />
      <Builtwith />
      <Process />
      <Price />
      <GetStarted />
      <CTA />
    </Layout>
  );
}
