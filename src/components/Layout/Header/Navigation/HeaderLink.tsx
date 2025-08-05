"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderItem {
  id: number;
  label: string;
  href: string;
  newTab?: boolean;
  submenu?: HeaderItem[];
}

interface HeaderLinkProps {
  item: HeaderItem;
  style?: React.CSSProperties;
  className?: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ item, style, className }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();

  const handleMouseEnter = () => {
    if (item.submenu?.length) {
      setSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  const isActive =
    path === item.href || path.startsWith(`/${item.label.toLowerCase()}`);

  return (
    <li
      className={`relative group`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      <Link
        href={item.href}
        className={`text-base py-2 flex items-center gap-1 transition-all duration-200 ${
          isActive ? "text-primary" : "text-black"
        } hover:text-primary ${className || ""}`}
        target={item.newTab ? "_blank" : "_self"}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>

      {submenuOpen && item.submenu && (
        <div className="absolute left-0 top-full mt-2 w-60 bg-white shadow-lg rounded-lg z-50">
          {item.submenu.map((subItem) => (
            <Link
              key={subItem.id}
              href={subItem.href}
              className={`block px-4 py-2 text-sm text-black hover:bg-gray-200 transition-all duration-150 ${
                path === subItem.href ? "bg-primary text-white" : ""
              }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};

export default HeaderLink;
