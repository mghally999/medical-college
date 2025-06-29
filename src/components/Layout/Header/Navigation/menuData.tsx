import { HeaderItem } from "../../../../types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/services" }, // originally Services

  {
    label: "Programs Shop",
    href: "#",
    submenu: [
      { label: "Doctors", href: "/doctors" },
      { label: "Doctor details", href: "/doctors/Dr-Jessica-Joan" },
    ],
  },

  {
    label: "LMS",
    href: "#",
    submenu: [
      { label: "Blog grid", href: "/blogs" },
      { label: "Blog details", href: "/blogs/Blog_1" },
    ],
  },

  { label: "E-Learning", href: "/about" },
  { label: "Blog", href: "/contact" },
];
