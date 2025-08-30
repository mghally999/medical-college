"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FiArrowRight, FiMail, FiPhone, FiUpload } from "react-icons/fi";

const BrandColors = {
  primaryDark: "#000C2D",
  primaryBlue: "#001E6C",
  accent: "#E05500",
  lightText: "#F5F5F5",
  border: "#FFFFFF22",
  background: "#F8F9FA",
};

// Application Form Modal Component
const ApplicationFormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <h2 className="text-2xl font-bold mb-4">Application Form</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              className="w-full p-2 border rounded"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Course</label>
            <select className="w-full p-2 border rounded">
              <option>Infection Control and Prevention Course</option>
              <option>Other Course 1</option>
              <option>Other Course 2</option>
            </select>
          </div>
          <div className="flex justify-end space-x-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const InfectionControlCourse = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const overviewPoints = [
    "Comprehensive Curriculum: Covers the principles of infection control and prevention, including hand hygiene, sterilization practices, and personal protective equipment (PPE).",
    "Hands-On Learning: Practical sessions to reinforce infection control practices.",
    "Expert Instructors: Delivered by certified infection control specialists with extensive experience in healthcare settings.",
    "Internationally Recognized Certification: Certification is valid for 2 years and accepted globally.",
    "Interactive Format: Includes lectures, case studies, and practical demonstrations.",
  ];

  const entryRequirements = [
    "Minimum Age: 18 years or older.",
    "Educational Background: Healthcare professionals or students in the medical field.",
    "Work Experience: Basic knowledge of healthcare practices is beneficial, but not required.",
    "English Proficiency: Basic understanding of English to follow instructions and participate in discussions.",
  ];

  const courseOutline = [
    {
      title: "Introduction to Infection Control and Prevention",
      points: [
        "Understanding the importance of infection control in healthcare settings.",
        "Overview of common healthcare-associated infections (HAIs) and their impact.",
      ],
    },
    {
      title: "Hand Hygiene and Personal Hygiene Practices",
      points: [
        "The role of hand hygiene in preventing infections.",
        "Correct techniques for hand washing, hand sanitizing, and using gloves.",
      ],
    },
    {
      title: "Use of Personal Protective Equipment (PPE)",
      points: [
        "Overview of PPE types and their appropriate use.",
        "Correct procedures for donning and doffing PPE, including gowns, gloves, face masks, and eye protection.",
      ],
    },
    {
      title: "Sterilization and Disinfection Protocols",
      points: [
        "Proper sterilization techniques for medical equipment.",
        "The difference between cleaning, disinfection, and sterilization.",
        "Key protocols for maintaining a sterile environment.",
      ],
    },
    {
      title: "Isolation Precautions and Quarantine Practices",
      points: [
        "The role of isolation in preventing the spread of infections.",
        "Procedures for handling patients with infectious diseases, including airborne, droplet, and contact precautions.",
      ],
    },
    {
      title: "Infection Control in Healthcare Environments",
      points: [
        "Maintaining a clean environment: cleaning, sanitizing, and disinfecting healthcare facilities.",
        "Strategies for controlling the spread of infections in hospitals, clinics, and outpatient settings.",
      ],
    },
    {
      title: "Managing and Reporting Infections",
      points: [
        "Identifying and reporting potential infections within healthcare settings.",
        "Role of infection control committees and reporting to public health authorities.",
      ],
    },
  ];

  const courseObjectives = [
    "Understand the core principles and practices of infection control and prevention.",
    "Implement proper hand hygiene, PPE usage, and environmental cleaning protocols.",
    "Identify different types of healthcare-associated infections (HAIs) and understand how to prevent their spread.",
    "Understand the role of isolation precautions and quarantine measures.",
    "Apply sterilization and disinfection techniques for medical equipment.",
    "Contribute to the implementation of infection control policies and practices in healthcare settings.",
  ];

  const assessmentPoints = [
    "Participants will be assessed through case studies, discussions, and quizzes to ensure understanding of infection control practices.",
    "Upon successful completion, participants will receive an Infection Control and Prevention Certificate, valid for 2 years.",
  ];

  const careerOpportunities = [
    "Doctors and Nurses",
    "Medical Assistants and Healthcare Assistants",
    "Infection Control Specialists",
    "Pediatricians and Geriatric Care Providers",
    "Healthcare Managers and Facility Coordinators",
    "Pharmacy Technicians and Pharmacists",
  ];

  // Animated background particles
  const Particles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              y: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: Math.random() * 20 + 5,
              height: Math.random() * 20 + 5,
            }}
          />
        ))}
      </div>
    );
  };

  // Animated border component
  const AnimatedBorder = ({ color = "red" }) => (
    <motion.div
      className="absolute inset-0 rounded-xl"
      style={{
        background:
          color === "red"
            ? "linear-gradient(45deg, #4B0E1E, #800020, #4B0E1E, #800020)"
            : "linear-gradient(45deg, #0a0f2c, #1a1f3a, #0a0f2c, #1a1f3a)",
        backgroundSize: "300% 300%",
      }}
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%"],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );

  // Animated title with highlight effect
  const AnimatedTitle = ({ title, subtitle, delay = 0, color = "blue" }) => (
    <div className="text-center mb-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
        className="relative inline-block"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">
          {title}
        </h2>
        <motion.div
          className={`absolute bottom-0 left-0 w-full h-3 opacity-70 rounded-full ${
            color === "red"
              ? "bg-gradient-to-r from-[#4B0E1E] to-[#800020]"
              : "bg-gradient-to-r from-[#0a0f2c] to-[#1a1f3a]"
          }`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: delay + 0.5, ease: "easeOut" }}
          style={{ originX: 0 }}
        />
      </motion.div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
          className="text-xl mt-4 max-w-3xl mx-auto opacity-90"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );

  // Animated card component
  const AnimatedCard = ({
    children,
    index,
    className = "",
    color = "blue",
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        damping: 15,
        stiffness: 100,
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative p-6 rounded-xl backdrop-blur-md border border-white/20 overflow-hidden ${className}`}
      style={{
        transformStyle: "preserve-3d",
        background:
          color === "red"
            ? "linear-gradient(to bottom right, rgba(75, 14, 30, 0.2), rgba(128, 0, 32, 0.1))"
            : "linear-gradient(to bottom right, rgba(10, 15, 44, 0.2), rgba(26, 31, 58, 0.1))",
      }}
    >
      <AnimatedBorder color={color} />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );

  // Section wrapper with consistent styling
  const SectionWrapper = ({ children, color = "blue" }) => {
    const bgGradient =
      color === "red"
        ? "bg-gradient-to-b from-[#4B0E1E] to-[#800020]"
        : "bg-gradient-to-b from-[#0a0f2c] to-[#1a1f3a]";

    return (
      <section
        className={`relative py-28 px-6 md:px-20 overflow-hidden ${bgGradient}`}
      >
        <Particles />
        {children}
      </section>
    );
  };

  return (
    <main
      ref={containerRef}
      className="w-full min-h-screen bg-gray-900 text-white overflow-hidden"
    >
      {/* Header Section with 3D effect */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-6 md:px-20 text-center bg-gradient-to-br from-[#1a1f3a] via-[#0a0f2c] to-[#4B0E1E] overflow-hidden">
        <Particles />
        <div className="absolute inset-0 bg-radial-gradient at-center from-[#800020]/20 via-transparent to-transparent" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-6xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: -40, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{
              textShadow: "0 4px 20px rgba(0,0,0,0.5)",
              transformStyle: "preserve-3d",
            }}
          >
            Infection Control and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#ffffff]">
              Prevention Course
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block mb-8"
          >
            <div className="text-2xl md:text-3xl font-semibold px-6 py-3 bg-gradient-to-r from-[#0a0f2c]/30 to-[#4B0E1E]/30 rounded-xl border border-white/20 backdrop-blur-md">
              1-Day Certification Program
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-3xl mx-auto text-xl md:text-2xl opacity-90 mb-10"
          >
            Essential training for healthcare professionals to prevent
            infections and ensure safety in healthcare settings.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={handleOpenModal}
              className="px-8 py-4 bg-gradient-to-r from-[#0a0f2c] to-[#4B0E1E] rounded-xl font-semibold text-lg hover:from-[#1a1f3a] hover:to-[#800020] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#4B0E1E]/30"
            >
              Apply Now
            </button>
          </motion.div>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-white rounded-full mt-2"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Overview Section */}
      <SectionWrapper color="blue">
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedTitle
            title="Course Overview"
            subtitle="Our 1-Day Infection Control and Prevention Course is designed for healthcare professionals and individuals seeking to understand the essential strategies and protocols for preventing infections within healthcare settings."
            delay={0.2}
            color="blue"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {overviewPoints.map((point, index) => (
              <AnimatedCard key={index} index={index} color="blue">
                <div className="flex items-start">
                  <motion.div
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#0a0f2c] to-[#1a1f3a] flex items-center justify-center mr-4 mt-1"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.4 }}
                  >
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <p className="text-lg">{point}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* Animated shape decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -45 }}
          whileInView={{ opacity: 0.1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute -right-40 top-40 w-80 h-80 rounded-full bg-gradient-to-r from-[#0a0f2c] to-[#1a1f3a] blur-3xl"
        />
      </SectionWrapper>

      {/* Entry Requirements Section */}
      <SectionWrapper color="red">
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedTitle
            title="Entry Requirements"
            delay={0.2}
            color="red"
            subtitle={undefined}
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {entryRequirements.map((requirement, index) => (
              <AnimatedCard key={index} index={index} color="red">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#4B0E1E] to-[#800020] flex items-center justify-center mr-4 mt-1 font-bold">
                    {index + 1}
                  </div>
                  <p className="text-lg">{requirement}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* Animated shape decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 45 }}
          whileInView={{ opacity: 0.1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute -left-40 bottom-40 w-80 h-80 rounded-full bg-gradient-to-r from-[#4B0E1E] to-[#800020] blur-3xl"
        />
      </SectionWrapper>

      {/* Course Details Section */}
      <SectionWrapper color="blue">
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedTitle
            title="Course Details"
            delay={0.2}
            color="blue"
            subtitle={undefined}
          />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <AnimatedCard index={0} color="blue">
              <h3 className="text-2xl font-semibold mb-3">Course Duration</h3>
              <p className="text-4xl font-bold">01 Day</p>
              <p className="text-lg opacity-90">(06 Hours)</p>
            </AnimatedCard>

            <AnimatedCard index={1} color="blue">
              <h3 className="text-2xl font-semibold mb-3">
                Certificate Validity
              </h3>
              <p className="text-4xl font-bold">02 Years</p>
              <p className="text-lg opacity-90">Internationally recognized</p>
            </AnimatedCard>
          </div>

          <AnimatedCard index={2} className="md:col-span-2" color="blue">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Mode of Training
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0a0f2c] to-[#1a1f3a] flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-medium">Instructor-Led</h4>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0a0f2c] to-[#1a1f3a] flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-medium">Hands-on Practice</h4>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0a0f2c] to-[#1a1f3a] flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-medium">Training Facility</h4>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </SectionWrapper>

      {/* Course Outline Section */}
      <SectionWrapper color="red">
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedTitle
            title="Course Outline"
            delay={0.2}
            color="red"
            subtitle={undefined}
          />

          <div className="grid md:grid-cols-2 gap-8">
            {courseOutline.map((section, index) => (
              <AnimatedCard key={index} index={index} color="red">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4B0E1E] to-[#800020] flex items-center justify-center mr-3 text-white font-bold">
                    {index + 1}
                  </span>
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-[#800020] mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Course Objectives Section */}
      <SectionWrapper color="blue">
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedTitle
            title="Course Objectives"
            delay={0.2}
            color="blue"
            subtitle={undefined}
          />

          <div className="grid md:grid-cols-2 gap-8">
            {courseObjectives.map((objective, index) => (
              <AnimatedCard key={index} index={index} color="blue">
                <div className="flex items-start">
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#0a0f2c] to-[#1a1f3a] flex items-center justify-center mr-4 mt-1 font-bold text-white"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {index + 1}
                  </motion.div>
                  <p className="text-lg">{objective}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Assessment & Certification Section */}
      <SectionWrapper color="red">
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedTitle
            title="Assessment & Certification"
            delay={0.2}
            color="red"
            subtitle={undefined}
          />

          <div className="grid md:grid-cols-2 gap-8">
            {assessmentPoints.map((point, index) => (
              <AnimatedCard key={index} index={index} color="red">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#4B0E1E] to-[#800020] flex items-center justify-center mr-4 mt-1 font-bold text-white text-lg">
                    {index + 1}
                  </div>
                  <p className="text-lg">{point}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Career Opportunities Section */}
      <SectionWrapper color="blue">
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedTitle
            title="Career Opportunities"
            delay={0.2}
            color="blue"
            subtitle={undefined}
          />

          <div className="grid md:grid-cols-2 gap-8">
            {careerOpportunities.map((point, index) => (
              <AnimatedCard key={index} index={index} color="blue">
                <div className="flex items-start">
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#0a0f2c] to-[#1a1f3a] flex items-center justify-center mr-4 mt-1"
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </motion.div>
                  <p className="text-lg">{point}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA Section */}
      <SectionWrapper color="red">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedTitle
            title="Enroll in Our Infection Control Course Today"
            subtitle="Gain essential skills to prevent infections and ensure safety in healthcare settings"
            delay={0.2}
            color="red"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <button
              onClick={handleOpenModal}
              className="px-10 py-5 bg-gradient-to-r from-[#4B0E1E] to-[#800020] rounded-2xl font-semibold text-xl hover:from-[#800020] hover:to-[#4B0E1E] transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#800020]/40 mb-6"
            >
              Apply Now
            </button>
            <p className="text-lg opacity-80 mt-8">
              Our team is ready to answer your questions and guide you through
              the registration process.
            </p>
          </motion.div>
        </div>

        {/* Animated shape decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute left-1/2 bottom-20 w-96 h-96 rounded-full bg-gradient-to-r from-[#4B0E1E] to-[#800020] blur-3xl"
          style={{ x: "-50%" }}
        />
      </SectionWrapper>

      {/* Application Form Modal */}
      <ApplicationFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
};

export default InfectionControlCourse;
