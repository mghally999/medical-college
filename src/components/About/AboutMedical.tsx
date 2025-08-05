"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutCSMedical = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/about/college-building.jpg"
              alt="CS Medical College Campus"
              width={800}
              height={600}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2c] to-transparent opacity-50" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0f2c] mb-6">
              About CS Medical College
            </h2>
            <div className="w-20 h-1 bg-[#5a7eff] mb-8" />
            <p className="text-gray-700 mb-6">
              Established with a vision to transform medical education, CS
              Medical College has emerged as a premier institution dedicated to
              excellence in healthcare education. Our state-of-the-art
              facilities and innovative curriculum prepare students to meet the
              challenges of modern medicine.
            </p>
            <p className="text-gray-700 mb-6">
              With a faculty comprising renowned medical professionals and
              researchers, we provide an environment that fosters academic
              excellence, clinical expertise, and compassionate patient care.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {[
                { number: "15+", label: "Years of Excellence" },
                { number: "2000+", label: "Graduates" },
                { number: "50+", label: "Faculty Members" },
                { number: "10+", label: "Hospital Affiliations" },
              ].map((item, index) => (
                <div key={index} className="bg-[#f8f9ff] p-4 rounded-lg">
                  <h3 className="text-2xl font-bold text-[#5a7eff]">
                    {item.number}
                  </h3>
                  <p className="text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCSMedical;
