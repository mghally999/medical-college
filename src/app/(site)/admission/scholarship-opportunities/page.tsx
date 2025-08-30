"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiAward, FiUsers, FiStar } from "react-icons/fi";
import ApplicationFormModal from "@/components/Common/ApplicationFormModal";

const BrandColors = {
  primaryDark: "#000C2D",
  primaryBlue: "#001E6C",
  accent: "#E05500",
  lightText: "#F5F5F5",
  border: "#FFFFFF22",
  background: "#F8F9FA",
};

const ScholarshipOpportunities = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scholarshipTypes = [
    {
      title: "Academic Excellence",
      description:
        "Rewarding outstanding academic achievements and performance",
      icon: <FiAward size={32} />,
    },
    {
      title: "Leadership Potential",
      description:
        "Recognizing students who demonstrate exceptional leadership qualities",
      icon: <FiUsers size={32} />,
    },
    {
      title: "Extracurricular Achievements",
      description:
        "Celebrating accomplishments in sports, arts, and community service",
      icon: <FiStar size={32} />,
    },
  ];

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section
      className="py-20"
      style={{ backgroundColor: BrandColors.background }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: BrandColors.primaryDark }}
          >
            Discover a World of Scholarship Opportunities
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: BrandColors.primaryBlue }}
          >
            At Creative Star Education Institute Academy – Dubai Campus, we are
            committed to making quality education more accessible and empowering
            students to reach their full potential.
          </p>
        </motion.div>

        {/* Scholarship Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {scholarshipTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white"
                style={{ backgroundColor: BrandColors.primaryBlue }}
              >
                {type.icon}
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: BrandColors.primaryDark }}
              >
                {type.title}
              </h3>
              <p style={{ color: BrandColors.primaryBlue }}>
                {type.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-xl border text-center max-w-4xl mx-auto"
          style={{ borderColor: BrandColors.border }}
        >
          <p
            className="text-lg mb-6"
            style={{ color: BrandColors.primaryBlue }}
          >
            Open to both undergraduate and postgraduate students, these
            scholarships reflect our dedication to supporting ambitious learners
            from all walks of life.
          </p>

          <p
            className="text-lg mb-8"
            style={{ color: BrandColors.primaryBlue }}
          >
            Explore how pursuing your education in Dubai at one of the UAE's
            emerging centers of academic excellence can become more affordable
            with the right financial support tailored to your goals.
          </p>

          <motion.button
            onClick={handleOpenModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg font-semibold text-white flex items-center justify-center gap-2 mx-auto"
            style={{ backgroundColor: BrandColors.accent }}
          >
            Apply for Scholarships <FiArrowRight />
          </motion.button>

          <p
            className="mt-6 text-sm"
            style={{ color: BrandColors.primaryBlue }}
          >
            Apply now and take the first step toward a brighter, more achievable
            future with Creative Star.
          </p>
        </motion.div>
      </div>

      <ApplicationFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default ScholarshipOpportunities;
