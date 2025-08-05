import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
    submenu: [
      { label: "Our Story", href: "/about" }, // default page
      { label: "Who We Are", href: "/about/who-we-are" },
      { label: "Our Mission", href: "/about/our-mission" },
      { label: "Our Values", href: "/about/our-values" },
      {
        label: "Our Accreditation & Recognitions",
        href: "/about/accreditation",
      },
      { label: "Why CSEI Medical College?", href: "/about/why-csei" },
    ],
  },
  {
    label: "Programs",
    href: "/programs",
    submenu: [
      {
        label: "Overview",
        href: "/programs",
      },
      {
        label: "Nursing Programs",
        href: "#",
        submenu: [
          {
            label: "Registered Nursing - Bachelor of Science (RN - BSN)",
            href: "/programs/nursing/rn-bsn",
          },
          {
            label: "Assistant Nursing (American)",
            href: "/programs/nursing/assistant-nursing",
          },
        ],
      },
      {
        label: "Health and Social Care",
        href: "#",
        submenu: [
          {
            label: "Level 3 Diploma in Health and Social Care",
            href: "/programs/health-social-care/level-3",
          },
          {
            label: "Level 4 Diploma in Health and Social Care",
            href: "/programs/health-social-care/level-4",
          },
          {
            label: "Level 5 Diploma in Health and Social Care",
            href: "/programs/health-social-care/level-5",
          },
          {
            label: "Professional Certificate in Health and Social Care",
            href: "/programs/health-social-care/professional",
          },
        ],
      },
      {
        label: "One Day Certification Courses",
        href: "#",
        submenu: [
          { label: "Basic Life Support (BLS)", href: "/programs/one-day/bls" },
          {
            label: "Pain Management (PM)",
            href: "/programs/one-day/pain-management",
          },
          {
            label: "Infection Control (IC)",
            href: "/programs/one-day/infection-control",
          },
        ],
      },
    ],
  },
  {
    label: "Apply Now",
    href: "#",
    submenu: [
      { label: "Admissions Overview", href: "/admission" },
      { label: "Apply Now", href: "/admission/apply-now" },
      { label: "Admission Process", href: "/admission/admission-process" },
      { label: "Arrival Support", href: "/admission/arrival-support" },
      {
        label: "International Students",
        href: "/admission/international-students",
      },
      { label: "Tuition and Fees", href: "/admission/tuition-fees" },
      {
        label: "Financial Aid & Scholarships",
        href: "/admission/financial-aid-scholarships",
      },
      { label: "Student Voice", href: "/admission/student-voice" },
    ],
  },
  {
    label: "Placements",
    href: "#",
    submenu: [
      { label: "Placement Overview", href: "/placements" },
      { label: "Objective", href: "/placements/objectives" },
      { label: "Briefing", href: "/placements/briefing" },
      { label: "Why Recruit CSEI Students", href: "/placements/why-csei" },
      { label: "Our Services", href: "/placements/services" },
      {
        label: "Student Satisfaction",
        href: "/placements/highlights/student-satisfaction",
      },
      {
        label: "Opportunities Generated",
        href: "/placements/highlights/opportunities-generated",
      },
      { label: "Our Industry Partners", href: "/placements/partners" },
      { label: "Partner With Us", href: "/placements/partner-with-us" },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];
