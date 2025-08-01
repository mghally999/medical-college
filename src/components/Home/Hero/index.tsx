"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden font-sans bg-black">
      {/* Background Vimeo Video */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://player.vimeo.com/video/763851966?autoplay=1&muted=1&autopause=0&controls=0&loop=1&background=1"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          className="w-full h-full absolute top-0 left-0 pointer-events-none"
        ></iframe>
      </div>

      {/* Aurora & Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0f0c29]/90 via-[#420516]/60 to-transparent backdrop-blur-sm">
        <div className="absolute -top-24 left-1/2 w-[200%] h-[300px] bg-gradient-to-r from-[#ff512f88] via-[#dd247688] to-[#42051688] blur-[80px] opacity-30 rotate-[8deg]" />
      </div>

      {/* Floating Credibility Badges */}
      <div className="absolute top-6 left-6 z-30 flex gap-2 items-center">
        {["KHDA", "UK ACCREDITED", "OTHM"].map((label, idx) => (
          <div
            key={idx}
            className="bg-white/90 text-black px-3 py-1 text-xs font-bold rounded-full shadow-md uppercase tracking-wide hover:scale-105 transition"
          >
            {label}
          </div>
        ))}
      </div>

      {/* Floating Quick Enquiry Button */}
      <div className="absolute top-6 right-6 z-30">
        <Link
          href="/contact"
          className="bg-white text-[#420516] font-semibold px-5 py-2 rounded-full shadow-xl hover:bg-[#420516] hover:text-white transition-all"
        >
          Quick Enquiry
        </Link>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 text-center">
        <div className="text-white max-w-3xl" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#ff8a00] to-white animate-text-shimmer">
            Shape Your Future <br /> at CSEI Academy
          </h1>
          <p
            className="text-lg md:text-xl text-white/90 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Accredited UK Diplomas • Career Pathways in Dubai • 100% Student
            Support
          </p>
          <div
            className="flex justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link
              href="#programs"
              className="bg-[#FF5E00] hover:bg-[#e35200] px-6 py-4 rounded-lg text-white font-semibold text-sm md:text-base shadow-xl transition-all"
            >
              Explore Programs
            </Link>
            <Link
              href="/life-with-csei"
              className="border border-white px-6 py-4 rounded-lg text-white hover:bg-white hover:text-black font-semibold text-sm md:text-base transition-all"
            >
              Life at CSEI
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 text-white text-sm animate-bounce flex flex-col items-center">
        <FaArrowDown className="text-xl mb-1" />
        <span className="opacity-70">Scroll to Explore</span>
      </div>
    </section>
  );
};

export default Hero;
