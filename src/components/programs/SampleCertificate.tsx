"use client";

import React from "react";

const SampleCertificate: React.FC = () => {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #000C2D 0%, #001E6C 100%)",
        padding: "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 80px)",
        borderTop: "6px solid #E05500",
        borderBottom: "6px solid #E05500",
        borderRadius: "0px", // no soft corner on full width
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Section Title */}
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
        Sample Certificate
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

      {/* Image Container */}
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          height: "500px",
          overflow: "hidden",
          border: "1px solid #FFFFFF22",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
        }}
      >
        <img
          src="/assets/img/othm/sample-certificate.webp"
          alt="Sample OTHM Certificate"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>
    </section>
  );
};

export default SampleCertificate;
