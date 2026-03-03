"use client";

import { useState, useEffect } from "react";
import SectionHeading from "@/components/ui/section-heading";
import TeamCard from "@/components/sections/team-card";

export default function Team() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const teamMembers = [
    {
      name: "Dr. Archana Chaudhari",
      role: "Faculty Advisor",
      category: "Faculty",
      bio: "Physics major specialized in quantum entanglement. Passionate about quantum communication protocols and quantum networking.",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-400" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 5V3M12 21v-2M5 12H3M21 12h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: "Samarth Bhadane",
      role: "President",
      category: "Leadership",
      bio: "Physics major specialized in quantum entanglement. Passionate about quantum communication protocols and quantum networking.",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      name: "Nandini Patawri",
      role: "Vice President",
      category: "Leadership",
      bio: "Physics major specialized in quantum entanglement. Passionate about quantum communication protocols and quantum networking.",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      name: "Eric Siquiera",
      role: "Technical Head",
      category: "Technical",
      bio: "Physics major specialized in quantum entanglement. Passionate about quantum communication protocols and quantum networking.",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      name: "Disha Gupta",
      role: "Technical Co-Head",
      category: "Technical",
      bio: "Physics major specialized in quantum entanglement. Passionate about quantum communication protocols and quantum networking.",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      name: "Mahi Laddha",
      role: "Media Head",
      category: "Media",
      bio: "Electrical Engineering student focused on quantum circuit design. Organizes hands-on workshops for club members.",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 10c0-1.242-.504-2.372-1.318-3.182L13.5 12.5l-1.5-1.5 4.682-4.682A5.001 5.001 0 009.73 2H9.5a5 5 0 00-5 5v.277c0 1.242.504 2.372 1.318 3.182L10.5 15.5l1.5-1.5-4.682-4.682A5.001 5.001 0 0114.27 14H14.5a5 5 0 005-5z" />
        </svg>
      )
    },
    {
      name: "Khushi Kashyap",
      role: "Event Head",
      category: "Events",
      bio: "Math and CS double major. Creates educational content about quantum programming and manages the club's online resources.",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      name: "Manya Bhargava",
      role: "Documentation Head",
      category: "Content",
      bio: "Physics student with a passion for quantum outreach. Coordinates guest lectures, networking events, and hackathons.",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  // Get unique categories for filters
  const categories = ["All", ...new Set(teamMembers.map(member => member.category))];
  
  // Filter members based on active filter
  const filteredMembers = activeFilter === "All" 
    ? teamMembers 
    : teamMembers.filter(member => member.category === activeFilter);

  return (
    <div className="py-8 sm:py-12 md:py-16 container mx-auto px-3 sm:px-4">
      <SectionHeading title="Our Team" />
      
      <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto text-center mb-6 sm:mb-8 font-display">
        Meet the passionate individuals driving quantum innovation at Symbiosis. Our diverse team brings expertise from various fields to promote quantum computing education and research.
      </p>
      
      {/* Mobile Filter - Pills Wrap to Next Line */}
      <div className="flex flex-wrap gap-2 mb-5 md:hidden w-full">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`py-1 px-3 rounded-full text-xs font-medium transition-colors ${
              activeFilter === category
                ? "bg-blue-600 text-white"
                : "bg-[#060a20] border border-gray-800 text-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Desktop Filter - Standard Tabs */}
      <div className="hidden md:flex justify-center mb-8">
        <div className="inline-flex bg-[#060a20] border border-gray-800 rounded-lg p-1">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
                activeFilter === category
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-gray-800/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Team Grid - Maintaining grid for all devices */}
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
        {filteredMembers.map((member, i) => (
          <div key={i} className="w-full flex justify-center">
            <TeamCard {...member} compact={isMobile} />
          </div>
        ))}
      </div>
      
      {/* Empty State */}
      {filteredMembers.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-400">No team members found in this category.</p>
        </div>
      )}
      
      {/* Mobile Call to Action */}
      <div className="mt-8 md:mt-12 md:hidden bg-[#060a20] border border-gray-800 rounded-lg p-4 text-center">
        <p className="text-xs sm:text-sm text-gray-300 mb-3">Interested in joining our team?</p>
        <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-xs sm:text-sm font-medium">
          Apply Now
        </button>
      </div>
    </div>
  );
}