"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, BookOpen, ExternalLink } from "lucide-react";

export default function SpotlightPage() {
  const events = [
    {
      title: "Quantum Computing Workshop",
      date: "March 15, 2024",
      category: "Workshop",
      description: "Learn the fundamentals of quantum computing with hands-on Qiskit programming.",
      image: "🎓",
      link: "#",
    },
    {
      title: "Introduction to Quantum Entanglement",
      date: "March 22, 2024",
      category: "Seminar",
      description: "Explore the mind-bending concept of quantum entanglement with expert faculty.",
      image: "🔗",
      link: "#",
    },
    {
      title: "Hackathon: Quantum Solutions",
      date: "April 5-6, 2024",
      category: "Competition",
      description: "24-hour hackathon to build real-world quantum computing solutions.",
      image: "🚀",
      link: "#",
    },
    {
      title: "Guest Lecture: Industry Insights",
      date: "April 12, 2024",
      category: "Lecture",
      description: "Hear from quantum computing professionals working at leading tech companies.",
      image: "💼",
      link: "#",
    },
  ];

  const articles = [
    {
      title: "Understanding Quantum Gates: A Beginner's Guide",
      excerpt: "Master the building blocks of quantum circuits and learn how quantum gates manipulate qubits to create powerful algorithms.",
      author: "Samarth Bhadane",
      date: "March 10, 2024",
      category: "Tutorial",
      image: "⚙️",
      link: "#",
    },
    {
      title: "Quantum Error Correction: Why It Matters",
      excerpt: "Dive deep into quantum error correction techniques that are crucial for building fault-tolerant quantum computers.",
      author: "Disha Gupta",
      date: "March 5, 2024",
      category: "Deep Dive",
      image: "🔧",
      link: "#",
    },
    {
      title: "Your Path to Quantum Computing: Career Guide",
      excerpt: "Explore career opportunities in quantum computing and learn what skills employers are looking for.",
      author: "Nandini Patawri",
      date: "February 28, 2024",
      category: "Career",
      image: "🎯",
      link: "#",
    },
    {
      title: "Quantum Machine Learning: The Future is Here",
      excerpt: "Combine quantum computing with AI to explore the revolutionary field of quantum machine learning.",
      author: "Eric Siquiera",
      date: "February 20, 2024",
      category: "Innovation",
      image: "🧠",
      link: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-4"
        >
          <h1 className="font-title text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Spotlight: Club <span className="bg-gradient-to-r from-quantum-accent to-quantum-purple bg-clip-text text-transparent">Life</span>
          </h1>
          <p className="text-xl text-gray-300 font-display max-w-2xl mx-auto">
            Discover the latest events, workshops, and insights from Symbiosis Quantum Club
          </p>
        </motion.div>

        {/* Events Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="mb-12 space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="text-quantum-accent" size={28} />
              <h2 className="font-title text-4xl md:text-5xl font-bold">Upcoming Events</h2>
            </div>
            <p className="text-gray-300 font-display text-lg max-w-2xl">
              Join us for workshops, seminars, and events that bring quantum computing to life
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {events.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link href={event.link}>
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-quantum-medium/50 to-quantum-dark/50 border border-quantum-accent/20 hover:border-quantum-accent/50 transition-all duration-300 backdrop-blur-xl overflow-hidden cursor-pointer h-full"
                  >
                    {/* Background animation */}
                    <div className="absolute inset-0 bg-gradient-to-br from-quantum-accent/5 to-quantum-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="relative z-10 space-y-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="inline-block px-3 py-1 rounded-full bg-quantum-accent/10 border border-quantum-accent/30 mb-3">
                            <span className="text-quantum-accent text-xs font-display font-semibold uppercase tracking-wide">
                              {event.category}
                            </span>
                          </div>
                          <h3 className="text-2xl font-title font-bold text-white">{event.title}</h3>
                        </div>
                        <div className="text-4xl">{event.image}</div>
                      </div>

                      <p className="text-gray-300 font-display leading-relaxed">{event.description}</p>

                      <div className="flex items-center gap-2 text-quantum-accent font-display font-semibold pt-4">
                        <Calendar size={16} />
                        <span>{event.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Articles Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12"
        >
          <div className="mb-12 space-y-4">
            <div className="flex items-center gap-3">
              <BookOpen className="text-quantum-purple" size={28} />
              <h2 className="font-title text-4xl md:text-5xl font-bold">Latest Articles</h2>
            </div>
            <p className="text-gray-300 font-display text-lg max-w-2xl">
              Dive into quantum computing concepts, career guides, and industry insights
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {articles.map((article, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link href={article.link}>
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-quantum-medium/50 to-quantum-dark/50 border border-quantum-purple/20 hover:border-quantum-purple/50 transition-all duration-300 backdrop-blur-xl overflow-hidden cursor-pointer h-full flex flex-col"
                  >
                    {/* Background animation */}
                    <div className="absolute inset-0 bg-gradient-to-br from-quantum-purple/5 to-quantum-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="relative z-10 space-y-6 flex-1 flex flex-col">
                      <div className="flex items-start justify-between">
                        <div className="inline-block px-3 py-1 rounded-full bg-quantum-purple/10 border border-quantum-purple/30">
                          <span className="text-quantum-purple text-xs font-display font-semibold uppercase tracking-wide">
                            {article.category}
                          </span>
                        </div>
                        <div className="text-4xl">{article.image}</div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-title font-bold text-white mb-3">{article.title}</h3>
                        <p className="text-gray-300 font-display leading-relaxed">{article.excerpt}</p>
                      </div>

                      <div className="space-y-3 pt-4 border-t border-quantum-accent/10">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm font-display">By {article.author}</span>
                          <ExternalLink size={16} className="text-quantum-purple group-hover:translate-x-1 transition-transform" />
                        </div>
                        <span className="text-gray-500 text-sm font-display">{article.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 text-center space-y-6"
        >
          <h3 className="font-title text-3xl md:text-4xl font-bold">
            Don't miss our next <span className="text-quantum-accent">event</span>
          </h3>
          <Link
            href="/#join"
            className="inline-block px-8 py-3 bg-gradient-to-r from-quantum-blue to-quantum-purple hover:shadow-quantum-glow text-white font-display font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            Join Our Community
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
