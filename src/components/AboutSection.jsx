import React from "react";
import { AuroraText } from "./magicui/aurora-text";
import { Image } from "@heroui/image";
import { TypingAnimation } from "./magicui/typing-animation";

function AboutSection() {
  const slugs = [
    "javascript",
    "typescript",
    "nextjs",
    "express",
    "nodejs",
    "mongodb",
    "react",
    "mysql",
    "postgresql",
    "prisma",
    "cpp",
    "java",
    "tailwind",
    "git",
    "github",
    "vscode",
    "html",
    "css",
    "wordpress",
    "appwrite",
    "firebase",
  ];

  return (
    <div
      id="about"
      className="min-h-screen py-40 px-32 bg-black text-center  justify-center text-white"
    >
      <div className="flex flex-col justify-center items-center py-8">
        <AuroraText className='text-xl'>A GLIMPSE INTO MY WORLD</AuroraText>
        <br />
        <br />
        <h1 className="text-4xl font-bold">About Me</h1>
        <br />
        <h1 className="text-xl font-semibold max-w-sm text-gray-500">
          Learn more about who I am, what I do, and what inspires me
        </h1>
      </div>
      <div className="">
        <h1 className="text-left mx-28 text-xl">
          👋 Hello, world! I am Angad, a Full-stack engineer from Delhi-NCR,
          India. I love to design and code 👨🏼‍💻. I build high-quality applications
          for the web. I concentrate on writing clean, understandable and
          testable code. 
        </h1>
        <h1 className="pt-2 text-left mx-28 text-xl">
          Currently, I'm pursuing my undergrads 👨‍🎓 in Computer
          Science Engineering at DIT University, Dehradun.
          I love working in and as a team. I'm always looking for opportunities
          to learn and grow.
        </h1>
        <h1 className="pt-2 text-left mx-28 text-xl pb-8">
          When I’m not programming, I focus on my hobbies
          which are: Basketball🏀, Movies🎬 and F1🏎️.
        </h1>
      </div>
      <div className="grid  text-black grid-cols-4 py-5 gap-4 mx-28 ">
        <div className="bg-[#191919] text-white font-semibold text-lg  col-span-3 row-span-1 rounded-xl border-l-2 border-r-2 border-b-2 border-white">
          <div className="bg-black text-white py-4 border-t-2 border-white rounded-t-xl shadow shadow-cyan-300">
            <TypingAnimation className="">My Playground</TypingAnimation>
          </div>
          <div className="grid grid-cols-7 mx-4 items-center text-center pt-4 justify-center">
            {slugs.map((slug) => (
              <Image
                src={`https://skillicons.dev/icons?i=${slug}`}
                className="pb-6 ml-5"
              />
            ))}
          </div>
        </div>
        <Image
          className="row-span-2"
          alt="HeroUI hero Image"
          src="https://raw.githubusercontent.com/angadsxngh/Portfolio/refs/heads/master/public/images/avatarMap.jpg"
          width={300}
        />
      </div>
    </div>
  );
}

export default AboutSection;
