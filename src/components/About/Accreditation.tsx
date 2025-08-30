"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Brand images - using your accreditation images
const brands = [
  "/images/about/clients/accreditation-1-removebg-preview.png",
  "/images/about/clients/accreditation-2-removebg-preview.png",
  "/images/about/clients/accreditation-3-removebg-preview.png",
  "/images/about/clients/accreditation-4.png",
  "/images/about/clients/accreditation-5.png",
  "/images/about/clients/accreditation-6.png",
];

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CosmicBrands() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current && window.innerWidth < 1024) {
      scrollRef.current.scrollLeft = 100;
    }

    // Animate title
    gsap.fromTo(
      titleRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none", // <-- stay visible
        },
      }
    );

    // Animate subtitle
    gsap.fromTo(
      ".brands-subtitle",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none", // <-- stay visible
        },
      }
    );

    // Animate logos
    gsap.fromTo(
      ".logo-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        delay: 0.5,
        ease: "back.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none", // <-- stay visible
        },
      }
    );
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = window.innerWidth > 768 ? 400 : 250;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="cosmic-brands-section relative overflow-hidden py-28 px-4 sm:px-6 lg:px-8"
    >
      {/* Cosmic background elements */}
      <div className="absolute inset-0 overflow-hidden z-0 cosmic-bg">
        {/* Animated stars */}
        {[...Array(40)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute rounded-full cosmic-star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              background: "#5a7eff",
              opacity: Math.random() * 0.8 + 0.2,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Floating cosmic blobs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`blob-${i}`}
            className="absolute rounded-full cosmic-blob"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              background: `radial-gradient(circle, rgba(90, 126, 255, 0.1) 0%, transparent 70%)`,
              filter: "blur(40px)",
              animation: `float ${
                Math.random() * 20 + 10
              }s infinite alternate ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="cosmic-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Our Accreditations & Partners
            <span className="cosmic-underline" />
          </h2>
          <p className="brands-subtitle text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
            CS Medical College is proud to be recognized and accredited by
            leading healthcare organizations and educational bodies.
          </p>
        </div>

        <div className="relative">
          <div ref={scrollRef} className="logos-container cosmic-logos-grid">
            {brands.map((logo, i) => (
              <div key={i} className="logo-card cosmic-logo-card">
                <div className="logo-inner">
                  <Image
                    src={logo}
                    alt={`Accreditation ${i + 1}`}
                    width={160}
                    height={160}
                    className="logo-image"
                  />
                </div>
                <div className="cosmic-logo-glow" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .cosmic-brands-section {
          background: white;
        }

        .cosmic-bg {
          background-image: radial-gradient(
              circle at 50% 50%,
              rgba(90, 126, 255, 0.05) 0%,
              transparent 20%
            ),
            linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.8));
        }

        .cosmic-title {
          color: #0a0f2c;
          display: inline-block;
          position: relative;
          padding-bottom: 12px;
        }

        .cosmic-underline {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: #5a7eff;
          border-radius: 2px;
        }

        .cosmic-logos-grid {
          display: flex;
          gap: 1.5rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          padding: 2rem 1rem;
          scrollbar-width: none;
          position: relative;
          z-index: 50;
        }

        .cosmic-logos-grid::-webkit-scrollbar {
          display: none;
        }

        .cosmic-logo-card {
          flex: 0 0 auto;
          scroll-snap-align: center;
          width: 180px;
          height: 180px;
          position: relative;
          border-radius: 24px;
          overflow: visible;
          position: relative;
          z-index: 50;
        }

        .logo-inner {
          width: 100%;
          height: 100%;
          background: #f8f9ff;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(90, 126, 255, 0.2);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(90, 126, 255, 0.1);
        }

        .cosmic-logo-card:hover .logo-inner {
          transform: translateY(-5px);
          border-color: #5a7eff;
          box-shadow: 0 10px 25px rgba(90, 126, 255, 0.2);
        }

        .cosmic-logo-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at center,
            rgba(90, 126, 255, 0.2) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 24px;
          z-index: 1;
        }

        .cosmic-logo-card:hover .cosmic-logo-glow {
          opacity: 0.8;
        }

        .logo-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: grayscale(30%) brightness(1);
          transition: filter 0.3s ease;
        }

        .cosmic-logo-card:hover .logo-image {
          filter: grayscale(0%) brightness(1);
        }

        @keyframes twinkle {
          0% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.2;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }

        @media (max-width: 768px) {
          .cosmic-title {
            font-size: 2.5rem;
          }

          .cosmic-logo-card {
            width: 150px;
            height: 150px;
          }
        }
      `}</style>
    </section>
  );
}
