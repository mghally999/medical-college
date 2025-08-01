import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/OfficeLocation";
import React from "react";
import HeroSub from "@/components/Sharedcomponent/HeroSub";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact | CS Medical College",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <HeroSub
        title="Contact Us"
        description="Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing"
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactInfo />
      <ContactForm />
      <Location />
    </>
  );
};

export default page;
