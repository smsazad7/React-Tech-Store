import React from "react";
import Info from "../components/AboutPage/Info";
import Hero from "../components/Hero";
import aboutBcg2 from "../images/aboutBcg2.jpeg";

export default function AboutPage() {
  return (
    <>
      <Hero img={aboutBcg2} />
      <Info />
    </>
  );
}
