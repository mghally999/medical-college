"use client";

import React, { useRef, useEffect, useState } from "react";
import Overview from "@/components/Programs/Overview";
import { EntryRequirements } from "@/components/Programs/EntryRequirements";
import { QualificationStructure } from "@/components/Programs/QualificationStructure";
import AllUnits from "@/components/Programs/AllUnits";
import CourseObjectives from "@/components/Programs/CourseObjectives";
import { AssessmentVerification } from "@/components/Programs/AssessmentVerification";
import { CareerOpportunities } from "@/components/Programs/CareerOpportunities";
import { TuitionFees } from "@/components/Programs/TuitionFees";

type ProgramType = {
  professional: boolean;
  overview: string;
  entryRequirements: string;
  qualificationStructureText: string;
  qualificationUnits: string[];
  courseObjectives?: string;
  assessmentVerification: string;
  careerOpportunities: string;
};

type StickyTabsSectionProps = {
  program: ProgramType;
};

export default function StickyTabsSection({ program }: StickyTabsSectionProps) {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [limitReached, setLimitReached] = useState<boolean>(false);

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const lastSectionRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { id: 1, text: "Overview" },
    { id: 2, text: "Entry Requirements" },
    { id: 3, text: "Qualification Structure" },
    { id: 4, text: "Qualification Units" },
    ...(program.professional ? [{ id: 5, text: "Course Objectives" }] : []),
    { id: 6, text: "Assessment and Verification" },
    { id: 7, text: "Career Opportunities" },
    { id: 8, text: "Tuition Fees" },
  ];

  const sections = [
    { id: 1, Component: Overview, props: { data: program.overview } },
    {
      id: 2,
      Component: EntryRequirements,
      props: { data: program.entryRequirements },
    },
    {
      id: 3,
      Component: QualificationStructure,
      props: { data: program.qualificationStructureText },
    },
    { id: 4, Component: AllUnits, props: { data: program.qualificationUnits } },
    ...(program.professional
      ? [
          {
            id: 5,
            Component: CourseObjectives,
            props: { data: program.courseObjectives },
          },
        ]
      : []),
    {
      id: 6,
      Component: AssessmentVerification,
      props: { data: program.assessmentVerification },
    },
    {
      id: 7,
      Component: CareerOpportunities,
      props: { data: program.careerOpportunities },
    },
    {
      id: 8,
      Component: TuitionFees,
      props: { program },
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-section-id"));
            setActiveTab(id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-120px 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current || !sidebarRef.current || !lastSectionRef.current)
        return;

      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const sidebarHeight = sidebarRef.current.offsetHeight;
      const lastSectionRect = lastSectionRef.current.getBoundingClientRect();

      setIsSticky(wrapperRect.top <= 120);
      setLimitReached(lastSectionRect.bottom <= sidebarHeight + 90);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: number) => {
    const el = sectionRefs.current.find(
      (ref) => ref?.getAttribute("data-section-id") === String(id)
    );
    if (el) {
      const offset = 180;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="sticky-section" ref={wrapperRef}>
      <div className="container-layout">
        <div className="sidebar-wrapper">
          <aside
            ref={sidebarRef}
            className={`sidebar ${isSticky ? "sticky" : ""} ${
              limitReached ? "stopped" : ""
            }`}
          >
            {menuItems.map(({ id, text }) => (
              <button
                key={id}
                onClick={() => handleClick(id)}
                className={`tab-button ${activeTab === id ? "active" : ""}`}
              >
                {text}
              </button>
            ))}
          </aside>
        </div>

        <div className="content">
          {sections.map(({ id, Component, props }, index) => (
            <div
              key={id}
              ref={(el) => {
                sectionRefs.current[index] = el;
                if (id === 8) lastSectionRef.current = el;
              }}
              data-section-id={id}
              className="content-section"
            >
              <Component {...(props as any)} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .sticky-section {
          padding: 4rem 1rem;
        }
        .container-layout {
          display: flex;
          max-width: 1280px;
          margin: 0 auto;
          gap: 2rem;
        }
        .sidebar-wrapper {
          width: 260px;
          flex-shrink: 0;
        }
        .sidebar {
          width: 260px;
          padding: 1rem;
          background: #fff;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          height: max-content;
        }
        .sidebar.sticky {
          position: fixed;
          top: 160px;
          z-index: 20;
        }
        .sidebar.stopped {
          position: absolute;
          bottom: 0;
        }
        .tab-button {
          display: block;
          width: 100%;
          padding: 0.5rem 1rem;
          text-align: left;
          margin-bottom: 10px;
          background: #f9fafb;
          color: #1f2937;
          border-radius: 6px;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: 0.2s ease;
        }
        .tab-button:hover {
          background: #e5e7eb;
        }
        .tab-button.active {
          background: #000;
          color: #fff;
        }
        .content {
          flex: 1;
        }
        .content-section {
          scroll-margin-top: 140px;
          margin-bottom: 5rem;
          min-height: 200px;
        }
        @media (max-width: 1024px) {
          .container-layout {
            flex-direction: column;
          }
          .sidebar-wrapper {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
