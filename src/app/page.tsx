import React from "react";
import { Metadata } from "next";
import Hero from "@/components/Home/Hero/index";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Service from "@/components/Sharedcomponent/Services";
import Support from "@/components/Sharedcomponent/Support";
import DoctorTeam from "@/components/Sharedcomponent/DoctorTeam";
import Testimonials from "@/components/Sharedcomponent/Testimonial";
import Blog from "@/components/Sharedcomponent/Blog";
import ContactForm from "@/components/Sharedcomponent/ContactForm";
import AboutSection from "@/components/Sharedcomponent/Learn";
export const metadata: Metadata = {
  title: "CS Medical College",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <Testimonials />
      <Service isSpace={true} />
      <AboutSection />
      <Support />
      <DoctorTeam />
      <Blog />
      <ContactForm />
    </main>
  );
}
