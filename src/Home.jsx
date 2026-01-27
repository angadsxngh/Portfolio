import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ExperienceSection from "./components/Experience";

export default function Home() {
  return (
    <div className="h-screen bg-black">
      <Header></Header>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
