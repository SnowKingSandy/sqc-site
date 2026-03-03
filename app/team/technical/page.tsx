"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TechnicalTeam() {
  const technicalMembers = [
    {
      name: "Eric Siquiera",
      role: "Technical Head",
      bio: "Physics major with deep expertise in quantum circuit design and quantum programming. Leads all technical initiatives and mentors junior members.",
      expertise: ["Quantum Circuits", "Qiskit", "IBM Quantum"],
      socials: { linkedin: "#", github: "#" },
    },
    {
      name: "Disha Gupta",
      role: "Technical Co-Head",
      bio: "Expert in quantum algorithms and machine learning. Co-leads technical projects and focuses on practical implementations and real-world applications.",
      expertise: ["Quantum ML", "Algorithm Design", "Circuit Optimization"],
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
            Technical <span className="bg-gradient-to-r from-quantum-purple to-quantum-blue bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-gray-300 font-display">Driving innovation through cutting-edge quantum technology and research</p>
        </motion.div>

        {/* Split Layout for Co-Heads */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {technicalMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-quantum-medium/50 to-quantum-dark/50 border border-quantum-accent/20 hover:border-quantum-accent/50 transition-all duration-300 backdrop-blur-xl overflow-hidden h-full"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-quantum-purple/5 to-quantum-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  <div>
                    <h2 className="text-4xl font-title font-bold text-white mb-2">{member.name}</h2>
                    <p className="text-quantum-purple text-lg font-display font-semibold">{member.role}</p>
                  </div>

                  <p className="text-gray-300 font-display leading-relaxed">{member.bio}</p>

                  {/* Expertise Tags */}
                  <div className="space-y-3">
                    <p className="text-sm font-display font-semibold text-gray-400 uppercase tracking-wide">Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((exp) => (
                        <span
                          key={exp}
                          className="px-3 py-1 rounded-full bg-quantum-purple/10 border border-quantum-purple/30 text-quantum-purple text-sm font-display"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={member.socials.linkedin}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-quantum-purple/10 hover:bg-quantum-purple/20 text-quantum-purple transition-all duration-300"
                    >
                      in
                    </a>
                    <a
                      href={member.socials.github}
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
