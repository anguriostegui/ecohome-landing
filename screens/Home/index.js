import React from "react";
import Hero from "./Hero";
import Layout from "@/components/Layout";
import Features from "./Features";
import StrongPoints from "./StrongPoints";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Features />
      <StrongPoints />
    </Layout>
  );
}
