"use client";

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

type UniversityProgressionProps = {
  data?: string[];
  description?: string;
};

export const UniversityProgression: React.FC<UniversityProgressionProps> = ({
  data = [],
  description = "",
}) => {
  const hasList = Array.isArray(data) && data.length > 0;
  const hasDescription =
    typeof description === "string" && description.trim() !== "";

  if (!hasList && !hasDescription) return null;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      style={{
        background: "linear-gradient(135deg, #000C2D 0%, #001E6C 100%)",
        padding: "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 80px)",
        borderTop: "6px solid #E05500",
        borderBottom: "6px solid #E05500",
        color: "#ffffff",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: 800,
          color: "#ffffff",
          marginBottom: "50px",
          textAlign: "center",
          position: "relative",
        }}
      >
        University Progression
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
      </h2>

      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        {hasDescription && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#F5F5F5",
              lineHeight: 1.8,
              marginBottom: "30px",
              padding: "24px",
              background: "#FFFFFF10",
              border: "1px solid #FFFFFF22",
              borderRadius: "12px",
            }}
          >
            {description}
          </motion.p>
        )}

        {hasList && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              marginTop: "30px",
            }}
          >
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  background: "#FFFFFF10",
                  border: "1px solid #FFFFFF22",
                  padding: "20px 24px",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    backgroundColor: "#E05500",
                    color: "#ffffff",
                    borderRadius: "50%",
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

                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#F5F5F5",
                    lineHeight: 1.7,
                    textAlign: "justify",
                  }}
                >
                  {item}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default UniversityProgression;
