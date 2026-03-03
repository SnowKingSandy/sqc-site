import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {

  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollHint(window.scrollY < 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden">
                <style>
        {`
          @keyframes gradient-move {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
          .gradient-text {
            background: linear-gradient(270deg, 52A1FF, #7c3aed, #7c3aed, #52A1FF 90%);
            background-size: 400% 400%;
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
            font-weight: 700;
            letter-spacing: 0.5px;
            animation: gradient-move 3.5s linear infinite;
          }
        `}
      </style>
      {/* Orbital animation element */}
      <div className="absolute opacity-10 pointer-events-none">
        <div className="absolute w-[60rem] h-[60rem] rounded-full border border-blue-500/20 animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute w-[40rem] h-[40rem] rounded-full border border-indigo-500/20 animate-[spin_40s_linear_infinite_reverse]"></div>
        <div className="absolute w-[20rem] h-[20rem] rounded-full border border-violet-500/20 animate-[spin_20s_linear_infinite]"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 max-w-6xl">
        <div className="flex flex-col items-start">
          <div className="mb-4">
            <span className="font-display text-blue-400 text-sm uppercase tracking-wider">Welcome to</span>
          </div>
          
          <h1 className="font-title text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-[1.1] max-w-4xl">
            {/* WORK IN PROG */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 gradient-text">
              Symbiosis Quantum Club
            </span>
          </h1>
          
          <p className="font-display text-md md:text-2xl mb-8 text-gray-300 max-w-2xl leading-relaxed">
            Exploring the quantum realm, one qubit at a time. Join us in pushing the boundaries of computation.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-900 text-white font-display text-sm md:text-lg px-8 py-6 h-auto rounded-md shadow-lg shadow-blue-900/20">
              <Link href="/join">Join Us</Link>
            </Button>
            
            <Button asChild variant="outline" className="border-blue-700/50 text-blue-300 hover:bg-blue-900/30 font-display text-sm md:text-lg px-8 py-6 h-auto rounded-md">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Optional: Decorative element */}
      {showScrollHint && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-sm font-display text-gray-400 mb-2">Scroll to explore</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      )}
    </section>
  );
}