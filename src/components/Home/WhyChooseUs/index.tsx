"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiLayers, FiBookOpen, FiUsers } from "react-icons/fi";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FiBriefcase className="w-8 h-8" />,
      title: "Practical internships",
      description:
        "Hands-on clinical experience from year one in affiliated hospitals",
    },
    {
      icon: <FiLayers className="w-8 h-8" />,
      title: "Advanced Labs",
      description:
        "State-of-the-art simulation labs with cutting-edge medical technology",
    },
    {
      icon: <FiBookOpen className="w-8 h-8" />,
      title: "Academic Support",
      description:
        "Comprehensive learning resources and research opportunities",
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Academic Mentoring",
      description: "Personalized guidance from experienced faculty members",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#0a0f2c] to-[#1a1f3a]">
      {/* Floating animated elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#5a7eff] opacity-10"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
            }}
            animate={{
              x: [null, Math.random() * 100 - 50],
              y: [null, Math.random() * 100 - 50],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-6 text-white"
          >
            Why Choose CS Medical College?
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-[#5a7eff] mx-auto mb-8 origin-left"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            We combine excellence in medical education with innovative learning
            approaches to shape the healthcare leaders of tomorrow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#5a7eff]/30 transition-all duration-300 group-hover:bg-white/10">
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="absolute inset-0 bg-[#5a7eff] rounded-full opacity-0 group-hover:opacity-20 blur-md transition-all duration-300" />
                  <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#5a7eff] to-[#3a5fcf] rounded-full text-white">
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                        transition: { duration: 2, repeat: Infinity },
                      }}
                    >
                      {feature.icon}
                    </motion.div>
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#5a7eff] to-[#3a5fcf] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Explore Our Programs</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-[#3a5fcf] to-[#5a7eff] opacity-0 hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
