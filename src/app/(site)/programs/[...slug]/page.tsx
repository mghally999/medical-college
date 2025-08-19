"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import {
  FaGraduationCap,
  FaBookOpen,
  FaChartLine,
  FaCertificate,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

import StickyTabsSection from "@/components/Common/StickyTabsSection";
import ModalVideoComponent from "@/components/Common/ModalVideo";
import ProgramHighlightsBox from "@/components/Common/ProgramHighlightsBox";
import ApplicationFormModal from "@/components/Common/ApplicationFormModal";
import allPrograms from "@/app/data/allPrograms";

type ProgramType = {
  id: string;
  title: string;
  imageSrc: string;
  professional: boolean;
  category: string;
  level: string;
  href: string;
  duration: string;
  deliveryMode: string;
  price: string;
  overview: string;
  entryRequirements: string;
  qualificationStructureText: string;
  qualificationUnits: string[];
  faqs: { question: string; answer: string }[];
  layout?: string;
  [key: string]: any;
};

const FloatingAccentOrbs = () => {
  return (
    <>
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${100 + Math.random() * 200}px`,
            height: `${100 + Math.random() * 200}px`,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(${
              Math.random() > 0.5 ? "63,94,251" : "252,70,107"
            },0.2) 0%, rgba(255,255,255,0) 70%)`,
            pointerEvents: "none",
          }}
        />
      ))}
    </>
  );
};

const HolographicCard = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm shadow-2xl"
      style={
        {
          "--mouse-x": `${mousePosition.x}px`,
          "--mouse-y": `${mousePosition.y}px`,
        } as React.CSSProperties
      }
    >
      {children}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[300px] h-[300px] rounded-full opacity-20 blur-xl"
          style={{
            left: `calc(var(--mouse-x, 0px) - 150px)`,
            top: `calc(var(--mouse-y, 0px) - 150px)`,
            background: `radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(0,0,0,0) 70%)`,
          }}
        />
      </div>
      <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none" />
    </div>
  );
};

const InteractiveBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute inset-0 opacity-20">
        <svg
          width="100%"
          height="100%"
          className="text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="1,1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      <FloatingAccentOrbs />
    </div>
  );
};

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0.8, 0.9], [1, 0]);

  return (
    <motion.div
      className="fixed right-8 bottom-8 z-50 flex flex-col items-center"
      style={{ opacity }}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        className="transform -rotate-90"
      >
        <motion.circle
          cx="25"
          cy="25"
          r="20"
          fill="transparent"
          stroke="#ffffff"
          strokeWidth="2"
          strokeDasharray="125.6"
          strokeDashoffset="125.6"
          style={{ pathLength }}
        />
      </svg>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="mt-2 text-white"
      >
        <FiChevronDown size={20} />
      </motion.div>
    </motion.div>
  );
};

const Floating3DInfoCards = ({ program }: { program: ProgramType }) => {
  const cards = [
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Level",
      value: program.level,
      color: "from-purple-600 to-indigo-600",
    },
    {
      icon: <FaBookOpen className="text-3xl" />,
      title: "Duration",
      value: program.duration,
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Delivery",
      value: program.deliveryMode,
      color: "from-green-600 to-teal-600",
    },
    {
      icon: <FaCertificate className="text-3xl" />,
      title: "Price",
      value: program.price,
      color: "from-amber-600 to-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 -mt-20 relative z-20">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
        >
          <HolographicCard>
            <div
              className="p-6 flex flex-col items-center text-center"
              style={{
                height: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className={`mb-4 p-3 rounded-full bg-gradient-to-br ${card.color} text-white`}
              >
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-200 mb-1">
                {card.title}
              </h3>
              <p className="text-xl font-bold text-white">{card.value}</p>
            </div>
          </HolographicCard>
        </motion.div>
      ))}
    </div>
  );
};

export default function ProgramPage(): JSX.Element {
  const { slug } = useParams() as { slug?: string[] };
  const [pageItem, setPageItem] = useState<ProgramType | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heroInView, setHeroInView] = useState(true);
  const { ref: heroRef, inView: isHeroInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    setHeroInView(isHeroInView);
  }, [isHeroInView]);

  useEffect(() => {
    if (slug && Array.isArray(slug)) {
      const path = "/programs/" + slug.join("/").toLowerCase();
      const program = allPrograms.find(
        (item) => item.href?.toLowerCase() === path
      );
      setPageItem((program as any) || null);
    }
  }, [slug]);

  if (!pageItem) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-lg font-semibold">
        Program not found.
      </div>
    );
  }

  return (
    <div className="relative">
      <InteractiveBackground />
      <ScrollIndicator />

      {/* Hero Section - Futuristic Holographic Display */}
      <section
        ref={heroRef}
        className="relative w-full h-screen overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-900/70 to-gray-950/90 z-0" />
        <Image
          src={pageItem.imageSrc}
          alt={pageItem.title}
          fill
          className="object-cover object-center opacity-30 z-0"
          priority
        />

        {/* Holographic Grid Effect */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="h-full w-full pattern-grid-lg text-gray-800" />
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.h1
              className="text-white text-5xl md:text-7xl font-bold mb-6"
              style={{
                textShadow: "0 0 10px rgba(255,255,255,0.3)",
              }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                {pageItem.title}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              {pageItem.category} • {pageItem.level} • {pageItem.duration}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-6 flex-wrap items-center justify-center"
          >
            <HolographicCard>
              <div className="p-4">
                <Image
                  src={
                    pageItem.professional
                      ? "/assets/img/logos/KHDA-logo.png"
                      : "/assets/img/logos/OTHM-logo.png"
                  }
                  alt="Accredited Logo"
                  width={180}
                  height={80}
                  className="object-contain"
                  priority
                />
              </div>
            </HolographicCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12"
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl flex items-center gap-3 group"
            >
              <span className="relative z-10">Apply Now</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative z-10"
              >
                <FiArrowRight size={20} />
              </motion.span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-0 right-0 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiChevronDown className="text-white text-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating 3D Info Cards */}
      <Floating3DInfoCards program={pageItem} />

      {/* Highlights - Interactive Holographic Display */}
      <section className="relative py-28 px-6">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/0 via-gray-900/30 to-gray-950/0" />
          <div className="absolute inset-0 opacity-10 pattern-dots-lg text-gray-700" />
        </div>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <HolographicCard>
              <div className="p-8 md:p-12">
                <ProgramHighlightsBox data={pageItem} />
              </div>
            </HolographicCard>
          </motion.div>
        </div>
      </section>

      {/* Sticky Tabs - Futuristic Interactive Interface */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <StickyTabsSection program={pageItem as any} />
          </motion.div>
        </div>
      </section>

      {/* Floating CTA */}
      {!heroInView && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 left-0 right-0 flex justify-center z-50 px-6"
        >
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg shadow-xl flex items-center gap-2"
          >
            <span>Apply for {pageItem.title}</span>
            <FiArrowRight />
          </motion.button>
        </motion.div>
      )}

      {/* Video Modal */}
      <ModalVideoComponent
        videoId="LlCwHnp3kL4"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {/* Application Form */}
      <ApplicationFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
