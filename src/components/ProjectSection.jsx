import React from "react";
import { AuroraText } from "./magicui/aurora-text";
import { HyperText } from "./magicui/hyper-text";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { ExternalLink, Github } from "lucide-react";

function ProjectSection() {
  return (
    <div id="projects" className="py-32 pb-32 bg-black text-white items-center text-center">
      <div className="">
        <AuroraText className="text-xl pb-4">Real World Results</AuroraText>
      </div>
      <div className="pb-20"> 
        <HyperText>PROJECTS</HyperText>
        <h1 className="text-xl font-semibold">
          Check out how I transformed ideas into engaging experiences
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-24">
        {[
          {
            title: "Singhstagram",
            img: "https://raw.githubusercontent.com/angadsxngh/Portfolio/refs/heads/master/public/images/singhstagram-landing-page.png",
            desc: "A social media platform built on MERN",
            link: "https://singhstagram.vercel.app/",
            github: "https://github.com/angadsxngh/singhstagram-backend"
          },
          {
            title: "RentEase",
            img: "https://raw.githubusercontent.com/angadsxngh/Portfolio/refs/heads/master/public/images/rentease-landing-page.png",
            desc: "A medium through which Landlords and Tenants can manage their finances",
            link: "https://github.com/angadsxngh/rent-management-frontend",
            github: "https://github.com/angadsxngh/rent-management-backend"
          },
        ].map((project, index) => (
          <NeonGradientCard key={index}>
            <Card className="bg-[#111] border border-white/10 rounded-xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform">
              <CardBody className="p-0">
                <Image
                  alt={`${project.title} preview`}
                  className="w-full object-cover rounded-t-xl"
                  src={project.img}
                />
              </CardBody>
              <CardHeader className="p-4 flex flex-col items-start">
                <p className="text-sm uppercase tracking-wide text-pink-400 font-semibold">
                  Featured Project
                </p>
                <h4 className="text-2xl font-bold mt-1">{project.title}</h4>
                <small className="text-sm text-gray-400 mt-1">
                  {project.desc}
                </small>
                <div className="flex flex-row gap-3">
                  <a href={project.link} target="_blank">
                    <ExternalLink className="w-4 pt-2" />
                  </a>
                  <a href={project.github} target="_blank">
                    <Github className="w-4 pt-2"/>
                  </a>
                </div>
              </CardHeader>
            </Card>
          </NeonGradientCard>
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
