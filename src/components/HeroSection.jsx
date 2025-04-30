import React from "react";
import TerminalIntro from "./TerminalIntro";
import { AuroraText } from "./magicui/aurora-text";
import { WordRotate } from "./magicui/word-rotate";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { ShimmerButton } from "./magicui/shimmer-button";
import { RetroGrid } from "./magicui/retro-grid";

function HeroSection() {
  return (
    <div className="relative overflow-hidden h-screen">
      <RetroGrid />

      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-20 pt-32 gap-y-10">
        
        {/* Left Column */}
        <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
            Hi, I am
          </p>
          <AuroraText className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Angad Singh
          </AuroraText>

          <WordRotate
            duration={2000}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2"
            words={["Full Stack Developer", "Programmer", "Web Developer", "Engineer"]}
          />

          <p className="font-medium text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg">
            A dedicated web developer driven by curiosity and a passion for building meaningful digital experiences. I enjoy crafting user-friendly interfaces, solving complex problems, and turning ideas into polished, functional products.
          </p>
        </div>

        {/* Right Column (conditionally shown) */}
        <div className="hidden md:flex items-center justify-center pt-8">
          <TerminalIntro />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-white px-4 pb-16">
        <a href="#projects">
          <ShimmerButton className="text-white w-full sm:w-auto text-center">
            Explore My Work
          </ShimmerButton>
        </a>
        <a href="#contact">
          <InteractiveHoverButton className="hover:bg-white hover:text-black text-white w-full sm:w-auto text-center">
            Let's Connect
          </InteractiveHoverButton>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
