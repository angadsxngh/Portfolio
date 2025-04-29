import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <div className="h-screen bg-black">
      <Header></Header>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </div>
  );
}
