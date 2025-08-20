"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const AmericanNursingAssistantCourse = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const qualificationUnits = [
    {
      title: "Anatomy and Physiology",
      description:
        "Study the human body's systems and their functions to support patient care and treatment.",
      percentage: "14%",
    },
    {
      title: "EKG",
      description:
        "Learn the fundamentals of electrocardiography for basic cardiac monitoring and assessment.",
      percentage: "1%",
    },
    {
      title: "Safety and Infection Control",
      description:
        "Understand essential protocols for maintaining safety and preventing infection in healthcare settings.",
      percentage: "13%",
    },
    {
      title: "Medical Law and Ethics",
      description:
        "Gain knowledge of medical law, patient rights, confidentiality, and ethical responsibilities in healthcare.",
      percentage: "13%",
    },
    {
      title: "Patient Care Skills",
      description:
        "Develop core patient care skills essential for safe and effective healthcare delivery.",
      percentage: "41%",
    },
    {
      title: "Pharmacology",
      description:
        "Learn about medications used in patient care, including administration and precautions.",
      percentage: "5%",
    },
    {
      title: "Medical Terminology",
      description:
        "Study common medical terms, abbreviations, and their relevance to patient care.",
      percentage: "13%",
    },
  ];

  const entryRequirements = [
    "Minimum age: 18 years or older",
    "High school diploma or equivalent (or currently enrolled)",
    "English Language Proficiency: IELTS 5.5 or equivalent for international students",
    "Basic understanding of health and social care concepts is beneficial",
    "No prior healthcare experience required",
  ];

  const careerOpportunities = [
    "Nursing Assistant in hospitals, clinics, and long-term care facilities",
    "Home Health Aide",
    "Patient Care Technician",
    "Rehabilitation Assistant",
    "Assisted Living Caregiver",
    "Entry-level positions in healthcare support and clinical services",
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
            AMCA American{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#ffffff]">
              Nursing Assistant Certificate
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block mb-8"
          >
            <div className="text-2xl md:text-3xl font-semibold px-6 py-3 bg-gradient-to-r from-[#0a0f2c]/30 to-[#4B0E1E]/30 rounded-xl border border-white/20 backdrop-blur-md">
              Professional Certification Program
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-3xl mx-auto text-xl md:text-2xl opacity-90 mb-10"
          >
            Prepares students to deliver high-quality, patient-centered care in
            healthcare settings with practical skills and clinical knowledge.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-[#0a0f2c] to-[#4B0E1E] rounded-xl font-semibold text-lg hover:from-[#1a1f3a] hover:to-[#800020] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#4B0E1E]/30">
              Apply Now
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300">
              Learn More
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
            title="Program Overview"
            subtitle="The American Nursing Assistant (ANA) Certificate prepares students to deliver high-quality, patient-centered care in healthcare settings."
            delay={0.2}
            color="blue"
          />

          <div className="max-w-4xl mx-auto text-lg leading-relaxed text-center mb-14">
            <p>
              This program is designed for aspiring nursing assistants and
              healthcare support personnel who wish to gain practical skills,
              clinical knowledge, and professional competence. It combines
              theoretical knowledge and hands-on practice in simulated and real
              healthcare environments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Develops core patient care skills essential for safe healthcare delivery",
              "Covers anatomy, physiology, medical terminology, and infection control",
              "Combines theoretical knowledge with hands-on practice",
              "Prepares for professional certification and healthcare careers",
              "4-month program with flexible delivery options",
              "No prior healthcare experience required",
            ].map((point, index) => (
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
            subtitle="Requirements to enroll in the American Nursing Assistant Certificate program"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {entryRequirements.map((point, index) => (
              <AnimatedCard key={index} index={index} color="red">
                <div className="flex items-start">
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#4B0E1E] to-[#800020] flex items-center justify-center mr-4 mt-1"
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </motion.div>
                  <p className="text-lg">{point}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>

          {/* Program Details */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <AnimatedCard index={7} color="red">
              <h3 className="text-xl font-semibold mb-4">Duration</h3>
              <p className="text-3xl font-bold">4 Months</p>
            </AnimatedCard>

            <AnimatedCard index={8} color="red">
              <h3 className="text-xl font-semibold mb-4">Delivery Format</h3>
              <p className="text-lg">
                Instructor-led classroom sessions, online classes, and practical
                hands-on training
              </p>
            </AnimatedCard>

            <AnimatedCard index={9} color="red">
              <h3 className="text-xl font-semibold mb-4">Certification</h3>
              <p className="text-lg">
                AMCA American Nursing Assistant Certificate upon successful
                completion
              </p>
            </AnimatedCard>
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

      {/* Qualification Units Section */}
      <SectionWrapper color="blue">
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedTitle
            title="Qualification Units"
            delay={0.2}
            color="blue"
            subtitle="Certificate program with core units designed to provide comprehensive nursing assistant training"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {qualificationUnits.map((unit, index) => (
              <AnimatedCard key={index} index={index} color="blue">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#0a0f2c] to-[#1a1f3a] flex items-center justify-center mr-4 mt-1 font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold">{unit.title}</h3>
                </div>
                <p className="text-lg" style={{ height: "120px" }}>
                  {unit.description}
                </p>
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Exam Weightage</span>
                    <span className="text-sm font-bold">{unit.percentage}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#0a0f2c] to-[#1a1f3a] h-2 rounded-full"
                      style={{ width: unit.percentage }}
                    ></div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Course Objectives Section */}
      <SectionWrapper color="red">
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedTitle
            title="Course Objectives"
            delay={0.2}
            color="red"
            subtitle="What you will be able to accomplish after completing this program"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Perform essential patient care tasks with competence and confidence",
              "Apply anatomy and physiology knowledge to practical care situations",
              "Understand and implement infection control and safety procedures",
              "Demonstrate knowledge of medical terminology, pharmacology, and legal/ethical considerations",
              "Communicate effectively with patients, families, and healthcare teams",
              "Prepare for the AMCA Nursing Assistant certification exam",
            ].map((point, index) => (
              <AnimatedCard key={index} index={index} color="red">
                <div className="flex items-start">
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#4B0E1E] to-[#800020] flex items-center justify-center mr-4 mt-1"
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
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

      {/* Career Opportunities Section */}
      <SectionWrapper color="blue">
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedTitle
            title="Career Opportunities"
            delay={0.2}
            color="blue"
            subtitle="Graduates of the AMCA American Nursing Assistant Certificate program are prepared for various healthcare roles"
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
            title="Start Your Nursing Career Today"
            subtitle="Join our 4-month certification program to gain the skills needed for a rewarding career in healthcare"
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
            <button className="px-10 py-5 bg-gradient-to-r from-[#4B0E1E] to-[#800020] rounded-2xl font-semibold text-xl hover:from-[#800020] hover:to-[#4B0E1E] transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#800020]/40 mb-6">
              Request Information
            </button>
            <p className="text-lg opacity-80 mt-8">
              Our admissions team is ready to answer your questions and guide
              you through the application process.
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
    </main>
  );
};

export default AmericanNursingAssistantCourse;
