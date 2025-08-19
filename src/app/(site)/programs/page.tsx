"use client";

import { usePathname } from "next/navigation";
import React, { useState, useMemo, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PaginationTwo from "@/components/Common/Paginationtwo";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import {
  FiCompass,
  FiAward,
  FiSearch,
  FiGrid,
  FiList,
  FiX,
  FiChevronRight,
} from "react-icons/fi";
import { FaStar, FaRegStar, FaGraduationCap } from "react-icons/fa";

// Enhanced brand colors with additional shades
const brandColors = {
  primary: "#420516",
  secondary: "#6A0D1B",
  accent: "#FF9A9E",
  lightText: "#F5F5F5",
  darkText: "#FFFFFF",
  border: "#FFFFFF22",
  highlight: "#8B1E3F",
  cosmicPurple: "#7B2D8F",
  cosmicBlue: "#2D3B8F",
  cosmicPink: "#FF6B9E",
};

// Enhanced programs data with more details
const programs = [
  // Nursing Programs
  {
    id: 1,
    title: "Registered Nursing - Bachelor of Science (RN - BSN)",
    href: "/programs/nursing/rn-bsn",
    school: "Nursing School",
    category: "Nursing",
    level: "Level 6",
    duration: "4 Years",
    rating: 4.8,
    discountedPrice: 12000,
    imageSrc:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    professional: false,
    popular: true,
    description:
      "Comprehensive nursing program preparing students for advanced practice and leadership roles in healthcare.",
    skills: [
      "Patient Care",
      "Clinical Judgment",
      "Leadership",
      "Health Assessment",
    ],
  },
  {
    id: 2,
    title: "Assistant Nursing (American)",
    href: "/programs/nursing/assistant-nursing",
    school: "Nursing School",
    category: "Nursing",
    level: "Level 3",
    duration: "2 Years",
    rating: 4.5,
    discountedPrice: 8000,
    imageSrc:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    professional: false,
    popular: false,
    description:
      "Fundamental nursing assistant training focusing on basic patient care and support.",
    skills: [
      "Basic Care",
      "Vital Signs",
      "Patient Hygiene",
      "Mobility Assistance",
    ],
  },

  // Health and Social Care Programs
  {
    id: 3,
    title: "Level 3 Diploma in Health and Social Care",
    href: "/programs/health-social-care/level-3",
    school: "Health Science Discipline",
    category: "Health & Social Care",
    level: "Level 3",
    duration: "1 Year",
    rating: 4.3,
    discountedPrice: 5000,
    imageSrc:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    professional: false,
    popular: true,
    description:
      "Entry-level qualification for those beginning their career in health and social care.",
    skills: [
      "Communication",
      "Safeguarding",
      "Duty of Care",
      "Health & Safety",
    ],
  },
  {
    id: 4,
    title: "Level 4 Diploma in Health and Social Care",
    href: "/programs/health-social-care/level-4",
    school: "Health Science Discipline",
    category: "Health & Social Care",
    level: "Level 4",
    duration: "1.5 Years",
    rating: 4.6,
    discountedPrice: 6500,
    imageSrc:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    professional: false,
    popular: false,
    description:
      "Intermediate qualification developing more specialized skills in health and social care.",
    skills: [
      "Person-Centered Care",
      "Team Leadership",
      "Risk Management",
      "Professional Practice",
    ],
  },
  {
    id: 5,
    title: "Level 5 Diploma in Health and Social Care",
    href: "/programs/health-social-care/level-5",
    school: "Health Science Discipline",
    category: "Health & Social Care",
    level: "Level 5",
    duration: "2 Years",
    rating: 4.7,
    discountedPrice: 8500,
    imageSrc:
      "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    professional: false,
    popular: true,
    description:
      "Advanced qualification for those looking to progress into management roles in care settings.",
    skills: [
      "Service Management",
      "Quality Assurance",
      "Policy Implementation",
      "Strategic Planning",
    ],
  },
  {
    id: 6,
    title: "Professional Certificate in Health and Social Care",
    href: "/programs/health-social-care/professional",
    school: "Health Science Discipline",
    category: "Professional Courses",
    level: "Certificate",
    duration: "6 Months",
    rating: 4.4,
    discountedPrice: 3000,
    imageSrc:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    professional: true,
    popular: false,
    description:
      "Specialized certificate for professionals seeking to enhance their caregiving skills.",
    skills: [
      "Advanced Care Techniques",
      "Ethical Practice",
      "Specialized Care",
      "Professional Development",
    ],
  },

  // One Day Certification Courses
  {
    id: 7,
    title: "Basic Life Support (BLS)",
    href: "/programs/one-day-certification/bls",
    school: "Professional Development",
    category: "One Day Certification",
    level: "Certificate",
    duration: "1 Day",
    rating: 4.9,
    discountedPrice: 250,
    imageSrc:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    professional: true,
    popular: true,
    description:
      "Essential life-saving skills for healthcare professionals and first responders.",
    skills: ["CPR", "AED Use", "Choking Response", "Emergency Response"],
  },
  {
    id: 8,
    title: "Pain Management (PM)",
    href: "/programs/one-day/pain-management",
    school: "Professional Development",
    category: "One Day Certification",
    level: "Certificate",
    duration: "1 Day",
    rating: 4.7,
    discountedPrice: 300,
    imageSrc:
      "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    professional: true,
    popular: false,
    description:
      "Techniques and strategies for effective pain assessment and management.",
    skills: [
      "Pain Assessment",
      "Pharmacological Management",
      "Non-Pharmacological Techniques",
      "Patient Education",
    ],
  },
  {
    id: 9,
    title: "Infection Control (IC)",
    href: "/programs/one-day/infection-control",
    school: "Professional Development",
    category: "One Day Certification",
    level: "Certificate",
    duration: "1 Day",
    rating: 4.8,
    discountedPrice: 275,
    imageSrc:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    professional: true,
    popular: true,
    description:
      "Critical training for preventing and controlling infections in healthcare settings.",
    skills: [
      "Infection Prevention",
      "PPE Use",
      "Sterilization Techniques",
      "Outbreak Management",
    ],
  },
];

// Categories derived from your navigation
const categories = [
  "Nursing Programs",
  "Health and Social Care",
  "One Day Certification Courses",
];

// Sorting options
const sortingOptions = [
  "Default",
  "Rating (asc)",
  "Rating (dsc)",
  "Price (asc)",
  "Price (dsc)",
  "Duration (asc)",
  "Duration (dsc)",
];

export default function ProgramsPage() {
  const pathname = usePathname();
  const isProfessionalRoute = pathname.includes("/professional-courses");
  const controls = useAnimation();

  // Enhanced programs data with memoization
  const enhancedPrograms = useMemo(() => {
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
  const [activeFilter, setActiveFilter] = useState(
    isProfessionalRoute ? "professional" : "all"
  );
  const [currentSortingOption, setCurrentSortingOption] = useState("Default");
  const [pageNumber, setPageNumber] = useState(1);
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        "Nursing Programs": "Nursing",
        "Health and Social Care": "Health & Social Care",
        "One Day Certification Courses": "One Day Certification",
      };

      const filterValue = categoryMap[activeFilter];

      if (filterValue) {
        result = result.filter(
          (program) =>
            program.category === filterValue ||
            program.school.includes(filterValue)
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
        result.sort((a, b) => a.rating - b.rating);
        break;
      case "Rating (dsc)":
        result.sort((a, b) => b.rating - a.rating);
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
  const constellationCourses = useMemo(() => {
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
  const handleCategoryClick = useCallback((category) => {
    setActiveFilter(category);
    setPageNumber(1);
  }, []);

  const handleFilterProfessional = useCallback(() => {
    setActiveFilter((prev) =>
      prev === "professional" ? "all" : "professional"
    );
    setPageNumber(1);
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
    setPageNumber(1);
  }, []);

  const handleAllCoursesClick = useCallback(() => {
    setActiveFilter("all");
    setSearchQuery("");
    setPageNumber(1);
  }, []);

  const getLevelLabel = useCallback((level) => {
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

  const renderCourseTitle = useCallback((course) => {
    if (course.professional) {
      return course.title;
    } else {
      return `${course.title} – ${course.level}`;
    }
  }, []);

  const openProgramModal = (program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeProgramModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  // Animation effects
  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 0.5 },
    });
  }, [controls]);

  // Render star rating
  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="star-icon filled" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStar key={i} className="star-icon half-filled" />);
      } else {
        stars.push(<FaRegStar key={i} className="star-icon" />);
      }
    }

    return <div className="rating-stars">{stars}</div>;
  };

  return (
    <div className="cosmic-explorer-ultra">
      {/* Animated cosmic background with particles */}
      <div className="cosmic-particle-bg">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="cosmic-particle"
            initial={{
              opacity: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            style={{
              background: `radial-gradient(circle, ${brandColors.accent} 0%, transparent 70%)`,
              width: `${1 + Math.random() * 5}px`,
              height: `${1 + Math.random() * 5}px`,
            }}
          />
        ))}
      </div>

      {/* Nebula overlay */}
      <div className="nebula-overlay">
        <div className="nebula-1" />
        <div className="nebula-2" />
        <div className="nebula-3" />
      </div>

      {/* Mobile menu button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FiX size={24} /> : <FiCompass size={24} />}
      </button>

      {/* Sidebar menu */}
      <motion.div
        className={`sidebar-menu ${isMenuOpen ? "open" : ""}`}
        initial={{ x: "-100%" }}
        animate={{ x: isMenuOpen ? "0" : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="sidebar-header">
          <h3>Program Explorer</h3>
        </div>
        <div className="sidebar-content">
          <div className="mobile-search">
            <div className="search-input">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search programs..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          <div className="sidebar-section">
            <h4>Categories</h4>
            <ul>
              <li>
                <button
                  className={activeFilter === "all" ? "active" : ""}
                  onClick={() => {
                    handleAllCoursesClick();
                    setIsMenuOpen(false);
                  }}
                >
                  All Programs
                </button>
              </li>
              {categories.map((cat, i) => (
                <li key={i}>
                  <button
                    className={activeFilter === cat ? "active" : ""}
                    onClick={() => {
                      handleCategoryClick(cat);
                      setIsMenuOpen(false);
                    }}
                  >
                    {cat}
                  </button>
                </li>
              ))}
              <li>
                <button
                  className={activeFilter === "professional" ? "active" : ""}
                  onClick={() => {
                    handleFilterProfessional();
                    setIsMenuOpen(false);
                  }}
                >
                  Professional Courses ({professionalCount})
                </button>
              </li>
            </ul>
          </div>

          {/* <div className="sidebar-section">
            <h4>Sort By</h4>
            <select
              value={currentSortingOption}
              onChange={(e) => setCurrentSortingOption(e.target.value)}
              className="sort-select"
            >
              {sortingOptions.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div> */}

          <div className="sidebar-section">
            <h4>View Mode</h4>
            <div className="view-toggle">
              <button
                className={viewMode === "grid" ? "active" : ""}
                onClick={() => setViewMode("grid")}
              >
                <FiGrid /> Grid
              </button>
              <button
                className={viewMode === "list" ? "active" : ""}
                onClick={() => setViewMode("list")}
              >
                <FiList /> List
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="main-content">
        {/* Header */}
        <motion.header
          className="cosmic-header-ultra"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="title-wrapper"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h1 className="cosmic-title">
              <span className="title-gradient">Explore</span> Our{" "}
              <span className="title-accent">Program Universe</span>
            </h1>
            <p className="cosmic-subtitle">
              Navigate through constellations of learning opportunities tailored
              for your future
            </p>
          </motion.div>

          {/* Search bar */}
          <div className="cosmic-search-container">
            <div className="cosmic-search-input">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search programs..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <div className="search-highlight" />
            </div>
          </div>

          {/* Category tabs */}
          <div className="tabs__controls cosmic-tabs">
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

          {/* Quick filters and controls */}
          <div className="cosmic-controls">
            <div className="quick-filters">
              <motion.button
                className={`cosmic-filter-btn ${
                  activeFilter === "all" ? "active" : ""
                }`}
                onClick={handleAllCoursesClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiCompass className="filter-icon" />
                All Programs
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

            <div className="view-sort-controls">
              {/* <div className="sort-select">
                <select
                  value={currentSortingOption}
                  onChange={(e) => setCurrentSortingOption(e.target.value)}
                >
                  {sortingOptions.map((option, i) => (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div> */}

              <div className="view-toggle">
                <button
                  className={viewMode === "grid" ? "active" : ""}
                  onClick={() => setViewMode("grid")}
                >
                  <FiGrid />
                </button>
                <button
                  className={viewMode === "list" ? "active" : ""}
                  onClick={() => setViewMode("list")}
                >
                  <FiList />
                </button>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Main content area */}
        <main className="cosmic-main-ultra">
          {/* Empty state */}
          {filteredData.length === 0 && (
            <motion.div
              className="empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="empty-icon">
                <FaGraduationCap size={48} />
              </div>
              <h3>No programs found</h3>
              <p>Try adjusting your search or filters</p>
              <button className="reset-btn" onClick={handleAllCoursesClick}>
                Reset filters
              </button>
            </motion.div>
          )}

          {/* Grid View */}
          {viewMode === "grid" && filteredData.length > 0 && (
            <div className="cosmic-grid-ultra">
              {paginatedData.map((program, i) => (
                <motion.div
                  key={program.id}
                  className="cosmic-course-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.05,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    y: -10,
                    boxShadow: `0 25px 50px ${brandColors.highlight}22`,
                  }}
                  onClick={() => openProgramModal(program)}
                >
                  <div className="course-card-inner">
                    <div className="course-image-wrapper">
                      <Image
                        width={400}
                        height={250}
                        src={program.imageSrc}
                        alt={program.title}
                        className="course-image"
                      />

                      {program.professional && (
                        <div className="professional-badge">
                          <FiAward />
                          Pro
                        </div>
                      )}

                      {program.popular && (
                        <div className="popular-badge">Popular</div>
                      )}
                    </div>

                    <div className="course-content">
                      <div className="course-school">{program.school}</div>
                      <h3 className="course-title">
                        {renderCourseTitle(program)}
                      </h3>
                      {/* <div className="course-meta">
                        <div className="course-rating">
                          {renderRating(program.rating)}
                          <span>{program.rating.toFixed(1)}</span>
                        </div>
                        {!program.professional && (
                          <span className="course-level">
                            {getLevelLabel(program.level)}
                          </span>
                        )}
                      </div> */}

                      <div className="course-footer">
                        <div className="course-duration">
                          {program.duration}
                        </div>
                        <div className="course-price">
                          ${program.discountedPrice.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* List View */}
          {viewMode === "list" && filteredData.length > 0 && (
            <div className="cosmic-list-view">
              {paginatedData.map((program, i) => (
                <motion.div
                  key={program.id}
                  className="list-course-card"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.05,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    x: 5,
                    boxShadow: `0 10px 30px ${brandColors.highlight}22`,
                  }}
                  onClick={() => openProgramModal(program)}
                >
                  <div className="list-card-inner">
                    <div className="list-image-wrapper">
                      <Image
                        width={200}
                        height={150}
                        src={program.imageSrc}
                        alt={program.title}
                        className="list-course-image"
                      />

                      {(program.professional || program.popular) && (
                        <div className="list-badges">
                          {program.professional && (
                            <div className="professional-badge">
                              <FiAward size={14} />
                              Pro
                            </div>
                          )}
                          {program.popular && (
                            <div className="popular-badge">Popular</div>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="list-content">
                      <div className="list-school">{program.school}</div>
                      <h3 className="list-title">
                        {renderCourseTitle(program)}
                      </h3>
                      <p className="list-description">{program.description}</p>

                      <div className="list-meta">
                        {/* <div className="list-rating">
                          {renderRating(program.rating)}
                          <span>{program.rating.toFixed(1)}</span>
                        </div> */}
                        <div className="list-duration">
                          <span>Duration:</span> {program.duration}
                        </div>
                        {!program.professional && (
                          <div className="list-level">
                            <span>Level:</span> {getLevelLabel(program.level)}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="list-price-col">
                      <div className="list-price">
                        ${program.discountedPrice.toLocaleString()}
                      </div>
                      <div className="list-explore">
                        <FiChevronRight />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {filteredData.length > 0 && (
            <div className="cosmic-pagination-ultra">
              <PaginationTwo
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                data={filteredData}
                pageCapacity={12}
              />
            </div>
          )}
        </main>
      </div>

      {/* Program Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProgram && (
          <motion.div
            className="program-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProgramModal}
          >
            <motion.div
              className="modal-content"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeProgramModal}>
                <FiX size={24} />
              </button>

              <div className="modal-header">
                <div className="modal-image">
                  <Image
                    width={600}
                    height={400}
                    src={selectedProgram.imageSrc}
                    alt={selectedProgram.title}
                  />
                </div>
                <div className="modal-header-content">
                  <div className="modal-school">{selectedProgram.school}</div>
                  <h2 className="modal-title">{selectedProgram.title}</h2>

                  <div className="modal-meta">
                    <div className="modal-rating">
                      {renderRating(selectedProgram.rating)}
                      <span>{selectedProgram.rating.toFixed(1)}</span>
                    </div>
                    <div className="modal-duration">
                      <span>Duration:</span> {selectedProgram.duration}
                    </div>
                    {!selectedProgram.professional && (
                      <div className="modal-level">
                        <span>Level:</span>{" "}
                        {getLevelLabel(selectedProgram.level)}
                      </div>
                    )}
                  </div>

                  <div className="modal-price">
                    ${selectedProgram.discountedPrice.toLocaleString()}
                  </div>

                  <Link
                    href={selectedProgram.href}
                    className="modal-enroll-btn"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>

              <div className="modal-body">
                <div className="modal-description">
                  <h3>Program Description</h3>
                  <p>{selectedProgram.description}</p>
                </div>

                <div className="modal-skills">
                  <h3>Skills You'll Learn</h3>
                  <div className="skills-grid">
                    {selectedProgram.skills.map((skill, i) => (
                      <div key={i} className="skill-tag">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global styles */}
      <style jsx global>{`
        :root {
          --primary: ${brandColors.primary};
          --secondary: ${brandColors.secondary};
          --accent: ${brandColors.accent};
          --light-text: ${brandColors.lightText};
          --dark-text: ${brandColors.darkText};
          --border: ${brandColors.border};
          --highlight: ${brandColors.highlight};
          --cosmic-purple: ${brandColors.cosmicPurple};
          --cosmic-blue: ${brandColors.cosmicBlue};
          --cosmic-pink: ${brandColors.cosmicPink};
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          overflow-x: hidden;
        }

        .cosmic-explorer-ultra {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(
            135deg,
            ${brandColors.primary} 0%,
            ${brandColors.secondary} 100%
          );
          color: ${brandColors.lightText};
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
          overflow-x: hidden;
          padding-bottom: 60px;
        }

        /* Cosmic background effects */
        .cosmic-particle-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .cosmic-particle {
          position: absolute;
          border-radius: 50%;
          filter: blur(0.5px);
          will-change: transform, opacity;
        }

        .nebula-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
          opacity: 0.3;
        }

        .nebula-1,
        .nebula-2,
        .nebula-3 {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
        }

        .nebula-1 {
          width: 300px;
          height: 300px;
          background: radial-gradient(
            circle,
            ${brandColors.cosmicPurple} 0%,
            transparent 70%
          );
          top: 20%;
          left: 10%;
          animation: float 15s ease-in-out infinite;
        }

        .nebula-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(
            circle,
            ${brandColors.cosmicBlue} 0%,
            transparent 70%
          );
          bottom: 10%;
          right: 10%;
          animation: float 20s ease-in-out infinite reverse;
        }

        .nebula-3 {
          width: 250px;
          height: 250px;
          background: radial-gradient(
            circle,
            ${brandColors.cosmicPink} 0%,
            transparent 70%
          );
          top: 50%;
          right: 20%;
          animation: float 18s ease-in-out infinite 2s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(50px, 50px);
          }
        }

        /* Mobile menu */
        .mobile-menu-btn {
          position: fixed;
          top: 20px;
          left: 20px;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid ${brandColors.border};
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${brandColors.lightText};
          cursor: pointer;
          transition: all 0.3s ease;
          display: none;
        }

        .mobile-menu-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        /* Sidebar menu */
        .sidebar-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 300px;
          height: 100vh;
          background: rgba(66, 5, 22, 0.95);
          backdrop-filter: blur(20px);
          z-index: 999;
          padding: 20px;
          overflow-y: auto;
          box-shadow: 5px 0 30px rgba(0, 0, 0, 0.3);
          border-right: 1px solid ${brandColors.border};
        }

        .sidebar-header {
          padding: 20px 0;
          border-bottom: 1px solid ${brandColors.border};
          margin-bottom: 20px;
        }

        .sidebar-header h3 {
          color: ${brandColors.lightText};
          font-size: 1.5rem;
          font-weight: 600;
        }

        .sidebar-content {
          padding: 10px 0;
        }

        .sidebar-section {
          margin-bottom: 30px;
        }

        .sidebar-section h4 {
          color: ${brandColors.lightText};
          margin-bottom: 15px;
          font-size: 1.1rem;
          font-weight: 500;
          opacity: 0.8;
        }

        .sidebar-section ul {
          list-style: none;
        }

        .sidebar-section ul li {
          margin-bottom: 10px;
        }

        .sidebar-section ul li button {
          background: none;
          border: none;
          color: ${brandColors.lightText};
          font-size: 1rem;
          cursor: pointer;
          padding: 8px 15px;
          border-radius: 8px;
          width: 100%;
          text-align: left;
          transition: all 0.3s ease;
        }

        .sidebar-section ul li button:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .sidebar-section ul li button.active {
          background: linear-gradient(
            90deg,
            ${brandColors.highlight},
            ${brandColors.accent}
          );
          color: ${brandColors.darkText};
          font-weight: 500;
        }

        .mobile-search {
          margin-bottom: 30px;
        }

        .search-input {
          position: relative;
          width: 100%;
        }

        .search-input input {
          width: 100%;
          padding: 12px 20px 12px 45px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid ${brandColors.border};
          color: ${brandColors.lightText};
          font-size: 1rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }

        .search-input input:focus {
          outline: none;
          box-shadow: 0 0 0 2px ${brandColors.accent}4D;
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

        .sort-select select {
          width: 100%;
          padding: 10px 15px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid ${brandColors.border};
          color: ${brandColors.lightText};
          font-size: 1rem;
          cursor: pointer;
        }

        .sort-select select:focus {
          outline: none;
          box-shadow: 0 0 0 2px ${brandColors.accent}4D;
        }

        .view-toggle {
          display: flex;
          gap: 10px;
          margin-top: 15px;
        }

        .view-toggle button {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid ${brandColors.border};
          color: ${brandColors.lightText};
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .view-toggle button:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .view-toggle button.active {
          background: linear-gradient(
            90deg,
            ${brandColors.highlight},
            ${brandColors.accent}
          );
          color: ${brandColors.darkText};
        }

        /* Main content */
        .main-content {
          position: relative;
          z-index: 2;
          padding: 40px 5vw;
          margin-left: 0;
          transition: margin-left 0.3s ease;
        }

        .sidebar-menu.open + .main-content {
          margin-left: 300px;
        }

        /* Header styles */
        .cosmic-header-ultra {
          padding: 60px 0 40px;
          text-align: center;
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
        }

        .title-wrapper {
          display: inline-block;
          margin-bottom: 40px;
          cursor: default;
        }

        .cosmic-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 15px;
          line-height: 1.2;
          background: linear-gradient(
            90deg,
            ${brandColors.lightText},
            ${brandColors.accent}
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          letter-spacing: -0.5px;
        }

        .title-gradient {
          background: linear-gradient(
            90deg,
            ${brandColors.accent},
            ${brandColors.cosmicPink}
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .title-accent {
          background: linear-gradient(
            90deg,
            ${brandColors.accent},
            ${brandColors.lightText}
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .cosmic-subtitle {
          font-size: 1.2rem;
          opacity: 0.8;
          margin: 0;
          color: ${brandColors.lightText};
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Search styles */
        .cosmic-search-container {
          max-width: 700px;
          margin: 0 auto 40px;
          position: relative;
        }

        .cosmic-search-input {
          position: relative;
          width: 100%;
        }

        .cosmic-search-input input {
          width: 100%;
          padding: 16px 25px 16px 50px;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid ${brandColors.border};
          color: ${brandColors.lightText};
          font-size: 1.1rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }

        .cosmic-search-input input:focus {
          outline: none;
          box-shadow: 0 0 0 3px ${brandColors.accent}4D,
            0 10px 30px rgba(0, 0, 0, 0.2);
          background: rgba(255, 255, 255, 0.15);
        }

        .search-highlight {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            ${brandColors.accent},
            ${brandColors.cosmicPink}
          );
          transition: width 0.3s ease;
        }

        .cosmic-search-input input:focus ~ .search-highlight {
          width: 90%;
        }

        .search-icon {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          color: ${brandColors.lightText};
          opacity: 0.7;
          font-size: 1.2rem;
        }

        /* Tab buttons */
        .cosmic-tabs {
          margin-bottom: 30px;
          gap: 15px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cosmic-tab-btn {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid ${brandColors.border};
          backdrop-filter: blur(8px);
          padding: 12px 25px;
          font-weight: 600;
          color: ${brandColors.lightText};
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
          z-index: 1;
          font-size: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
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
          box-shadow: 0 8px 25px rgba(139, 30, 63, 0.3);
        }

        .cosmic-tab-btn.active {
          background: linear-gradient(
            90deg,
            ${brandColors.highlight},
            ${brandColors.accent}
          );
          color: ${brandColors.darkText};
          border-color: transparent;
          box-shadow: 0 8px 25px rgba(139, 30, 63, 0.4);
        }

        /* Controls section */
        .cosmic-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 40px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .quick-filters {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
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
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .cosmic-filter-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .cosmic-filter-btn.active {
          background: linear-gradient(
            90deg,
            ${brandColors.highlight},
            ${brandColors.accent}
          );
          border-color: transparent;
          color: ${brandColors.darkText};
          box-shadow: 0 8px 25px rgba(139, 30, 63, 0.4);
        }

        .filter-icon {
          font-size: 1.1rem;
        }

        .view-sort-controls {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .view-sort-controls .sort-select select {
          padding: 10px 15px;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid ${brandColors.border};
          color: ${brandColors.lightText};
          font-size: 1rem;
          cursor: pointer;
          backdrop-filter: blur(5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .view-sort-controls .sort-select select:focus {
          outline: none;
          box-shadow: 0 0 0 3px ${brandColors.accent}4D,
            0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .view-sort-controls .view-toggle {
          display: flex;
          gap: 10px;
          margin-top: 0;
        }

        .view-sort-controls .view-toggle button {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid ${brandColors.border};
          color: ${brandColors.lightText};
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .view-sort-controls .view-toggle button:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .view-sort-controls .view-toggle button.active {
          background: linear-gradient(
            90deg,
            ${brandColors.highlight},
            ${brandColors.accent}
          );
          color: ${brandColors.darkText};
          box-shadow: 0 8px 25px rgba(139, 30, 63, 0.4);
        }

        /* Main content styles */
        .cosmic-main-ultra {
          position: relative;
          padding: 0 0 80px;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Empty state */
        .empty-state {
          text-align: center;
          padding: 80px 20px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid ${brandColors.border};
          max-width: 600px;
          margin: 0 auto;
        }

        .empty-icon {
          margin-bottom: 20px;
          color: ${brandColors.accent};
        }

        .empty-state h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: ${brandColors.lightText};
        }

        .empty-state p {
          margin-bottom: 20px;
          opacity: 0.8;
        }

        .reset-btn {
          padding: 12px 25px;
          background: linear-gradient(
            90deg,
            ${brandColors.highlight},
            ${brandColors.accent}
          );
          border-radius: 50px;
          color: ${brandColors.darkText};
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .reset-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(139, 30, 63, 0.4);
        }

        /* Grid View Styles */
        .cosmic-grid-ultra {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
          padding: 0;
        }

        .cosmic-course-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid ${brandColors.border};
          backdrop-filter: blur(10px);
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .course-card-inner {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .course-image-wrapper {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .course-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .cosmic-course-card:hover .course-image {
          transform: scale(1.1);
        }

        .professional-badge {
          position: absolute;
          right: 15px;
          top: 15px;
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 5px 12px;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          background: rgba(224, 85, 0, 0.2);
          color: ${brandColors.accent};
          border: 1px solid rgba(224, 85, 0, 0.3);
          backdrop-filter: blur(5px);
          z-index: 2;
        }

        .popular-badge {
          position: absolute;
          left: 15px;
          top: 15px;
          padding: 5px 12px;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          background: rgba(255, 154, 158, 0.2);
          color: ${brandColors.lightText};
          border: 1px solid rgba(255, 154, 158, 0.3);
          backdrop-filter: blur(5px);
          z-index: 2;
        }

        .course-content {
          padding: 25px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .course-school {
          font-size: 0.9rem;
          color: ${brandColors.accent};
          margin-bottom: 10px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .course-title {
          font-size: 1.3rem;
          margin: 0 0 15px;
          line-height: 1.4;
          color: ${brandColors.lightText};
          font-weight: 600;
        }

        .course-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .course-rating {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .rating-stars {
          display: flex;
          gap: 2px;
        }

        .star-icon {
          color: ${brandColors.accent};
          font-size: 0.9rem;
        }

        .star-icon.filled {
          color: ${brandColors.accent};
        }

        .star-icon.half-filled {
          position: relative;
        }

        .star-icon.half-filled::after {
          content: "★";
          position: absolute;
          left: 0;
          width: 50%;
          overflow: hidden;
          color: ${brandColors.accent};
        }

        .course-rating span {
          font-size: 0.9rem;
          font-weight: 600;
          color: ${brandColors.lightText};
          opacity: 0.8;
        }

        .course-level {
          padding: 4px 10px;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.1);
          color: ${brandColors.lightText};
        }

        .course-footer {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .course-duration {
          font-size: 0.9rem;
          color: ${brandColors.lightText};
          opacity: 0.8;
        }

        .course-price {
          font-size: 1.2rem;
          font-weight: 700;
          color: ${brandColors.lightText};
          background: linear-gradient(
            90deg,
            ${brandColors.accent},
            ${brandColors.cosmicPink}
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* List View Styles */
        .cosmic-list-view {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .list-course-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid ${brandColors.border};
          backdrop-filter: blur(10px);
          cursor: pointer;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .list-card-inner {
          display: flex;
          height: 100%;
        }

        .list-image-wrapper {
          width: 250px;
          height: 200px;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }

        .list-course-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .list-course-card:hover .list-course-image {
          transform: scale(1.05);
        }

        .list-badges {
          position: absolute;
          top: 15px;
          left: 15px;
          display: flex;
          gap: 10px;
          z-index: 2;
        }

        .list-badges .professional-badge,
        .list-badges .popular-badge {
          position: static;
          margin: 0;
        }

        .list-content {
          padding: 25px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .list-school {
          font-size: 0.9rem;
          color: ${brandColors.accent};
          margin-bottom: 8px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .list-title {
          font-size: 1.4rem;
          margin: 0 0 15px;
          line-height: 1.3;
          color: ${brandColors.lightText};
          font-weight: 600;
        }

        .list-description {
          margin: 0 0 20px;
          color: ${brandColors.lightText};
          opacity: 0.8;
          line-height: 1.6;
          font-size: 0.95rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .list-meta {
          display: flex;
          gap: 20px;
          margin-top: auto;
          flex-wrap: wrap;
        }

        .list-rating {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .list-rating .rating-stars {
          gap: 3px;
        }

        .list-rating .star-icon {
          font-size: 1rem;
        }

        .list-rating span {
          font-size: 0.95rem;
          font-weight: 600;
          color: ${brandColors.lightText};
        }

        .list-duration,
        .list-level {
          font-size: 0.95rem;
          color: ${brandColors.lightText};
          opacity: 0.8;
        }

        .list-duration span,
        .list-level span {
          opacity: 0.6;
        }

        .list-price-col {
          width: 150px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 25px;
          background: rgba(255, 255, 255, 0.03);
          border-left: 1px solid ${brandColors.border};
        }

        .list-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: ${brandColors.lightText};
          margin-bottom: 15px;
          text-align: center;
          background: linear-gradient(
            90deg,
            ${brandColors.accent},
            ${brandColors.cosmicPink}
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .list-explore {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            90deg,
            ${brandColors.highlight},
            ${brandColors.accent}
          );
          color: ${brandColors.darkText};
          transition: all 0.3s ease;
        }

        .list-course-card:hover .list-explore {
          transform: translateX(5px);
        }

        /* Pagination */
        .cosmic-pagination-ultra {
          margin-top: 60px;
          display: flex;
          justify-content: center;
        }

        /* Program Detail Modal */
        .program-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          overflow-y: auto;
        }

        .modal-content {
          width: 100%;
          max-width: 1000px;
          background: linear-gradient(
            135deg,
            ${brandColors.primary} 0%,
            ${brandColors.secondary} 100%
          );
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          border: 1px solid ${brandColors.border};
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid ${brandColors.border};
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${brandColors.lightText};
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .modal-close:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(90deg);
        }

        .modal-header {
          display: flex;
          position: relative;
        }

        .modal-image {
          width: 40%;
          height: 400px;
          position: relative;
        }

        .modal-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-header-content {
          width: 60%;
          padding: 40px;
          display: flex;
          flex-direction: column;
        }

        .modal-school {
          font-size: 1rem;
          color: ${brandColors.accent};
          margin-bottom: 10px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .modal-title {
          font-size: 2rem;
          margin: 0 0 20px;
          line-height: 1.3;
          color: ${brandColors.lightText};
          font-weight: 700;
        }

        .modal-meta {
          display: flex;
          gap: 30px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .modal-rating {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .modal-rating .rating-stars {
          gap: 3px;
        }

        .modal-rating .star-icon {
          font-size: 1.2rem;
        }

        .modal-rating span {
          font-size: 1.1rem;
          font-weight: 600;
          color: ${brandColors.lightText};
        }

        .modal-duration,
        .modal-level {
          font-size: 1.1rem;
          color: ${brandColors.lightText};
        }

        .modal-duration span,
        .modal-level span {
          opacity: 0.7;
        }

        .modal-price {
          font-size: 2rem;
          font-weight: 700;
          color: ${brandColors.lightText};
          margin-top: auto;
          margin-bottom: 20px;
          background: linear-gradient(
            90deg,
            ${brandColors.accent},
            ${brandColors.cosmicPink}
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .modal-enroll-btn {
          padding: 15px 30px;
          background: linear-gradient(
            90deg,
            ${brandColors.highlight},
            ${brandColors.accent}
          );
          border-radius: 50px;
          color: ${brandColors.darkText};
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          text-align: center;
          font-size: 1.1rem;
          align-self: flex-start;
        }

        .modal-enroll-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(139, 30, 63, 0.4);
        }

        .modal-body {
          padding: 40px;
          display: flex;
          gap: 40px;
        }

        .modal-description {
          flex: 2;
        }

        .modal-description h3,
        .modal-skills h3 {
          font-size: 1.5rem;
          margin-bottom: 20px;
          color: ${brandColors.lightText};
          font-weight: 600;
        }

        .modal-description p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: ${brandColors.lightText};
          opacity: 0.9;
        }

        .modal-skills {
          flex: 1;
        }

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skill-tag {
          padding: 8px 15px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          font-size: 0.9rem;
          color: ${brandColors.lightText};
          border: 1px solid ${brandColors.border};
        }

        /* Responsive styles */
        @media (max-width: 1200px) {
          .modal-header {
            flex-direction: column;
          }

          .modal-image {
            width: 100%;
            height: 300px;
          }

          .modal-header-content {
            width: 100%;
            padding: 30px;
          }

          .modal-body {
            flex-direction: column;
            padding: 30px;
            gap: 30px;
          }
        }

        @media (max-width: 992px) {
          .main-content {
            padding: 40px 20px;
          }

          .list-card-inner {
            flex-direction: column;
          }

          .list-image-wrapper {
            width: 100%;
            height: 200px;
          }

          .list-price-col {
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            border-left: none;
            border-top: 1px solid ${brandColors.border};
          }

          .list-price {
            margin-bottom: 0;
          }
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex;
          }

          .sidebar-menu.open + .main-content {
            margin-left: 0;
          }

          .cosmic-controls {
            flex-direction: column;
            align-items: flex-start;
          }

          .view-sort-controls {
            width: 100%;
            justify-content: space-between;
          }

          .modal-content {
            max-height: 95vh;
          }

          .modal-title {
            font-size: 1.6rem;
          }

          .modal-meta {
            gap: 20px;
          }

          .modal-price {
            font-size: 1.6rem;
          }

          .modal-enroll-btn {
            width: 100%;
          }
        }

        @media (max-width: 576px) {
          .cosmic-header-ultra {
            padding: 40px 0 20px;
          }

          .cosmic-title {
            font-size: 2rem;
          }

          .cosmic-subtitle {
            font-size: 1rem;
          }

          .cosmic-tabs {
            gap: 10px;
          }

          .cosmic-tab-btn {
            padding: 10px 15px;
            font-size: 0.9rem;
          }

          .cosmic-filter-btn {
            padding: 10px 15px;
            font-size: 0.9rem;
          }

          .cosmic-grid-ultra {
            grid-template-columns: 1fr;
          }

          .program-modal {
            padding: 20px;
          }

          .modal-header-content {
            padding: 25px;
          }

          .modal-body {
            padding: 25px;
          }

          .modal-description h3,
          .modal-skills h3 {
            font-size: 1.3rem;
          }

          .modal-description p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
