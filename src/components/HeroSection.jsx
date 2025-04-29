import React from "react";
import TerminalIntro from "./TerminalIntro";
import { AuroraText } from "./magicui/aurora-text";
import { WordRotate } from "./magicui/word-rotate";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { ShimmerButton } from "./magicui/shimmer-button";
import { RetroGrid } from "./magicui/retro-grid";

function HeroSection() {
  
  return (
    <div className="">
      <RetroGrid />
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-6 py-10 pt-32 ">
        {/* Left column: Text */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center md:items-center text-center md:text-left pt-10">
            <p className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl text-white">
              Hi, I am
            </p>
            <AuroraText className="text-4xl md:text-5xl lg:text-6xl font-bold ">
              Angad Singh
            </AuroraText>
          </div>
          <div className="flex flex-row mt-4 gap-2 items-center text-center justify-center">
            <WordRotate
              duration={2000}
              className="text-4xl font-bold text-white"
              words={[
                "Full Stack Developer",
                "Programmer",
                "Web Developer",
                "Engineer",
              ]}
            />
          </div>
          <div className="font-semibold text-center text-gray-600 mt-4">
            <h1>
              A dedicated web developer driven by curiosity and a passion for
              building meaningful digital experiences. I enjoy crafting
              user-friendly interfaces, solving complex problems, and turning
              ideas into polished, functional products.
            </h1>
          </div>
        </div>

        {/* Right column: Terminal */}
        <div className="md:flex flex-col items-center md:justify-start hidden pt-16">
          <TerminalIntro />
        </div>
      </div>
      <br />
      <br />
      <div className="flex flex-row text-white justify-center gap-5">
        <a href="#projects"><ShimmerButton className="text-white">Explore My Work</ShimmerButton></a>
        <InteractiveHoverButton className="hover:bg-white hover:text-black text-white">Let's Connect</InteractiveHoverButton>
      </div>
      <br />
      <br />
      <br />
      
    </div>
  );
}

export default HeroSection;
