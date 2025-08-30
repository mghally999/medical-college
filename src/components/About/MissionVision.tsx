"use client";
import React from "react";
import { motion } from "framer-motion";

const MissionVision = () => {
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
            Our Mission & Vision
          </motion.h2>
          <div className="w-20 h-1 bg-[#5a7eff] mx-auto mb-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
          >
            <div className="flex items-center mb-6">
              <div className="bg-[#5a7eff] p-3 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-gray-200">
              CS Medical College of UK is committed to shaping the next
              generation of medical professionals through a dynamic, innovative,
              and inclusive platform. We deliver world-class medical education
              anchored in evidence-based practice, pioneering research, and
              meaningful community engagement. Our mission is to inspire our
              students to pursue excellence, integrity, and compassion while
              empowering them to meet evolving healthcare challenges with
              resilience and professionalism.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
          >
            <div className="flex items-center mb-6">
              <div className="bg-[#5a7eff] p-3 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-gray-200">
              Our vision is to set the benchmark for transformative medical
              education in the UK for the next decade, nurturing clinicians,
              researchers, and leaders who drive healthcare innovation and
              equity worldwide. CS Medical College will stand at the forefront
              of adopting emerging technologies, integrated patient-centered
              care, and sustainable practices. Through robust partnerships and a
              global outlook, we seek to promote health, well-being, and
              scientific advancement, ensuring our graduates shape the future of
              medicine with curiosity, skill, and purpose.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
