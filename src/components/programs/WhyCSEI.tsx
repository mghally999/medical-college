"use client";

import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

type WhyCSEIProps = {
  data?: string[] | string;
};

export const WhyCSEI: React.FC<WhyCSEIProps> = ({ data }) => {
  if (!data) return null;

  const items = Array.isArray(data) ? data : [data];

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #000C2D 0%, #001E6C 100%)",
        padding: "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 80px)",
        borderTop: "6px solid #E05500",
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
          Why Choose CSEI?
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

        {/* Checkmark List */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginTop: "60px",
          }}
        >
          {items.map((text, i) => (
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
                  lineHeight: "1.6",
                  color: "#F5F5F5",
                }}
              >
                {text}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Optional Footer */}
        <div
          style={{
            marginTop: "60px",
            backgroundColor: "#000C2D",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}
        >
          <h3
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#E05500",
              marginBottom: "15px",
              fontStyle: "italic",
            }}
          >
            Additional Information:
          </h3>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#cccccc",
            }}
          >
            CSEI offers unique advantages that set it apart from other
            institutions, providing students with exceptional opportunities for
            growth and success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyCSEI;
