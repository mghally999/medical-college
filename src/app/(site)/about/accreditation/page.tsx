"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

// --- Accreditation Logos ---
const accreditationLogos = [
  {
    src: "/images/about/clients/accreditation-1-removebg-preview.png",
    alt: "UK Government Approved",
  },
  {
    src: "/images/about/clients/accreditation-2-removebg-preview.png",
    alt: "UKRLP Registered",
  },
  {
    src: "/images/about/clients/accreditation-3-removebg-preview.png",
    alt: "AMCA Accredited",
  },
  {
    src: "/images/about/clients/accreditation-4.png",
    alt: "LCPS College Partnership",
  },
  {
    src: "/images/about/clients/accreditation-5.png",
    alt: "CPD Accreditation",
  },
  {
    src: "/images/about/clients/accreditation-6.png",
    alt: "Quality Assurance",
  },
];

// --- Animated Background Particles ---
const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/5"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            y: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: Math.random() * 20 + 5,
            height: Math.random() * 20 + 5,
          }}
        />
      ))}
    </div>
  );
};

// --- Animated Title ---
const AnimatedTitle = ({ title, subtitle, color = "blue", delay = 0 }) => (
  <div className="text-center mb-16 relative">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold mb-6 relative z-10"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.3 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl max-w-3xl mx-auto opacity-90"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div
      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-1 rounded-full opacity-70 ${
        color === "red"
          ? "bg-gradient-to-r from-[#4B0E1E] to-[#800020]"
          : "bg-gradient-to-r from-[#0a0f2c] to-[#1a1f3a]"
      }`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 1, delay: delay + 0.5 }}
      viewport={{ once: true }}
      style={{ originX: 0 }}
    />
  </div>
);

// --- Animated Card ---
const AnimatedCard = ({ index, title, description, color = "blue" }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -10, scale: 1.02 }}
    transition={{
      duration: 0.6,
      delay: index * 0.1,
      type: "spring",
      damping: 15,
    }}
    viewport={{ once: true }}
    className={`relative p-6 rounded-xl backdrop-blur-md border border-white/20 overflow-hidden`}
    style={{
      background:
        color === "red"
          ? "linear-gradient(to bottom right, rgba(75, 14, 30, 0.2), rgba(128, 0, 32, 0.1))"
          : "linear-gradient(to bottom right, rgba(10, 15, 44, 0.2), rgba(26, 31, 58, 0.1))",
    }}
  >
    <div className="flex items-start">
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 text-white font-bold`}
        style={{
          background:
            color === "red"
              ? "linear-gradient(to-r, #4B0E1E, #800020)"
              : "linear-gradient(to-r, #0a0f2c, #1a1f3a)",
        }}
      ></div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="opacity-90">{description}</p>
      </div>
    </div>
  </motion.div>
);

// --- Section Wrapper ---
const SectionWrapper = ({ children, color = "blue" }) => {
  const bgGradient =
    color === "red"
      ? "bg-gradient-to-b from-[#4B0E1E] to-[#800020]"
      : "bg-gradient-to-b from-[#0a0f2c] to-[#1a1f3a]";
  return (
    <section
      className={`relative py-24 px-6 md:px-20 overflow-hidden text-white ${bgGradient}`}
    >
      <Particles />
      {children}
    </section>
  );
};

// --- Logo Carousel ---
const LogoCarousel = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0a0f2c] to-[#1a1f3a] text-white overflow-hidden">
      <Particles />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Our Accrediting Bodies & Partners
          </motion.h2>
          <div className="w-20 h-1 bg-[#5a7eff] mx-auto mb-8" />
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto pb-10 hide-scrollbar">
            <div className="flex space-x-12 px-4">
              {accreditationLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center flex-shrink-0"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 w-48 h-48 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-200 text-center max-w-[160px]">
                    {logo.alt}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AccreditationsPage = () => {
  const accreditations = [
    {
      title: "Approved by Government of the UK",
      description:
        "CS Medical College Ltd operates under UK educational standards and is recognized by the Government of the United Kingdom. This approval confirms our compliance with the national framework of quality and accountability in higher education.",
    },
    {
      title: "Registered Learning Provider (UKRLP)",
      description:
        "We are officially listed on the UK Register of Learning Providers (UKRLP), which assigns a unique UK Provider Reference Number (UKPRN) to verified institutions. This ensures transparency, credibility, and recognition for learners, employers, and partner institutions.",
    },
    {
      title: "AMCA (Allied Medical & Clinical Academy)",
      description:
        "Our affiliation with AMCA highlights our dedication to advancing medical and clinical education. Through this recognition, we align with international standards of healthcare training, giving our students access to quality learning and professional credibility.",
    },
    {
      title: "LCPS College UK Partnership",
      description:
        "In collaboration with LCPS College UK, we deliver specialized healthcare, leadership, and professional training programs. This partnership enhances our academic strength and provides students with broader opportunities for career development and progression.",
    },
    {
      title: "CPD (Continuing Professional Development) Accreditation",
      description:
        "Our programs are CPD-accredited, ensuring that students and professionals gain internationally recognized qualifications. CPD approval guarantees that our courses meet the required benchmarks for professional growth, lifelong learning, and career advancement.",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center bg-gradient-to-br from-[#1a1f3a] via-[#0a0f2c] to-[#4B0E1E] px-6 md:px-20 overflow-hidden">
        <Particles />
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Accreditations & Recognitions
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            At CS Medical College Ltd, UK, we are proud to hold approvals and
            accreditations from respected authorities and organizations. These
            recognitions ensure that our students receive high-quality,
            credible, and globally relevant education.
          </p>
        </motion.div>
      </section>

      {/* Logo Carousel Section */}
      <LogoCarousel />

      {/* Accreditation List */}
      <SectionWrapper color="blue">
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedTitle
            title="Our Accreditations"
            subtitle="These recognitions validate our commitment to excellence in medical education"
            color="blue"
          />
          <div className="grid md:grid-cols-2 gap-10">
            {accreditations.map((acc, index) => (
              <AnimatedCard
                key={index}
                index={index}
                title={acc.title}
                description={acc.description}
                color={index % 2 === 0 ? "blue" : "red"}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Closing Statement */}
      <SectionWrapper color="red">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedTitle
            title="Trusted Worldwide"
            subtitle="Through these accreditations and partnerships, CS Medical College Ltd, UK stands as a trusted name in medical and health sciences education—empowering students with qualifications respected worldwide."
            color="red"
          />
        </div>
      </SectionWrapper>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
};

export default AccreditationsPage;
