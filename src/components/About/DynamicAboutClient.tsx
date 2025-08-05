"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface PageData {
  slug: string;
  title: string;
  image: string;
  content?: string[];
  list?: string[];
}

export default function DynamicAboutClient({
  pageData,
}: {
  pageData: PageData;
}) {
  const containerRef = useRef(null);

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
              animate={{
                y: [0, 15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {pageData.content && (
          <div className="content-grid">
            {pageData.content.map((paragraph, idx) => (
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
        )}

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
                transition: {
                  staggerChildren: 0.1,
                },
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

      {/* Decorative Particles */}
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
    </div>
  );
}
