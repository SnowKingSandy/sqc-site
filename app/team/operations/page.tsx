"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function OperationsTeam() {
  const operationsMembers = [
    {
      name: "Mahi Laddha",
      role: "Media Head",
      bio: "Electrical Engineering student focused on quantum circuit design. Manages club's digital presence and creates engaging content for our community.",
      expertise: ["Social Media", "Content Creation", "Design"],
    },
    {
      name: "Khushi Kashyap",
      role: "Event Head",
      bio: "Math and CS double major. Organizes workshops, seminars, and hackathons. Ensures every event delivers maximum learning value to members.",
      expertise: ["Event Planning", "Workshop Design", "Community Engagement"],
    },
    {
      name: "Manya Bhargava",
      role: "Documentation Head",
      bio: "Physics student with passion for quantum outreach. Coordinates guest lectures, networking events, and maintains club documentation and resources.",
      expertise: ["Documentation", "Outreach", "Resource Curation"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-quantum-accent hover:gap-3 transition-all duration-300 font-display font-semibold"
          >
            <ArrowLeft size={20} />
            Back to Teams
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h1 className="font-title text-5xl md:text-6xl font-bold">
            Operations <span className="bg-gradient-to-r from-quantum-accent to-indigo-500 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-gray-300 font-display">Making quantum club events, communications, and initiatives a reality</p>
        </motion.div>

        {/* Members Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {operationsMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-quantum-medium/50 to-quantum-dark/50 border border-quantum-accent/20 hover:border-quantum-accent/50 transition-all duration-300 backdrop-blur-xl overflow-hidden h-full"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-quantum-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  <div>
                    <h2 className="text-3xl font-title font-bold text-white mb-2">{member.name}</h2>
                    <p className="text-indigo-400 text-lg font-display font-semibold">{member.role}</p>
                  </div>

                  <p className="text-gray-300 font-display leading-relaxed">{member.bio}</p>

                  {/* Expertise Tags */}
                  <div className="space-y-3">
                    <p className="text-sm font-display font-semibold text-gray-400 uppercase tracking-wide">Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((exp) => (
                        <span
                          key={exp}
                          className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-display"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Action */}
                  <div className="pt-4">
                    <button className="w-full px-4 py-2 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 font-display font-semibold transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
