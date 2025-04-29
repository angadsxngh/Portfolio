import React from "react";
import { BentoGrid, BentoCard } from "./magicui/bento-grid";
import { AuroraText } from "./magicui/aurora-text";
import { Image } from "@heroui/image";

function AboutSection() {
  const features = [
    {
      Icon: "FileTextIcon",
      name: "Save your files",
      description: "We automatically save your files as you type.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className:
        "lg:row-start-1 lg:row-end-4 bg-white lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: "InputIcon",
      name: "Full text search",
      description: "Search through all your files in one place.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className:
        "lg:col-start-1 lg:col-end-2 bg-white lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: "GlobeIcon",
      name: "Multilingual",
      description: "Supports 100+ languages and counting.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className:
        "lg:col-start-1 lg:col-end-2 bg-white lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: "CalendarIcon",
      name: "Calendar",
      description: "Use the calendar to filter your files by date.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className:
        "lg:col-start-3 lg:col-end-3 bg-white lg:row-start-1 lg:row-end-2",
    },
  ];
  return (
    <div
      id="about"
      className="min-h-screen py-40 px-32 bg-black text-center  justify-center text-white"
    >
      <div className="flex flex-col justify-center items-center py-8">
        <AuroraText>A GLIMPSE INTO MY WORLD</AuroraText>
        <br />
        <br />
        <h1 className="text-4xl font-bold">About Me</h1>
        <br />
        <h1 className="text-xl font-semibold max-w-sm text-gray-500">
          Learn more about who I am, what I do, and what inspires me
        </h1>
      </div>
      <div className="grid gird-cols-4">
        <div className="bg-white col-span-3">
          <h1>hello</h1>
        </div>
        <div className="">
          <Image
            alt="HeroUI hero Image"
            src="https://heroui.com/images/hero-card-complete.jpeg"
            width={300}
          />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default AboutSection;
