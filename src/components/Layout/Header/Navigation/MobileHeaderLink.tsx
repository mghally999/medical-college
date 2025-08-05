"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderItem } from "@/types/menu"; // adjust path if needed

interface MobileHeaderLinkProps {
  item: HeaderItem;
  style?: any;
}

const MobileHeaderLink: React.FC<MobileHeaderLinkProps> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmenuOpen(!submenuOpen);
  };

  const isActive = path === item.href || path.startsWith(item.href + "/");

  return (
    <div className="w-full">
      <Link
        href={item.href}
        onClick={item.submenu ? handleToggle : undefined}
        className={`flex items-center justify-between w-full py-2 px-4 rounded-md text-sm font-medium transition-colors ${
          isActive
            ? "bg-primary text-white dark:bg-primary dark:text-white"
            : "text-black dark:text-white/70 hover:bg-gray-100 dark:hover:bg-gray-800"
        }`}
      >
        <span>{item.label}</span>
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-300 ${
              submenuOpen ? "rotate-180" : ""
            }`}
            width="1.25em"
            height="1.25em"
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
        <div className="pl-4 pr-2 py-1 bg-white dark:bg-zinc-900 rounded-md shadow-sm mt-1 space-y-1">
          {item.submenu.map((subItem, index) => {
            const isSubActive =
              path === subItem.href || path.startsWith(subItem.href + "/");
            return (
              <Link
                key={index}
                href={subItem.href}
                className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                  isSubActive
                    ? "bg-primary text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {subItem.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
