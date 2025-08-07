"use client";

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface CareerOpportunitiesProps {
  data: string[];
}

export const CareerOpportunities: React.FC<CareerOpportunitiesProps> = ({
  data,
}) => {
  if (!data || !Array.isArray(data) || data.length === 0) return null;

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
          Career Opportunities
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

        {/* Career Items List */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginTop: "60px",
          }}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
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
                  fontWeight: 600,
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
    </section>
  );
};

export default CareerOpportunities;
