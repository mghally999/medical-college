"use client";

import { usePathname } from "next/navigation";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import PaginationTwo from "@/components/Common/Paginationtwo";
import { programs } from "@/app/data/programs";
import { motion, AnimatePresence } from "framer-motion";
import { FiCompass, FiAward, FiSearch } from "react-icons/fi";

// Type definitions
type Program = {
  id: string;
  title: string;
  school: string;
  category: string;
  level?: string;
  duration?: string;
  href: string;
  imageSrc: string;
  rating?: number;
  discountedPrice?: number;
  popular?: boolean;
  credentialTitle?: string;
};

type EnhancedProgram = Program & {
  professional: boolean;
  duration: string;
  level: string;
  searchText: string;
};

type ConstellationCourse = EnhancedProgram & {
  position: {
    x: number;
    y: number;
    size: number;
  };
};

type BrandColors = {
  primary: string;
  secondary: string;
  accent: string;
  lightText: string;
  darkText: string;
  border: string;
  highlight: string;
};

const categories = [
  "Health & Social Care",
  "Business & Management",
  "Culinary Arts & Tourism",
] as const;

const brandColors: BrandColors = {
  primary: "#001E6C",
  secondary: "#000C2D",
  accent: "#E05500",
  lightText: "#F5F5F5",
  darkText: "#FFFFFF",
  border: "#FFFFFF22",
  highlight: "#0A1445",
};

const sortingOptions = [
  "Default",
  "Rating (asc)",
  "Rating (dsc)",
  "Price (asc)",
  "Price (dsc)",
  "Duration (asc)",
  "Duration (dsc)",
] as const;

const CourseListOne = () => {
  const pathname = usePathname();
  const isProfessionalRoute = pathname.includes("/professional-courses");

  // Enhanced programs data with memoization
  const enhancedPrograms = useMemo((): EnhancedProgram[] => {
    return programs.map((program) => ({
      ...program,
      professional: program.href.includes("/professional-courses/"),
      duration: program.duration || "Duration not specified",
      level: program.level || "Level not specified",
      searchText:
        `${program.title} ${program.school} ${program.category} ${program.level}`.toLowerCase(),
    }));
  }, []);

  // State management
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<
    (typeof categories)[number] | "all" | "professional"
  >(isProfessionalRoute ? "professional" : "all");
  const [currentSortingOption, setCurrentSortingOption] =
    useState<(typeof sortingOptions)[number]>("Default");
  const [pageNumber, setPageNumber] = useState(1);
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "constellation">("grid");

  // Filter and sort data with memoization
  const { filteredData, professionalCount } = useMemo(() => {
    let result = [...enhancedPrograms];
    let professionalCount = 0;

    // First filter by professional if needed
    if (activeFilter === "professional") {
      result = result.filter((program) => program.professional);
      professionalCount = result.length;
    }
    // Filter by category if a specific category is selected
    else if (activeFilter !== "all") {
      const categoryMap = {
        "Health & Social Care": "Health Science Discipline",
        "Business & Management": "Business Discipline",
        "Culinary Arts & Tourism": [
          "Tourism",
          "Hospitality",
          "Professional Courses",
        ],
      };

      const filterValue = categoryMap[activeFilter];

      if (Array.isArray(filterValue)) {
        result = result.filter((program) =>
          filterValue.some(
            (val) =>
              program.school.includes(val) || program.category.includes(val)
          )
        );
      } else if (filterValue) {
        result = result.filter(
          (program) =>
            program.school === filterValue || program.category === filterValue
        );
      }
    } else {
      professionalCount = enhancedPrograms.filter((p) => p.professional).length;
    }

    // Apply search filter if query exists
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter((program) => program.searchText.includes(query));
    }

    // Sort the results
    switch (currentSortingOption) {
      case "Rating (asc)":
        result.sort((a, b) => (a.rating || 0) - (b.rating || 0));
        break;
      case "Rating (dsc)":
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "Price (asc)":
        result.sort(
          (a, b) => (a.discountedPrice || 0) - (b.discountedPrice || 0)
        );
        break;
      case "Price (dsc)":
        result.sort(
          (a, b) => (b.discountedPrice || 0) - (a.discountedPrice || 0)
        );
        break;
      case "Duration (asc)":
        result.sort((a, b) =>
          (a.duration || "").localeCompare(b.duration || "")
        );
        break;
      case "Duration (dsc)":
        result.sort((a, b) =>
          (b.duration || "").localeCompare(a.duration || "")
        );
        break;
      default:
        // Default sorting - you can add your preferred default here
        break;
    }

    return { filteredData: result, professionalCount };
  }, [enhancedPrograms, activeFilter, searchQuery, currentSortingOption]);

  // Paginated data
  const paginatedData = useMemo(() => {
    return filteredData.slice((pageNumber - 1) * 12, pageNumber * 12);
  }, [filteredData, pageNumber]);

  // Constellation view calculations
  const constellationCourses = useMemo((): ConstellationCourse[] => {
    return filteredData.slice(0, 12).map((course, i) => {
      const angle = (i / 12) * Math.PI * 2;
      const distance = 150 + Math.random() * 50;
      return {
        ...course,
        position: {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
          size: 8 + (course.popular ? 4 : 0) + (course.professional ? 4 : 0),
        },
      };
    });
  }, [filteredData]);

  // Handlers with useCallback for performance
  const handleCategoryClick = useCallback(
    (category: (typeof categories)[number]) => {
      setActiveFilter(category);
      setPageNumber(1);
    },
    []
  );

  const handleFilterProfessional = useCallback(() => {
    setActiveFilter((prev) =>
      prev === "professional" ? "all" : "professional"
    );
    setPageNumber(1);
  }, []);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
      setPageNumber(1);
    },
    []
  );

  const handleAllCoursesClick = useCallback(() => {
    setActiveFilter("all");
    setSearchQuery("");
    setPageNumber(1);
  }, []);

  const getLevelLabel = useCallback((level: string): string => {
    switch (level) {
      case "Level 3":
        return "Beginner";
      case "Level 4":
        return "Intermediate";
      case "Level 5":
      case "Level 6":
        return "Expert";
      default:
        return level;
    }
  }, []);

  const renderCourseTitle = useCallback((course: EnhancedProgram): string => {
    if (course.professional) {
      return course.title;
    } else {
      return `${course.title} – ${course.level}`;
    }
  }, []);

  return (
    <div className="cosmic-explorer custom-padding">
      {/* Animated cosmic background */}
      <div className="cosmic-bg">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="star"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.header
        className="cosmic-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div className="title-wrapper" whileHover={{ scale: 1.02 }}>
          <h1 className="cosmic-title">
            <span className="title-gradient">Explore</span> Our Programs
            Universe
          </h1>
          <p className="cosmic-subtitle">
            Navigate through constellations of learning opportunities
          </p>
        </motion.div>

        {/* Search bar */}
        <div className="cosmic-search-container">
          <div className="cosmic-search-input">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* Category tabs */}
        <div className="tabs__controls flex-wrap pt-10 d-flex justify-center js-tabs-controls">
          {categories.map((cat, i) => (
            <motion.button
              key={i}
              onClick={() => handleCategoryClick(cat)}
              className={`cosmic-tab-btn ${
                activeFilter === cat ? "active" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Quick filters */}
        <div className="cosmic-quick-filters">
          <motion.button
            className={`cosmic-filter-btn ${
              activeFilter === "all" ? "active" : ""
            }`}
            onClick={handleAllCoursesClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiCompass className="filter-icon" />
            All Courses
          </motion.button>

          <motion.button
            className={`cosmic-filter-btn ${
              activeFilter === "professional" ? "active" : ""
            }`}
            onClick={handleFilterProfessional}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiAward className="filter-icon" />
            Professional ({professionalCount})
          </motion.button>
        </div>
      </motion.header>

      {/* Main content */}
      <main className="cosmic-main">
        {/* Constellation View */}
        {viewMode === "constellation" && (
          <div className="constellation-view">
            <div className="constellation-container">
              {constellationCourses.map((course) => (
                <motion.div
                  key={course.id}
                  className="constellation-node"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: course.position.x,
                    y: course.position.y,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 30,
                  }}
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={() => setHoveredCourse(course.id)}
                  onHoverEnd={() => setHoveredCourse(null)}
                  style={{
                    width: `${course.position.size}px`,
                    height: `${course.position.size}px`,
                    background: course.professional
                      ? `linear-gradient(135deg, ${brandColors.accent}, ${brandColors.highlight})`
                      : `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.secondary})`,
                  }}
                >
                  {hoveredCourse === course.id && (
                    <motion.div
                      className="node-tooltip"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <h4>{renderCourseTitle(course)}</h4>
                      <p>{course.school}</p>
                      <Link href={course.href} className="node-link">
                        Explore →
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              ))}

              <svg className="constellation-lines" width="100%" height="100%">
                {constellationCourses.map((course1, i) => {
                  return constellationCourses.slice(i + 1).map((course2) => {
                    if (Math.random() > 0.7) {
                      return (
                        <line
                          key={`${course1.id}-${course2.id}`}
                          x1={course1.position.x + 150}
                          y1={course1.position.y + 150}
                          x2={course2.position.x + 150}
                          y2={course2.position.y + 150}
                          stroke={`rgba(224, 85, 0, 0.3)`}
                          strokeWidth="1"
                        />
                      );
                    }
                    return null;
                  });
                })}
              </svg>
            </div>
          </div>
        )}

        {/* Grid View */}
        {viewMode === "grid" && (
          <>
            {/* Course grid */}
            <div className="cosmic-grid">
              {paginatedData.map((course, i) => (
                <motion.div
                  key={course.id}
                  className="cosmic-course-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
                  }}
                >
                  <div className="course-card-inner">
                    <div className="course-image-wrapper">
                      <Image
                        width={400}
                        height={250}
                        src={course.imageSrc}
                        alt={course.title}
                        className="course-image"
                      />

                      {course.professional && (
                        <div className="professional-badge">
                          <FiAward />
                          Pro
                        </div>
                      )}
                    </div>

                    <div className="course-content">
                      <div className="course-school">{course.school}</div>
                      <h3 className="course-title">
                        <Link href={course.href}>
                          {renderCourseTitle(course)}
                        </Link>
                      </h3>
                      <div className="course-meta">
                        {!course.professional && (
                          <span className="course-level">
                            {getLevelLabel(course.level)}
                          </span>
                        )}
                        <span className="course-duration">
                          {course.duration}
                        </span>
                      </div>

                      <div className="course-footer">
                        <Link href={course.href} className="explore-btn">
                          Explore
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* Pagination */}
        {filteredData.length > 0 && (
          <div className="cosmic-pagination">
            <PaginationTwo
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              data={filteredData}
              pageCapacity={12}
            />
          </div>
        )}
      </main>

      {/* Global styles */}
      <style jsx global>{`
        .cosmic-explorer {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(
            135deg,
            ${brandColors.secondary} 0%,
            ${brandColors.primary} 100%
          );
          color: ${brandColors.lightText};
          font-family: "Inter", sans-serif;
          overflow-x: hidden;
        }

        .cosmic-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
          z-index: -1;
        }

        .star {
          position: absolute;
          background-color: ${brandColors.lightText};
          border-radius: 50%;
          filter: blur(0.5px);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        .cosmic-header {
          padding: 60px 0 40px;
          text-align: center;
          position: relative;
        }

        .title-wrapper {
          display: inline-block;
          margin-bottom: 30px;
          cursor: default;
        }

        .cosmic-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 10px;
          line-height: 1.2;
          background: linear-gradient(90deg, ${brandColors.accent});
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .title-gradient {
          background: linear-gradient(90deg, ${brandColors.accent});
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .cosmic-subtitle {
          font-size: 1.2rem;
          opacity: 0.8;
          margin: 0;
          color: ${brandColors.lightText};
        }

        /* Search styles */
        .cosmic-search-container {
          max-width: 600px;
          margin: 0 auto 30px;
        }

        .cosmic-search-input {
          position: relative;
          width: 100%;
        }

        .cosmic-search-input input {
          width: 100%;
          padding: 12px 20px 12px 45px;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid ${brandColors.border};
          color: ${brandColors.lightText};
          font-size: 1rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }

        .cosmic-search-input input:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(224, 85, 0, 0.3);
          background: rgba(255, 255, 255, 0.15);
        }

        .search-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: ${brandColors.lightText};
          opacity: 0.7;
        }

        /* Tab buttons */
        .tabs__controls {
          margin-bottom: 30px;
          display: flex;
          gap: 15px;
        }

        .cosmic-tab-btn {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid ${brandColors.border};
          backdrop-filter: blur(8px);
          padding: 12px 20px;
          font-weight: 600;
          color: ${brandColors.lightText};
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
          z-index: 1;
          font-size: 14px;
        }

        .cosmic-tab-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0;
          background: linear-gradient(
            90deg,
            ${brandColors.highlight},
            ${brandColors.accent}
          );
          transition: width 0.4s ease;
          z-index: -1;
        }

        .cosmic-tab-btn:hover::before {
          width: 100%;
        }

        .cosmic-tab-btn:hover {
          color: ${brandColors.darkText};
          border-color: transparent;
        }

        .cosmic-tab-btn.active {
          background: linear-gradient(
            90deg,
            ${brandColors.highlight},
            ${brandColors.accent}
          );
          color: ${brandColors.darkText};
          border-color: transparent;
          box-shadow: 0 5px 15px rgba(138, 43, 226, 0.4);
        }

        .cosmic-quick-filters {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .cosmic-filter-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid ${brandColors.border};
          color: ${brandColors.lightText};
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }

        .cosmic-filter-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .cosmic-filter-btn.active {
          background: linear-gradient(
            90deg,
            ${brandColors.highlight},
            ${brandColors.accent}
          );
          border-color: transparent;
          box-shadow: 0 5px 15px rgba(138, 43, 226, 0.4);
        }

        .filter-icon {
          font-size: 1.1rem;
        }

        .cosmic-main {
          padding: 40px 0 80px;
        }

        /* Constellation View Styles */
        .constellation-view {
          margin: 60px 0;
        }

        .constellation-container {
          position: relative;
          width: 100%;
          height: 400px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .constellation-node {
          position: absolute;
          border-radius: 50%;
          cursor: pointer;
          z-index: 2;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
          box-shadow: 0 0 10px rgba(138, 43, 226, 0.5);
        }

        .node-tooltip {
          position: absolute;
          bottom: calc(100% + 15px);
          left: 50%;
          transform: translateX(-50%);
          background: rgba(15, 5, 36, 0.9);
          padding: 15px;
          border-radius: 10px;
          width: 200px;
          backdrop-filter: blur(10px);
          border: 1px solid ${brandColors.border};
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          z-index: 10;
        }

        .node-tooltip h4 {
          margin: 0 0 8px;
          font-size: 1rem;
          color: ${brandColors.darkText};
        }

        .node-tooltip p {
          margin: 0 0 12px;
          font-size: 0.9rem;
          opacity: 0.8;
          color: ${brandColors.lightText};
        }

        .node-link {
          display: inline-block;
          padding: 5px 10px;
          background: rgba(224, 85, 0, 0.2);
          border-radius: 5px;
          color: ${brandColors.accent};
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .node-link:hover {
          background: rgba(224, 85, 0, 0.4);
          color: ${brandColors.darkText};
        }

        .constellation-lines {
          position: absolute;
          top: 0;
          left: 0;
        }

        /* Grid View Styles */
        .cosmic-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 25px;
          padding-left: 5vw;
          padding-right: 5vw;
        }

        .cosmic-course-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid ${brandColors.border};
          backdrop-filter: blur(5px);
        }

        .course-card-inner {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .course-image-wrapper {
          position: relative;
          height: 180px;
          overflow: hidden;
        }

        .course-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .cosmic-course-card:hover .course-image {
          transform: scale(1.05);
        }

        .professional-badge {
          position: absolute;
          right: 15px;
          top: 15px;
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 5px 10px;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          background: rgba(224, 85, 0, 0.2);
          color: ${brandColors.accent};
          border: 1px solid rgba(224, 85, 0, 0.3);
        }

        .course-content {
          padding: 20px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .course-school {
          font-size: 0.9rem;
          color: ${brandColors.darkText};
          margin-bottom: 8px;
          font-weight: 600;
        }

        .course-title {
          font-size: 1.2rem;
          margin: 0 0 15px;
          line-height: 1.4;
        }

        .course-title a {
          color: ${brandColors.darkText};
          text-decoration: none;
          background: linear-gradient(
            90deg,
            ${brandColors.darkText},
            ${brandColors.darkText}
          );
          background-size: 0% 2px;
          background-repeat: no-repeat;
          background-position: left bottom;
          transition: background-size 0.3s ease;
        }

        .course-title a:hover {
          background-size: 100% 2px;
        }

        .course-meta {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
          font-size: 0.9rem;
          opacity: 0.8;
          color: ${brandColors.lightText};
        }

        .course-footer {
          margin-top: auto;
          margin-left: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .explore-btn {
          padding: 8px 15px;
          background: linear-gradient(
            90deg,
            ${brandColors.highlight},
            ${brandColors.accent}
          );
          border-radius: 8px;
          color: ${brandColors.darkText};
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .explore-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(224, 85, 0, 0.4);
        }

        .cosmic-pagination {
          margin-top: 50px;
          display: flex;
          justify-content: center;
        }

        /* Responsive styles */
        @media (max-width: 768px) {
          .cosmic-quick-filters,
          .tabs__controls {
            gap: 10px;
          }

          .cosmic-filter-btn,
          .cosmic-tab-btn {
            padding: 10px 15px;
            font-size: 0.9rem;
          }

          .cosmic-grid {
            grid-template-columns: 1fr;
          }

          .constellation-container {
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default CourseListOne;
