"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Users, Lightbulb } from "lucide-react";

export default function AboutUsSection() {
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
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const features = [
    {
      icon: Brain,
      title: "Deep Learning",
      description: "Master quantum algorithms and computational theory through hands-on workshops.",
      gradient: "from-quantum-primary to-quantum-secondary",
    },
    {
      icon: Zap,
      title: "Innovation Labs",
      description: "Experiment with cutting-edge quantum platforms and real hardware.",
      gradient: "from-quantum-secondary to-quantum-accent",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Work with peers and industry experts on groundbreaking research projects.",
      gradient: "from-quantum-accent to-quantum-primary",
    },
    {
      icon: Lightbulb,
      title: "Future Ready",
      description: "Build skills for quantum computing careers and leadership in tech.",
      gradient: "from-quantum-primary to-quantum-accent",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-quantum-bg">
      <style>
        {`
          .feature-card {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .feature-card:hover {
            transform: translateY(-8px);
          }
          .feature-icon {
            transition: all 0.3s ease;
          }
          .feature-card:hover .feature-icon {
            filter: drop-shadow(0 0 20px rgba(0, 240, 255, 0.6));
            transform: scale(1.1);
          }
        `}
      </style>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-quantum-primary/5 via-transparent to-quantum-secondary/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* LEFT SIDE (50%) - Section Subtitle & Description */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col justify-center space-y-6"
            >
              <motion.div variants={itemVariants}>
                <span className="text-quantum-primary text-sm font-semibold tracking-widest uppercase">
                  Why Join Us
                </span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-quantum-text leading-[1.1]"
              >
                How We're Shaping the{" "}
                <span className="bg-gradient-to-r from-quantum-primary via-quantum-secondary to-quantum-accent bg-clip-text text-transparent">
                  Quantum Future
                </span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-quantum-text-secondary leading-relaxed max-w-lg"
              >
                At Symbiosis Quantum Club, we're dedicated to pioneering quantum computing education and research. We bring together passionate students, industry experts, and cutting-edge technology to create an environment where innovation thrives.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-quantum-text-tertiary leading-relaxed max-w-lg"
              >
                Whether you're a beginner or advanced enthusiast, we provide the resources, mentorship, and community support you need to excel in the quantum computing revolution.
              </motion.p>
            </motion.div>

            {/* RIGHT SIDE (40%) - 2x2 Feature Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="feature-card group relative p-6 md:p-8 rounded-2xl bg-quantum-surface/40 border border-quantum-border hover:border-quantum-primary/50 backdrop-blur-md overflow-hidden"
                  >
                    {/* Gradient Background on Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
                    />

                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-quantum-primary/20 to-quantum-secondary/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />

                    <div className="relative space-y-4">
                      {/* Icon */}
                      <div className="w-fit p-3 rounded-lg bg-quantum-bg/60 border border-quantum-border/50">
                        <Icon className="feature-icon w-6 h-6 text-quantum-primary" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-quantum-text leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-sm md:text-base text-quantum-text-secondary leading-relaxed">
                        {feature.description}
                      </p>

                      {/* Accent Line */}
                      <div
                        className={`h-1 w-12 rounded-full bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
