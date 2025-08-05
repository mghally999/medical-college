"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useReducedMotion } from "framer-motion";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Particle system configuration
  const particles = Array.from({ length: isMobile ? 20 : 40 }).map(() => ({
    id: Math.random().toString(36).substring(7),
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    speed: Math.random() * 2 + 1,
    delay: Math.random() * 5,
  }));

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Mouse move effect for parallax
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    if (!prefersReducedMotion) {
      gsap.registerPlugin(ScrollTrigger);

      // Subtle parallax effect for video
      if (!isMobile && videoRef.current && heroRef.current) {
        gsap.to(videoRef.current, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Content fade out on scroll
      if (contentRef.current && heroRef.current) {
        gsap.to(contentRef.current, {
          opacity: 0,
          y: 40,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "center top",
            scrub: true,
          },
        });
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [prefersReducedMotion, isMobile]);

  const handleVideoError = () => setVideoError(true);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Futuristic background with gradient mesh */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#420516]/20 via-[#420516]/10 to-transparent"></div>

        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0idHJhbnNwYXJlbnQiLz48cGF0aCBkPSJNMjAgMEg0MHYyMEgyMHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')]"></div>
        </div>

        {/* Video background */}
        {!isMobile && !videoError && !prefersReducedMotion ? (
          <iframe
            ref={videoRef}
            src="https://player.vimeo.com/video/763851966?autoplay=1&muted=1&autopause=0&controls=0&loop=1&background=1&playsinline=1"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            loading="lazy"
            onError={handleVideoError}
            className="absolute top-0 left-0 w-full h-full pointer-events-none object-cover"
            style={{
              width: "100vw",
              height: "100vh",
              margin: 0,
              padding: 0,
              transform:
                "translate(0%, 2.5%) translate3d(0px, 0px, 0px) scale(1.1, 1.1) !important",
              objectFit: "cover",
              zIndex: -1,
            }}
            aria-hidden="true"
            title="Background video"
          />
        ) : (
          <div className="w-full h-full bg-[url('/hero-fallback.jpg')] bg-cover bg-center" />
        )}
      </div>

      {/* Dynamic gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#420516]/90 via-[#6A0D1B]/70 to-[#420516]/90"></div>

      {/* Floating particles with mouse interaction */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 z-5 pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-white/30"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                top: `${particle.y}%`,
                left: `${particle.x}%`,
              }}
              animate={{
                x: cursorPosition.x * 0.5,
                y: cursorPosition.y * 0.5,
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
                delay: particle.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* Holographic effect elements */}
      {!prefersReducedMotion && !isMobile && (
        <>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#FF9A9E] opacity-10 blur-3xl mix-blend-screen"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#FAD0C4] opacity-10 blur-3xl mix-blend-screen"></div>
        </>
      )}

      {/* Main Content Container - Perfectly centered */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div
          ref={contentRef}
          className="absolute inset-0 z-20 flex items-center justify-center px-6 sm:px-8 lg:px-12 py-12"
        >
          <div className="w-full max-w-5xl text-center">
            {/* Heading */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
              animate={prefersReducedMotion ? false : { opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? {} : { duration: 1 }}
              className="mb-8 sm:mb-12"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter text-white">
                <span className="block mb-4">Start Your</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9A9E] via-[#FAD0C4] to-[#FF9A9E] animate-gradient bg-[length:300%_300%]">
                  Healthcare Journey
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={prefersReducedMotion ? false : { opacity: 1, y: 0 }}
              transition={
                prefersReducedMotion ? {} : { duration: 1, delay: 0.3 }
              }
              className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              CS Medical College Ltd, UK offers world-class healthcare education
              with cutting-edge facilities and expert faculty.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={prefersReducedMotion ? false : { opacity: 1, y: 0 }}
              transition={
                prefersReducedMotion ? {} : { duration: 1, delay: 0.6 }
              }
              className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
            >
              <Link
                href="/programs"
                className="relative overflow-hidden group px-8 py-4 rounded-xl text-white font-medium transition-all duration-500 hover:-translate-y-1"
                aria-label="Explore our programs"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Explore Programs</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#6A0D1B] to-[#420516] rounded-xl"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#8A1A2B] to-[#6A0D1B] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></span>
                <span className="absolute -inset-1 bg-white/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </Link>

              <Link
                href="/contact"
                className="relative overflow-hidden group px-8 py-4 rounded-xl font-medium transition-all duration-500 hover:-translate-y-1"
                aria-label="Schedule a campus visit"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-white">
                  <span>Schedule a Visit</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                <span className="absolute inset-0 border-2 border-white rounded-xl"></span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl"></span>
                <span className="absolute -inset-1 bg-white/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Micro-interaction scroll indicator */}
        {!isMobile && !prefersReducedMotion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
          >
            <div className="flex flex-col items-center">
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center relative">
                <motion.div
                  className="w-1 h-3 bg-white rounded-full mt-1"
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <span className="text-white/70 text-xs mt-2 font-medium tracking-wider">
                SCROLL DOWN
              </span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Global styles */}
      <style jsx global>{`
        iframe {
          transform: translate(0%, 2.5%) translate3d(0px, 0px, 0px)
            scale(1.1, 1.1) !important;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          animation: gradient 8s ease infinite;
        }

        @media (max-width: 640px) {
          iframe {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
