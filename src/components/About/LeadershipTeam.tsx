"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const leadership = [
  {
    name: "Dr. Sarah Johnson",
    position: "Dean of Medicine",
    image: "/images/about/leadership/dean.jpg",
    bio: "With over 20 years of experience in medical education, Dr. Johnson leads our college with a vision for innovative curriculum development and research excellence.",
  },
  {
    name: "Prof. Michael Chen",
    position: "Vice Dean, Academic Affairs",
    image: "/images/about/leadership/vice-dean.jpg",
    bio: "Professor Chen oversees all academic programs, ensuring they meet the highest standards of medical education and professional practice.",
  },
  {
    name: "Dr. Amina Rahman",
    position: "Director of Clinical Education",
    image: "/images/about/leadership/clinical-director.jpg",
    bio: "Dr. Rahman coordinates our extensive clinical training programs across affiliated hospitals and healthcare institutions.",
  },
  {
    name: "Mr. David Wilson",
    position: "Administrative Director",
    image: "/images/about/leadership/admin-director.jpg",
    bio: "Mr. Wilson manages the college's operations, facilities, and support services to create an optimal learning environment.",
  },
];

const LeadershipTeam = () => {
  return (
    <section className="py-20 bg-[#0a0f2c] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold"
          >
            Leadership Team
          </motion.h2>
          <div className="w-20 h-1 bg-[#5a7eff] mx-auto mt-6 mb-8" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Our distinguished leaders bring decades of experience in medical
            education and healthcare administration
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadership.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-[#5a7eff] transition-colors duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{leader.name}</h3>
                <p className="text-[#5a7eff] mb-3">{leader.position}</p>
                <p className="text-gray-300 text-sm">{leader.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
