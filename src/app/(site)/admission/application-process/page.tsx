"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiMail, FiPhone, FiUpload } from "react-icons/fi";
import ApplicationFormModal from "@/components/Common/ApplicationFormModal";

const BrandColors = {
  primaryDark: "#000C2D",
  primaryBlue: "#001E6C",
  accent: "#E05500",
  lightText: "#F5F5F5",
  border: "#FFFFFF22",
  background: "#F8F9FA",
};

const ApplicationProcess = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const requiredDocuments = [
    "Completed Application Form (online or PDF)",
    "A clear copy of your passport (valid for at least six months)",
    "Academic certificates and transcripts",
    "Passport-sized photograph",
    "Proof of English proficiency",
    "Updated CV (required for professional or postgraduate courses)",
  ];

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section
      className="custom-padding-2"
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
            Apply Now - Application Process
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: BrandColors.primaryBlue }}
          >
            Begin your journey by completing and submitting the application form
            available on our website.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Documents List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="p-8 rounded-xl border"
              style={{
                backgroundColor: "white",
                borderColor: BrandColors.border,
              }}
            >
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: BrandColors.primaryDark }}
              >
                Required Documents
              </h3>

              <ul className="space-y-4">
                {requiredDocuments.map((doc, index) => (
                  <li key={index} className="flex items-start">
                    <div
                      className="w-6 h-6 rounded-full flex-shrink-0 mt-1 mr-3 flex items-center justify-center"
                      style={{
                        backgroundColor: BrandColors.accent,
                        color: "white",
                      }}
                    >
                      ✓
                    </div>
                    <span style={{ color: BrandColors.primaryBlue }}>
                      {doc}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 italic" style={{ color: BrandColors.accent }}>
                For personalized assistance, please reach out to our admissions
                counsellors.
              </p>
            </div>
          </motion.div>

          {/* Application CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div
              className="bg-white p-8 rounded-xl border flex flex-col items-center"
              style={{ borderColor: BrandColors.border }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                style={{
                  backgroundColor: BrandColors.primaryBlue,
                  color: "white",
                }}
              >
                <FiUpload size={32} />
              </div>

              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: BrandColors.primaryDark }}
              >
                Ready to Apply?
              </h3>
              <p
                className="text-lg mb-6"
                style={{ color: BrandColors.primaryBlue }}
              >
                Start your application today and take the first step toward your
                future at CS Medical College.
              </p>

              <motion.button
                onClick={handleOpenModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg font-semibold text-white flex items-center justify-center gap-2"
                style={{ backgroundColor: BrandColors.primaryBlue }}
              >
                Begin Application <FiArrowRight />
              </motion.button>

              {/* Contact Information */}
              <div
                className="mt-8 pt-6 border-t w-full"
                style={{ borderColor: BrandColors.border }}
              >
                <h4
                  className="font-semibold mb-4"
                  style={{ color: BrandColors.primaryDark }}
                >
                  Need Help With Your Application?
                </h4>
                <div className="flex flex-col gap-3">
                  <div
                    className="flex items-center justify-center gap-2"
                    style={{ color: BrandColors.primaryBlue }}
                  >
                    <FiMail /> admissions@csmedicalcollege.ac.uk
                  </div>
                  <div
                    className="flex items-center justify-center gap-2"
                    style={{ color: BrandColors.primaryBlue }}
                  >
                    <FiPhone /> +44 (0)20 1234 5678
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ApplicationFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default ApplicationProcess;
