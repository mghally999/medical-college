"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

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

export default function ProgramPage(): JSX.Element {
  const { slug } = useParams() as { slug?: string[] };
  const [pageItem, setPageItem] = useState<ProgramType | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (slug && Array.isArray(slug)) {
      const path = "/programs/" + slug.join("/").toLowerCase();

      const program = allPrograms.find(
        (item) => item.href?.toLowerCase() === path
      );

      if (program) {
        setPageItem(program as any);
      } else {
        setPageItem(null);
      }
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
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden bg-black">
        <Image
          src={pageItem.imageSrc}
          alt={pageItem.title}
          fill
          className="object-cover object-center opacity-50"
          priority
        />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-5xl font-bold mb-6 drop-shadow-xl"
          >
            {pageItem.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex gap-6 flex-wrap items-center justify-center"
          >
            <div className="bg-white rounded-xl p-4 shadow-lg w-[200px] h-[100px] flex items-center justify-center">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8"
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#111111",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-900 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg flex items-center gap-3"
              style={{
                // Fix for the hover type error
                transition: "all 0.3s ease",
              }}
            >
              Apply Now
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FiArrowRight size={20} />
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto">
          <ProgramHighlightsBox data={pageItem} />
        </div>
      </section>

      {/* Sticky Tabs */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <StickyTabsSection program={pageItem as any} />
        </div>
      </section>

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
    </>
  );
}
