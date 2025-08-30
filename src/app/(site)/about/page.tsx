"use client";
import React from "react";

// Components
import HeroSection from "@/components/About/HeroSection";
import AboutCSMedical from "@/components/About/AboutMedical";
import MissionVision from "@/components/About/MissionVision";
import CoreValues from "@/components/About/CoreValues";
import LeadershipTeam from "@/components/About/LeadershipTeam";
import WhyChooseUs from "@/components/About/WhyChooseUs";
import Accreditation from "@/components/About/Accreditation";
import FacultyTeam from "@/components/About/FacultyTeam";

export default function AboutPage() {
  return (
    <div className="about-page">
      <HeroSection />
      <AboutCSMedical />
      <MissionVision />
      <CoreValues />
      {/* <LeadershipTeam /> */}
      <WhyChooseUs />
      <Accreditation />
      {/* <FacultyTeam /> */}
    </div>
  );
}
