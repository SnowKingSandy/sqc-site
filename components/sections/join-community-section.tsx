"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Loader, Check } from "lucide-react";

export default function JoinCommunitySection() {
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    major: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Placeholder for actual form submission
      // In production, this would send to an API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormStatus("success");
      setFormData({ name: "", email: "", major: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 3000);
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    } finally {
      setIsLoading(false);
    }
  };

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

  const benefits = [
    "Access exclusive workshops and seminars",
    "Collaborate with industry experts",
    "Build your quantum computing portfolio",
    "Network with passionate innovators",
  ];

  return (
    <section id="join" className="py-24 md:py-32 relative overflow-hidden bg-quantum-bg">
      <style>
        {`
          .input-field {
            transition: all 0.3s ease;
          }
          .input-field:focus {
            box-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
          }
          .select-field {
            transition: all 0.3s ease;
          }
          .select-field:focus {
            box-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
          }
          .submit-btn {
            background: linear-gradient(135deg, #00F0FF, #7B2FF7);
            transition: all 0.3s ease;
          }
          .submit-btn:hover:not(:disabled) {
            box-shadow: 0 0 30px rgba(0, 240, 255, 0.5);
            transform: translateY(-2px);
          }
        `}
      </style>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-quantum-primary/3 via-transparent to-quantum-secondary/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          >
            {/* LEFT SIDE (60%) - Content */}
            <motion.div
              variants={containerVariants}
              className="flex flex-col justify-start space-y-8"
            >
              {/* Eyebrow Label */}
              <motion.div variants={itemVariants}>
                <span className="text-quantum-primary text-sm font-semibold tracking-widest uppercase">
                  Join Our Community
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-quantum-text leading-[1.1]"
              >
                Ready to Explore the{" "}
                <span className="bg-gradient-to-r from-quantum-primary to-quantum-secondary bg-clip-text text-transparent">
                  Quantum Future?
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-quantum-text-secondary leading-relaxed max-w-lg"
              >
                Join Symbiosis Quantum Club and become part of a thriving community dedicated to quantum innovation. We're excited to welcome passionate learners like you.
              </motion.p>

              {/* Benefits List */}
              <motion.div
                variants={itemVariants}
                className="space-y-4 pt-4"
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-quantum-primary/20 border border-quantum-primary/50 flex-shrink-0">
                      <Check className="w-3 h-3 text-quantum-primary" />
                    </div>
                    <span className="text-quantum-text-secondary">{benefit}</span>
                  </div>
                ))}
              </motion.div>

              {/* Trust Badges - Social Proof */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-6 pt-8"
              >
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-quantum-primary">50+</p>
                  <p className="text-xs md:text-sm text-quantum-text-tertiary mt-2">Members</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-quantum-secondary">10+</p>
                  <p className="text-xs md:text-sm text-quantum-text-tertiary mt-2">Workshops</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-quantum-accent">100%</p>
                  <p className="text-xs md:text-sm text-quantum-text-tertiary mt-2">Engaged</p>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE (40%) - Form */}
            <motion.div
              variants={itemVariants}
              className="bg-quantum-surface/60 border border-quantum-border rounded-2xl p-8 md:p-10 backdrop-blur-lg overflow-hidden relative group hover:border-quantum-primary/50 transition-all duration-300"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-quantum-primary/10 to-quantum-secondary/5 rounded-2xl blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10" />

              <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
                {/* Name Field */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-quantum-text">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="input-field w-full px-4 py-3 rounded-lg bg-quantum-bg/60 border border-quantum-border text-quantum-text placeholder-quantum-text-muted focus:outline-none focus:border-quantum-primary/80"
                    suppressHydrationWarning
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-quantum-text">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="input-field w-full px-4 py-3 rounded-lg bg-quantum-bg/60 border border-quantum-border text-quantum-text placeholder-quantum-text-muted focus:outline-none focus:border-quantum-primary/80"
                    suppressHydrationWarning
                  />
                </motion.div>

                {/* Major/Field */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label htmlFor="major" className="block text-sm font-semibold text-quantum-text">
                    Field of Study
                  </label>
                  <select
                    id="major"
                    name="major"
                    value={formData.major}
                    onChange={handleChange}
                    required
                    className="select-field w-full px-4 py-3 rounded-lg bg-quantum-bg/60 border border-quantum-border text-quantum-text focus:outline-none focus:border-quantum-primary/80 appearance-none cursor-pointer"
                    suppressHydrationWarning
                  >
                    <option value="" className="bg-quantum-bg text-quantum-text">Select your field</option>
                    <option value="Physics" className="bg-quantum-bg text-quantum-text">Physics</option>
                    <option value="Computer Science" className="bg-quantum-bg text-quantum-text">Computer Science</option>
                    <option value="Mathematics" className="bg-quantum-bg text-quantum-text">Mathematics</option>
                    <option value="Engineering" className="bg-quantum-bg text-quantum-text">Engineering</option>
                    <option value="Other" className="bg-quantum-bg text-quantum-text">Other</option>
                  </select>
                </motion.div>

                {/* Message Field */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-quantum-text">
                    Tell Us Your Interest
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Why are you interested in quantum computing?"
                    className="input-field w-full px-4 py-3 rounded-lg bg-quantum-bg/60 border border-quantum-border text-quantum-text placeholder-quantum-text-muted focus:outline-none focus:border-quantum-primary/80 resize-none"
                    suppressHydrationWarning
                  />
                </motion.div>

                {/* Status Messages */}
                {formStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-500/10 border border-green-500/40 text-green-400 text-sm flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Thank you! We'll be in touch soon. 🎉
                  </motion.div>
                )}
                {formStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-red-500/10 border border-red-500/40 text-red-400 text-sm"
                  >
                    Oops! Something went wrong. Please try again.
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  variants={itemVariants}
                  type="submit"
                  disabled={isLoading}
                  className="submit-btn w-full text-quantum-bg font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-8"
                >
                  {isLoading ? (
                    <>
                      <Loader size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Join the Revolution"
                  )}
                </motion.button>

                <p className="text-center text-quantum-text-tertiary text-xs">
                  We respect your privacy. We'll only use your information to contact you about club activities.
                </p>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
