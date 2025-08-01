"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const highlights: string[] = [
  "Internationally recognized qualifications",
  "Expert industry-experienced faculty",
  "Scholarships and flexible payment plans",
  "Hands-on training + internships",
  "Student accommodation available",
  "Located in vibrant Dubai Academic City",
];

const ProgramIntro: React.FC = () => {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #000C2D 0%, #001E6C 100%)",
        padding: "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 80px)",
        color: "#FFFFFF",
        borderBottom: "6px solid #E05500",
      }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 800,
            marginBottom: "30px",
            textAlign: "center",
            position: "relative",
            color: "#ffffff",
          }}
        >
          Comprehensive Overview
          <span
            style={{
              position: "absolute",
              bottom: "-16px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              backgroundColor: "#E05500",
              borderRadius: "2px",
            }}
          />
        </motion.h2>

        {/* Subtext */}
        <p
          style={{
            fontSize: "clamp(16px, 2.2vw, 20px)",
            textAlign: "center",
            color: "#F5F5F5",
            marginBottom: "60px",
            maxWidth: "760px",
            marginInline: "auto",
          }}
        >
          A modern learning hub in the heart of Dubai — offering internationally
          accredited programs, expert faculty, and future-ready skills for the
          next generation of leaders.
        </p>

        {/* Key Highlights */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "32px",
          }}
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: "#FFFFFF10",
                border: "1px solid #FFFFFF22",
                borderRadius: "12px",
                padding: "24px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <FiCheckCircle size={24} color="#E05500" />
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "1.5",
                  color: "#F5F5F5",
                }}
              >
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramIntro;
