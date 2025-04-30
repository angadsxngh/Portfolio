import React from "react";
import { AuroraText } from "./magicui/aurora-text";
import { Image } from "@heroui/image";
import { TypingAnimation } from "./magicui/typing-animation";

function AboutSection() {
  const slugs = [
    "javascript", "typescript", "nextjs", "express", "nodejs",
    "mongodb", "react", "mysql", "postgresql", "prisma",
    "cpp", "java", "tailwind", "git", "github",
    "vscode", "html", "css", "wordpress", "appwrite", "firebase",
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-24 px-4 sm:px-8 md:px-16 lg:px-24 bg-black text-white"
    >
      {/* Heading */}
      <div className="flex flex-col justify-center items-center text-center py-8">
        <AuroraText className="text-lg sm:text-xl">
          A GLIMPSE INTO MY WORLD
        </AuroraText>
        <h1 className="text-3xl sm:text-4xl font-bold mt-4">About Me</h1>
        <p className="text-base sm:text-lg font-medium max-w-md text-gray-400 mt-4">
          Learn more about who I am, what I do, and what inspires me
        </p>
      </div>

      {/* Bio */}
      <div className="text-left space-y-4 mt-10 text-base sm:text-lg leading-relaxed px-2 sm:px-6 md:px-0 max-w-4xl mx-auto">
        <p>
          👋 Hello, world! I am Angad, a Full-stack engineer from Delhi-NCR,
          India. I love to design and code 👨🏼‍💻. I build high-quality applications
          for the web with clean, testable code.
        </p>
        <p>
          Currently, I'm pursuing my undergrads 👨‍🎓 in Computer Science Engineering
          at DIT University, Dehradun. I enjoy working in teams and constantly seek
          opportunities to grow.
        </p>
        <p>
          Outside of programming, I enjoy Basketball🏀, Movies🎬, and Formula 1🏎️.
        </p>
      </div>

      {/* Playground (Skills) Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-14 items-center px-2 sm:px-6 md:px-0 max-w-6xl mx-auto">
        
        {/* Skills grid */}
        <div className="md:col-span-3 bg-[#191919] text-white font-semibold text-lg rounded-xl border-2 border-white shadow-md">
          <div className="bg-black py-4 border-b border-white rounded-t-xl shadow shadow-cyan-300 text-center">
            <TypingAnimation>My Playground</TypingAnimation>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-4 px-4 py-6">
            {slugs.map((slug, index) => (
              <Image
                key={index}
                src={`https://skillicons.dev/icons?i=${slug}`}
                className="mx-auto w-10 h-10 sm:w-12 sm:h-12"
                alt={`${slug} icon`}
              />
            ))}
          </div>
        </div>

        {/* Avatar on mobile first */}
        <div className="order-1 md:order-2 flex justify-center">
          <Image
            className="w-full max-w-[260px] sm:max-w-[300px] rounded-xl"
            alt="Angad's Avatar"
            src="https://raw.githubusercontent.com/angadsxngh/Portfolio/refs/heads/master/public/images/avatarMap.jpg"
            width={300}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
