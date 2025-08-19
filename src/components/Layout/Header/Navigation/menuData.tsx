// data/headerData.ts
import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "About Us",
    href: "/about",
    submenu: [
      { id: 21, label: "Our Story", href: "/about" },
      { id: 22, label: "Who We Are", href: "/about/who-we-are" },
      { id: 23, label: "Our Mission", href: "/about/our-mission" },
      { id: 24, label: "Our Values", href: "/about/our-values" },
      {
        id: 25,
        label: "Our Accreditation & Recognitions",
        href: "/about/accreditation",
      },
      { id: 26, label: "Why CSEI Medical College?", href: "/about/why-csei" },
    ],
  },
  {
    id: 3,
    label: "Programs",
    href: "/programs",
    submenu: [
      {
        id: 31,
        label: "Overview",
        href: "/programs",
      },
      {
        id: 35,
        label: "AMCA",
        href: "/programs/amca",
        submenu: [
          {
            id: 351,
            label: "Dental Support Technician Certificate",
            href: "/programs/amca/dental-support-technician",
          },
          {
            id: 352,
            label: "Medical Administrative Assistant Certificate",
            href: "/programs/amca/medical-administrative-assistant",
          },
          {
            id: 353,
            label: "Medical Assistant Certificate",
            href: "/programs/amca/medical-assistant",
          },
          {
            id: 354,
            label: "Medical Coder and Biller Certificate",
            href: "/programs/amca/medical-coder-biller",
          },
          {
            id: 355,
            label: "Mental Health Technician Certificate",
            href: "/programs/amca/mental-health-technician",
          },
          {
            id: 356,
            label: "Phlebotomy Technician Certificate",
            href: "/programs/amca/phlebotomy-technician",
          },
        ],
      },
      {
        id: 34,
        label: "One Day Certification Courses",
        href: "/programs/one-day",
        submenu: [
          {
            id: 341,
            label: "Basic Life Support (BLS)",
            href: "/programs/one-day-certification/bls",
          },
          {
            id: 342,
            label: "Pain Management (PM)",
            href: "/programs/one-day-certification/pain-management",
          },
          {
            id: 343,
            label: "Infection Control (IC)",
            href: "/programs/one-day-certification/infection-control",
          },
        ],
      },
      {
        id: 32,
        label: "Nursing Programs",
        href: "/programs/nursing",
        submenu: [
          {
            id: 321,
            label: "Registered Nursing - Bachelor of Science (RN - BSN)",
            href: "/programs/nursing/rn-bsn",
          },
          {
            id: 322,
            label: "Assistant Nursing (American)",
            href: "/programs/nursing/assistant-nursing",
          },
        ],
      },
      {
        id: 33,
        label: "Health and Social Care",
        href: "/programs/health-social-care",
        submenu: [
          {
            id: 331,
            label: "Bachelor of Arts in Health & Social Care",
            href: "/programs/health-social-care/ba-hsc",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Apply Now",
    href: "#",
    submenu: [
      { id: 41, label: "Admissions Overview", href: "/admission" },
      { id: 42, label: "Apply Now", href: "/admission/apply-now" },
      {
        id: 43,
        label: "Admission Process",
        href: "/admission/admission-process",
      },
      { id: 44, label: "Arrival Support", href: "/admission/arrival-support" },
      {
        id: 45,
        label: "International Students",
        href: "/admission/international-students",
      },
      { id: 46, label: "Tuition and Fees", href: "/admission/tuition-fees" },
      {
        id: 47,
        label: "Financial Aid & Scholarships",
        href: "/admission/financial-aid-scholarships",
      },
      { id: 48, label: "Student Voice", href: "/admission/student-voice" },
    ],
  },
  // {
  //   id: 5,
  //   label: "Placements",
  //   href: "#",
  //   submenu: [
  //     { id: 51, label: "Placement Overview", href: "/placements" },
  //     { id: 52, label: "Objective", href: "/placements/objectives" },
  //     { id: 53, label: "Briefing", href: "/placements/briefing" },
  //     {
  //       id: 54,
  //       label: "Why Recruit CSEI Students",
  //       href: "/placements/why-csei",
  //     },
  //     { id: 55, label: "Our Services", href: "/placements/services" },
  //     {
  //       id: 56,
  //       label: "Student Satisfaction",
  //       href: "/placements/highlights/student-satisfaction",
  //     },
  //     {
  //       id: 57,
  //       label: "Opportunities Generated",
  //       href: "/placements/highlights/opportunities-generated",
  //     },
  //     { id: 58, label: "Our Industry Partners", href: "/placements/partners" },
  //     { id: 59, label: "Partner With Us", href: "/placements/partner-with-us" },
  //   ],
  // },
  {
    id: 6,
    label: "Contact Us",
    href: "/contact-us",
  },
];
