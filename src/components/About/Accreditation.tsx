"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Accreditation = () => {
  const accreditors = [
    {
      logo: "/images/accreditation/medical-council.png",
      name: "National Medical Council",
    },
    {
      logo: "/images/accreditation/who.png",
      name: "World Health Organization",
    },
    {
      logo: "/images/accreditation/amc.png",
      name: "Association of Medical Colleges",
    },
    {
      logo: "/images/accreditation/naac.png",
      name: "National Assessment and Accreditation Council",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#0a0f2c]"
          >
            Accreditations & Recognitions
          </motion.h2>
          <div className="w-20 h-1 bg-[#5a7eff] mx-auto mt-6 mb-8" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Our programs meet the highest standards of medical education and are
            recognized by prestigious organizations worldwide
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {accreditors.map((accreditor, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center"
            >
              <Image
                src={accreditor.logo}
                alt={accreditor.name}
                width={160}
                height={120}
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-[#0a0f2c] mb-4">
                Quality Assurance
              </h3>
              <p className="text-gray-600 mb-6">
                CS Medical College undergoes rigorous periodic reviews to
                maintain our accreditations and ensure continuous improvement in
                all aspects of medical education.
              </p>
              <ul className="space-y-3">
                {[
                  "Regular curriculum reviews and updates",
                  "Faculty development programs",
                  "Infrastructure and facility upgrades",
                  "Student feedback mechanisms",
                  "External quality audits",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#5a7eff] mr-2">✓</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:block relative">
              <Image
                src="/images/about/quality-assurance.jpg"
                alt="Quality Assurance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Accreditation;
