"use client";

import React, { useEffect, useRef } from "react";
import {
  FaRocket,
  FaGraduationCap,
  FaGlobe,
  FaHandsHelping,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const features = [
  { icon: FaGraduationCap, label: "Academic Mentoring" },
  { icon: FaGlobe, label: "Migration Support" },
  { icon: FaRocket, label: "Professional Development" },
  { icon: FaHandsHelping, label: "Student Services" },
  { icon: FaGraduationCap, label: "Academic Support" },
  { icon: FaGlobe, label: "Accommodation & Transport" },
];

const WhyCSEICosmic = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden text-white py-24 px-6 sm:px-12 bg-[#0f0c29]"
    >
      {/* Cosmic Stars BG */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/why-csei/cosmos-background.jpg"
          alt="Cosmic Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>

      {/* Parallax Overlay + Cosmic Fog */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#420516aa] via-[#6A0D1B77] to-[#FF5E0088] backdrop-blur-[2px]" />

      {/* Content Wrapper */}
      <div className="relative z-20 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#FF5E00] to-white animate-text-shimmer"
        >
          Why CSEI Academy?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg text-white/80 mb-12"
        >
          We are not just an institute — we’re a launchpad for global careers.
          Our programs are powered by UK accreditation, Dubai-based
          infrastructure, and full-spectrum student support from application to
          employment.
        </motion.p>

        {/* Glass Grid Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.9 }}
        >
          {features.map(({ icon: Icon, label }, i) => (
            <div
              key={i}
              className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center justify-center shadow-xl hover:scale-105 transition duration-300 group"
            >
              <div className="text-3xl mb-4 text-[#FF5E00] group-hover:text-white">
                <Icon />
              </div>
              <h3 className="text-lg font-semibold text-white">{label}</h3>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Orbiting Planets */}
      <div className="absolute -top-16 left-1/2 w-[200px] h-[200px] rounded-full bg-[#FF5E00]/10 animate-pulse z-10 blur-2xl -translate-x-1/2" />
      <div className="absolute bottom-12 left-10 w-[300px] h-[300px] bg-[#6A0D1B]/10 rounded-full blur-[100px] z-0" />
    </section>
  );
};

export default WhyCSEICosmic;
