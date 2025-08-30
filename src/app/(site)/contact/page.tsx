"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  // Animated card component
  const AnimatedCard = ({
    children,
    index,
    className = "",
    color = "blue",
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        damping: 15,
        stiffness: 100,
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative p-6 rounded-xl backdrop-blur-md border border-white/20 overflow-hidden ${className}`}
      style={{
        background:
          color === "red"
            ? "linear-gradient(to bottom right, rgba(75, 14, 30, 0.2), rgba(128, 0, 32, 0.1))"
            : "linear-gradient(to bottom right, rgba(10, 15, 44, 0.2), rgba(26, 31, 58, 0.1))",
      }}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );

  return (
    <main className="w-full min-h-screen text-white overflow-hidden custom-padding-4">
      {/* Header Section */}
      <section className="relative py-20 px-6 md:px-20 text-center bg-gradient-to-br from-[#1a1f3a] via-[#0a0f2c] to-[#4B0E1E] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              C.S. Medical College
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-3xl mx-auto text-xl opacity-90 mb-10"
          >
            We'd love to hear from you! Whether you have questions, please reach
            out using the information below.
          </motion.p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="relative py-16 px-6 md:px-20 bg-gradient-to-b from-[#0a0f2c] to-[#1a1f3a] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Our Contact Information
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Email Information */}
            <AnimatedCard index={0} color="blue" className="h-full">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Email Us
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">For General Enquiry</h4>
                  <a
                    href="mailto:enquiry@csmedicalcollege.co.uk"
                    className="text-blue-300 hover:text-blue-200 transition-colors"
                  >
                    enquiry@csmedicalcollege.co.uk
                  </a>
                </div>

                <div>
                  <h4 className="font-medium mb-2">For Admission</h4>
                  <a
                    href="mailto:admission@csmedicalcollege.co.uk"
                    className="text-blue-300 hover:text-blue-200 transition-colors"
                  >
                    admission@csmedicalcollege.co.uk
                  </a>
                </div>

                <div>
                  <h4 className="font-medium mb-2">
                    For International Students
                  </h4>
                  <a
                    href="mailto:intlstudents@csmedicalcollege.co.uk"
                    className="text-blue-300 hover:text-blue-200 transition-colors"
                  >
                    intlstudents@csmedicalcollege.co.uk
                  </a>
                </div>

                <div>
                  <h4 className="font-medium mb-2">For Finance & Payments</h4>
                  <a
                    href="mailto:account@csmedicalcollege.co.uk"
                    className="text-blue-300 hover:text-blue-200 transition-colors"
                  >
                    account@csmedicalcollege.co.uk
                  </a>
                </div>
              </div>
            </AnimatedCard>

            {/* Phone & Address Information */}
            <AnimatedCard index={1} color="red" className="h-full">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Call Us & Visit
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Phone</h4>
                  <a
                    href="tel:+442039625760"
                    className="text-blue-300 hover:text-blue-200 transition-colors"
                  >
                    +44 20 3962 5760
                  </a>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Address</h4>
                  <p className="opacity-90">
                    128 City Road
                    <br />
                    London EC1
                    <br />
                    United Kingdom
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Business Hours</h4>
                  <p className="opacity-90">
                    Monday - Friday
                    <br />9 AM - 5 PM (GMT)
                  </p>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-16 px-6 md:px-20 bg-gradient-to-b from-[#4B0E1E] to-[#800020] overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Send Us a Message
          </motion.h2>

          <AnimatedCard index={0} color="blue">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="admission">Admission</option>
                  <option value="international">International Students</option>
                  <option value="finance">Finance & Payments</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-primary focus:outline-none transition-colors"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-[#0a0f2c] to-[#4B0E1E] rounded-xl font-semibold text-lg hover:from-[#1a1f3a] hover:to-[#800020] transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </AnimatedCard>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
