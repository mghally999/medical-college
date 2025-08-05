"use client";
import React, { FC, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiClock, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

const ContactForm: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    time: "",
    date: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          department: "",
          time: "",
          date: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A0F2C] to-[#1A1448] py-20 px-4">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#2f73f2] rounded-full filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#46C4FF] rounded-full filter blur-[120px] opacity-15"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full filter blur-[80px] opacity-10"></div>

        {/* Stars */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.5,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Left Column - Contact Info */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#46C4FF] to-[#2f73f2]">
                Connect With Our Cosmic Academy
              </h2>
              <p className="mt-4 text-[#B8C1EC] max-w-lg">
                Reach out to our team of stellar educators and get personalized
                guidance for your educational journey through the cosmos of
                knowledge.
              </p>
            </motion.div>

            <div className="space-y-8">
              {/* Hours */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 p-6 bg-gradient-to-br from-[#1E1B4B]/50 to-[#312E81]/30 backdrop-blur-sm rounded-xl border border-[#3B3B6B]/50 hover:border-[#46C4FF]/50 transition-all duration-300"
              >
                <div className="p-3 bg-[#2f73f2]/10 rounded-lg">
                  <FiClock className="text-[#46C4FF] text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Operating Hours
                  </h3>
                  <div className="mt-2 space-y-1 text-[#B8C1EC]">
                    <p>
                      Mon-Fri:{" "}
                      <span className="text-[#E0E7FF]">9:00 am - 10:00 pm</span>
                    </p>
                    <p>
                      Sat-Sun:{" "}
                      <span className="text-[#E0E7FF]">9:00 am - 8:00 pm</span>
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 p-6 bg-gradient-to-br from-[#1E1B4B]/50 to-[#312E81]/30 backdrop-blur-sm rounded-xl border border-[#3B3B6B]/50 hover:border-[#46C4FF]/50 transition-all duration-300"
              >
                <div className="p-3 bg-[#2f73f2]/10 rounded-lg">
                  <FiPhone className="text-[#46C4FF] text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Contact Info
                  </h3>
                  <div className="mt-2 space-y-1 text-[#B8C1EC]">
                    <p>
                      Phone:{" "}
                      <span className="text-[#E0E7FF]">+(690) 2560 0020</span>
                    </p>
                    <p>
                      Email:{" "}
                      <span className="text-[#E0E7FF]">
                        booking@CSMedicalCollege.com
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 p-6 bg-gradient-to-br from-[#1E1B4B]/50 to-[#312E81]/30 backdrop-blur-sm rounded-xl border border-[#3B3B6B]/50 hover:border-[#46C4FF]/50 transition-all duration-300"
              >
                <div className="p-3 bg-[#2f73f2]/10 rounded-lg">
                  <FiMapPin className="text-[#46C4FF] text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Our Location
                  </h3>
                  <p className="mt-2 text-[#B8C1EC]">
                    <span className="text-[#E0E7FF]">
                      CS Medical College 4263 Wilkinson Street Tennessee
                    </span>
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-4"
                  >
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2f73f2] to-[#46C4FF] text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[#2f73f2]/30 transition-all duration-300"
                    >
                      <FiMapPin className="text-lg" />
                      View Location Map
                      <IoIosArrowForward className="ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2f73f2] to-[#46C4FF] rounded-2xl opacity-75 blur-lg"></div>
            <div className="relative h-full bg-[#0F172A] p-8 rounded-2xl border border-[#1E293B] backdrop-blur-sm">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2f73f2] via-[#46C4FF] to-purple-500 rounded-t-2xl"></div>

              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-white mb-2"
              >
                Send Us a Message
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="text-[#94A3B8] mb-8"
              >
                Our team will respond within 24 hours
              </motion.p>

              {submitSuccess ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="p-8 text-center"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/10 rounded-full mb-6">
                    <svg
                      className="w-10 h-10 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-[#94A3B8]">
                    We've received your message and will respond soon. A
                    confirmation has been sent to your email.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#E2E8F0] mb-2"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg focus:ring-2 focus:ring-[#46C4FF] focus:border-transparent text-white placeholder-[#64748B] transition-all duration-300"
                        placeholder="Enter your name"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-[#64748B]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#E2E8F0] mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg focus:ring-2 focus:ring-[#46C4FF] focus:border-transparent text-white placeholder-[#64748B] transition-all duration-300"
                        placeholder="your@email.com"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <FiMail className="w-5 h-5 text-[#64748B]" />
                      </div>
                    </div>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#E2E8F0] mb-2"
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg focus:ring-2 focus:ring-[#46C4FF] focus:border-transparent text-white placeholder-[#64748B] transition-all duration-300"
                          placeholder="+1 (___) ___-____"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <FiPhone className="w-5 h-5 text-[#64748B]" />
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <label
                        htmlFor="department"
                        className="block text-sm font-medium text-[#E2E8F0] mb-2"
                      >
                        Department
                      </label>
                      <div className="relative">
                        <select
                          id="department"
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg focus:ring-2 focus:ring-[#46C4FF] focus:border-transparent text-white appearance-none transition-all duration-300"
                        >
                          <option value="">Select department</option>
                          <option value="Admissions">Admissions</option>
                          <option value="Academic">Academic</option>
                          <option value="Financial Aid">Financial Aid</option>
                          <option value="Student Services">
                            Student Services
                          </option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg
                            className="w-5 h-5 text-[#64748B]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      viewport={{ once: true }}
                    >
                      <label
                        htmlFor="date"
                        className="block text-sm font-medium text-[#E2E8F0] mb-2"
                      >
                        Preferred Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg focus:ring-2 focus:ring-[#46C4FF] focus:border-transparent text-white placeholder-[#64748B] transition-all duration-300"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg
                            className="w-5 h-5 text-[#64748B]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 }}
                      viewport={{ once: true }}
                    >
                      <label
                        htmlFor="time"
                        className="block text-sm font-medium text-[#E2E8F0] mb-2"
                      >
                        Preferred Time
                      </label>
                      <div className="relative">
                        <input
                          type="time"
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg focus:ring-2 focus:ring-[#46C4FF] focus:border-transparent text-white placeholder-[#64748B] transition-all duration-300"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <FiClock className="w-5 h-5 text-[#64748B]" />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#E2E8F0] mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg focus:ring-2 focus:ring-[#46C4FF] focus:border-transparent text-white placeholder-[#64748B] transition-all duration-300"
                      placeholder="Tell us about your inquiry..."
                    ></textarea>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    viewport={{ once: true }}
                    className="pt-2"
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center px-6 py-4 text-white font-medium rounded-lg transition-all duration-300 ${
                        isSubmitting
                          ? "bg-[#2f73f2]/70 cursor-not-allowed"
                          : "bg-gradient-to-r from-[#2f73f2] to-[#46C4FF] hover:from-[#46C4FF] hover:to-[#2f73f2] hover:shadow-lg hover:shadow-[#2f73f2]/30"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
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

        input[type="date"]::-webkit-calendar-picker-indicator,
        input[type="time"]::-webkit-calendar-picker-indicator {
          filter: invert(0.5);
          cursor: pointer;
        }

        input[type="date"]::-webkit-calendar-picker-indicator:hover,
        input[type="time"]::-webkit-calendar-picker-indicator:hover {
          filter: invert(0.8);
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
