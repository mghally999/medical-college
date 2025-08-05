"use client";

import aboutPagesData from "@/app/data/aboutPagesData";
import { notFound } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import React from "react";

interface AboutPageData {
  slug: string;
  title: string;
  image: string;
  content?: string[];
  list?: string[];
}

export default function Page({ params }: { params: { slug: string } }) {
  // Directly destructure params - no need for React.use() in this case
  const { slug } = params;

  const pageData = aboutPagesData.find((page) => page.slug === slug);
  if (!pageData) return notFound();

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scaleTitle = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const yTitle = useTransform(scrollYProgress, [0, 0.5], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="about-subpage custom-linear-blue-top">
      {/* Hero Section */}
      <motion.div className="hero-container" style={{ y: yBg }}>
        <Image
          src={pageData.image}
          alt={pageData.title}
          fill
          className="hero-image"
          priority
          style={{
            top: "100px",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
          }}
          unoptimized={process.env.NODE_ENV === "development"}
        />
        <motion.div className="overlay" style={{ opacity: opacityBg }} />
        <motion.h1
          className="hero-title bottom-aligned"
          style={{ scale: scaleTitle, y: yTitle }}
        >
          {pageData.title.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.h1>
      </motion.div>

      {/* Content Section */}
      <div className="content-wrapper custom-linear-white-top">
        <div className="floating-elements">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className={`floating-element element-${i}`}
              animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Dynamic paragraphs */}
        <div className="content-grid">
          {pageData.content?.map((paragraph, idx) => (
            <motion.div
              className="content-block"
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="content-indicator">{idx + 1}</div>
              <p className="content-text">{paragraph}</p>
            </motion.div>
          ))}
        </div>

        {/* Optional list */}
        {pageData.list && (
          <motion.ul
            className="interactive-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {pageData.list.map((item, idx) => (
              <motion.li
                key={idx}
                className="list-item"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="list-bullet">
                  <div className="bullet-inner" />
                </div>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>

      {/* Particle Background */}
      <div className="decorative-elements">
        <div className="particle-field">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: 0,
              }}
              animate={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: [0, 0.3, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .about-subpage {
          --primary-color: #000000;
          --text-color: #1f2937;
          --light-bg: #f9fafb;
          --dark-bg: #111827;
          position: relative;
          overflow: hidden;
          font-family: "Inter", system-ui, sans-serif;
        }

        .custom-linear-blue-top {
          background: linear-gradient(
            360deg,
            rgb(255, 255, 255) 0%,
            rgb(240, 248, 255) 25%,
            rgb(219, 234, 254) 50%,
            rgb(180, 210, 255) 75%,
            rgb(134, 179, 247) 100%
          ) !important;
        }

        .custom-linear-white-top {
          background: linear-gradient(
            180deg,
            rgb(255, 255, 255) 0%,
            rgb(240, 248, 255) 25%,
            rgb(219, 234, 254) 50%,
            rgb(180, 210, 255) 75%,
            rgb(134, 179, 247) 100%
          ) !important;
        }

        .hero-container {
          position: relative;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-image {
          object-fit: cover;
          object-position: center;
          will-change: transform;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0.8) 100%
          );
          z-index: 1;
        }

        .hero-title {
          position: absolute;
          bottom: 60px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          color: white;
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: 900;
          text-align: center;
          line-height: 1.2;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          max-width: 90%;
          will-change: transform;
          display: inline-block;
          padding: 0 20px;
        }

        .content-wrapper {
          position: relative;
          margin: 0 auto;
          padding: 100px 40px;
          border-radius: 40px 40px 0 0;
          margin-top: -40px;
          z-index: 3;
          box-shadow: 0 -20px 50px rgba(0, 0, 0, 0.1);
        }

        .floating-elements {
          position: absolute;
          top: -100px;
          left: 0;
          right: 0;
          height: 200px;
          pointer-events: none;
        }

        .floating-element {
          position: absolute;
          border-radius: 50%;
          filter: blur(30px);
          opacity: 0.7;
        }

        .element-1 {
          width: 200px;
          height: 200px;
          top: 50px;
          left: 10%;
        }

        .element-2 {
          width: 300px;
          height: 300px;
          background: var(--secondary-color);
          top: -50px;
          right: 15%;
        }

        .element-3 {
          width: 150px;
          height: 150px;
          background: var(--accent-color);
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        .content-grid {
          display: grid;
          gap: 40px;
        }

        .content-block {
          position: relative;
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
          z-index: 2;
        }

        .content-block:hover {
          transform: translateY(-5px);
        }

        .content-indicator {
          position: absolute;
          top: -20px;
          left: 40px;
          width: 40px;
          height: 40px;
          background: var(--primary-color);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 18px;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
        }

        .content-text {
          font-size: 18px;
          line-height: 1.8;
          color: var(--text-color);
          margin: 0;
        }

        .interactive-list {
          margin-top: 60px;
          padding: 0;
          list-style: none;
        }

        .list-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 25px 30px;
          background: white;
          border-radius: 15px;
          margin-bottom: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .list-item:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .list-bullet {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            var(--primary-color),
            var(--secondary-color)
          );
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .bullet-inner {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: white;
          position: relative;
          z-index: 2;
        }

        .list-item span {
          font-size: 17px;
          line-height: 1.6;
          color: var(--text-color);
        }

        .particle-field {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
        }

        .particle {
          position: absolute;
          background: linear-gradient(
            135deg,
            var(--primary-color),
            var(--secondary-color)
          );
          border-radius: 50%;
          width: 5px;
          height: 5px;
          opacity: 0;
        }

        @media (max-width: 768px) {
          .content-wrapper {
            padding: 60px 20px;
            border-radius: 30px 30px 0 0;
            margin-top: -30px;
          }

          .content-block {
            padding: 30px 20px;
          }

          .list-item {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}
