import React from "react";
import HeroSub from "@/components/Sharedcomponent/HeroSub";
import Technology from "@/components/About/Technology";
import History from "@/components/About/History";
import Culture from "@/components/About/Culture";
import Testimonials from "@/components/About/Testimonials";
import ContactForm from "@/components/Sharedcomponent/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | CS Medical College",
};
const About = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];
  return (
    <>
      <HeroSub
        title="About Us"
        description="Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing"
        breadcrumbLinks={breadcrumbLinks}
      />
      <Technology />
      <History />
      <Culture />
      <Testimonials />
      <div className="lg:pt-44 pt-28 dark:bg-darkmode">
        <ContactForm />
      </div>
    </>
  );
};

export default About;
