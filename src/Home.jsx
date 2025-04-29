import React from "react";
import TerminalIntro from "./components/TerminalIntro";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "TailwindCSS",
    "MongoDB",
    "MySQL",
    "Prisma",
    "TypeScript",
    "C++",
    "Java",
    "PostgreSQL",
    "HTML",
    "CSS",
    "C",
    "Python",
    "ExpressJs",
    "Github",
    "Git",
    "Linux",
    "VsCode",
    "Firebase",
    "Appwrite",
  ];
  return (
    <div className="h-screen bg-black">
      <Header></Header>
      <HeroSection />
      <AboutSection />
    </div>
  );
}
