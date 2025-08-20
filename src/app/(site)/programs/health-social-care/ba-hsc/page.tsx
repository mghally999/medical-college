"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const BAHealthSocialCareCourse = () => {
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
      title:
        "Promoting Equality, Diversity and Inclusion in Health and Social Care",
      description:
        "Develop a deep understanding of equality, diversity, and inclusion principles in health and social care settings.",
    },
    {
      title: "Professional Development and Academic Writing Skills",
      description:
        "Enhance professional development and academic writing skills for effective practice and communication.",
    },
    {
      title: "Communication in the Caring Professions",
      description:
        "Master professional communication skills essential for effective practice in caring professions.",
    },
    {
      title: "Principles of Health and Safety for Health Professions",
      description:
        "Understand and implement health and safety principles in healthcare environments.",
    },
    {
      title: "Assessment Processes in Health and Social Care Settings",
      description:
        "Learn comprehensive assessment processes used in health and social care settings.",
    },
    {
      title: "Resource Management in Health and Social Care",
      description:
        "Develop skills in resource management and optimization in healthcare environments.",
    },
    {
      title: "Personal and Professional Development in Health and Social Care",
      description:
        "Focus on personal and professional growth for advanced roles in health and social care.",
    },
    {
      title: "Managing Quality in Health and Social Care Settings",
      description:
        "Learn quality management principles and practices for healthcare settings.",
    },
    {
      title: "Principles of Leadership and Management",
      description:
        "Develop leadership and management skills for health and social care environments.",
    },
    {
      title: "Health and Safety in Health and Social Care Settings",
      description:
        "Advanced study of health and safety practices in care settings.",
    },
    {
      title: "Research Methods for Healthcare Professionals",
      description:
        "Gain research literacy and academic skills to support evidence-based practice.",
    },
  ];

  const entryRequirements = [
    "Completion of a relevant Level 5 or Level 6 qualification in health, social care, or a related field",
    "English Language Proficiency: IELTS 6.0 (or equivalent) for international students",
    "Basic understanding of healthcare and social care principles is desirable",
    "Professional experience in health or social care settings is advantageous but not mandatory",
  ];

  const careerOpportunities = [
    "Health and Social Care Manager",
    "Community Health Coordinator",
    "Policy and Research Officer",
    "Clinical and Care Team Leader",
    "Public Health Specialist",
    "Health and Safety Officer",
    "Nursing and Allied Health Professions Leadership Roles",
    "Academic or Training Roles in Health and Social Care",
  ];

  const programHighlights = [
    "Develops deep understanding of equality, diversity, and inclusion",
    "Enhances communication, leadership, and professional development skills",
    "Focuses on health, safety, and quality management in healthcare",
    "Provides research literacy for evidence-based practice",
    "Prepares for management, policy-making, and advanced professional roles",
    "Internationally recognized BA Hons degree",
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
            BA Hons Health &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#ffffff]">
              Social Care
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block mb-8"
          >
            <div className="text-2xl md:text-3xl font-semibold px-6 py-3 bg-gradient-to-r from-[#0a0f2c]/30 to-[#4B0E1E]/30 rounded-xl border border-white/20 backdrop-blur-md">
              Bachelor of Arts in Health & Social Care Degree Program
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-3xl mx-auto text-xl md:text-2xl opacity-90 mb-10"
          >
            Equip yourself with advanced knowledge, skills, and competencies to
            excel in the dynamic health and social care sector.
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
            subtitle="The BA Hons Health & Social Care program is designed to equip students with advanced knowledge, skills, and competencies to excel in the dynamic health and social care sector."
            delay={0.2}
            color="blue"
          />

          <div className="max-w-4xl mx-auto text-lg leading-relaxed text-center mb-14">
            <p>
              This comprehensive degree program develops a deep understanding of
              equality, diversity, and inclusion in health and social care
              settings, enhances communication and leadership skills, and
              focuses on health, safety, and quality management practices.
              Graduates are prepared for management, policy-making, and advanced
              professional roles within the sector.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programHighlights.map((point, index) => (
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
            subtitle="Requirements to enroll in the BA Hons Health & Social Care program"
          />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
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
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard index={4} color="red">
              <h3 className="text-xl font-semibold mb-4">Total Credits</h3>
              <p className="text-3xl font-bold">360</p>
              <p className="text-sm mt-2">Each unit: 20 credits</p>
            </AnimatedCard>

            <AnimatedCard index={5} color="red">
              <h3 className="text-xl font-semibold mb-4">Duration</h3>
              <p className="text-2xl font-bold">3 years (full-time)</p>
              <p className="text-sm mt-2">
                Flexible part-time options available
              </p>
            </AnimatedCard>

            <AnimatedCard index={6} color="red">
              <h3 className="text-xl font-semibold mb-4">Certification</h3>
              <p className="text-lg">
                BA Hons Health & Social Care degree, recognized internationally
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
            subtitle="Comprehensive curriculum designed to develop advanced knowledge and skills in health and social care"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {qualificationUnits.map((unit, index) => (
              <AnimatedCard key={index} index={index} color="blue">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#0a0f2c] to-[#1a1f3a] flex items-center justify-center mr-4 mt-1 font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold">{unit.title}</h3>
                </div>
                <p className="text-lg">{unit.description}</p>
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
            subtitle="What you will be able to accomplish after completing this degree program"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Apply equality, diversity, and inclusion principles in healthcare practice",
              "Demonstrate professional communication and leadership skills",
              "Understand and implement health, safety, and quality management practices",
              "Conduct research and apply evidence-based approaches to practice",
              "Manage resources effectively in health and social care settings",
              "Develop a professional portfolio demonstrating personal and professional growth",
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

      {/* Assessment Section */}
      <SectionWrapper color="blue">
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedTitle
            title="Assessment and Verification"
            delay={0.2}
            color="blue"
            subtitle="Comprehensive evaluation methods to ensure mastery of program content"
          />

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <AnimatedCard index={0} color="blue">
              <h3 className="text-xl font-semibold mb-4">Assessment Methods</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Written assignments</li>
                <li>Case studies</li>
                <li>Presentations</li>
                <li>Reflective journals</li>
                <li>Practical evaluations</li>
                <li>Research project or dissertation (final year)</li>
              </ul>
            </AnimatedCard>

            <AnimatedCard index={1} color="blue">
              <h3 className="text-xl font-semibold mb-4">Program Features</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Formal assessment for each unit</li>
                <li>Internationally recognized degree</li>
                <li>Research-focused final year project</li>
                <li>Evidence-based practice approach</li>
                <li>Professional portfolio development</li>
                <li>Preparation for advanced roles</li>
              </ul>
            </AnimatedCard>
          </div>
        </div>
      </SectionWrapper>

      {/* Career Opportunities Section */}
      <SectionWrapper color="red">
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedTitle
            title="Career Opportunities"
            delay={0.2}
            color="red"
            subtitle="Graduates of the BA Hons Health & Social Care program are prepared for advanced roles in the healthcare sector"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {careerOpportunities.map((point, index) => (
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
      <SectionWrapper color="blue">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedTitle
            title="Start Your Advanced Healthcare Career"
            subtitle="Join our internationally recognized BA Hons program to gain the advanced skills needed for leadership roles in health and social care"
            delay={0.2}
            color="blue"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <button className="px-10 py-5 bg-gradient-to-r from-[#0a0f2c] to-[#4B0E1E] rounded-2xl font-semibold text-xl hover:from-[#1a1f3a] hover:to-[#800020] transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#4B0E1E]/40 mb-6">
              Request Information
            </button>
            <p className="text-lg opacity-80 mt-8">
              Our admissions team is ready to answer your questions and guide
              you through the application process for this advanced degree
              program.
            </p>
          </motion.div>
        </div>

        {/* Animated shape decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute left-1/2 bottom-20 w-96 h-96 rounded-full bg-gradient-to-r from-[#0a0f2c] to-[#1a1f3a] blur-3xl"
          style={{ x: "-50%" }}
        />
      </SectionWrapper>
    </main>
  );
};

export default BAHealthSocialCareCourse;
