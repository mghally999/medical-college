"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const FinancialAid = () => {
  // CSEI Academy brand colors
  const brandColors = {
    primary: "#FF6B00", // CSEI Orange
    secondary: "#0056B3", // CSEI Blue
    accent: "#FFD700", // Gold accent
    dark: "#1A1A2E", // Dark blue
    light: "#F8F9FA", // Light background
  };

  const scholarshipTypes = [
    {
      title: "Merit-Based Scholarships",
      icon: "mdi:star-shooting-outline",
      features: [
        "Awarded based on academic excellence and past performance",
        "Available to both new and continuing students",
        "Minimum GPA or grade threshold may apply",
      ],
      gradient: `linear-gradient(135deg, ${brandColors.secondary} 0%, #0077CC 100%)`,
    },
    {
      title: "Need-Based Financial Support",
      icon: "mdi:hand-heart-outline",
      features: [
        "Designed for students from lower-income backgrounds",
        "Requires submission of income or financial documentation",
        "Subject to availability and budget allocation each semester",
      ],
      gradient: `linear-gradient(135deg, ${brandColors.primary} 0%, #FF8C00 100%)`,
    },
    {
      title: "Alumni & Returning Student Grants",
      icon: "mdi:account-group-outline",
      features: [
        "Special tuition waivers for previous CSEI students",
        "Available for second diploma, professional courses, or skill programs",
        "Must apply through alumni portal or academic advisor",
      ],
      gradient: `linear-gradient(135deg, ${brandColors.dark} 0%, #2A2A4E 100%)`,
    },
    {
      title: "External Sponsorships & Partnerships",
      icon: "mdi:star-shooting-outline",
      features: [
        "Apply through government or NGO sponsorship bodies",
        "Corporate/foundation scholarships available by nomination",
        "CSEI supports documentation and verification",
      ],
      gradient: `linear-gradient(135deg, ${brandColors.primary} 0%, ${brandColors.secondary} 100%)`,
    },
  ];

  const applicationDetails = [
    "Scholarship applications must be submitted before semester start",
    "Late applications may not be considered for current intake",
    "All scholarships reviewed by Financial Aid Committee",
  ];

  return (
    <section
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{
        background: `radial-gradient(circle at 10% 20%, rgba(0, 86, 179, 0.05) 0%, ${brandColors.light} 50%)`,
      }}
    >
      {/* Cosmic background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              backgroundColor:
                i % 2 ? brandColors.primary : brandColors.secondary,
              opacity: 0.15,
              width: `${Math.random() * 5 + 1}px`,
              height: `${Math.random() * 5 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 5 + 5}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Brand-colored cosmic pulse */}
      <div
        className="absolute top-1/4 -left-20 w-96 h-96 rounded-full opacity-10"
        style={{
          background: brandColors.secondary,
          filter: "blur(80px)",
          animation: "pulse 8s infinite alternate",
        }}
      />

      <div className="container mx-auto lg:max-w-screen-xl px-4 relative z-10">
        {/* Header with brand colors */}
        <div className="text-center pb-16" data-aos="fade-up">
          <span
            className="inline-block px-4 py-2 text-sm font-semibold rounded-full mb-4"
            style={{
              background: `rgba(255, 107, 0, 0.1)`,
              border: `1px solid ${brandColors.primary}`,
              color: brandColors.primary,
              backdropFilter: "blur(10px)",
            }}
          >
            FINANCIAL PATHWAYS
          </span>
          <h2 className="md:text-5xl text-4xl font-bold mb-6">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(45deg, ${brandColors.primary}, ${brandColors.secondary})`,
                textShadow: `0 0 20px rgba(0, 86, 179, 0.3)`,
              }}
            >
              Financial Aid & Scholarships
            </span>
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: brandColors.dark }}
          >
            Launch your academic journey with CSEI Academy's financial support
            system designed to propel your education forward.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Scholarship Cards - Brand Color Orbit */}
          <div className="lg:col-span-8 col-span-12">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              {scholarshipTypes.map((type, index) => (
                <div
                  key={index}
                  className="relative p-8 rounded-2xl overflow-hidden group transition-all duration-500 hover:scale-[1.02]"
                  style={{
                    background: `rgba(255, 255, 255, 0.9)`,
                    border: `1px solid rgba(0, 86, 179, 0.1)`,
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 10px 30px -10px rgba(0, 86, 179, 0.1)",
                  }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Card glow with brand colors */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: type.gradient,
                      mixBlendMode: "overlay",
                    }}
                  />

                  {/* Animated border */}
                  <div
                    className="absolute inset-0 rounded-2xl p-[1px] pointer-events-none"
                    style={{
                      background: type.gradient,
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "exclude",
                      animation: "rotateBorder 8s linear infinite",
                    }}
                  />

                  <div className="flex items-start gap-4 pb-4 relative z-10">
                    <div
                      className="p-3 rounded-lg flex items-center justify-center"
                      style={{
                        background: type.gradient,
                        boxShadow: `0 0 20px 0 ${
                          type.gradient.includes(brandColors.primary)
                            ? `${brandColors.primary}40`
                            : `${brandColors.secondary}40`
                        }`,
                      }}
                    >
                      <Icon icon={type.icon} className="text-2xl text-white" />
                    </div>
                    <h3
                      className="text-xl font-bold mt-1"
                      style={{ color: brandColors.dark }}
                    >
                      {type.title}
                    </h3>
                  </div>
                  <ul className="space-y-3 relative z-10">
                    {type.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 transition-all duration-300 group-hover:translate-x-2"
                      >
                        <Icon
                          icon="mdi:check-circle"
                          style={{ color: brandColors.primary }}
                          className="mt-1 flex-shrink-0 text-lg"
                        />
                        <span style={{ color: brandColors.dark }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Application Panel - Brand Color Control Center */}
          <div className="lg:col-span-4 col-span-12">
            <div
              className="sticky top-6 p-8 rounded-2xl overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${brandColors.dark} 0%, #242444 100%)`,
                border: `1px solid rgba(255, 107, 0, 0.2)`,
                boxShadow: `0 10px 30px -10px ${brandColors.secondary}30`,
              }}
              data-aos="fade-left"
            >
              {/* Grid overlay with brand colors */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(255, 107, 0, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 86, 179, 0.3) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              />

              <div className="relative z-10">
                <h3
                  className="text-2xl font-bold mb-6 flex items-center gap-3"
                  style={{ color: "white" }}
                >
                  <div
                    className="p-2 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${brandColors.primary} 0%, ${brandColors.secondary} 100%)`,
                    }}
                  >
                    <Icon icon="mdi:calendar-clock" className="text-white" />
                  </div>
                  <span>Application Deadlines</span>
                </h3>
                <ul className="space-y-4 pb-6">
                  {applicationDetails.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-lg"
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        borderLeft: `3px solid ${brandColors.primary}`,
                      }}
                    >
                      <Icon
                        icon="mdi:clock-alert-outline"
                        style={{ color: brandColors.primary }}
                        className="mt-1 flex-shrink-0"
                      />
                      <span className="text-gray-200">{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-gray-700">
                  <p className="text-gray-300 pb-5">
                    Our financial aid advisors are standing by to guide you
                    through the application process.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="mailto:financialaid@csei.ac.ae"
                      className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/10"
                      style={{ color: "white" }}
                    >
                      <div
                        className="p-2 rounded-full"
                        style={{
                          background: `linear-gradient(135deg, ${brandColors.primary} 0%, ${brandColors.secondary} 100%)`,
                        }}
                      >
                        <Icon
                          icon="mdi:email-fast-outline"
                          className="text-white"
                        />
                      </div>
                      <span>financialaid@csei.ac.ae</span>
                    </Link>
                    <Link
                      href="tel:+69025600020"
                      className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/10"
                      style={{ color: "white" }}
                    >
                      <div
                        className="p-2 rounded-full"
                        style={{
                          background: `linear-gradient(135deg, ${brandColors.primary} 0%, ${brandColors.secondary} 100%)`,
                        }}
                      >
                        <Icon
                          icon="mdi:phone-in-talk-outline"
                          className="text-white"
                        />
                      </div>
                      <span>+(690) 2560 0020</span>
                    </Link>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-medium w-full transition-all duration-500 hover:shadow-lg hover:scale-[1.02]"
                    style={{
                      background: `linear-gradient(45deg, ${brandColors.primary} 0%, ${brandColors.secondary} 100%)`,
                      color: "white",
                      boxShadow: `0 0 20px ${brandColors.primary}40`,
                    }}
                  >
                    <Icon
                      icon="mdi:file-document-edit-outline"
                      className="text-xl"
                    />
                    Start Your Application
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand-colored CTA */}
        <div
          className="mt-16 p-[2px] rounded-2xl overflow-hidden"
          style={{
            background: `linear-gradient(45deg, ${brandColors.primary}, ${brandColors.secondary})`,
            boxShadow: `0 0 30px ${brandColors.primary}30`,
          }}
          data-aos="fade-up"
        >
          <div
            className="rounded-xl p-8 md:p-10 text-center"
            style={{
              background: `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.9) 100%)`,
            }}
          >
            <h3
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: brandColors.dark }}
            >
              Need Personalized Guidance?
            </h3>
            <p
              className="text-lg mb-8 max-w-2xl mx-auto"
              style={{ color: brandColors.dark }}
            >
              Schedule a consultation with our financial aid specialists to
              explore all your options.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-medium transition-all duration-500 hover:scale-[1.02]"
              style={{
                background: `linear-gradient(45deg, ${brandColors.primary} 0%, ${brandColors.secondary} 100%)`,
                color: "white",
                boxShadow: `0 0 20px ${brandColors.primary}40`,
              }}
            >
              <Icon icon="mdi:calendar-account-outline" className="text-xl" />
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes twinkle {
          0% {
            opacity: 0.2;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.15;
          }
          100% {
            transform: scale(1);
            opacity: 0.1;
          }
        }
        @keyframes rotateBorder {
          0% {
            --angle: 0deg;
          }
          100% {
            --angle: 360deg;
          }
        }
        .hover-float {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-float:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px -10px rgba(0, 86, 179, 0.3);
        }
      `}</style>
    </section>
  );
};

export default FinancialAid;
