"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const FinancialAid = () => {
  // CS Medical College brand colors (based on the document)
  const brandColors = {
    primary: "#1A4E8E", // Dark blue from document
    secondary: "#D32F2F", // Red accent
    accent: "#FFA000", // Gold/yellow accent
    dark: "#1A1A2E", // Dark blue
    light: "#F5F7FA", // Light background
  };

  const [activeTab, setActiveTab] = useState("merit");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const scholarshipTypes = [
    {
      id: "merit",
      title: "Merit-Based Scholarships",
      icon: "mdi:star-shooting-outline",
      description: "Awarded based on academic excellence and past performance",
      gradient: `linear-gradient(135deg, ${brandColors.primary} 0%, #2A5CAA 100%)`,
    },
    {
      id: "sports",
      title: "Sports Scholarships",
      icon: "mdi:trophy-outline",
      description: "For students who have represented National or State teams",
      gradient: `linear-gradient(135deg, ${brandColors.secondary} 0%, #E53935 100%)`,
    },
    {
      id: "alumni",
      title: "Alumni Scholarships",
      icon: "mdi:account-group-outline",
      description: "Special benefits for previous CS Medical College students",
      gradient: `linear-gradient(135deg, ${brandColors.dark} 0%, #2A2A4E 100%)`,
    },
    {
      id: "external",
      title: "External Funding",
      icon: "mdi:handshake-outline",
      description: "Government and corporate sponsorship opportunities",
      gradient: `linear-gradient(135deg, ${brandColors.accent} 0%, #FFB300 100%)`,
    },
  ];

  const meritScholarshipData = [
    { discount: "30%", gpa: "95% +", applied: "Only on 1st Year fees" },
    { discount: "25%", gpa: "90% - 95%", applied: "Only on 1st Year fees" },
    { discount: "20%", gpa: "80% - 89%", applied: "Only on 1st Year fees" },
    { discount: "15%", gpa: "70% - 79%", applied: "Only on 1st Year fees" },
  ];

  const deadlineData = [
    {
      intake: "March (Fall) Intake",
      priority: "January 15",
      final: "February 15",
    },
    { intake: "June (Fall) Intake", priority: "April 30", final: "May 25" },
    {
      intake: "September (Fall) Intake",
      priority: "June 30",
      final: "August 15",
    },
    {
      intake: "November (Fall) Intake",
      priority: "September 30",
      final: "October 25",
    },
  ];

  const countryScholarshipData = [
    {
      country: "India",
      program: "National Overseas Scholarship, State Study Abroad Schemes",
    },
    { country: "Pakistan", program: "HEC Overseas Scholarship Program" },
    {
      country: "Nigeria",
      program: "Federal Government Bilateral Education Agreement (BEA)",
    },
    {
      country: "Nepal",
      program: "Ministry of Education Study Abroad Assistance",
    },
    {
      country: "Sri Lanka",
      program: "Ministry of Higher Education Study Abroad Support Grants",
    },
    {
      country: "GCC Countries",
      program: "Stipends or tuition support for UAE-based education",
    },
  ];

  const requiredDocuments = [
    "National/State level participation certificates",
    "Recommendation letter (coach/authority)",
    "Sports resume (optional)",
    "Appear for a personal interview with the committee",
  ];

  const externalFundingDocs = [
    "Offer/Admission Letter from CS Medical College",
    "Cost of Attendance or Tuition Fee Estimate",
    "Academic transcripts",
    "Passport/ID copy",
    "Statement of Purpose or Study Plan",
    "Proof of financial need (for need-based schemes)",
  ];

  const applicationDetails = [
    "Scholarship applications must be submitted before semester start",
    "Late applications may not be considered for current intake",
    "All scholarships reviewed by Financial Aid Committee",
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "merit":
        return (
          <div className="space-y-6">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: brandColors.primary }}
            >
              Merit-Based Scholarship Details
            </h3>
            <p className="text-lg mb-6">
              Awarded based on your academic performance in previous studies.
            </p>

            <div className="overflow-x-auto rounded-lg shadow-md">
              <table
                className="w-full border-collapse"
                style={{ background: "white" }}
              >
                <thead>
                  <tr
                    style={{ background: brandColors.primary, color: "white" }}
                  >
                    <th className="p-3 text-left">UG/PG Scholarship</th>
                    <th className="p-3 text-left">GPA / Percentage</th>
                    <th className="p-3 text-left">Applied on</th>
                  </tr>
                </thead>
                <tbody>
                  {meritScholarshipData.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td
                        className="p-3 font-semibold"
                        style={{ color: brandColors.primary }}
                      >
                        {row.discount}
                      </td>
                      <td className="p-3">{row.gpa}</td>
                      <td className="p-3">{row.applied}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "sports":
        return (
          <div className="space-y-6">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: brandColors.primary }}
            >
              Sports Scholarship Details
            </h3>
            <p className="text-lg mb-6">
              Students who have represented National or State teams are eligible
              for a Sports Scholarship, offering a tuition fee waiver ranging
              from 5% to 50% for the first year.
            </p>

            <div
              className="bg-blue-50 p-6 rounded-lg border-l-4"
              style={{ borderColor: brandColors.primary }}
            >
              <h4
                className="text-xl font-semibold mb-3"
                style={{ color: brandColors.primary }}
              >
                Documents Required for Sports Scholarship
              </h4>
              <ul className="list-disc pl-5 space-y-2">
                {requiredDocuments.map((doc, index) => (
                  <li key={index} className="text-lg">
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-lg italic">
              Scholarships will be awarded in accordance with the Sports
              Scholarship policy, based on the recommendation of the Sports
              Committee following a personal interview and document evaluation.
            </p>
          </div>
        );

      case "alumni":
        return (
          <div className="space-y-6">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: brandColors.primary }}
            >
              Alumni Scholarship Details
            </h3>
            <p className="text-lg mb-6">
              Students who have completed their undergraduate programs at CS
              Medical College are eligible for a 25% waiver on the full program
              fee, in addition to the merit scholarship.
            </p>

            <div
              className="bg-yellow-50 p-6 rounded-lg border-l-4"
              style={{ borderColor: brandColors.accent }}
            >
              <h4
                className="text-xl font-semibold mb-3"
                style={{ color: brandColors.primary }}
              >
                How to Apply for Alumni Scholarship
              </h4>
              <p className="text-lg mb-4">
                Contact our admissions office with proof of your previous
                enrollment and completion of an undergraduate program at CS
                Medical College.
              </p>
            </div>
          </div>
        );

      case "external":
        return (
          <div className="space-y-6">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: brandColors.primary }}
            >
              External Funding Opportunities
            </h3>
            <p className="text-lg mb-6">
              Students are encouraged to explore external financial support
              options offered by governments, NGOs, and private organizations in
              their home countries or internationally.
            </p>

            <h4
              className="text-xl font-semibold mb-3"
              style={{ color: brandColors.primary }}
            >
              Government Scholarships (Home Country Based)
            </h4>

            <div className="overflow-x-auto rounded-lg shadow-md mb-6">
              <table
                className="w-full border-collapse"
                style={{ background: "white" }}
              >
                <thead>
                  <tr
                    style={{ background: brandColors.primary, color: "white" }}
                  >
                    <th className="p-3 text-left">Country</th>
                    <th className="p-3 text-left">Scholarship Program</th>
                  </tr>
                </thead>
                <tbody>
                  {countryScholarshipData.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td
                        className="p-3 font-semibold"
                        style={{ color: brandColors.primary }}
                      >
                        {row.country}
                      </td>
                      <td className="p-3">{row.program}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h4
              className="text-xl font-semibold mb-3"
              style={{ color: brandColors.primary }}
            >
              Employer or Corporate Sponsorships
            </h4>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li className="text-lg">
                Some companies fund employee education or children of employees
                studying abroad.
              </li>
              <li className="text-lg">
                Sectors like healthcare, aviation, banking, and IT may offer
                tuition reimbursement schemes.
              </li>
              <li className="text-lg">
                CS Medical College is open to working with corporations for
                sponsored training or education agreements.
              </li>
            </ul>

            <h4
              className="text-xl font-semibold mb-3"
              style={{ color: brandColors.primary }}
            >
              Documents Often Required for External Funding Applications
            </h4>
            <ul className="list-disc pl-5 space-y-2">
              {externalFundingDocs.map((doc, index) => (
                <li key={index} className="text-lg">
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{
        background: `radial-gradient(circle at 10% 20%, rgba(26, 78, 142, 0.05) 0%, ${brandColors.light} 50%)`,
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              backgroundColor:
                i % 2 ? brandColors.primary : brandColors.secondary,
              opacity: 0.15,
              width: `${Math.random() * 5 + 1}px`,
              height: `${Math.random() * 5 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 5 + 5}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Brand-colored pulse */}
      <div
        className="absolute top-1/4 -left-20 w-96 h-96 rounded-full opacity-10"
        style={{
          background: brandColors.primary,
          filter: "blur(80px)",
          animation: "pulse 8s infinite alternate",
        }}
      />

      <div className="container mx-auto lg:max-w-screen-xl px-4 relative z-10">
        {/* Header */}
        <div className="text-center pb-16" data-aos="fade-up">
          <span
            className="inline-block px-4 py-2 text-sm font-semibold rounded-full mb-4"
            style={{
              background: `rgba(26, 78, 142, 0.1)`,
              border: `1px solid ${brandColors.primary}`,
              color: brandColors.primary,
              backdropFilter: "blur(10px)",
            }}
          >
            FINANCIAL PATHWAYS
          </span>
          <h2 className="md:text-5xl text-4xl font-bold mb-6">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(45deg, ${brandColors.primary}, ${brandColors.secondary})`,
                textShadow: `0 0 20px rgba(26, 78, 142, 0.3)`,
              }}
            >
              Financial Aid & Scholarships
            </span>
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: brandColors.dark }}
          >
            Launch your academic journey with CS Medical College's financial
            support system designed to propel your education forward.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Scholarship Navigation */}
          <div className="lg:col-span-4 col-span-12">
            <div
              className="sticky top-6 p-8 rounded-2xl overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${brandColors.dark} 0%, #242444 100%)`,
                border: `1px solid rgba(255, 160, 0, 0.2)`,
                boxShadow: `0 10px 30px -10px ${brandColors.primary}30`,
              }}
              data-aos="fade-right"
            >
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(255, 160, 0, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 78, 142, 0.3) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              />

              <div className="relative z-10">
                <h3
                  className="text-2xl font-bold mb-6 flex items-center gap-3"
                  style={{ color: "white" }}
                >
                  <div
                    className="p-2 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${brandColors.primary} 0%, ${brandColors.secondary} 100%)`,
                    }}
                  >
                    <Icon icon="mdi:scholarship" className="text-white" />
                  </div>
                  <span>Scholarship Types</span>
                </h3>

                <div className="space-y-4">
                  {scholarshipTypes.map((type, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(type.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                        activeTab === type.id
                          ? "bg-white/20 border-2 border-white"
                          : "bg-white/5 hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="p-2 rounded-lg flex items-center justify-center"
                          style={{
                            background: type.gradient,
                            boxShadow: `0 0 10px 0 ${
                              activeTab === type.id
                                ? brandColors.accent + "80"
                                : "transparent"
                            }`,
                          }}
                        >
                          <Icon
                            icon={type.icon}
                            className="text-xl text-white"
                          />
                        </div>
                        <div>
                          <h4
                            className="font-semibold"
                            style={{ color: "white" }}
                          >
                            {type.title}
                          </h4>
                          <p className="text-sm text-gray-300 mt-1">
                            {type.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h4
                    className="text-lg font-semibold mb-4"
                    style={{ color: "white" }}
                  >
                    How to Apply
                  </h4>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                    <li>Fill in the Scholarship Application Form</li>
                    <li>Attach all required documents</li>
                    <li>Submit before the admission deadline</li>
                    <li>Evaluation by Scholarship Committee</li>
                    <li>Receive Scholarship Award Letter if approved</li>
                  </ol>

                  <div className="mt-6">
                    <button
                      onClick={handleOpenModal}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg"
                      style={{
                        background: `linear-gradient(45deg, ${brandColors.primary} 0%, ${brandColors.secondary} 100%)`,
                        color: "white",
                      }}
                    >
                      <Icon icon="mdi:file-document-edit-outline" />
                      Start Your Application
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scholarship Content */}
          <div className="lg:col-span-8 col-span-12">
            <div
              className="p-8 rounded-2xl"
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                border: `1px solid rgba(26, 78, 142, 0.1)`,
                backdropFilter: "blur(10px)",
                boxShadow: "0 10px 30px -10px rgba(26, 78, 142, 0.1)",
              }}
              data-aos="fade-left"
            >
              {renderTabContent()}
            </div>

            {/* Deadlines Table */}
            <div
              className="mt-8 p-8 rounded-2xl"
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                border: `1px solid rgba(26, 78, 142, 0.1)`,
                backdropFilter: "blur(10px)",
                boxShadow: "0 10px 30px -10px rgba(26, 78, 142, 0.1)",
              }}
            >
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: brandColors.primary }}
              >
                Scholarship & Financial Aid Deadlines
              </h3>
              <p className="text-lg mb-6">
                Applicable for UG, PG, and Short-Term Course Intakes
              </p>

              <div className="overflow-x-auto rounded-lg shadow-md">
                <table
                  className="w-full border-collapse"
                  style={{ background: "white" }}
                >
                  <thead>
                    <tr
                      style={{
                        background: brandColors.primary,
                        color: "white",
                      }}
                    >
                      <th className="p-3 text-left">Intake</th>
                      <th className="p-3 text-left">Priority Deadline</th>
                      <th className="p-3 text-left">Final Deadline</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deadlineData.map((row, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td
                          className="p-3 font-semibold"
                          style={{ color: brandColors.primary }}
                        >
                          {row.intake}
                        </td>
                        <td className="p-3">{row.priority}</td>
                        <td className="p-3">{row.final}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div
                className="mt-6 p-4 rounded-lg"
                style={{
                  background: "#FFF9E6",
                  borderLeft: `4px solid ${brandColors.accent}`,
                }}
              >
                <h4
                  className="font-semibold mb-2"
                  style={{ color: brandColors.primary }}
                >
                  Important Notes:
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Early applicants (by priority deadline) receive priority
                    consideration for limited scholarship slots.
                  </li>
                  <li>
                    Merit-based and sports scholarships are applied only to
                    first-year tuition unless otherwise specified.
                  </li>
                  <li>
                    All supporting documents (transcripts, certificates, ID
                    proofs, etc.) must be submitted along with the application.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div
          className="mt-16 p-[2px] rounded-2xl overflow-hidden"
          style={{
            background: `linear-gradient(45deg, ${brandColors.primary}, ${brandColors.secondary})`,
            boxShadow: `0 0 30px ${brandColors.primary}30`,
          }}
          data-aos="fade-up"
        >
          <div
            className="rounded-xl p-8 md:p-10 text-center"
            style={{
              background: `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 247, 250, 0.9) 100%)`,
            }}
          >
            <h3
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: brandColors.dark }}
            >
              Need Personalized Guidance?
            </h3>
            <p
              className="text-lg mb-8 max-w-2xl mx-auto"
              style={{ color: brandColors.dark }}
            >
              Schedule a consultation with our financial aid specialists to
              explore all your options.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="mailto:studentsupport@csmedicalcollege.ae"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
                style={{
                  background: `linear-gradient(45deg, ${brandColors.primary} 0%, ${brandColors.secondary} 100%)`,
                  color: "white",
                }}
              >
                <Icon icon="mdi:email-outline" className="text-xl" />
                Email Us
              </a>

              <a
                href="tel:+97145522469"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg border-2"
                style={{
                  borderColor: brandColors.primary,
                  color: brandColors.primary,
                }}
              >
                <Icon icon="mdi:phone-outline" className="text-xl" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes twinkle {
          0% {
            opacity: 0.2;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.15;
          }
          100% {
            transform: scale(1);
            opacity: 0.1;
          }
        }
        @keyframes rotateBorder {
          0% {
            --angle: 0deg;
          }
          100% {
            --angle: 360deg;
          }
        }
      `}</style>
    </section>
  );
};

export default FinancialAid;
