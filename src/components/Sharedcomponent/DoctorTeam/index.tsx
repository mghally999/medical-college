"use client";
import Image from "next/image";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function TestimonialsShowcase() {
  const testimonials = [
    {
      id: 1,
      imageSrc: "/images/testimonials/Sushmita.jpeg",
      name: "Sushmita Budathoki",
      position: "Graduate from CSEI",
      comment: "Guided from A to Z",
      description:
        "CSEI Academy gave me proper guidance from the admission process to my placement. The staff was very helpful and supported me a lot. Highly recommended!",
      rating: 5,
      techStack: ["AI", "Cloud", "Blockchain"],
      accentColor: "#3B82F6",
    },
    {
      id: 2,
      imageSrc: "/images/testimonials/Alka-Thulung.jpg",
      name: "Alka Thulung",
      position: "Long-term Student",
      comment: "Years of positive experience",
      description:
        "It has been more than years that I have been connected with CSEI and I had the best experience ever. Everyone there is cooperative and friendly. I guarantee you will not regret it!",
      rating: 5,
      techStack: ["IoT", "Cybersecurity", "Data Science"],
      accentColor: "#10B981",
    },
    {
      id: 3,
      imageSrc: "/images/testimonials/Pujan-Yugi.jpeg",
      name: "Pujan Yogikarki",
      position: "Student at CSEI Academy",
      comment: "Living the dream",
      description:
        "Thank you so much for this opportunity to study my dream subject in Dubai. Best staff, best teachers—overall no complaints. Thank you, CSEI Academy family!",
      rating: 5,
      techStack: ["VR", "Web3", "ML"],
      accentColor: "#8B5CF6",
    },
    {
      id: 4,
      imageSrc: "/images/testimonials/Srijana-Khadka.jpg",
      name: "Srijana Khadka",
      position: "Student at CSEI Academy",
      comment: "Glad to be a part",
      description:
        "With supportive environment and quality of education, I'm glad to be a part of this college. Thank you for all of this, CSEI Academy.",
      rating: 5,
      techStack: ["AI", "Cloud", "DevOps"],
      accentColor: "#EC4899",
    },
    {
      id: 5,
      imageSrc: "/images/testimonials/Dipana-Khatri.jpg",
      name: "Dipana Khatri",
      position: "Student at CSEI Academy",
      comment: "Grateful for CSEI support",
      description:
        "Very good college, with cooperative staff and well-educated instructors. Thank you for all of this, CSEI Academy.",
      rating: 5,
      techStack: ["Data Analytics", "UI/UX", "Mobile Dev"],
      accentColor: "#F59E0B",
    },
    {
      id: 6,
      imageSrc: "/images/testimonials/Smarika-Basnet.jpeg",
      name: "Smarika Basnet",
      position: "Student at CSEI Academy",
      comment: "Truly enriching experience",
      description:
        "The college provides a supportive learning environment with knowledgeable faculty dedicated to student growth.",
      rating: 5,
      techStack: ["AI", "Robotics", "Cloud"],
      accentColor: "#EF4444",
    },
  ];

  const swiperRef = useRef(null);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient animate-spin-slow"></div>
      </div>

      {/* Floating tech bubbles */}
      {["AI", "VR", "IoT", "Cloud", "Blockchain", "ML", "Data", "DevOps"].map(
        (tech, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-400 text-xl font-mono"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              fontSize: `${Math.random() * 1 + 0.5}rem`,
              opacity: 0.2,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {tech}
          </motion.div>
        )
      )}

      {/* Section header */}
      <div className="relative z-10 container mx-auto px-4 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            VOICES OF
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
            {" "}
            INNOVATION
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-blue-200 max-w-3xl mx-auto"
        >
          Hear from the brilliant minds shaping tomorrow's technology today
        </motion.p>
      </div>

      {/* Futuristic testimonials slider */}
      <div className="relative z-10 container mx-auto px-4">
        <Swiper
          ref={swiperRef}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            renderBullet: (index, className) => {
              return `<span class="${className}" style="background-color: ${testimonials[index].accentColor}"></span>`;
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={40}
          breakpoints={{
            640: {
              coverflowEffect: {
                modifier: 1.5,
              },
            },
            1024: {
              coverflowEffect: {
                modifier: 2,
              },
            },
          }}
          className="h-[600px]"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={testimonial.id}
              style={{
                width: "300px",
                height: "500px",
                borderRadius: "20px",
                overflow: "visible",
              }}
            >
              <motion.div
                className="h-full relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className="holographic-card h-full p-8 rounded-xl overflow-hidden border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm"
                  style={{
                    boxShadow: `0 20px 50px -10px ${testimonial.accentColor}40`,
                  }}
                >
                  {/* Holographic effect */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: `linear-gradient(135deg, ${testimonial.accentColor}20 0%, transparent 50%, ${testimonial.accentColor}20 100%)`,
                    }}
                  ></div>

                  {/* Rating stars */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-600"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <div className="relative z-10">
                    <h3
                      className="text-xl font-bold mb-4"
                      style={{ color: testimonial.accentColor }}
                    >
                      {testimonial.comment}
                    </h3>
                    <p className="text-gray-300 mb-6 italic">
                      "{testimonial.description}"
                    </p>
                  </div>

                  {/* Student info with tech tags */}
                  <div className="relative z-10 mt-6 flex items-center">
                    <div className="relative mr-4">
                      <div
                        className="relative w-16 h-16 rounded-full overflow-hidden border-2"
                        style={{ borderColor: testimonial.accentColor }}
                      >
                        <Image
                          fill
                          src={testimonial.imageSrc}
                          alt={testimonial.name}
                          className="object-cover"
                        />
                      </div>
                      <div
                        className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-gray-900"
                        style={{ backgroundColor: testimonial.accentColor }}
                      ></div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.position}
                      </p>
                      <div className="flex flex-wrap mt-2 gap-2">
                        {testimonial.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 rounded-full"
                            style={{
                              backgroundColor: `${testimonial.accentColor}20`,
                              color: testimonial.accentColor,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Corner accents */}
                  <div
                    className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2"
                    style={{ borderColor: testimonial.accentColor }}
                  ></div>
                  <div
                    className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2"
                    style={{ borderColor: testimonial.accentColor }}
                  ></div>
                  <div
                    className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2"
                    style={{ borderColor: testimonial.accentColor }}
                  ></div>
                  <div
                    className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2"
                    style={{ borderColor: testimonial.accentColor }}
                  ></div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation */}
        <div className="flex justify-center items-center mt-12 space-x-6">
          <button className="swiper-button-prev relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white transition-all group">
            <svg
              className="w-6 h-6 text-blue-300 group-hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="swiper-pagination flex space-x-2"></div>

          <button className="swiper-button-next relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white transition-all group">
            <svg
              className="w-6 h-6 text-blue-300 group-hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(59, 130, 246, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(59, 130, 246, 0.1) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
        }

        .bg-radial-gradient {
          background: radial-gradient(
            circle,
            rgba(59, 130, 246, 0.15) 0%,
            transparent 70%
          );
        }

        .holographic-card {
          position: relative;
        }

        .holographic-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.1) 0%,
            rgba(59, 130, 246, 0) 20%,
            rgba(59, 130, 246, 0) 80%,
            rgba(59, 130, 246, 0.1) 100%
          );
          pointer-events: none;
        }

        .holographic-card:hover::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to bottom right,
            transparent 45%,
            rgba(59, 130, 246, 0.1) 50%,
            transparent 55%
          );
          animation: holographic-glow 6s linear infinite;
          pointer-events: none;
        }

        @keyframes holographic-glow {
          0% {
            transform: rotate(0deg) translate(-50%, -50%);
          }
          100% {
            transform: rotate(360deg) translate(-50%, -50%);
          }
        }

        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .swiper-slide-active {
          transform: scale(1.05);
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          opacity: 0.6;
          transition: all 0.3s;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}
