"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const RegisteredNursingBSN = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const overviewPoints = [
    "Designed for registered nurses (RNs) looking to advance their education and earn a Bachelor of Science in Nursing (BSN).",
    "Focuses on enhancing clinical, leadership, and critical thinking skills for modern healthcare settings.",
    "Provides knowledge in evidence-based practice, patient care technology, community health, and healthcare policy.",
    "Prepares nurses for management, leadership roles, and specialized nursing areas.",
    "Flexible learning options to accommodate working professionals, including online and blended formats.",
    "Emphasizes professional development, research literacy, and lifelong learning in nursing.",
  ];

  const units = [
    {
      level: 4,
      name: "Fundamental Nursing Skills and Professional Practice",
      glh: 100,
      tqt: 200,
    },
    { level: 4, name: "Health, Illness and Society", glh: 150, tqt: 250 },
    {
      level: 4,
      name: "Professional Development and Academic Writing",
      glh: 100,
      tqt: 200,
    },
    {
      level: 4,
      name: "Introduction to Evidence-Based Practice",
      glh: 100,
      tqt: 200,
    },
    {
      level: 5,
      name: "Caring for Individuals with Long-Term Conditions",
      glh: 150,
      tqt: 250,
    },
    {
      level: 5,
      name: "Applied Pathophysiology and Pharmacology",
      glh: 150,
      tqt: 250,
    },
    {
      level: 5,
      name: "Caring for Adults with Acute Illness",
      glh: 150,
      tqt: 250,
    },
    {
      level: 5,
      name: "Public Health and Community Nursing",
      glh: 160,
      tqt: 260,
    },
    {
      level: 6,
      name: "Evidence-Based Practice and Research",
      glh: 150,
      tqt: 250,
    },
    { level: 6, name: "Nursing Leadership & Management", glh: 160, tqt: 260 },
    { level: 6, name: "Care of the Older Person", glh: 150, tqt: 250 },
    { level: 6, name: "Final Clinical Internship", glh: 400, tqt: 600 },
  ];

  const assessments = [
    "Formative quizzes and assignments throughout each unit to support learning.",
    "Summative exams and project submissions where applicable.",
    "Practical internship assessed through continuous evaluation and submission of reflective logs.",
    "Overall assessment of the program components will be graded as Pass or Fail.",
    "Timely feedback provided to help students improve and succeed.",
  ];

  const internshipPoints = [
    "Conducted in accredited hospital settings under supervision, totaling approximately 400 hours.",
    "Apply theoretical knowledge in real clinical practice.",
    "Develop essential nursing skills across different departments.",
    "Complete reflective logs and clinical performance evaluations.",
    "Demonstrate professional conduct, safety, and ethical practice.",
  ];

  const careerPoints = [
    "Registered Nurse (BSN-prepared) in hospitals, clinics, and community health settings",
    "Nurse Manager or Supervisor overseeing clinical teams",
    "Clinical Nurse Specialist in specialized areas such as pediatrics, geriatrics, or critical care",
    "Public Health Nurse contributing to community health initiatives",
    "Nurse Educator in academic or training environments",
    "Healthcare Policy or Administration Roles in hospitals, NGOs, or government health departments",
    "Research Nurse participating in clinical trials and evidence-based studies",
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
            Registered Nursing -{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#ffffff]">
              Bachelor's of Science Nursing
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block mb-8"
          >
            {/* <div className="text-2xl md:text-3xl font-semibold px-6 py-3 bg-gradient-to-r from-[#0a0f2c]/30 to-[#4B0E1E]/30 rounded-xl border border-white/20 backdrop-blur-md">
              Level 6 Qualification
            </div> */}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-3xl mx-auto text-xl md:text-2xl opacity-90 mb-10"
          >
            Advance your career with leadership, clinical expertise, and
            evidence-based nursing education.
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
            subtitle="Our RN to BSN program empowers registered nurses to take the next step in their careers through advanced education, leadership development, and evidence-based practice."
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
            <AnimatedCard index={1} color="red">
              <h4 className="text-xl font-semibold mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  1
                </span>
                Current RN License
              </h4>
              <p>Must hold an active registered nurse license</p>
            </AnimatedCard>

            <AnimatedCard index={2} color="red">
              <h4 className="text-xl font-semibold mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  2
                </span>
                Diploma or ADN
              </h4>
              <p>Nursing diploma or Associate Degree in Nursing</p>
            </AnimatedCard>

            <AnimatedCard
              index={0}
              className="md:col-span-2 text-center"
              color="red"
            >
              <h3 className="text-2xl font-semibold mb-3">IELTS Minimum 6.0</h3>
              <p className="opacity-90">Or OET with a Grade C</p>
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
            subtitle={undefined}
          />

          <div className="overflow-x-auto rounded-xl border border-white/20 backdrop-blur-md bg-white/5">
            <motion.table
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full border-collapse"
            >
              <thead>
                <tr className="bg-white/10">
                  <th className="py-4 px-6 text-left font-semibold">Level</th>
                  <th className="py-4 px-6 text-left font-semibold">
                    Unit Name
                  </th>
                  <th className="py-4 px-6 text-center font-semibold">GLH</th>
                  <th className="py-4 px-6 text-center font-semibold">TQT</th>
                </tr>
              </thead>
              <tbody>
                {units.map((unit, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="border-b border-white/10 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-6 text-center font-medium">
                      {unit.level}
                    </td>
                    <td className="py-4 px-6">{unit.name}</td>
                    <td className="py-4 px-6 text-center">{unit.glh}</td>
                    <td className="py-4 px-6 text-center">{unit.tqt}</td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        </div>
      </SectionWrapper>

      {/* Assessment Section */}
      <SectionWrapper color="red">
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedTitle
            title="Assessment & Feedback Mechanisms"
            delay={0.2}
            color="red"
            subtitle={undefined}
          />

          <div className="grid md:grid-cols-2 gap-8">
            {assessments.map((point, index) => (
              <AnimatedCard key={index} index={index} color="red">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#4B0E1E] to-[#800020] flex items-center justify-center mr-4 mt-1 font-bold">
                    {index + 1}
                  </div>
                  <p className="text-lg">{point}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Practical Internship Section */}
      <SectionWrapper color="blue">
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedTitle
            title="Practical Internship"
            delay={0.2}
            color="blue"
            subtitle={undefined}
          />

          <div className="grid md:grid-cols-2 gap-8">
            {internshipPoints.map((point, index) => (
              <AnimatedCard key={index} index={index} color="blue">
                <div className="flex items-start">
                  <motion.div
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#0a0f2c] to-[#1a1f3a] flex items-center justify-center mr-4 mt-1 text-white font-bold text-lg"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {index + 1}
                  </motion.div>
                  <p className="text-lg">{point}</p>
                </div>
              </AnimatedCard>
            ))}
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
            subtitle={undefined}
          />

          <div className="grid md:grid-cols-2 gap-8">
            {careerPoints.map((point, index) => (
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

      {/* Programme Delivery Section */}
      <SectionWrapper color="blue">
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedTitle
            title="Programme Delivery"
            delay={0.2}
            color="blue"
            subtitle={undefined}
          />

          <div className="max-w-4xl mx-auto text-lg leading-relaxed text-center mb-14">
            <p>
              The RN to BSN programme is designed with flexibility to support
              working professionals. Students can choose between full-time and
              part-time modes, with options for online, blended, and in-person
              delivery depending on their needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Blended learning with online modules, workshops, and in-class sessions.",
              "Self-paced e-learning materials accessible anytime.",
              "Scheduled live tutorials and seminars for deeper interaction.",
              "Clinical placements and practical training arranged with partner hospitals.",
              "Support services including academic advising, mentoring, and career guidance.",
              "Regular feedback sessions to monitor progress and ensure success.",
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
      </SectionWrapper>

      {/* Grading of Units Section */}
      <SectionWrapper color="red">
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedTitle
            title="Grading of Units"
            delay={0.2}
            color="red"
            subtitle={undefined}
          />

          <div className="max-w-4xl mx-auto text-lg leading-relaxed text-center">
            <p>
              Assessment is based on a combination of written assignments,
              exams, presentations, and practical evaluations. All components
              are graded on a <strong>Pass/Fail</strong> basis in line with UK
              university standards.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Programme-Specific Resources Section */}
      <SectionWrapper color="blue">
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedTitle
            title="Programme-Specific Resources"
            delay={0.2}
            color="blue"
            subtitle={undefined}
          />

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard index={0} color="blue">
              <h3 className="text-xl font-bold mb-3">
                Nursing Simulation Labs
              </h3>
              <p className="opacity-90">
                Provide a controlled, realistic environment to practice and
                refine essential clinical and decision-making skills safely.
              </p>
            </AnimatedCard>

            <AnimatedCard index={1} color="blue">
              <h3 className="text-xl font-bold mb-3">
                Online Databases & Journals
              </h3>
              <p className="opacity-90">
                Offer access to the latest nursing and healthcare research,
                supporting evidence-based learning and academic study.
              </p>
            </AnimatedCard>

            <AnimatedCard index={2} color="blue">
              <h3 className="text-xl font-bold mb-3">
                Clinical Guidelines & Protocols
              </h3>
              <p className="opacity-90">
                Ensure students understand current standards, procedures, and
                best practices in professional nursing care.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA Section */}
      <SectionWrapper color="blue">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedTitle
            title="Start Your Journey Today"
            subtitle="Take the next step in your nursing career with our comprehensive RN to BSN program"
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
          className="absolute left-1/2 bottom-20 w-96 h-96 rounded-full bg-gradient-to-r from-[#0a0f2c] to-[#1a1f3a] blur-3xl"
          style={{ x: "-50%" }}
        />
      </SectionWrapper>
    </main>
  );
};

export default RegisteredNursingBSN;
