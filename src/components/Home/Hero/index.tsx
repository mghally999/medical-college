"use client";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Vimeo Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://player.vimeo.com/video/763851966?autoplay=1&muted=1&autopause=0&controls=0&loop=1&background=1"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          className="w-full h-full absolute top-0 left-0 pointer-events-none"
        ></iframe>
      </div>

      {/* Gradient Overlay with Brand Colors */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#420516]/90 via-black/50 to-transparent" />

      {/* Content Positioned at Bottom */}
      <div className="relative z-20 flex items-end justify-center h-full px-4 pb-20">
        <div className="text-center text-white max-w-3xl" data-aos="fade-up">
          <h2 className="text-[40px] md:text-[50px] font-bold leading-tight">
            Start your Healthcare Education
          </h2>
          <p
            className="mt-4 mb-8 text-lg md:text-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            CS Medical College Ltd, UK, offers an exceptional opportunity for
            individuals passionate about healthcare education.
          </p>
          <div
            className="flex justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link
              href="#"
              className="bg-[#6A0D1B] hover:bg-[#8A1A2B] px-6 py-4 rounded-lg text-white transition-all"
            >
              Discover more
            </Link>
            <Link
              href="#"
              className="border border-white px-6 py-4 rounded-lg text-white hover:bg-white hover:text-black transition-all"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
