"use client";

import React from "react";
import {
  FaClock,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaBookOpen,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { extractCreditsFromString } from "../../utils/extractCredits";

interface ProgramHighlightsBoxProps {
  data: {
    duration?: string;
    professional?: boolean;
    qualificationStructure?: string;
  };
}

export default function ProgramHighlightsBox({
  data,
}: ProgramHighlightsBoxProps) {
  const credits = extractCreditsFromString(data?.qualificationStructure);

  const highlightItems = [
    {
      icon: <FaClock size={16} />,
      label: "Duration",
      value: data?.duration || "1 Year",
    },
    {
      icon: <FaGraduationCap size={16} />,
      label: "Intake",
      value: "September and February",
    },
    {
      icon: <FaMapMarkerAlt size={16} />,
      label: "Location",
      value: "Dubai",
    },
    {
      icon: <FaBookOpen size={16} />,
      label: "Credits",
      value: credits ? `${credits} Credits` : "120 Credits",
    },
  ].filter((item) => !(data?.professional && item.label === "Credits"));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundColor: "#fff",
        marginTop: "30px",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3
        style={{
          fontSize: "32px",
          fontWeight: "700",
          color: "#000000",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        Program Highlights
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {highlightItems.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f8f9fa",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                backgroundColor: "#000000",
                color: "white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "12px",
                fontSize: "14px",
                flexShrink: 0,
              }}
            >
              {item.icon}
            </div>
            <div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#555",
                  marginBottom: "2px",
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#000",
                }}
              >
                {item.value}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
