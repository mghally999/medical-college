"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { FiArrowRight, FiHome } from "react-icons/fi";
import { motion } from "framer-motion";

import StickyTabsSection from "@/components/StickyTabsSection";
import ModalVideoComponent from "../../../components/Common/ModalVideo";
import ProgramHighlightsBox from "../../../components/Common/ProgramHighlightsBox";
import ApplicationFormModal from "../../../components/Common/ApplicationFormModal";

import allPrograms from "../../data/allPrograms";

export default function ProgramPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [pageItem, setPageItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      setIsLoading(false);
      return;
    }

    // Normalize the slug array to always have 3 elements
    const normalizedSlug = Array.isArray(slug) ? [...slug] : [slug];
    while (normalizedSlug.length < 3) normalizedSlug.push("");

    const [category, level1, level2] = normalizedSlug;
    const levelSlug = level2 ? `${level1}/${level2}` : level1;

    const program = allPrograms.find((item) => {
      // Normalize both the item level and the slug level for comparison
      const normalizedItemLevel = item.level
        ?.toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");

      const normalizedSlugLevel = levelSlug
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");

      return (
        item.category.toLowerCase() === category.toLowerCase() &&
        normalizedItemLevel === normalizedSlugLevel
      );
    });

    setPageItem(program || null);
    setIsLoading(false);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!pageItem) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            We Can't Seem to Find The Page You're Looking For.
          </h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for does not exist. It might have been
            moved or deleted.
          </p>
          <button
            onClick={() => router.push("/")}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 mx-auto"
          >
            <FiHome className="text-lg" />
            Go To Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header Section */}
      <section
        className="page-header -type-5 bg-dark-1 layout-pb-lg custom-padding custom-linear-blue-top"
        style={{
          width: "100%",
          padding: "60px 5vw",
          background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7))",
          position: "relative",
        }}
      >
        <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Left Content */}
            <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
              <h1
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: "1rem",
                  lineHeight: 1.3,
                }}
              >
                {pageItem.title}
              </h1>

              {/* Accreditation Logos */}
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  marginTop: "2rem",
                }}
              >
                {pageItem.professional ? (
                  <div
                    style={{
                      background: "white",
                      borderRadius: "10px",
                      padding: "1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      width: "200px",
                      height: "100px",
                    }}
                  >
                    <Image
                      src="/assets/img/logos/KHDA-logo.png"
                      alt="KHDA Accredited"
                      width={180}
                      height={80}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      background: "white",
                      borderRadius: "10px",
                      padding: "1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      width: "200px",
                      height: "100px",
                    }}
                  >
                    <Image
                      src="/assets/img/logos/OTHM-logo.png"
                      alt="OTHM Accredited"
                      width={180}
                      height={80}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                )}
              </div>

              {/* Apply Now Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                style={{ marginTop: "2.5rem" }}
              >
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#111111",
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    backgroundColor: "#04044e",
                    color: "white",
                    padding: "1rem 2.5rem",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.5)",
                    transition: "all 0.3s ease",
                  }}
                >
                  Apply Now
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <FiArrowRight style={{ fontSize: "1.25rem" }} />
                  </motion.span>
                </motion.button>
              </motion.div>
            </div>

            {/* Right Image */}
            <div
              style={{
                flex: "1 1 45%",
                minWidth: "300px",
                position: "relative",
                aspectRatio: "16/9",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            >
              <Image
                fill
                src={pageItem.imageSrc}
                alt={`${pageItem.title} Image`}
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>

          {/* FULL-WIDTH Highlights Box */}
          <div style={{ width: "100%", marginTop: "3rem" }}>
            <ProgramHighlightsBox data={pageItem} layout="horizontal" />
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <div style={{ width: "100%", padding: "0 5vw" }}>
        <StickyTabsSection program={pageItem} />
      </div>

      {/* Video Modal */}
      <ModalVideoComponent
        videoId="LlCwHnp3kL4"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {/* Application Form Modal */}
      <ApplicationFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
