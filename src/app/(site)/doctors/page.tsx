import React from "react";
import HeroSub from "@/components/Sharedcomponent/HeroSub";
import DoctorList from "@/components/Sharedcomponent/DoctorTeam/Doctors";
import ContactForm from "@/components/Sharedcomponent/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doctors | CS Medical College",
};
const Doctors = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/doctors", text: "Doctors" },
  ];
  return (
    <>
      <HeroSub
        title="Meet our Doctors"
        description="Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing"
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="lg:pb-24 pb-16 dark:bg-darkmode">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
          <DoctorList />
        </div>
      </section>
      <ContactForm />
    </>
  );
};

export default Doctors;
