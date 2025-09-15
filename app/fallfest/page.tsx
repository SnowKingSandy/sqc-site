"use client";

import { useEffect, useRef, useState } from "react";
import FadeInOnScroll from "@/components/sections/FadeInOnScroll";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Accessible focus and CTA styles
const ring =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#40c0cb] focus-visible:ring-offset-[#0f0c29]";
const ctaPrimary = `bg-[#40c0cb] text-[#0f0c29] hover:bg-[#3ab1bb] font-bold shadow-lg ${ring}`;
const ctaSecondary = `border-[#40c0cb] text-white hover:bg-[#40c0cb]/15 ${ring}`;
const linkAccent = "text-[#40c0cb] underline hover:text-[#58d4d7]";

// Utility: common anchor scroll offset style
const anchorOffsetStyle = {
  scrollMarginTop:
    "calc(var(--global-nav-h, 0px) + var(--page-header-h, 64px) + 16px)",
} as React.CSSProperties;

// Fixed header with scroll-progress and collision-safe offset
function PageHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Update progress on scroll
    const onScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      const doc = document.documentElement;
      const height = doc.scrollHeight - doc.clientHeight;
      setScrolled(st > 8);
      setProgress(height > 0 ? Math.min(100, Math.max(0, (st / height) * 100)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Measure and set --page-header-h via ResizeObserver
    const el = headerRef.current;
    const setVar = () => {
      const h = el ? el.getBoundingClientRect().height : 64;
      document.documentElement.style.setProperty("--page-header-h", `${h}px`);
    };
    setVar();
    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && el) {
      ro = new ResizeObserver(() => setVar());
      ro.observe(el);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      ro?.disconnect();
    };
  }, []);

  return (
    <header
      ref={headerRef as any}
      className={`fixed inset-x-0 z-40 transition-colors top-[var(--global-nav-h,0px)] ${
        scrolled ? "bg-[#0f0c29]/95 border-b border-white/10 shadow-lg" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div
        className="absolute left-0 top-0 h-0.5 bg-[#40c0cb] transition-[width] duration-150 ease-linear"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-12 h-14 sm:h-16 md:h-20 flex items-center justify-between">
        <a href="#home" className={`flex items-center gap-3 ${ring}`} aria-label="Qiskit Fall Fest home">
          <img src="/assets/fallfest/IBM Quantum Logo.png" alt="IBM Quantum Logo" className="h-8 w-auto" />
          <span className="text-sm sm:text-base font-semibold text-white/90">Qiskit Fall Fest 2025</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-200">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#schedule" className="hover:text-white transition-colors">Program</a>
          <a href="#workshops" className="hover:text-white transition-colors">Workshops</a>
          <a href="#speakers" className="hover:text-white transition-colors">Speakers</a>
          <a href="#resources" className="hover:text-white transition-colors">Resources</a>
          <a href="#team" className="hover:text-white transition-colors">Team</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="#coc" className="hover:text-[#ff4e50] text-white/90 transition-colors">Code of Conduct</a>
          <Button asChild size="sm" className={ctaPrimary}>
            <a href="#register" aria-label="Register">Register</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}

function HomeHero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      style={anchorOffsetStyle}
      className="relative flex flex-col items-center text-center bg-gradient-to-b from-[#0f0c29] via-[#1a1446] to-[#24243e] px-6"
    >
      {/* Ensure hero fits in one screen below both headers */}
      <div className="w-full max-w-6xl mx-auto pt-6 md:pt-8"
           style={{
             minHeight:
               "calc(100vh - var(--global-nav-h, 0px) - var(--page-header-h, 64px))",
           }}>
        <h1 id="hero-title" className="sr-only">Qiskit Fall Fest 2025</h1>
        <img
          src="/assets/fallfest/IBM Quantum Logo.png"
          alt="IBM Quantum Logo"
          className="w-28 sm:w-40 mx-auto drop-shadow mb-4"
        />
        <SectionHeading title="Qiskit Fall Fest 2025" />
        <div className="py-4 max-w-5xl w-full mx-auto">
          <img
            src="/assets/fallfest/Full_Illustration.png"
            alt="Quantum 100 Years Banner"
            className="w-full max-h-[40vh] rounded-xl shadow-lg object-contain mx-auto"
          />
        </div>
        <p className="text-base sm:text-lg text-[#40c0cb] font-semibold mb-2">
          October – November 2025 · Global · Virtual & Physical
        </p>
        <p className="mb-6 max-w-3xl text-gray-200 mx-auto">
          Join the world's largest student-driven quantum computing festival. Celebrate 100 years of quantum science with workshops, hackathons, talks, and community!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center">
          <Button asChild size="lg" className={ctaPrimary}>
            <a href="#register" aria-label="Register Now">Register Now</a>
          </Button>
          <Button asChild size="lg" variant="outline" className={ctaSecondary}>
            <a href="#about" aria-label="Learn more about Fall Fest">Learn More</a>
          </Button>
        </div>
      </div>
      <img
        src="/assets/fallfest/Badge_03.png"
        alt="Fall Fest Badge"
        className="hidden sm:block absolute top-6 left-6 w-20 drop-shadow-2xl pointer-events-none select-none"
      />
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      style={anchorOffsetStyle}
      className="max-w-5xl mx-auto mt-12 px-6 sm:px-12"
    >
      <SectionHeading title="About Qiskit Fall Fest" />
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <img
          src="/assets/fallfest/Theme.png"
          alt="Fest Theme Graphic"
          className="w-32 sm:w-36 rounded-full border-4 border-[#40c0cb] shadow-xl"
        />
        <p id="about-title" className="text-gray-200 text-lg leading-relaxed max-w-xl">
          Qiskit Fall Fest is a global celebration of quantum learning hosted by universities and IBMers, welcoming all experience levels to learn, build, and connect.
        </p>
      </div>
    </section>
  );
}

function ScheduleSection() {
  return (
    <section
      id="schedule"
      aria-labelledby="schedule-title"
      style={anchorOffsetStyle}
      className="max-w-6xl mx-auto px-6 sm:px-12 my-12 bg-gradient-to-b from-[#0b1220] to-[#0f0c29] rounded-2xl py-10"
    >
      <SectionHeading title="Schedule / Program" />
      <div className="overflow-x-auto">
        <img
          src="/assets/fallfest/Timeline_01.png"
          alt="Event Timeline"
          className="max-w-full max-h-[300px] rounded-lg shadow-md mx-auto object-contain"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        <Card className="bg-gray-900/90 border-l-4 border-[#40c0cb]">
          <CardContent>
            <h3 className="text-lg sm:text-xl font-semibold text-[#40c0cb] mb-2">Day 1: Kickoff & Keynotes</h3>
            <p className="text-gray-300">Opening ceremonies with keynote speeches from IBM Quantum and community partners.</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900/90 border-l-4 border-[#ff4e50]">
          <CardContent>
            <h3 className="text-lg sm:text-xl font-semibold text-[#ff4e50] mb-2">Day 2: Workshops & Panels</h3>
            <p className="text-gray-300">Hands-on sessions and panels with experts and leaders across the quantum ecosystem.</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900/90 border-l-4 border-[#8b5cf6]">
          <CardContent>
            <h3 className="text-lg sm:text-xl font-semibold text-[#8b5cf6] mb-2">Day 3: Challenges & Hackathons</h3>
            <p className="text-gray-300">Coding challenges and hackathons to apply and showcase new skills.</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900/90 border-l-4 border-[#fbbf24]">
          <CardContent>
            <h3 className="text-lg sm:text-xl font-semibold text-[#fbbf24] mb-2">Day 4: Demos & Awards</h3>
            <p className="text-gray-300">Project showcases, awards, and networking across global chapters.</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center mt-8">
        <Button asChild size="lg" variant="outline" className={ctaSecondary}>
          <a href="/assets/fallfest/FallFest_Schedule.pdf" download aria-label="Download schedule PDF">Download Full Schedule (PDF)</a>
        </Button>
      </div>
    </section>
  );
}

function WorkshopsSection() {
  const workshops = [
    { title: "Qiskit 101", level: "Beginner", href: "#" },
    { title: "Quantum Algorithms", level: "Intermediate", href: "#" },
    { title: "Quantum Error Correction", level: "Advanced", href: "#" },
  ];

  const levelPill = (level: string) => {
    const map: Record<string, string> = {
      Beginner: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
      Intermediate: "bg-sky-500/20 text-sky-300 border-sky-400/30",
      Advanced: "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-400/30",
    };
    return `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs border ${map[level] || "bg-gray-500/20 text-gray-300 border-gray-400/30"}`;
  };

  return (
    <section
      id="workshops"
      aria-labelledby="workshops-title"
      style={anchorOffsetStyle}
      className="max-w-6xl mx-auto px-6 sm:px-12 py-12 bg-gradient-to-b from-[#0f0c29] via-[#17223b] to-[#0f0c29] rounded-2xl"
    >
      <SectionHeading title="Workshops & Challenges" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {workshops.map(({ title, level, href }, idx) => (
          <Card key={idx} className="bg-gray-900/90 hover:bg-gray-900/95 p-6 transition-colors rounded-lg">
            <CardContent>
              <h3 className="text-lg sm:text-xl text-white font-bold mb-2">{title}</h3>
              <p className="mb-4">
                <span className={levelPill(level)}>Difficulty: {level}</span>
              </p>
              <Button asChild variant="outline" size="sm" className={ctaSecondary}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${title} notebook`}>Notebook</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function SpeakersSection() {
  const speakers = [
    {
      name: "Speaker 1",
      role: "Quantum Researcher",
      img: "/assets/fallfest/Cat_01.png",
      bio: "Expert in quantum algorithms and computing education.",
      sessionHref: "#",
    },
    {
      name: "Speaker 2",
      role: "IBM Engineer",
      img: "/assets/fallfest/Cat_02.png",
      bio: "Specialist in quantum software development and community advocacy.",
      sessionHref: "#",
    },
  ];

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      style={anchorOffsetStyle}
      className="max-w-6xl mx-auto px-6 sm:px-12 my-12 bg-gradient-to-b from-[#0f0c29] via-[#251b3e] to-[#0f0c29] rounded-2xl py-10"
    >
      <SectionHeading title="Speakers & Mentors" />
      <div className="grid sm:grid-cols-2 gap-8">
        {speakers.map(({ name, role, img, bio, sessionHref }, i) => (
          <Card key={i} className="bg-gray-900/80 p-6 flex flex-col items-center text-center rounded-lg hover:shadow-lg transition-shadow">
            <img src={img} alt={name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-[#40c0cb] mb-3 sm:mb-4 object-cover" />
            <h3 className="text-white font-bold text-lg sm:text-xl">{name}</h3>
            <span className="text-[#8b5cf6] font-semibold">{role}</span>
            <p className="text-gray-300 mt-3">{bio}</p>
            <Button asChild variant="ghost" size="sm" className={`mt-4 text-[#40c0cb] hover:text-[#58d4d7] ${ring}`}>
              <a href={sessionHref} aria-label={`View session for ${name}`}>Session Details</a>
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}

function RegisterSection() {
  return (
    <section
      id="register"
      aria-labelledby="register-title"
      style={anchorOffsetStyle}
      className="max-w-3xl mx-auto px-6 py-12 text-center"
    >
      <SectionHeading title="Register" />
      <p className="mb-6 text-gray-300">
        Register to be part of IBM Qiskit Fall Fest 2025 and immerse in the future of quantum computing.
      </p>
      <Button asChild size="lg" className={`${ctaPrimary} px-10 py-3`}>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Register">Register Now</a>
      </Button>
    </section>
  );
}

function ResourcesSection() {
  const version = "v2025.09.14";
  const updated = "Updated Sep 14, 2025";

  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      style={anchorOffsetStyle}
      className="max-w-6xl mx-auto px-6 sm:px-12 my-12 text-center"
    >
      <SectionHeading title="Resources" />
      <p className="text-gray-400 max-w-xl mx-auto mb-6">
        Workshops, notebooks, slides, and recordings are available in the official repository.
      </p>
      <div className="flex items-center justify-center gap-3 mb-6 text-sm text-gray-400">
        <span className="px-2 py-1 rounded bg-white/5 border border-white/10">{version}</span>
        <span className="px-2 py-1 rounded bg-white/5 border border-white/10">{updated}</span>
      </div>
      <Button asChild variant="outline" size="lg" className={ctaSecondary}>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="View GitHub Repository">View GitHub Repository</a>
      </Button>
    </section>
  );
}

function TeamSponsorsSection() {
  const logos = [
    { src: "/assets/fallfest/Atom_01.png", alt: "Organizer 1" },
    { src: "/assets/fallfest/Atom_03.png", alt: "Organizer 3" },
    { src: "/assets/fallfest/Badge.png", alt: "Fall Fest Badge" },
  ];

  return (
    <section
      id="team"
      aria-labelledby="team-title"
      style={anchorOffsetStyle}
      className="max-w-6xl mx-auto px-6 sm:px-12 my-12 text-center"
    >
      <SectionHeading title="Team, Organizers, Sponsors" />
      <div className="px-32 flex flex-row gap-2 items-center">
        {logos.map(({ src, alt }, i) => (
          <img key={i} src={src} alt={alt} className="mx-auto max-h-16 sm:max-h-20 object-contain" />
        ))}
      </div>
      <p className="text-gray-400 mt-6">
        Contact:{" "}
        <a href="mailto:quantum@ibm.com" className={linkAccent}>
          quantum@ibm.com
        </a>
      </p>
    </section>
  );
}

function CodeOfConductSection() {
  return (
    <section
      id="coc"
      aria-labelledby="coc-title"
      style={anchorOffsetStyle}
      className="max-w-5xl mx-auto px-6 sm:px-12 py-12 text-center text-gray-300"
    >
      <SectionHeading title="Code of Conduct" />
      <p>
        All participants must follow the Code of Conduct and Safety Guidelines; report concerns to organizers during any event activity.
      </p>
      <div className="mt-6">
        <Button asChild variant="outline" className={ctaSecondary}>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Open Code of Conduct">Open Code of Conduct</a>
        </Button>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      style={anchorOffsetStyle}
      className="max-w-5xl mx-auto px-6 sm:px-12 py-12 text-center text-gray-300"
    >
      <SectionHeading title="Contact, Venue, Travel" />
      <p>
        Questions? Email{" "}
        <a href="mailto:quantum@ibm.com" className={linkAccent}>
          quantum@ibm.com
        </a>
      </p>
      <p className="mt-3">Venue: Main Campus & Virtual (see local event pages for details)</p>
    </section>
  );
}

function CodeOfConductFooter() {
  return (
    <footer className="bg-gray-900 py-6 text-center text-gray-400 text-sm border-t border-gray-800">
      <a
        className="underline hover:text-[#ff4e50]"
        href="#coc"
        aria-label="Code of Conduct & Safety Information"
      >
        Code of Conduct & Safety Guidelines
      </a>
    </footer>
  );
}

// Page Layout
export default function FallFestPage() {
  return (
    <main
      className="bg-[#0f0c29] text-white font-sans min-h-screen scroll-smooth"
      style={{
        // @ts-ignore: CSS custom property
        "--global-nav-h": "64px",
        paddingTop: "calc(var(--global-nav-h, 0px) + var(--page-header-h, 64px))",
      }}
    >
      <PageHeader />
      <FadeInOnScroll><HomeHero /></FadeInOnScroll>
      <FadeInOnScroll><AboutSection /></FadeInOnScroll>
      <FadeInOnScroll><ScheduleSection /></FadeInOnScroll>
      <FadeInOnScroll><WorkshopsSection /></FadeInOnScroll>
      <FadeInOnScroll><SpeakersSection /></FadeInOnScroll>
      <FadeInOnScroll><RegisterSection /></FadeInOnScroll>
      <FadeInOnScroll><ResourcesSection /></FadeInOnScroll>
      <FadeInOnScroll><TeamSponsorsSection /></FadeInOnScroll>
      <FadeInOnScroll><CodeOfConductSection /></FadeInOnScroll>
      <FadeInOnScroll><ContactSection /></FadeInOnScroll>
      <CodeOfConductFooter />
    </main>
  );
}