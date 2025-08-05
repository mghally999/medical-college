"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaUserMd,
  FaFlask,
  FaHandsHelping,
  FaGraduationCap,
  FaHospital,
} from "react-icons/fa";

const CoreValues = () => {
  const values = [
    {
      icon: <FaHeartbeat className="text-3xl" />,
      title: "Compassion",
      description: "Patient-centered care with empathy and understanding",
    },
    {
      icon: <FaUserMd className="text-3xl" />,
      title: "Excellence",
      description:
        "Commitment to the highest standards in education and practice",
    },
    {
      icon: <FaFlask className="text-3xl" />,
      title: "Innovation",
      description: "Advancing medicine through research and new technologies",
    },
    {
      icon: <FaHandsHelping className="text-3xl" />,
      title: "Collaboration",
      description: "Teamwork across disciplines for better patient outcomes",
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Lifelong Learning",
      description: "Continuous professional development and growth",
    },
    {
      icon: <FaHospital className="text-3xl" />,
      title: "Community Service",
      description: "Dedication to improving public health and wellbeing",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#0a0f2c]"
          >
            Our Core Values
          </motion.h2>
          <div className="w-20 h-1 bg-[#5a7eff] mx-auto mt-6 mb-8" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            The fundamental principles that guide our institution and shape our
            culture of excellence in medical education
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f8f9ff] p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-[#5a7eff] mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-[#0a0f2c] mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
