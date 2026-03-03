"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LeadershipTeam() {
  const leaders = [
    {
      name: "Samarth Bhadane",
      role: "President",
      bio: "Physics major specialized in quantum entanglement and quantum communication protocols. Passionate about leading the club towards groundbreaking quantum innovations.",
      expertise: ["Quantum Entanglement", "Leadership", "Research"],
      socials: { linkedin: "#", github: "#" },
    },
    {
      name: "Nandini Patawri",
      role: "Vice President",
      bio: "Driven by quantum computing fundamentals and community engagement. Focuses on making quantum concepts accessible to all students regardless of background.",
      expertise: ["Quantum Algorithms", "Community Building", "Workshops"],
      socials: { linkedin: "#", github: "#" },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
            Leadership <span className="bg-gradient-to-r from-quantum-blue to-quantum-accent bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-gray-300 font-display">Guiding Symbiosis Quantum Club towards excellence and innovation</p>
        </motion.div>

        {/* Split Layout for Co-Heads */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative p-8 mp:p-12 rounded-2xl bg-gradient-to-br from-quantum-medium/50 to-quantum-dark/50 border border-quantum-accent/20 hover:border-quantum-accent/50 transition-all duration-300 backdrop-blur-xl overflow-hidden h-full"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-quantum-accent/5 to-quantum-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  <div>
                    <h2 className="text-4xl font-title font-bold text-white mb-2">{leader.name}</h2>
                    <p className="text-quantum-accent text-lg font-display font-semibold">{leader.role}</p>
                  </div>

                  <p className="text-gray-300 font-display leading-relaxed">{leader.bio}</p>

                  {/* Expertise Tags */}
                  <div className="space-y-3">
                    <p className="text-sm font-display font-semibold text-gray-400 uppercase tracking-wide">Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((exp) => (
                        <span
                          key={exp}
                          className="px-3 py-1 rounded-full bg-quantum-accent/10 border border-quantum-accent/30 text-quantum-accent text-sm font-display"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={leader.socials.linkedin}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-quantum-blue/10 hover:bg-quantum-blue/20 text-quantum-blue transition-all duration-300"
                    >
                      in
                    </a>
                    <a
                      href={leader.socials.github}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-quantum-accent/10 hover:bg-quantum-accent/20 text-quantum-accent transition-all duration-300"
                    >
                      gh
                    </a>
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
