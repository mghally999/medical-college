"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

// Import components
import Overview from "@/components/Programs/Overview";
import { EntryRequirements } from "@/components/Programs/EntryRequirements";
import { QualificationStructure } from "@/components/Programs/QualificationStructure";
import AllUnits from "@/components/Programs/AllUnits";
import CourseObjectives from "@/components/Programs/CourseObjectives";
import { AssessmentVerification } from "@/components/Programs/AssessmentVerification";
import { CareerOpportunities } from "@/components/Programs/CareerOpportunities";
import { TuitionFees } from "@/components/Programs/TuitionFees";

type ProgramType = {
  professional: boolean;
  overview: string;
  entryRequirements: string;
  qualificationStructureText: string;
  qualificationUnits: string[];
  courseObjectives?: string;
  assessmentVerification: string;
  careerOpportunities: string;
};

type StickyTabsSectionProps = {
  program: ProgramType;
};

const DNAStrandIndicator = ({
  activeId,
  count,
}: {
  activeId: number;
  count: number;
}) => {
  const positions = Array.from({ length: count }, (_, i) => i);
  const { scrollYProgress } = useScroll();

  return (
    <div className="absolute left-0 top-0 h-full w-1 bg-gray-800/50">
      {positions.map((pos) => (
        <motion.div
          key={pos}
          className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 left-1/2 -translate-x-1/2"
          style={{
            top: `${(pos / (count - 1)) * 100}%`,
            scale: activeId === pos + 1 ? 1.2 : 0.8,
            opacity: activeId === pos + 1 ? 1 : 0.6,
          }}
          animate={{
            boxShadow:
              activeId === pos + 1
                ? "0 0 15px rgba(34, 211, 238, 0.7)"
                : "0 0 5px rgba(34, 211, 238, 0.3)",
          }}
        />
      ))}
      <motion.div
        className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400/30 to-blue-600/30"
        style={{
          scaleY: scrollYProgress,
        }}
      />
    </div>
  );
};

const Floating3DTab = ({
  text,
  active,
  onClick,
  index,
}: {
  text: string;
  active: boolean;
  onClick: () => void;
  index: number;
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={`relative overflow-hidden rounded-xl p-4 text-left ${
        active ? "bg-gray-900" : "bg-gray-800/50 hover:bg-gray-800"
      }`}
      whileHover={{
        y: -5,
        boxShadow: active
          ? "0 10px 25px -5px rgba(34, 211, 238, 0.4)"
          : "0 10px 25px -5px rgba(255, 255, 255, 0.1)",
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <div className="relative z-10 flex items-center gap-3">
        <motion.span
          animate={{
            opacity: active ? 1 : 0.7,
            color: active ? "#fff" : "#9CA3AF",
          }}
          className="font-medium"
        >
          {text}
        </motion.span>
        {active && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-cyan-400"
          >
            <FiChevronRight />
          </motion.span>
        )}
      </div>
      {active && (
        <motion.div
          className="absolute inset-0 border border-cyan-400/30 rounded-xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        />
      )}
      <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-800/30" />
        <div className="absolute inset-0 border border-gray-700/50 rounded-xl" />
      </div>
    </motion.button>
  );
};

const SectionContainer = ({
  id,
  title,
  children,
  active,
  index,
}: {
  id: number;
  title: string;
  children: React.ReactNode;
  active: boolean;
  index: number;
}) => {
  return (
    <motion.div
      id={`section-${id}`}
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="absolute -left-12 top-0 h-full flex items-center">
        <motion.div
          animate={{
            scale: active ? 1.2 : 1,
            opacity: active ? 1 : 0.6,
          }}
          className="w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600"
        />
      </div>

      <motion.div
        className="ml-8 rounded-2xl overflow-hidden"
        animate={{
          borderColor: active
            ? "rgba(34, 211, 238, 0.3)"
            : "rgba(55, 65, 81, 0.5)",
          boxShadow: active
            ? "0 10px 30px -10px rgba(34, 211, 238, 0.2)"
            : "0 5px 15px -5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm p-8">
          <div className="prose prose-invert max-w-none">{children}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function StickyTabsSection({ program }: StickyTabsSectionProps) {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [limitReached, setLimitReached] = useState<boolean>(false);

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const lastSectionRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { id: 1, text: "Overview" },
    { id: 2, text: "Entry Requirements" },
    { id: 3, text: "Qualification Structure" },
    { id: 4, text: "Qualification Units" },
    ...(program.professional ? [{ id: 5, text: "Course Objectives" }] : []),
    { id: 6, text: "Assessment & Verification" },
    { id: 7, text: "Career Opportunities" },
    { id: 8, text: "Tuition Fees" },
  ];

  const sections = [
    { id: 1, Component: Overview, props: { data: program.overview } },
    {
      id: 2,
      Component: EntryRequirements,
      props: { data: program.entryRequirements },
    },
    {
      id: 3,
      Component: QualificationStructure,
      props: { data: program.qualificationStructureText },
    },
    { id: 4, Component: AllUnits, props: { data: program.qualificationUnits } },
    ...(program.professional
      ? [
          {
            id: 5,
            Component: CourseObjectives,
            props: { data: program.courseObjectives },
          },
        ]
      : []),
    {
      id: 6,
      Component: AssessmentVerification,
      props: { data: program.assessmentVerification },
    },
    {
      id: 7,
      Component: CareerOpportunities,
      props: { data: program.careerOpportunities },
    },
    { id: 8, Component: TuitionFees, props: { program } },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.id.split("-")[1]);
            setActiveTab(id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-120px 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current || !sidebarRef.current || !lastSectionRef.current)
        return;

      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const sidebarHeight = sidebarRef.current.offsetHeight;
      const lastSectionRect = lastSectionRef.current.getBoundingClientRect();

      setIsSticky(wrapperRect.top <= 120);
      setLimitReached(lastSectionRect.bottom <= sidebarHeight + 90);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: number) => {
    const el = document.getElementById(`section-${id}`);
    if (el) {
      const offset = 120;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="relative">
      {/* Mobile Menu Button - Floating Action Button */}
      <motion.button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.span
          animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
          className="text-white text-2xl"
        >
          <FiChevronDown />
        </motion.span>
      </motion.button>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-950/90 backdrop-blur-sm z-40 md:hidden"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30 }}
              className="absolute bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 rounded-t-3xl p-6 pt-8"
            >
              <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Program Navigation
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {menuItems.map(({ id, text }) => (
                  <motion.button
                    key={id}
                    onClick={() => handleClick(id)}
                    className={`p-4 rounded-xl ${
                      activeTab === id
                        ? "bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30"
                        : "bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800"
                    }`}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span
                      className={`font-medium ${
                        activeTab === id ? "text-white" : "text-gray-300"
                      }`}
                    >
                      {text}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar - 3D Floating Navigation */}
          <div className="md:w-1/3 lg:w-1/4 relative">
            <motion.div
              ref={sidebarRef}
              className={`hidden md:block p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/30 shadow-xl ${
                isSticky ? "fixed top-28" : "relative"
              } ${limitReached ? "absolute bottom-0 top-auto" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Program Details
              </h3>

              <DNAStrandIndicator
                activeId={activeTab}
                count={menuItems.length}
              />

              <div className="ml-6 space-y-3">
                {menuItems.map(({ id, text }, index) => (
                  <Floating3DTab
                    key={id}
                    text={text}
                    active={activeTab === id}
                    onClick={() => handleClick(id)}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Content - Animated Sections */}
          <div className="md:w-2/3 lg:w-3/4 space-y-20">
            {sections.map(({ id, Component, props }, index) => (
              <div
                key={id}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                  if (id === 8) lastSectionRef.current = el;
                }}
              >
                <SectionContainer
                  id={id}
                  title={menuItems.find((item) => item.id === id)?.text || ""}
                  active={activeTab === id}
                  index={index}
                >
                  <Component {...(props as any)} />
                </SectionContainer>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
