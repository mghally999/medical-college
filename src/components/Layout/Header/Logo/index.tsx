"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/" className={`block ${className || ""}`}>
      <span className="relative block h-full w-auto">
        {/* Light Logo */}
        <Image
          src="/images/logo/logo.png"
          alt="Logo"
          width={150}
          height={50}
          quality={100}
          className="dark:hidden"
        />

        {/* Dark Logo */}
        <Image
          src="/images/logo/logo-white.png"
          alt="Logo"
          width={150}
          height={50}
          quality={100}
          className="hidden dark:block"
        />
      </span>
    </Link>
  );
};

export default Logo;
