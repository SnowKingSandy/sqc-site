import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TypingEffect from "./typing-effect";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const typingWords = [
    "Quantum Computing",
    "Quantum Entanglement",
    "Quantum Cryptography",
    "Quantum Machine Learning",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section className="relative h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden bg-quantum-bg">
      <style>
        {`
          @keyframes float-up {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-30px); }
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
          .glow-orb {
            animation: float-up 8s ease-in-out infinite;
            filter: blur(60px);
          }
          .glow-orb-slow {
            animation: float-slow 10s ease-in-out infinite;
            filter: blur(60px);
          }
          .orbital {
            opacity: 0.08;
          }
          .typing-text {
            color: #00F0FF;
            font-weight: 700;
          }
        `}
      </style>

      {/* Motion Background - Right Side Orbs & Orbital Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs - Positioned for right side emphasis */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-quantum-primary/15 rounded-full glow-orb" />
        <div className="absolute top-1/2 right-32 w-72 h-72 bg-quantum-secondary/12 rounded-full glow-orb-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-quantum-accent/10 rounded-full glow-orb" style={{ animationDelay: "2s" }} />

        {/* Orbital Rings - Centered, subtle background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-[800px] h-[800px] rounded-full border border-quantum-primary/20 orbital animate-spin" style={{ animationDuration: "80s", animationDirection: "normal" }} />
          <div className="absolute w-[500px] h-[500px] rounded-full border border-quantum-secondary/15 orbital animate-spin" style={{ animationDuration: "60s", animationDirection: "reverse" }} />
          <div className="absolute w-[250px] h-[250px] rounded-full border border-quantum-accent/10 orbital animate-spin" style={{ animationDuration: "40s", animationDirection: "normal" }} />
        </div>
      </div>

      {/* Main Content Container - 60/40 Split */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT SIDE (60%) - Content */}
          <motion.div
            className="flex flex-col space-y-6 md:space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Animated Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-quantum-bg/40 border border-quantum-primary/40 backdrop-blur-md"
            >
              <span className="w-2 h-2 bg-quantum-primary rounded-full animate-pulse" />
              <span className="text-quantum-primary text-xs md:text-sm font-semibold tracking-widest uppercase">
                Welcome to the Future
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-quantum-text">
                Explore the Quantum
                <br />
                <TypingEffect
                  words={typingWords}
                  speed={80}
                  delay={3000}
                  cursor={true}
                  className="typing-text block mt-2"
                />
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-quantum-text-secondary leading-relaxed max-w-lg"
            >
              Symbiosis Quantum Club brings together passionate students to explore quantum computing, cryptography, and the next frontier of technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                asChild
                className="bg-gradient-to-r from-quantum-primary to-quantum-secondary hover:shadow-glow-cyan text-quantum-bg font-semibold px-8 py-3 rounded-lg text-base transition-all duration-300 hover:scale-105"
              >
                <Link href="/#join" className="inline-flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                className="border border-quantum-primary/50 text-quantum-primary hover:bg-quantum-primary/10 font-semibold px-8 py-3 rounded-lg text-base transition-all duration-300"
              >
                <Link href="/team">Meet the Team</Link>
              </Button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-quantum-border"
            >
              <div>
                <p className="text-2xl md:text-3xl font-bold text-quantum-primary">50+</p>
                <p className="text-sm text-quantum-text-tertiary mt-1">Members</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-quantum-secondary">20+</p>
                <p className="text-sm text-quantum-text-tertiary mt-1">Events</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-quantum-accent">2023</p>
                <p className="text-sm text-quantum-text-tertiary mt-1">Founded</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE (40%) - Motion Elements (Empty on Mobile, Visible on Desktop) */}
          <motion.div
            className="hidden lg:flex items-center justify-center relative h-full min-h-[500px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Decorative Floating Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="absolute w-32 h-32 bg-quantum-primary/20 rounded-full filter blur-2xl"
                animate={{
                  y: [0, -30, 0],
                  x: [0, 15, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                }}
              />
              <motion.div
                className="absolute w-40 h-40 bg-quantum-secondary/15 rounded-full filter blur-3xl"
                animate={{
                  y: [0, 30, 0],
                  x: [0, -20, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                }}
              />
              <motion.div
                className="absolute w-24 h-24 bg-quantum-accent/10 rounded-full filter blur-xl"
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 7,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}