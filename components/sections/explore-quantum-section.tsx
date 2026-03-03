"use client";

import { motion } from "framer-motion";
import { Zap, Cpu, Microscope } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function ExploreQuantumSection() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cards = [
    {
      icon: Zap,
      title: "Quantum Algorithms",
      description: "Master Shor's, Grover's, and quantum machine learning algorithms through practical implementations.",
      gradient: "from-quantum-primary to-quantum-secondary",
      accentGradient: "from-quantum-primary/40 to-quantum-secondary/20",
    },
    {
      icon: Cpu,
      title: "Quantum Hardware",
      description: "Explore quantum circuits, gates, and state preparation on real quantum computers via cloud platforms.",
      gradient: "from-quantum-secondary to-quantum-accent",
      accentGradient: "from-quantum-secondary/40 to-quantum-accent/20",
    },
    {
      icon: Microscope,
      title: "Research Projects",
      description: "Collaborate on cutting-edge quantum research topics with mentorship from industry experts.",
      gradient: "from-quantum-accent to-quantum-primary",
      accentGradient: "from-quantum-accent/40 to-quantum-primary/20",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-quantum-bg">
      <style>
        {`
          .explore-card {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .explore-card:hover {
            transform: translateY(-12px);
          }
          .icon-container {
            transition: all 0.3s ease;
          }
          .explore-card:hover .icon-container {
            transform: scale(1.15) rotate(-5deg);
            filter: drop-shadow(0 0 30px rgba(0, 240, 255, 0.8));
          }
        `}
      </style>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-quantum-primary/3 via-transparent to-quantum-secondary/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20 space-y-4"
          >
            <span className="inline-block text-quantum-primary text-sm font-semibold tracking-widest uppercase">
              Learning Paths
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-quantum-text leading-[1.1]">
              Explore the{" "}
              <span className="bg-gradient-to-r from-quantum-primary via-quantum-secondary to-quantum-accent bg-clip-text text-transparent">
                Quantum Universe
              </span>
            </h2>
            <p className="text-lg md:text-xl text-quantum-text-secondary leading-relaxed max-w-2xl mx-auto">
              Dive deep into quantum computing through our curated learning paths and hands-on experiences.
            </p>
          </motion.div>

          {/* Cards Grid - 3 columns with 2rem gaps */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="explore-card group relative p-8 md:p-10 rounded-2xl bg-quantum-surface/50 border border-quantum-border hover:border-quantum-primary/50 backdrop-blur-lg overflow-hidden"
                >
                  {/* Gradient background glow */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-br ${card.accentGradient} rounded-2xl blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10`}
                  />

                  {/* Content */}
                  <div className="relative space-y-8">
                    {/* Icon - Large 6rem with gradient overlay */}
                    <div className="relative w-24 h-24 md:w-28 md:h-28">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-2xl opacity-20 blur-xl group-hover:blur-2xl group-hover:opacity-40 transition-all duration-300`}
                      />
                      <div className="icon-container relative w-full h-full flex items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-quantum-bg/80 to-quantum-surface/60 border border-quantum-border">
                        <Icon className="w-12 h-12 md:w-14 md:h-14 text-quantum-primary" />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-quantum-text leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-base md:text-lg text-quantum-text-secondary leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* CTA with Arrow */}
                    <div className="flex items-center gap-3 text-quantum-primary font-semibold group-hover:gap-4 transition-all duration-300 cursor-pointer">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>

                    {/* Accent line */}
                    <div
                      className={`h-1 w-12 rounded-full bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
