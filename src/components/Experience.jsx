import React from "react";
import { Avatar, Badge, For, Span, Stack, Timeline, Text } from "@chakra-ui/react"
import { BiSolidCircle } from "react-icons/bi";

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-8 md:px-16 lg:px-24 bg-black text-white"
    >
      {/* Heading */}
      <div className="flex flex-col justify-center items-center text-center py-8">
        <h1 className="text-3xl sm:text-4xl font-bold mt-4">Experience</h1>
        <p className="text-base sm:text-lg font-medium max-w-md text-gray-400 mt-4">
          A brief look at my professional journey.
        </p>
      </div>

      {/* Timeline */}
      <Timeline.Root size="md" variant="solid" gap={10} >
      <Timeline.Item>
        <Timeline.Content flex="1" />
        <Timeline.Connector>
          <Timeline.Separator border={"gray 1px solid"} h={"200px"}/>
          <Timeline.Indicator />
        </Timeline.Connector>
        <Timeline.Content flex="1"> 
          <Timeline.Title fontSize={"lg"}>Wedecode.io</Timeline.Title>
          <Timeline.Description fontSize={"md"}>Software Development Intern</Timeline.Description>
          <Text textStyle="sm">Developed and maintained MERN stack applications, building responsive UIs and secure APIs. Later worked on generating and seeding highly realistic datasets using Python and open-source tools to support LLM training and client applications.</Text>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Content flex="1" alignItems="flex-end">
          <Timeline.Title fontSize={"lg"}>Tata Advanced Systems</Timeline.Title>
          <Timeline.Description fontSize={"md"}>Software Development Intern</Timeline.Description>
          <Timeline.Description fontSize={"sm"}>June 2025 - July 2025</Timeline.Description>
          <Text textStyle="sm" textAlign={"right"}>Worked on server deployment and cybersecurity initiatives, including setting up Moodle on XAMPP, assisting with penetration testing, and implementing DMARC for email security. Built dashboards to monitor domain compliance while gaining hands-on experience in deployment, databases, and security best practices.</Text>
        </Timeline.Content>
        <Timeline.Connector>
          <Timeline.Separator border={"gray 1px solid"} height={"200px"}/>
          <Timeline.Separator />
          <Timeline.Indicator />  
        </Timeline.Connector>
        <Timeline.Content flex="1" />
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Content flex="1" />
        <Timeline.Connector>
          <Timeline.Separator border={"gray 1px solid"}/>
          <Timeline.Indicator />
        </Timeline.Connector>
        <Timeline.Content flex="1">
          <Timeline.Title fontSize={"lg"}>DIT University</Timeline.Title>
          <Timeline.Description fontSize={"md"}>B.Tech in Computer Science and Technology</Timeline.Description>
          <Timeline.Description fontSize={"sm"}>August 2022 - May 2026</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>

    </section>
  );
}

export default ExperienceSection;
