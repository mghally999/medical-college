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
      <div className="relative w-[350px] h-[130px]">
        <Image
          src="/images/logo/logo.png"
          alt="CS Medical Logo"
          fill
          quality={100}
          className="object-contain translate-y-[-35px]"
        />
      </div>
    </Link>
  );
};

export default Logo;
