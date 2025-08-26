"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
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
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2f73f2] rounded-full filter blur-[120px] opacity-10"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#46C4FF] rounded-full filter blur-[100px] opacity-15"></div>
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
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Logo />
            <p className="text-[#B8C1EC] text-lg leading-relaxed">
              Pioneering the future of education with innovation and accessible
              learning experiences.
            </p>

            <div className="flex items-center space-x-4">
              {[
                { icon: FaFacebookF, label: "Facebook" },
                { icon: FaTwitter, label: "Twitter" },
                { icon: FaLinkedinIn, label: "LinkedIn" },
                { icon: FaInstagram, label: "Instagram" },
                { icon: FaYoutube, label: "YouTube" },
              ].map(({ icon: Icon, label }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#"
                    className="flex items-center justify-center w-10 h-10 bg-[#1E293B] rounded-full hover:bg-[#46C4FF] transition-colors duration-300"
                    aria-label={label}
                  >
                    <Icon className="text-white text-lg" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links - simplified */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white">Explore</h3>
            <ul className="space-y-2 text-[#B8C1EC]">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/programs">Programs</Link>
              </li>
              <li>
                <Link href="/admission">Admissions</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact</Link>
              </li>
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
            <h3 className="text-xl font-bold text-white">Contact Us</h3>
            <ul className="space-y-3 text-[#B8C1EC]">
              <li className="flex">
                <FiMapPin className="mr-3 mt-1 text-[#46C4FF]" /> Stellar City,
                TN 4263, United States
              </li>
              <li className="flex">
                <FiMail className="mr-3 text-[#46C4FF]" />{" "}
                <a href="mailto:info@cseiacademy.com">
                  admission@csmedicalcollege.co.uk
                </a>
              </li>
              <li className="flex">
                <FiPhone className="mr-3 text-[#46C4FF]" />{" "}
                <a href="tel:+442039625760">+44 20 3962 5760</a>
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
            <h3 className="text-xl font-bold text-white">Newsletter</h3>
            <p className="text-[#B8C1EC]">
              Subscribe for updates and insights.
            </p>
            {isSubscribed ? (
              <p className="text-green-400">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded bg-[#1E293B] text-white"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-2 bg-[#2f73f2] text-white rounded"
                >
                  {isSubmitted ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#1E293B]/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#94A3B8] text-sm">
            © {new Date().getFullYear()} CSEI Academy. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/privacy-policy"
              className="text-[#94A3B8] hover:text-[#46C4FF]"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#94A3B8] hover:text-[#46C4FF]">
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-[#94A3B8] hover:text-[#46C4FF]"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes twinkle {
          0% {
            opacity: 0.2;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
