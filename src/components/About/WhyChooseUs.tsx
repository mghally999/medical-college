"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaHospital,
  FaUserMd,
  FaFlask,
  FaHandsHelping,
  FaGraduationCap,
  FaAward,
} from "react-icons/fa";
import Image from "next/image";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaHospital className="text-4xl" />,
      title: "Clinical Excellence",
      description: "Extensive hands-on training in affiliated hospitals",
    },
    {
      icon: <FaUserMd className="text-4xl" />,
      title: "Expert Faculty",
      description: "Learn from renowned medical professionals",
    },
    {
      icon: <FaFlask className="text-4xl" />,
      title: "Research Opportunities",
      description: "Participate in cutting-edge medical research",
    },
    {
      icon: <FaHandsHelping className="text-4xl" />,
      title: "Patient-Centered Approach",
      description: "Develop compassionate care skills",
    },
    {
      icon: <FaGraduationCap className="text-4xl" />,
      title: "Comprehensive Curriculum",
      description: "Balanced theoretical and practical learning",
    },
    {
      icon: <FaAward className="text-4xl" />,
      title: "Accredited Programs",
      description: "Recognized by medical councils and boards",
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
            Why Choose CS Medical College?
          </motion.h2>
          <div className="w-20 h-1 bg-[#5a7eff] mx-auto mt-6 mb-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f8f9ff] p-8 rounded-xl hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-[#5a7eff] mb-6 group-hover:text-white group-hover:bg-[#5a7eff] w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0a0f2c] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#5a7eff] to-[#3a5bcf] rounded-xl p-8 text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Medical Journey?
              </h3>
              <p className="mb-6">
                Join CS Medical College and become part of a legacy of
                excellence in healthcare education.
              </p>
              <button className="px-6 py-3 bg-white text-[#0a0f2c] font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Apply Now
              </button>
            </div>
            <div className="hidden lg:flex justify-end">
              <div className="relative w-64 h-64">
                <Image
                  src="/images/about/medical-students.jpg"
                  alt="Medical Students"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
