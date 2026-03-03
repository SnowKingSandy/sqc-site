"use client";

import FadeInOnScroll from "@/components/sections/FadeInOnScroll";
import HeroSection from "@/components/sections/hero-section";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
// import { Card, CardBody } from "@/components/ui/card";
import { Card, CardBody } from "@heroui/react";
import Link from "next/link";

export default function Home() {
  return (
    <>

      <HeroSection />

      {/* About Section Preview */}
      <section className="py-8 md:py-16 container mx-auto px-4 sm:px-6">
        <div className="text-center mb-5 md:mb-10">
          <h2 className="font-title text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3">About Us</h2>
          <div className="w-10 md:w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <FadeInOnScroll className="snap-center min-w-[80vw] sm:min-w-[280px]">
<Card className="bg-[#060A2C] border-gray-800 shadow-lg">
          <CardBody className="p-5 sm:p-8 md:p-10">
            <p className="mb-5 md:mb-6 text-sm sm:text-base md:text-lg font-display text-gray-300 leading-relaxed">
              <span className="md:hidden">
                Symbiosis Quantum Club explores quantum computing, bringing together students from diverse backgrounds with a shared interest in quantum tech.
              </span>
              <span className="hidden md:inline">
                Symbiosis Quantum Club is a student-led initiative dedicated to exploring 
                and advancing the field of quantum computing. Founded in 2023, our club brings 
                together passionate students from diverse academic backgrounds who share 
                a common interest in quantum technologies.
              </span>
            </p>
            <div className="text-center">
              <Button variant="outline" asChild className="w-full sm:w-auto font-display border-blue-700/50 hover:bg-blue-900/30 px-4 py-2 sm:py-2 sm:px-6 h-auto text-sm sm:text-base">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </CardBody>
        </Card>
</FadeInOnScroll>
      </section>

      {/* Featured Content */}
      <section className="py-8 md:py-16 container mx-auto px-4 sm:px-6">
        <div className="text-center mb-5 md:mb-10">
          <h2 className="font-title text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3">Explore Quantum</h2>
          <div className="w-10 md:w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        {/* Mobile Horizontal Scroll Layout */}
        <div className="md:hidden -mx-4 px-4 overflow-x-auto no-scrollbar pb-4">
          <div className="flex gap-4 py-8 md:py-16 container mx-auto px-4 sm:px-6">
            <FadeInOnScroll className="snap-center min-w-[80vw] sm:min-w-[280px]">
<Card className="bg-[#060A2C] border-gray-800 hover:border-blue-900/50 transition-all shadow-md min-w-[80vw] sm:min-w-[280px]">
              <CardBody className="p-4">
                <div className="flex items-center mb-3">
                  <span className="w-8 h-8 rounded-full bg-blue-600/30 flex items-center justify-center mr-3">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 12v6m-3-3h6" />
                      <path d="M5 12v-2a7 7 0 0 1 14 0v2"/>
                      <path d="M12 12a7 7 0 0 1-7-7v7a7 7 0 0 0 7 7 7 7 0 0 0 7-7v-7a7 7 0 0 1-7 7z" />
                    </svg>
                  </span>
                  <h3 className="font-title text-base font-semibold">Workshops</h3>
                </div>
                <p className="font-display text-gray-300 mb-3 text-sm leading-relaxed">Join our hands-on sessions to learn quantum programming</p>
                <Button variant="link" className="text-blue-400 p-0 font-display text-sm">
                  View Schedule →
                </Button>
              </CardBody>
            </Card>
</FadeInOnScroll>
            
            <FadeInOnScroll className="snap-center min-w-[80vw] sm:min-w-[280px]">
<Card className="bg-[#060A2C] border-gray-800 hover:border-blue-900/50 transition-all shadow-md min-w-[80vw] sm:min-w-[280px]">
              <CardBody className="p-4">
                <div className="flex items-center mb-3">
                  <span className="w-8 h-8 rounded-full bg-purple-600/30 flex items-center justify-center mr-3">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    </svg>
                  </span>
                  <h3 className="font-title text-base font-semibold">Resources</h3>
                </div>
                <p className="font-display text-gray-300 mb-3 text-sm leading-relaxed">Access our curated collection of quantum resources</p>
                <Button variant="link" className="text-blue-400 p-0 font-display text-sm">
                  Browse Library →
                </Button>
              </CardBody>
            </Card>
</FadeInOnScroll>
            
            <FadeInOnScroll className="snap-center min-w-[80vw] sm:min-w-[280px]">
<Card className="bg-[#060A2C] border-gray-800 hover:border-blue-900/50 transition-all shadow-md min-w-[80vw] sm:min-w-[280px]">
              <CardBody className="p-4">
                <div className="flex items-center mb-3">
                  <span className="w-8 h-8 rounded-full bg-green-600/30 flex items-center justify-center mr-3">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    </svg>
                  </span>
                  <h3 className="font-title text-base font-semibold">Projects</h3>
                </div>
                <p className="font-display text-gray-300 mb-3 text-sm leading-relaxed">Explore our ongoing quantum research projects</p>
                <Button variant="link" className="text-blue-400 p-0 font-display text-sm">
                  See Projects →
                </Button>
              </CardBody>
            </Card>
</FadeInOnScroll>
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          <FadeInOnScroll className="snap-center min-w-[80vw] sm:min-w-[280px]">
<Card className="bg-[#060A2C] border-gray-800 hover:border-blue-900/50 transition-all duration-300 shadow-md">
            <CardBody className="p-8">
              <h3 className="font-title text-xl font-semibold mb-3">Workshops</h3>
              <p className="font-display text-gray-300 mb-6 text-base leading-relaxed">Join our hands-on workshops to learn quantum programming</p>
              <Button variant="link" className="text-blue-400 p-0 font-display text-base">
                View Schedule →
              </Button>
            </CardBody>
          </Card>
</FadeInOnScroll>
          
          <FadeInOnScroll className="snap-center min-w-[80vw] sm:min-w-[280px]">
<Card className="bg-[#060A2C] border-gray-800 hover:border-blue-900/50 transition-all duration-300 shadow-md">
            <CardBody className="p-8">
              <h3 className="font-title text-xl font-semibold mb-3">Resources</h3>
              <p className="font-display text-gray-300 mb-6 text-base leading-relaxed">Access our curated collection of quantum resources</p>
              <Button variant="link" className="text-blue-400 p-0 font-display text-base">
                Browse Library →
              </Button>
            </CardBody>
          </Card>
</FadeInOnScroll>
          
          <FadeInOnScroll className="snap-center min-w-[80vw] sm:min-w-[280px]">
<Card className="bg-[#060A2C] border-gray-800 hover:border-blue-900/50 transition-all duration-300 shadow-md">
            <CardBody className="p-8">
              <h3 className="font-title text-xl font-semibold mb-3">Projects</h3>
              <p className="font-display text-gray-300 mb-6 text-base leading-relaxed">Explore our ongoing quantum research projects</p>
              <Button variant="link" className="text-blue-400 p-0 font-display text-base">
                See Projects →
              </Button>
            </CardBody>
          </Card>
</FadeInOnScroll>
        </div>
</section>

      {/* Community Section */}
      <FadeInOnScroll className="snap-center min-w-[80vw] sm:min-w-[280px]">
<Card className="py-8 md:py-16 container mx-auto px-4 sm:px-6 mb-4 md:mb-0">
        
        <SectionHeading title="Join Our Community" className="mb-8 md:mb-12" />        
        <CardBody className="bg-[#060A2C] rounded-xl p-5 sm:p-8 md:p-12 text-center shadow-lg">
          <p className="font-display text-sm sm:text-base md:text-xl mb-5 md:mb-6 max-w-2xl mx-auto text-gray-300">
            Connect with fellow quantum enthusiasts, participate in events, and stay updated.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 font-display mx-120 px-2 py-2.5 sm:px-8 sm:py-4 h-auto text-sm sm:text-base">
            Join Now
          </Button>
        </CardBody>
      </Card>
</FadeInOnScroll>

<style jsx global>{`
  .scroll-snap-x-mandatory {
    scroll-snap-type: x mandatory;
  }
  .snap-center {
    scroll-snap-align: center;
  }
`}</style>
    </>
  );
}