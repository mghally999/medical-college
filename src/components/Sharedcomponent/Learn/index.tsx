"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaHospital,
  FaUserMd,
  FaFlask,
  FaHandsHelping,
  FaGraduationCap,
  FaAward,
  FaChevronRight,
} from "react-icons/fa";

const InteractiveAboutSection = () => {
  const [activeHover, setActiveHover] = React.useState<number | null>(null);

  const aboutItems = [
    {
      icon: <FaHospital />,
      title: "Our Story",
      description: "Discover our rich history and journey in medical education",
      href: "/about",
      image: "/images/about/story.jpg",
    },
    {
      icon: <FaUserMd />,
      title: "Who We Are",
      description: "Meet our leadership team and faculty members",
      href: "/about/who-we-are",
      image: "/images/about/team.jpg",
    },
    {
      icon: <FaFlask />,
      title: "Our Mission",
      description: "Learn about our commitment to healthcare education",
      href: "/about/our-mission",
      image: "/images/about/mission.jpg",
    },
    {
      icon: <FaHandsHelping />,
      title: "Our Values",
      description: "Core principles that guide our institution",
      href: "/about/our-values",
      image: "/images/about/values.jpg",
    },
    {
      icon: <FaGraduationCap />,
      title: "Accreditation",
      description: "Recognitions and quality assurance",
      href: "/about/accreditation",
      image: "/images/about/accreditation.jpg",
    },
    {
      icon: <FaAward />,
      title: "Why CS Medical College?",
      description: "What sets us apart from others",
      href: "/about/why-csei",
      image: "/images/about/why-us.jpg",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0a0f2c] to-[#1a1f3a] overflow-hidden">
      {/* Floating animated elements */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="relative inline-block">
              <span className="relative z-10">Discover CS Medical College</span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 w-full h-3 bg-[#5a7eff] opacity-30 z-0"
                style={{ originX: 0 }}
              />
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A premier institution shaping the future of healthcare professionals
            through innovative education and research.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Main Feature Card (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-2/5 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#5a7eff] to-[#3a5fcf] rounded-2xl shadow-2xl transform group-hover:rotate-1 transition-transform duration-500"></div>
            <div className="relative h-full bg-[#1a1f3a] rounded-2xl overflow-hidden border-8 border-[#1a1f3a] shadow-xl">
              <div className="h-48 bg-gradient-to-r from-[#5a7eff] to-[#3a5fcf] p-6 flex items-end">
                <h3 className="text-3xl font-bold text-white">
                  About Our Institution
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-6">
                  For over 25 years, CSEI Medical College has been transforming
                  students into skilled healthcare professionals through our
                  innovative curriculum and hands-on training.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                    <div className="bg-[#5a7eff] p-2 rounded-lg mr-4 text-white">
                      <FaUserMd className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">150+ Faculty</h4>
                      <p className="text-gray-300 text-sm">
                        Experienced medical professionals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                    <div className="bg-[#5a7eff] p-2 rounded-lg mr-4 text-white">
                      <FaGraduationCap className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">
                        Global Recognition
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Accredited by international bodies
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#5a7eff] to-[#3a5fcf] hover:from-[#3a5fcf] hover:to-[#5a7eff] text-white rounded-lg font-medium transition-all duration-300 group-hover:shadow-lg"
                >
                  Explore Our Story
                  <FaChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Interactive Grid (Right) */}
          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative h-full"
                onMouseEnter={() => setActiveHover(index)}
                onMouseLeave={() => setActiveHover(null)}
              >
                <AnimatePresence>
                  {activeHover === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 rounded-xl overflow-hidden z-0"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40"></div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div
                  whileHover={{ y: -5 }}
                  className={`relative h-full bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 shadow-md z-10 ${
                    activeHover === index ? "bg-white/10" : ""
                  }`}
                >
                  <div className="p-6 h-full flex flex-col">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                        activeHover === index
                          ? "bg-white text-[#0a0f2c]"
                          : "bg-[#5a7eff] text-white"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 mb-4 flex-grow">
                      {item.description}
                    </p>
                    <Link
                      href={item.href}
                      className={`inline-flex items-center font-medium ${
                        activeHover === index ? "text-white" : "text-[#5a7eff]"
                      }`}
                    >
                      Learn more
                      <FaChevronRight
                        className={`ml-1 text-xs transition-transform ${
                          activeHover === index ? "translate-x-1" : ""
                        }`}
                      />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Transformative Learning Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#5a7eff] to-[#3a5fcf] rounded-2xl p-8 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Transformative Learning Environment
              </h3>
              <p className="mb-6 text-gray-200">
                CSEI provides a cutting-edge educational experience that
                combines theoretical knowledge with practical application,
                preparing students for real-world healthcare challenges.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm">
                  Simulation Labs
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm">
                  Clinical Rotations
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm">
                  Research Opportunities
                </span>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative w-full h-64">
                <Image
                  src="/images/about/learning.jpg"
                  alt="Transformative Learning"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default InteractiveAboutSection;
