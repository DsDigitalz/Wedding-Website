import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutSection from "./Components/AboutSection";
import WeddingPlanningSection from "./Components/WeddingPlanningSection";
import ServiceGrid from "./Components/ServiceGrid";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <WeddingPlanningSection />
      <ServiceGrid />
    </div>
  );
}
