"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaUserNurse,
  FaHandsHelping,
  FaBookMedical,
  FaGraduationCap,
  FaHeartbeat,
  FaChalkboardTeacher,
  FaFlask,
  FaAward,
  FaGlobe,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUserNurse className="text-4xl" />,
      title: "RN to BSN Program",
      description:
        "Comprehensive Registered Nursing program designed to equip students for diverse healthcare roles",
    },
    {
      icon: <FaHandsHelping className="text-4xl" />,
      title: "Assistant Nursing",
      description:
        "Gain the knowledge and skills required for essential patient care roles",
    },
    {
      icon: <FaBookMedical className="text-4xl" />,
      title: "Health & Social Care",
      description:
        "Programs that foster competence, compassion, and adaptability in healthcare",
    },
    {
      icon: <FaGraduationCap className="text-4xl" />,
      title: "Professional Certifications",
      description:
        "Development certifications for career advancement in healthcare",
    },
    {
      icon: <FaFlask className="text-4xl" />,
      title: "Blended Learning",
      description:
        "Theoretical learning combined with practical insights for comprehensive education",
    },
    {
      icon: <FaGlobe className="text-4xl" />,
      title: "Global Healthcare",
      description:
        "Prepare to respond to evolving challenges in health service delivery globally",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0a0f2c] to-[#1a1f3a] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Choosing CS Medical College: What You Need to Know
          </motion.h2>
          <div className="w-20 h-1 bg-[#5a7eff] mx-auto mb-8" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-200 max-w-3xl mx-auto mt-6"
          >
            CS Medical College offers comprehensive Health Science programmes
            designed to equip students with the knowledge and skills required
            for diverse healthcare roles.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-[#5a7eff] mb-6 group-hover:text-white group-hover:bg-[#5a7eff] w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
