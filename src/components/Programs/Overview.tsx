"use client";

import React from "react";
import { motion } from "framer-motion";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface OverviewProps {
  data: string[]; // expects an array of paragraph strings
}

export default function Overview({ data }: OverviewProps) {
  if (!Array.isArray(data)) return null;

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #000C2D 0%, #001E6C 100%)",
        padding: "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 80px)",
        borderBottom: "6px solid #E05500",
        color: "#ffffff",
        position: "relative",
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

        {/* Overview Items */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            marginTop: "60px",
          }}
        >
          {data.map((text: string, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: "#FFFFFF10",
                border: "1px solid #FFFFFF22",
                borderRadius: "12px",
                padding: "20px 24px",
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  backgroundColor: "#E05500",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  flexShrink: 0,
                  marginTop: "4px",
                }}
              >
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "1.7",
                  color: "#F5F5F5",
                }}
              >
                {text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
