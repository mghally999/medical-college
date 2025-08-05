"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const medicalServices = [
  {
    title: "Nursing Programs",
    icon: "/images/medical-icons/nursing.png",
    slug: "nursing",
    description: "Comprehensive nursing education pathways",
    hoverContent: {
      programs: [
        "Registered Nurses (RN)",
        "Bachelor's of Science in Nursing (BSN)",
        "Advanced Practice Nursing",
        "Nurse Practitioner",
      ],
      icon: "healthicons:doctor",
      color: "bg-[#6A0D1B]",
    },
  },
  {
    title: "Health & Social Care",
    icon: "/images/medical-icons/care.png",
    slug: "health-social-care",
    description: "Transformative care education programs",
    hoverContent: {
      programs: [
        "Level 3 Diploma",
        "Level 4 Diploma",
        "Level 5 Diploma",
        "Professional Certification",
      ],
      icon: "mdi:hand-heart",
      color: "bg-[#8A1A2B]",
    },
  },
  {
    title: "1 Day Courses",
    icon: "/images/medical-icons/courses.png",
    slug: "one-day-courses",
    description: "Essential skills for healthcare professionals",
    hoverContent: {
      programs: [
        "Basic Life Support (BLS)",
        "Pain Management (PM)",
        "Infection Control (IC)",
        "First Aid Certification",
      ],
      icon: "mdi:certificate",
      color: "bg-[#420516]",
    },
  },
];

const ServiceCard = ({ isSpace }: { isSpace: boolean }) => {
  return (
    <section
      className={`bg-gradient-to-br from-[#420516] to-[#6A0D1B] ${
        isSpace ? "lg:py-24 py-16" : "lg:pb-24 pb-16"
      } relative overflow-hidden`}
    >
      {/* Decorative medical elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#FF9A9E] blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-[#FAD0C4] blur-3xl"></div>
      </div>

      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pb-16 md:text-[42px] leading-[3rem] text-2xl text-white font-bold"
        >
          Transform Your Healthcare Career With
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9A9E] via-[#FAD0C4] to-[#FF9A9E] animate-gradient">
            World-Class Medical Programs
          </span>
        </motion.h2>

        <div className="grid grid-cols-12 gap-7">
          {medicalServices.map((item, index) => (
            <Link
              key={index}
              href={`/services/${item.slug}`}
              className="md:col-span-4 sm:col-span-6 col-span-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 lg:p-8 p-6 group relative overflow-hidden hover:border-[#FF9A9E]/50 transition-all duration-500"
            >
              {/* Floating icon background */}
              <div className="absolute -right-10 -top-10 opacity-20 group-hover:opacity-30 transition duration-700">
                <Icon
                  icon={item.hoverContent.icon}
                  className="text-[120px] text-[#FF9A9E]"
                />
              </div>

              {/* Main content */}
              <div className="relative z-10">
                {/* Icon with glow effect */}
                <div className="lg:pb-16 pb-10 relative">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 bg-[#FF9A9E] rounded-full opacity-20 blur-md group-hover:opacity-30 transition duration-500"></div>
                    <div className="relative transition-transform duration-500 group-hover:scale-110">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={64}
                        height={64}
                        className="drop-shadow-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Title + Chevron */}
                <div className="pt-8 border-t-2 border-white/20 flex justify-between items-center">
                  <p className="text-white text-[22px] leading-[2rem] font-medium group-hover:text-[#FF9A9E] transition-colors duration-300">
                    {item.title}
                  </p>
                  <span>
                    <Icon
                      icon="ei:chevron-right"
                      className="text-white group-hover:text-[#FF9A9E] text-[35px] leading-[2.87rem] transition-colors duration-300"
                    />
                  </span>
                </div>

                {/* Hover content - Programs list */}
                <motion.div
                  className="absolute w-full h-full top-0 left-0 p-8 flex flex-col justify-center bg-gradient-to-br from-[#420516]/90 via-[#6A0D1B]/90 to-[#FF9A9E]/90 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-white text-xl font-bold mb-4 flex items-center">
                    <Icon
                      icon={item.hoverContent.icon}
                      className="mr-2 text-[#FF9A9E]"
                    />
                    Available Programs:
                  </h3>
                  <ul className="space-y-3">
                    {item.hoverContent.programs.map((program, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-[#FF9A9E] mr-3"></span>
                        <span className="text-white/90 hover:text-white transition-colors">
                          {program}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <span className="inline-flex items-center text-[#FF9A9E] font-medium group-hover:text-white transition-colors">
                      Learn more
                      <Icon icon="ei:chevron-right" className="ml-1" />
                    </span>
                  </div>
                </motion.div>
              </div>
            </Link>
          ))}
        </div>

        <motion.div
          className="pt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Link
            href="#"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-[#6A0D1B] to-[#420516] text-white font-medium hover:from-[#420516] hover:to-[#6A0D1B] transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            View All Programs
            <Icon
              icon="ei:chevron-right"
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCard;
