"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVisionSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-quantum-bg">
      <style>
        {`
          .card-glow {
            position: relative;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .card-glow:hover {
            transform: translateY(-6px);
          }
          .card-glow::before {
            content: '';
            position: absolute;
            inset: -1px;
            border-radius: 1.5rem;
            padding: 2px;
            background: linear-gradient(135deg, transparent, transparent);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
          }
          .card-glow.mission::before {
            background: linear-gradient(135deg, #00F0FF, transparent);
          }
          .card-glow.vision::before {
            background: linear-gradient(135deg, #FF2E9A, transparent);
          }
          .card-glow:hover::before {
            opacity: 1;
          }
        `}
      </style>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-quantum-secondary/3 via-transparent to-quantum-primary/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header - Centered at Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center mb-16 md:mb-20 max-w-3xl mx-auto"
          >
            <span className="text-quantum-primary text-sm font-semibold tracking-widest uppercase mb-4">
              Our Direction
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-quantum-text mb-6 leading-[1.1]">
              Mission &{" "}
              <span className="bg-gradient-to-r from-quantum-primary via-quantum-secondary to-quantum-accent bg-clip-text text-transparent">
                Vision
              </span>
            </h2>
            <p className="text-lg md:text-xl text-quantum-text-secondary leading-relaxed">
              Guided by our passion for quantum computing and commitment to community, we're shaping the future of technology.
            </p>
          </motion.div>

          {/* 2-Column Card Layout with Divider */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 relative"
          >
            {/* Vertical Divider - Hidden on Mobile */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px">
              <div className="h-full bg-gradient-to-b from-quantum-primary via-quantum-secondary to-quantum-accent opacity-30" />
            </div>

            {/* Mission Card - Left */}
            <motion.div
              variants={itemVariants}
              className="card-glow mission group relative p-8 md:p-10 rounded-2xl bg-quantum-surface/60 border border-quantum-border backdrop-blur-lg overflow-hidden"
            >
              {/* Glow background on hover */}
              <div className="absolute -inset-1 bg-gradient-to-br from-quantum-primary/20 to-quantum-secondary/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10" />

              <div className="relative space-y-6">
                {/* Icon & Title */}
                <div className="flex items-start gap-4">
                  <div className="w-fit p-3 rounded-lg bg-quantum-bg/60 border border-quantum-primary/40">
                    <Target className="w-6 h-6 text-quantum-primary" />
                  </div>
                  <div>
                    <span className="inline-block text-quantum-primary text-xs font-semibold tracking-widest uppercase mb-2">
                      Our Mission
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-quantum-text leading-tight">
                      Empowering Quantum Innovators
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg text-quantum-text-secondary leading-relaxed">
                  We aim to demystify quantum computing and make it accessible to students. Through hands-on projects and collaborative learning, we're building the next generation of quantum engineers and researchers.
                </p>

                {/* Accent Line */}
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-quantum-primary to-quantum-accent opacity-40 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Benefits List */}
                <ul className="space-y-4 pt-4">
                  {[
                    "Develop practical quantum computing skills",
                    "Foster collaboration and innovation",
                    "Connect with industry and academia",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-quantum-primary mt-2 flex-shrink-0" />
                      <span className="text-quantum-text-secondary">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Vision Card - Right */}
            <motion.div
              variants={itemVariants}
              className="card-glow vision group relative p-8 md:p-10 rounded-2xl bg-quantum-surface/60 border border-quantum-border backdrop-blur-lg overflow-hidden"
            >
              {/* Glow background on hover */}
              <div className="absolute -inset-1 bg-gradient-to-br from-quantum-accent/20 to-quantum-secondary/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10" />

              <div className="relative space-y-6">
                {/* Icon & Title */}
                <div className="flex items-start gap-4">
                  <div className="w-fit p-3 rounded-lg bg-quantum-bg/60 border border-quantum-accent/40">
                    <Eye className="w-6 h-6 text-quantum-accent" />
                  </div>
                  <div>
                    <span className="inline-block text-quantum-accent text-xs font-semibold tracking-widest uppercase mb-2">
                      Our Vision
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-quantum-text leading-tight">
                      Quantum for Everyone
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg text-quantum-text-secondary leading-relaxed">
                  We envision a world where quantum computing knowledge is not restricted to experts. By creating an inclusive platform, we're breaking barriers and inspiring the next wave of quantum revolutionaries.
                </p>

                {/* Accent Line */}
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-quantum-accent to-quantum-primary opacity-40 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Benefits List */}
                <ul className="space-y-4 pt-4">
                  {[
                    "Make quantum accessible and engaging",
                    "Lead quantum innovation in our region",
                    "Build a thriving quantum community",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-quantum-accent mt-2 flex-shrink-0" />
                      <span className="text-quantum-text-secondary">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
