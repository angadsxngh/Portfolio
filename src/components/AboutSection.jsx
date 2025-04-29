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
      className="min-h-screen py-24 px-4 sm:px-10 md:px-20 lg:px-32 bg-black text-white"
    >
      <div className="flex flex-col justify-center items-center text-center py-8">
        <AuroraText className="text-lg sm:text-xl">
          A GLIMPSE INTO MY WORLD
        </AuroraText>
        <h1 className="text-3xl sm:text-4xl font-bold mt-4">About Me</h1>
        <p className="text-base sm:text-lg font-medium max-w-md text-gray-400 mt-4">
          Learn more about who I am, what I do, and what inspires me
        </p>
      </div>

      <div className="text-left space-y-4 mt-10 text-base sm:text-lg leading-relaxed px-2 sm:px-6 md:px-12 lg:px-20">
        <p>
          👋 Hello, world! I am Angad, a Full-stack engineer from Delhi-NCR,
          India. I love to design and code 👨🏼‍💻. I build high-quality applications
          for the web. I concentrate on writing clean, understandable and
          testable code.
        </p>
        <p>
          Currently, I'm pursuing my undergrads 👨‍🎓 in Computer Science Engineering
          at DIT University, Dehradun. I love working in and as a team. I'm
          always looking for opportunities to learn and grow.
        </p>
        <p>
          When I’m not programming, I focus on my hobbies which are:
          Basketball🏀, Movies🎬 and F1🏎️.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 px-2 sm:px-6 md:px-12 lg:px-20 items-center">
        {/* Skills Section */}
        <div className="md:col-span-3 bg-[#191919] text-white font-semibold text-lg rounded-xl border-2 border-white shadow-md">
          <div className="bg-black py-4 border-b border-white rounded-t-xl shadow shadow-cyan-300 text-center">
            <TypingAnimation>My Playground</TypingAnimation>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-4 px-4 py-6 justify-center items-center">
            {slugs.map((slug, index) => (
              <Image
                key={index}
                src={`https://skillicons.dev/icons?i=${slug}`}
                className="mx-auto"
                alt={slug}
              />
            ))}
          </div>
        </div>

        {/* Avatar Image */}
        <div className="flex justify-center">
          <Image
            className="w-full max-w-[280px] rounded-xl"
            alt="Angad's Avatar Map"
            src="https://raw.githubusercontent.com/angadsxngh/Portfolio/refs/heads/master/public/images/avatarMap.jpg"
            width={300}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
