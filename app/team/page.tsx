"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function TeamHub() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const teamSections = [
    {
      title: "Leadership",
      href: "/team/leadership",
      members: [
        { name: "Samarth Bhadane", role: "President" },
        { name: "Nandini Patawri", role: "Vice President" },
      ],
      gradient: "from-quantum-blue to-cyan-500",
      icon: "👑",
    },
    {
      title: "Technical",
      href: "/team/technical",
      members: [
        { name: "Eric Siquiera", role: "Technical Head" },
        { name: "Disha Gupta", role: "Technical Co-Head" },
      ],
      gradient: "from-quantum-purple to-pink-500",
      icon: "⚙️",
    },
    {
      title: "Operations",
      href: "/team/operations",
      members: [
        { name: "Mahi Laddha", role: "Media Head" },
        { name: "Khushi Kashyap", role: "Event Head" },
        { name: "Manya Bhargava", role: "Documentation Head" },
      ],
      gradient: "from-indigo-500 to-quantum-accent",
      icon: "🎯",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-quantum-blue/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-quantum-purple/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h1 className="font-title text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Meet the <span className="bg-gradient-to-r from-quantum-accent to-quantum-purple bg-clip-text text-transparent">Quantum Pioneers</span>
          </h1>
          <p className="text-xl text-gray-300 font-display max-w-2xl mx-auto">
            Discover the brilliant minds driving quantum innovation at Symbiosis Quantum Club
          </p>
        </motion.div>

        {/* Team Sections Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {teamSections.map((section, index) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
              onMouseEnter={() => setHoveredMember(section.title)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <Link href={section.href}>
                <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${section.gradient} bg-opacity-10 border border-quantum-accent/20 hover:border-quantum-accent/50 transition-all duration-300 backdrop-blur-xl overflow-hidden cursor-pointer h-full`}>
                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 217, 255, 0.1), transparent 80%)`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    <div className="text-5xl">{section.icon}</div>

                    <div>
                      <h3 className="text-2xl font-title font-bold text-white mb-4">{section.title}</h3>
                      <ul className="space-y-2 mb-6">
                        {section.members.map((member) => (
                          <li key={member.name} className="text-gray-300 font-display text-sm">
                            <span className="text-quantum-accent">•</span> {member.role}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-2 text-quantum-accent font-display font-semibold group-hover:gap-3 transition-all duration-300">
                      <span>Explore Team</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Border animation */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300 bg-gradient-to-br ${section.gradient}`} />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Advisory Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-r from-quantum-medium/30 to-quantum-dark/30 border border-quantum-accent/20 rounded-2xl p-8 md:p-12 backdrop-blur-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-title font-bold text-white">Faculty Advisor</h3>
              <p className="text-gray-300 font-display leading-relaxed">
                <span className="text-quantum-accent font-semibold">Dr. Archana Chaudhari</span> - Guiding our club with expertise and vision in quantum computing research.
              </p>
            </div>
            <div className="text-5xl">👨‍🏫</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
