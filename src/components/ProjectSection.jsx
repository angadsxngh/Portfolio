import React from "react";
import { AuroraText } from "./magicui/aurora-text";
import { HyperText } from "./magicui/hyper-text";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import {Card, CardHeader, CardBody, Image} from "@heroui/react";

function ProjectSection() {
  return (
    <div className="py-20 bg-black text-white items-center text-center">
      <div className="">
        <AuroraText className="text-xl pb-4">Real World Results</AuroraText>
        
      </div>
      <div className="pb-20">
      <HyperText>PROJECTS</HyperText>
        <h1 className="text-xl font-semibold">Check out how I transformed ideas into engaging experiences</h1>
      </div>

      <div className="grid grid-cols-2 text-white mx-56 gap-4">
      <NeonGradientCard>
        <Card>
        <CardBody className="overflow-visible py-1">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://heroui.com/images/hero-card-complete.jpeg"
          width={270}
        />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
        </Card>
      </NeonGradientCard>
      <NeonGradientCard>
      <Card>
        <CardBody className="overflow-visible py-1">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://heroui.com/images/hero-card-complete.jpeg"
          width={270}
        />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
        </Card>
      </NeonGradientCard>
      </div>
    </div>
  );
}

export default ProjectSection;
