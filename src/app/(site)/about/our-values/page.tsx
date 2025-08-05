"use client";

import React from "react";
import aboutPagesData from "@/app/data/aboutPagesData";
import { notFound } from "next/navigation";
import {
  FaHandRock,
  FaUsers,
  FaChalkboardTeacher,
  FaAward,
  FaCrown,
  FaHandsHelping,
} from "react-icons/fa";

const values = [
  {
    title: "Empowerment",
    description: "Ignite every student’s potential.",
    icon: <FaHandRock style={{ color: "#BFDBFE", fontSize: "28px" }} />,
  },
  {
    title: "Inclusivity",
    description: "Emphasis on diversity, belonging, and equal opportunity.",
    icon: <FaUsers style={{ color: "#BFDBFE", fontSize: "28px" }} />,
  },
  {
    title: "Support & Mentorship",
    description:
      "Prioritizing personalized guidance and holistic student development.",
    icon: (
      <FaChalkboardTeacher style={{ color: "#BFDBFE", fontSize: "28px" }} />
    ),
  },
  {
    title: "Excellence",
    description: "Dedication to novelty, quality and rigor.",
    icon: <FaAward style={{ color: "#BFDBFE", fontSize: "28px" }} />,
  },
  {
    title: "Leadership",
    description:
      "Focus on cultivating changemakers who drive positive change globally.",
    icon: <FaCrown style={{ color: "#BFDBFE", fontSize: "28px" }} />,
  },
  {
    title: "Community & Collaboration",
    description:
      "Building a shared environment where growth is nurtured together.",
    icon: <FaHandsHelping style={{ color: "#BFDBFE", fontSize: "28px" }} />,
  },
];

const OurValuesPage = () => {
  const pageData = aboutPagesData.find(
    (page: any) => page.slug === "our-values"
  );
  if (!pageData) return notFound();

  return (
    <section className="custom-padding">
      <div className="cards-wrapper">
        <h2 className="values-title">Our Core Values</h2>
        <p className="values-subtext">
          The principles that shape our culture, guide our mission, and define
          our identity.
        </p>
        <div className="cards-grid">
          {values.map((item, index) => (
            <div
              className="card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="icon-wrapper">{item.icon}</div>
              <h4 className="text-white fw-600">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .about-subpage {
          font-family: sans-serif;
        }

        .cards-wrapper {
          max-width: 1200px;
          margin: 80px auto;
          padding: 0 20px;
          text-align: center;
        }

        .values-title {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 20px;
          color: #000;
        }

        .values-subtext {
          font-size: 16px;
          color: #000;
          margin-bottom: 48px;
        }

        .cards-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          justify-content: center;
        }

        .card {
          background: #000;
          padding: 24px;
          border: 1px solid #bfdbfe;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(4px);
          width: 100%;
          max-width: 360px;
          flex: 1 1 300px;
          color: white;
        }

        .icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: rgba(30, 58, 138, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px auto;
        }

        .card h4 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .card p {
          font-size: 14px;
          line-height: 1.6;
          padding: 0 12px;
        }

        @media (max-width: 768px) {
          .values-title {
            font-size: 30px;
          }

          .cards-wrapper {
            padding: 0 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default OurValuesPage;
