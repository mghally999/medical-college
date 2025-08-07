"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

interface LogoCardProps {
  src: string;
  alt: string;
}

const LogoCard: React.FC<LogoCardProps> = ({ src, alt }) => (
  <div
    style={{
      backgroundColor: "#fff",
      padding: "1.5rem",
      borderRadius: "0.75rem",
      border: "1px solid #eee",
      boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
      width: "180px",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Image
      src={src}
      alt={alt}
      width={120}
      height={60}
      style={{
        objectFit: "contain",
        width: "100%",
        height: "auto",
      }}
    />
  </div>
);

const paragraphStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "#000",
  lineHeight: "1.8",
  marginBottom: "1.25rem",
  textAlign: "justify",
};

const AccreditationIntro: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section
      className="custom-padding-2 relative custom-linear-white-top"
      style={{
        background:
          "linear-gradient(359deg, #ffffff 0%, #dbeafe 25%, #86b3f7 50%, #3a5acb 75%, #0f1d56 100%)",
        padding: "60px 5vw",
      }}
    >
      <div
        className="accreditation-wrapper"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "40px",
        }}
      >
        {/* Left Side - Logos */}
        <motion.div
          className="logos"
          data-aos="fade-right"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            flex: "1 1 50%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <LogoCard src="/images/logo/KHDA-logo.png" alt="KHDA Accredited" />
          <LogoCard src="/images/logo/OTHM-logo.png" alt="OTHM Accredited" />
          <LogoCard
            src="/images/logo/university-bolton.png"
            alt="University of Bolton"
          />
          <LogoCard
            src="/images/logo/medical-college.png"
            alt="Medical College"
          />
          <LogoCard
            src="/images/logo/northwood-university.jpeg"
            alt="Northwood University"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          className="text"
          data-aos="fade-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            flex: "1 1 45%",
            paddingLeft: "2rem",
            borderLeft: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "#000",
              marginBottom: "1.25rem",
              lineHeight: "1.4",
            }}
          >
            CSEI Academy – Where Your Performance Ignites with the Best
            Education
          </h2>

          <p style={paragraphStyle}>
            Creative Star Education Institutes Academy (CSEI Academy) in Dubai
            is committed to delivering education of the highest calibre,
            rigorously aligned with both local and international standards. Our
            programmes are officially approved by the Dubai Knowledge and Human
            Development Authority (KHDA), ensuring that qualifications awarded
            are recognised and respected throughout the UAE.
          </p>

          <p style={paragraphStyle}>
            Complementing this, CSEI Academy offers qualifications accredited by
            the United Kingdom’s{" "}
            <strong>
              Office of Qualifications and Examinations Regulation (Ofqual)
            </strong>{" "}
            through a strategic partnership with OTHM. This dual accreditation
            framework affords students globally recognised certifications,
            enhancing their prospects for further academic pursuits and
            professional advancement internationally.
          </p>

          <p style={{ ...paragraphStyle, fontWeight: 700 }}>
            Our unwavering commitment to academic excellence is embodied in our
            distinguished faculty, Internal Quality Assurance, and
            state-of-the-art facilities. We prioritize critical thinking,
            professional competencies, and accountability—equipping students to
            thrive in an interconnected, competitive world.
          </p>
        </motion.div>
      </div>

      {/* Decorative Orb */}
      <div
        className="hidden md:block absolute right-[-60px] top-[-60px] w-[180px] h-[180px] rounded-full bg-[#4b0082]/10 z-0"
        style={{ filter: "blur(20px)" }}
      />
    </section>
  );
};

export default AccreditationIntro;
