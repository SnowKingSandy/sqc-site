"use client";

import { useEffect, useRef } from "react";

export default function QuantumBackground() {
  const particlesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (particlesRef.current) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1 h-1 rounded-full bg-blue-400/30 animate-float';
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${5 + Math.random() * 10}s`;
        
        particlesRef.current.appendChild(particle);
        setTimeout(() => particle.remove(), 10000);
      }
    }, 600);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Grid lines */}
      <div className="absolute w-full h-[1px] top-1/4 bg-blue-500/5"></div>
      <div className="absolute w-full h-[1px] top-2/4 bg-blue-500/5"></div>
      <div className="absolute w-full h-[1px] top-3/4 bg-blue-500/5"></div>
      <div className="absolute h-full w-[1px] left-1/4 bg-blue-500/5"></div>
      <div className="absolute h-full w-[1px] left-2/4 bg-blue-500/5"></div>
      <div className="absolute h-full w-[1px] left-3/4 bg-blue-500/5"></div>
      
      {/* Orbitals */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[40rem] h-[40rem] rounded-full border border-blue-500/5 animate-spin-slow"></div>
        <div className="absolute w-[30rem] h-[30rem] rounded-full border border-blue-500/5 animate-spin-slow-reverse"></div>
        <div className="absolute w-[20rem] h-[20rem] rounded-full border border-blue-500/5 animate-spin-slow"></div>
      </div>
      
      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0"></div>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-900/10 filter blur-[100px]"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-indigo-900/10 filter blur-[100px]"></div>
    </div>
  );
}