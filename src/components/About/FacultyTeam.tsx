"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const facultyList = [
  {
    name: "Dr. Amina Yusuf",
    title: "Head of Nursing Faculty",
    image: "/images/faculty/amina-yusuf.jpg",
    bio: `With over 15 years of clinical and academic experience, Dr. Amina is committed to training the next generation of compassionate nurses.`,
  },
  {
    name: "Dr. Faisal Rahman",
    title: "Professor of Clinical Medicine",
    image: "/images/faculty/faisal-rahman.jpg",
    bio: `An internal medicine expert and keynote speaker at several international medical forums, Dr. Faisal brings real-world insights to the classroom.`,
  },
  {
    name: "Ms. Lara Ferns",
    title: "Lecturer – Health & Social Care",
    image: "/images/faculty/lara-ferns.jpg",
    bio: `Ms. Lara leads our HSCM modules with a strong background in care home management and patient-centered learning.`,
  },
  {
    name: "Dr. Naveen Shetty",
    title: "Faculty – Advanced Medical Science",
    image: "/images/faculty/naveen-shetty.jpg",
    bio: `Dr. Shetty is a researcher in biomedical diagnostics and teaches medical lab sciences and public health.`,
  },
];

export default function FacultyTeam() {
  return (
    <section className="py-24 px-6 sm:px-12 bg-gradient-to-br from-[#420516] to-[#6A0D1B] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-[#FF9A9E] to-white animate-text-shimmer"
        >
          Meet Our Faculty
        </motion.h2>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {facultyList.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative w-full h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-[#FF9A9E] font-medium mb-3">
                  {member.title}
                </p>
                <p className="text-sm text-white/80">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
