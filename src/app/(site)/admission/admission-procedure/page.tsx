"use client";
import React from "react";
import { motion } from "framer-motion";

const BrandColors = {
  primaryDark: "#000C2D",
  primaryBlue: "#001E6C",
  accent: "#E05500",
  lightText: "#F5F5F5",
  border: "#FFFFFF22",
  background: "#F8F9FA",
};

const AdmissionProcedure = () => {
  const steps = [
    {
      title: "Step 1: Submit Your Application Online",
      description:
        "Begin your journey by completing and submitting the application form available on our website.",
      icon: "📝",
    },
    {
      title: "Step 2: Application Review & Interview",
      description:
        "Our Admissions Team will carefully review your submission and invite you to a virtual interview.",
      details:
        "This interview assesses your motivation, communication skills, and suitability for the chosen programme.",
      icon: "💼",
    },
    {
      title: "Step 3: Receive Your Admission Offer",
      description:
        "Upon successful interview completion, you will receive an official offer letter outlining programme details, tuition fees, visa guidance, and any additional requirements.",
      icon: "🎓",
    },
    {
      title: "Step 4: Accept Offer & Make Initial Payment",
      description:
        "Secure your place by returning the signed acceptance form and paying the initial registration and visa fees as indicated.",
      note: "Following visa approval, the remaining tuition fees are payable within 20 days.",
      icon: "💰",
    },
    {
      title: "Step 5: Final Enrollment & Orientation",
      description:
        "Upon arrival, you will attend an orientation session, complete registration procedures, collect your student ID, and receive your course timetable.",
      conclusion: "Your academic journey at CS Medical College begins here!",
      icon: "🏫",
    },
  ];

  return (
    <section className="py-20 bg-white custom-padding-2">
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
            Admission Process at CS Medical College
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: BrandColors.primaryBlue }}
          >
            We warmly welcome international students to join CS Medical College,
            a gateway to quality medical education and a vibrant global learning
            community.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-8 top-0 h-full w-1 hidden md:block"
            style={{ backgroundColor: BrandColors.primaryBlue, opacity: 0.2 }}
          ></div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row items-start"
              >
                {/* Icon/Number */}
                <div className="flex-shrink-0 mb-4 md:mb-0">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white relative z-10"
                    style={{ backgroundColor: BrandColors.primaryBlue }}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="md:ml-8 flex-1">
                  <div
                    className="p-8 rounded-xl border"
                    style={{
                      backgroundColor: BrandColors.background,
                      borderColor: BrandColors.border,
                    }}
                  >
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{ color: BrandColors.primaryDark }}
                    >
                      {step.title}
                    </h3>

                    <p
                      className="text-lg mb-4"
                      style={{ color: BrandColors.primaryBlue }}
                    >
                      {step.description}
                    </p>

                    {/* Details */}
                    {step.details && (
                      <p
                        className="italic mb-4"
                        style={{ color: BrandColors.primaryBlue }}
                      >
                        {step.details}
                      </p>
                    )}

                    {/* Note */}
                    {step.note && (
                      <p
                        className="italic"
                        style={{ color: BrandColors.accent }}
                      >
                        {step.note}
                      </p>
                    )}

                    {/* Conclusion */}
                    {step.conclusion && (
                      <p
                        className="font-semibold mt-4"
                        style={{ color: BrandColors.primaryDark }}
                      >
                        {step.conclusion}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcedure;
