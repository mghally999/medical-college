import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname } from "next/navigation";

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();
  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  return (
    <li
      className={`${item?.submenu ? "relative" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className={`text-base text-black dark:text-black py-2 flex hover:text-primary dark:hover:text-primary ${
          path.startsWith(`/${item.label.toLowerCase()}`)
            ? "text-primary dark:!text-primary"
            : null
        } ${path === item.href ? "text-primary dark:text-primary" : "  "}`}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
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
      {submenuOpen && (
        <div
          className="absolute py-2 left-0 mt-0.5 top-8 w-60 bg-white !bg-white shadow-lg rounded-lg"
          data-aos="fade-up"
          data-aos-duration="300"
        >
          {item.submenu?.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block px-4 py-2 text-black dark:text-black dark:hover:bg-midnight_text hover:bg-gray-200 ${
                path === subItem.href
                  ? "bg-primary dark:hover:text-white dark:hover:bg-primary hover:bg-primary hover:text-white text-white dark:bg-primary dark:text-white"
                  : null
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
