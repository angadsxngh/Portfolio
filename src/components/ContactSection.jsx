import React, { useState } from "react";
import { Button } from "@heroui/button";
import {
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@heroui/input";
import { AuroraText } from "./magicui/aurora-text";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import emailjs from "emailjs-com";
import { Notyf } from "notyf";

let notyf = new Notyf();

function ContactSection() {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_yb9p0ti",
        "template_7f9z65t",
        {
          email: "angadshanspal05@gmail.com",
          name: formDetails.name,
          mail: formDetails.email,
          phone: formDetails.phone,
        },
        "6ssgJVXEGqGuPK9IH"
      )
      .then(() => notyf.success("Details sent successfully"));

    emailjs.send(
      "service_yb9p0ti",
      "template_jna3owp",
      {
        name: formDetails.name,
        email: formDetails.email,
        phone: formDetails.phone,
      },
      "6ssgJVXEGqGuPK9IH"
    );
  };

  return (
    <div
      id="contact"
      className="py-24 sm:py-32 text-white bg-black text-center items-center px-6 sm:px-12 md:px-32"
    >
      <AuroraText className="text-lg sm:text-xl pb-4">
        Let's get in touch!
      </AuroraText>
      <h1 className="text-3xl sm:text-4xl font-semibold pb-12">
        Contact Me
      </h1>

      <div className="flex justify-center">
        <NeonGradientCard
          borderSize={1}
          className="w-full max-w-[90vw] sm:max-w-md text-left bg-[#111] rounded-xl shadow-lg border border-white/10"
        >
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">
              Please enter your details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleClick} className="grid gap-4">
              <div className="grid gap-2">
                <Input
                  onChange={handleChange}
                  className="h-12"
                  id="name"
                  name="name"
                  type="text"
                  label="Name"
                  value={formDetails.name}
                />
              </div>
              <div className="grid gap-2">
                <Input
                  onChange={handleChange}
                  className="h-12"
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  value={formDetails.email}
                />
              </div>
              <div className="grid gap-2">
                <Input
                  onChange={handleChange}
                  className="h-12"
                  id="phone"
                  name="phone"
                  type="number"
                  label="Phone"
                  value={formDetails.phone}
                />
              </div>
              <CardFooter className="mt-6">
                <Button
                  type="submit"
                  className="w-full sm:w-auto mx-auto text-center"
                >
                  Get in Touch!
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </NeonGradientCard>
      </div>
    </div>
  );
}

export default ContactSection;
