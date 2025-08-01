"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiSend,
  FiArrowRight,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Logo from "@/components/Layout/Header/Logo";

interface StarProps {
  width: number;
  height: number;
  top: number;
  left: number;
  opacity: number;
  animationDuration: number;
}

const Footer = () => {
  const [email, setEmail] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [stars, setStars] = useState<StarProps[]>([]);

  useEffect(() => {
    // Generate stars only on client side
    const generatedStars = Array.from({ length: 40 }).map(() => ({
      width: Math.random() * 3 + 1,
      height: Math.random() * 3 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.3,
      animationDuration: Math.random() * 5 + 3,
    }));
    setStars(generatedStars);
  }, []);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubscribed(true);
      setIsSubmitted(false);
      setEmail("");
    }, 1000);
  };

  return (
    <footer className="relative overflow-hidden bg-[#0A0F2C] pt-20 pb-10 border-t border-[#1E293B]/50">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2f73f2] rounded-full filter blur-[120px] opacity-10"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#46C4FF] rounded-full filter blur-[100px] opacity-15"></div>

        {/* Stars */}
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${star.width}px`,
              height: `${star.height}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              opacity: star.opacity,
              animation: `twinkle ${star.animationDuration}s infinite alternate`,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Logo />
            <p className="text-[#B8C1EC] text-lg leading-relaxed">
              Pioneering the future of education with cosmic innovation and
              stellar learning experiences.
            </p>

            <div className="flex items-center space-x-4">
              {[
                { icon: FaFacebookF, color: "#2f73f2", label: "Facebook" },
                { icon: FaTwitter, color: "#1DA1F2", label: "Twitter" },
                { icon: FaLinkedinIn, color: "#0077B5", label: "LinkedIn" },
                { icon: FaInstagram, color: "#E1306C", label: "Instagram" },
                { icon: FaYoutube, color: "#FF0000", label: "YouTube" },
              ].map(({ icon: Icon, color, label }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#"
                    className={`flex items-center justify-center w-10 h-10 bg-[#1E293B] rounded-full hover:bg-[${color}] transition-colors duration-300`}
                    aria-label={label}
                  >
                    <Icon className="text-white text-lg" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white bg-clip-text bg-gradient-to-r from-[#46C4FF] to-[#2f73f2]">
              Explore
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/programs", text: "Programs" },
                { href: "/scholarships", text: "Scholarships" },
                { href: "/admissions", text: "Admissions" },
                { href: "/faculty", text: "Faculty" },
                { href: "/research", text: "Research" },
              ].map(({ href, text }, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={href}
                    className="flex items-center text-[#B8C1EC] hover:text-[#46C4FF] transition-colors duration-300"
                  >
                    <FiArrowRight className="mr-2 text-[#46C4FF]" />
                    {text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white bg-clip-text bg-gradient-to-r from-[#46C4FF] to-[#2f73f2]">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mt-1 mr-4 text-[#46C4FF]">
                  <FiMapPin className="text-xl" />
                </div>
                <address className="text-[#B8C1EC] not-italic">
                  Cosmic Education Lane,
                  <br />
                  Stellar City, TN 4263,
                  <br />
                  United States
                </address>
              </li>
              <li className="flex items-center">
                <div className="mr-4 text-[#46C4FF]">
                  <FiMail className="text-xl" />
                </div>
                <a
                  href="mailto:info@cseiacademy.com"
                  className="text-[#B8C1EC] hover:text-[#46C4FF] transition-colors duration-300"
                >
                  info@cseiacademy.com
                </a>
              </li>
              <li className="flex items-center">
                <div className="mr-4 text-[#46C4FF]">
                  <FiPhone className="text-xl" />
                </div>
                <a
                  href="tel:+16902560020"
                  className="text-[#B8C1EC] hover:text-[#46C4FF] transition-colors duration-300"
                >
                  +1 (690) 256-0020
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white bg-clip-text bg-gradient-to-r from-[#46C4FF] to-[#2f73f2]">
              Cosmic Newsletter
            </h3>
            <p className="text-[#B8C1EC]">
              Subscribe to receive stellar updates, cosmic insights, and
              educational supernovas.
            </p>

            {isSubscribed ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-4 bg-[#1E293B]/50 rounded-lg border border-[#46C4FF]/30"
              >
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-[#B8C1EC]">
                    Thanks for subscribing!
                  </span>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Your email address"
                    className="w-full px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg focus:ring-2 focus:ring-[#46C4FF] focus:border-transparent text-white placeholder-[#64748B] transition-all duration-300"
                    aria-label="Email for newsletter subscription"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <FiMail className="w-5 h-5 text-[#64748B]" />
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#2f73f2] to-[#46C4FF] text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[#2f73f2]/30 transition-all duration-300"
                  disabled={isSubmitted}
                  aria-label="Subscribe to newsletter"
                >
                  <FiSend className="mr-2" />
                  {isSubmitted ? "Subscribing..." : "Subscribe"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Bottom footer */}
        <div className="pt-8 border-t border-[#1E293B]/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-[#94A3B8] text-sm mb-4 md:mb-0"
            >
              © {new Date().getFullYear()} CSEI Academy. All rights reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex space-x-6"
            >
              {[
                { href: "/privacy-policy", text: "Privacy Policy" },
                { href: "/terms", text: "Terms of Service" },
                { href: "/cookies", text: "Cookie Policy" },
              ].map(({ href, text }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="text-[#94A3B8] hover:text-[#46C4FF] text-sm transition-colors duration-300"
                >
                  {text}
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating cosmic elements */}
      <div className="absolute bottom-20 left-10 w-8 h-8 rounded-full bg-[#46C4FF] filter blur-[15px] opacity-30 animate-float"></div>
      <div className="absolute top-1/4 right-20 w-6 h-6 rounded-full bg-[#2f73f2] filter blur-[12px] opacity-40 animate-float-delay"></div>
      <div className="absolute bottom-1/3 left-1/3 w-4 h-4 rounded-full bg-purple-500 filter blur-[10px] opacity-30 animate-float-delay-2"></div>

      <style jsx global>{`
        @keyframes twinkle {
          0% {
            opacity: 0.2;
          }
          100% {
            opacity: 1;
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
        @keyframes float-delay {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-5deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        @keyframes float-delay-2 {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(3deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 10s ease-in-out infinite;
        }
        .animate-float-delay-2 {
          animation: float-delay-2 12s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
