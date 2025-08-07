"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

interface EntryRequirementsProps {
  data: string[];
}

export const EntryRequirements: React.FC<EntryRequirementsProps> = ({
  data,
}) => {
  if (!Array.isArray(data) || data.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        background: "linear-gradient(135deg, #000C2D 0%, #001E6C 100%)",
        padding: "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 80px)",
        borderTop: "6px solid #E05500",
        borderBottom: "6px solid #E05500",
        color: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "50px",
            textAlign: "center",
            position: "relative",
          }}
        >
          Entry Requirements
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

        {/* Requirements Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginTop: "20px",
          }}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
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
                  lineHeight: "1.6",
                  color: "#F5F5F5",
                }}
              >
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
