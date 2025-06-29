"use client";
import React from "react";
import HeroSub from "@/components/Sharedcomponent/HeroSub";
import Biography from "@/components/Doctor-Detail/Biography";
import Awards from "@/components/Doctor-Detail/Awards";
import Skills from "@/components/Doctor-Detail/Skills";
import ContactForm from "@/components/Sharedcomponent/ContactForm";
import Image from "next/image";
import { Doctors } from "@/app/api/data";
import { useParams } from "next/navigation";

const Doctor = () => {
  const { slug } = useParams();
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/doctors", text: "Doctor Details" },
  ];
  const item = Doctors.find((item) => item.slug === slug);

  if (!item) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <HeroSub
        title={item.title}
        description="Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing"
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="lg:py-24 py-16 dark:bg-darkmode">
        <div className="container mx-auto lg:max-w-screen-lg md:max-w-screen-md">
          <div className="grid grid-cols-12 md:gap-16 gap-4">
            <div className="md:col-span-5 col-span-12 Biography">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={0}
                style={{ width: "100%", height: "auto" }}
                className="rounded-lg"
              />
            </div>
            <div className="md:col-span-7 col-span-12">
              <Biography />
              <Awards />
              <Skills />
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
};

export default Doctor;
