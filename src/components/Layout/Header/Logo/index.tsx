"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps extends React.HTMLAttributes<HTMLAnchorElement> {
  className?: string;
  style?: React.CSSProperties;
}

const Logo: React.FC<LogoProps> = ({ className, style, ...rest }) => {
  return (
    <Link
      href="/"
      className={`block ${className || ""}`}
      style={style}
      {...rest}
    >
      <div className="relative w-[150px] h-[50px]">
        {/* Light Mode Logo */}
        <Image
          src="/images/logo/logo.png"
          alt="Logo"
          fill
          quality={100}
          className="dark:hidden object-contain"
        />

        {/* Dark Mode Logo */}
        <Image
          src="/images/logo/logo-white.png"
          alt="Logo"
          fill
          quality={100}
          className="hidden dark:block object-contain"
        />
      </div>
    </Link>
  );
};

export default Logo;
