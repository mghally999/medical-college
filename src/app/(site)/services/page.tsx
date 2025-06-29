import React from "react";
import HeroSub from "@/components/Sharedcomponent/HeroSub";
import Services from "@/components/Sharedcomponent/Services";
import Support from "@/components/Sharedcomponent/Support";
import ContactForm from "@/components/Sharedcomponent/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | CS Medical College",
};
const Doctors = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
  ];
  return (
    <>
      <HeroSub
        title="Services"
        description="Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing"
        breadcrumbLinks={breadcrumbLinks}
      />
      <Services isSpace={false} />
      <Support />
      <ContactForm />
    </>
  );
};

export default Doctors;
