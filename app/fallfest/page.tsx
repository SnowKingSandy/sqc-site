"use client";

import { useEffect, useState, useCallback } from "react";
import FadeInOnScroll from "@/components/sections/FadeInOnScroll";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Focus and CTA styles
const ring =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#40c0cb] focus-visible:ring-offset-[#0f0c29]";
const ctaPrimary = `bg-[#40c0cb] text-[#0f0c29] hover:bg-[#3ab1bb] font-bold shadow-lg ${ring}`;
const ctaSecondary = `border-[#40c0cb] text-white hover:bg-[#40c0cb]/15 ${ring}`;
const linkAccent = "text-[#40c0cb] underline hover:text-[#58d4d7]";

// Common anchor offset for fixed global header (if present)
const anchorOffsetStyle = {
  scrollMarginTop: "calc(var(--global-nav-h, 0px) + 16px)",
} as React.CSSProperties;

// Shared logo sizing tokens for consistency
const logoH = "h-10 sm:h-12"; // hero primary logos
const partnerH = "h-14 sm:h-16 md:h-18"; // equal heights in partner strip

// Top-left hamburger button (three horizontal lines), always visible
function HamburgerButton({
  open,
  setOpen,
  controlsId,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
  controlsId: string;
}) {
  const toggle = useCallback(() => setOpen(!open), [open, setOpen]);

  // Shift button to the right when sidebar is open on desktop so it's not hidden
  const leftWhenOpenDesktop = open ? "md:left-[300px]" : "md:left-3";

  return (
    <button
      type="button"
      aria-label="Toggle navigation"
      aria-controls={controlsId}
      aria-expanded={open}
      onClick={toggle}
      className={`fixed z-[21] left-3 ${leftWhenOpenDesktop} top-[calc(var(--global-nav-h,0px)+12px)] inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#40c0cb] text-[#0f0c29] hover:bg-[#58d4d7] transition ${ring}`}
    >
      <span className="sr-only">Menu</span>
      <span aria-hidden="true" className="relative block w-6 h-4">
        <span
          className={`absolute inset-x-0 top-0 h-0.5 bg-[#0f0c29] transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
        />
        <span
          className={`absolute inset-x-0 top-2 h-0.5 bg-[#0f0c29] transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`absolute inset-x-0 bottom-0 h-0.5 bg-[#0f0c29] transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
        />
      </span>
    </button>
  );
}

// Sidebar (replaces top navbar) — header text only per request
function Sidebar({
  open,
  setOpen,
  id = "site-sidebar",
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
  id?: string;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#event", label: "Event" },
    { href: "#schedule", label: "Program" },
    { href: "#speakers", label: "Speakers" },
    { href: "#register", label: "Register" },
    { href: "#resources", label: "Resources" },
    { href: "#team", label: "Team · Organizers · Sponsors" },
    { href: "#coc", label: "Code of Conduct" },
  ];

  return (
    <>
      {/* Overlay for small screens */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
      <aside
        id={id}
        className={`fixed z-50 top-[var(--global-nav-h,0px)] left-0 h-[calc(100vh-var(--global-nav-h,0px))] w-[260px] md:w-[280px]
          bg-gradient-to-b from-[#0f0c29] via-[#151a34] to-[#0f0c29] border-r border-white/10
          transition-transform ${open ? "translate-x-0" : "-translate-x-full"}`}
        aria-label="Sidebar navigation"
      >
        <div className="h-16 md:h-20 flex items-center px-4 border-b border-white/10">
          <span className="text-sm font-semibold text-white/90">Qiskit Fallfest 2025</span>
          <Button
            type="button"
            variant="ghost"
            className={`ml-auto md:hidden text-white/80 hover:text-white ${ring}`}
            onClick={() => setOpen(false)}
          >
            ✕
          </Button>
        </div>
        <nav className="px-3 py-4 space-y-1 text-sm text-gray-200">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded px-3 py-2 hover:bg-white/10 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-2">
            <Button asChild size="sm" className={ctaPrimary}>
              <a href="#register" aria-label="Register">Register</a>
            </Button>
          </div>
        </nav>
      </aside>
    </>
  );
}

function HomeHero() {
  // Fallback handler for Qiskit (if SVG fails)
  const onQiskitError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const t = e.currentTarget;
    if (!t.dataset.fallback) {
      t.src = "/assets/fallfest/Qiskit_01.png";
      t.dataset.fallback = "true";
    }
  };
  // Fallback handler for Symbiosis (mono)
  const onSymbiosisError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const t = e.currentTarget;
    if (!t.dataset.fallback) {
      t.src = "/logo-mono.png";
      t.dataset.fallback = "true";
    }
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      style={anchorOffsetStyle}
      className="relative flex flex-col items-center text-center bg-gradient-to-b from-[#0f0c29] via-[#1a1446] to-[#24243e] px-6"
    >
      {/* Fit hero within one screen below any global header */}
      <div
        className="w-full max-w-6xl mx-auto pt-8 md:pt-10"
        style={{ minHeight: "calc(100vh - var(--global-nav-h, 0px))" }}
      >
        {/* Only these three logos: IBM Quantum | Qiskit | Symbiosis (mono) */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-4 sm:mb-6">
          <img
            src="/assets/fallfest/IBM Quantum Logo.png"
            alt="IBM Quantum"
            className={`${logoH} w-auto object-contain block`}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <span className="text-white/50">|</span>
          <img
            src="/assets/fallfest/qiskit%20logo.svg"
            alt="Qiskit"
            className={`${logoH} w-auto object-contain block`}
            onError={onQiskitError}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <span className="text-white/50">|</span>
          <img
            src="/logo-mono.png"
            alt="Symbiosis Quantum Club"
            className={`${logoH} w-auto object-contain block`}
            onError={onSymbiosisError}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        <h1 id="hero-title" className="sr-only">Qiskit Fall Fest 2025</h1>
        <SectionHeading title="Qiskit Fall Fest 2025" />

        {/* Illustration constrained for single-screen composition */}
        <div className="py-4 max-w-5xl w-full mx-auto">
          <img
            src="/assets/fallfest/Full_Illustration.png"
            alt="Quantum 100 Years Banner"
            className="w-full max-h-[38vh] sm:max-h-[42vh] rounded-xl shadow-lg object-contain mx-auto block"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Quick facts as chips */}
        <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
          {[
            "Fundamentals of Quantum Mechanics",
            "Live 3‑day online program",
            "Assessment → certification eligibility",
            "Dates: TBA",
            "Open to everyone",
          ].map((item, i) => (
            <li
              key={i}
              className="text-sm sm:text-base text-[#40c0cb] bg-[#40c0cb]/10 border border-[#40c0cb]/30 rounded-full px-3 py-1"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="mb-6 max-w-3xl text-gray-200 mx-auto text-base sm:text-lg">
          Build a solid conceptual foundation and practice circuits with Qiskit in guided labs, then validate learning with a short assessment for a course certificate.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center">
          <Button asChild size="lg" className={ctaPrimary}>
            <a href="#register" aria-label="Register Now">Register Now</a>
          </Button>
          <Button asChild size="lg" variant="outline" className={ctaSecondary}>
            <a href="#event" aria-label="See event details">Event Details</a>
          </Button>
        </div>
      </div>

      <img
        src="/assets/fallfest/Badge_03.png"
        alt="Fall Fest Badge"
        className="hidden sm:block absolute top-6 right-6 w-16 drop-shadow-2xl pointer-events-none select-none"
        aria-hidden="true"
      />
    </section>
  );
}

function EventSection() {
  return (
    <section
      id="event"
      aria-labelledby="event-title"
      style={anchorOffsetStyle}
      className="max-w-6xl mx-auto mt-10 px-6 sm:px-12"
    >
      <SectionHeading title="Event: Fundamentals of Quantum Mechanics" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
        <div className="space-y-4 text-gray-200">
          <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
            <li>Three focused days combining live instruction with hands‑on labs to build intuition quickly.</li>
            <li>Guided practice with Qiskit: states, gates, circuits, and simple algorithms.</li>
            <li>Short assessment at the end; successful completion makes participants eligible for a course certificate.</li>
            <li>Dates: TBA · Open to all backgrounds and experience levels.</li>
          </ul>
          <div className="pt-2">
            <Button asChild size="lg" className={ctaPrimary}>
              <a href="#register" aria-label="Open registration">Register (Open)</a>
            </Button>
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-white font-semibold mb-3">What to expect</h3>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>Clear explanations of states, operators, and measurement with minimal math overhead.</li>
            <li>Build and run small circuits in Qiskit to see concepts in action.</li>
            <li>Concise assessment to check understanding and qualify for certification.</li>
          </ul>
        </div>
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
          className="max-w-full max-h-[280px] rounded-lg shadow-md mx-auto object-contain block"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        <Card className="bg-gray-900/90 border-l-4 border-[#40c0cb]">
          <CardContent>
            <h3 className="text-lg sm:text-xl font-semibold text-[#40c0cb] mb-2">Day 1: Foundations</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li>State vectors, measurements, single‑qubit gates.</li>
              <li>Live demos in Qiskit to cement concepts.</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-gray-900/90 border-l-4 border-[#8b5cf6]">
          <CardContent>
            <h3 className="text-lg sm:text-xl font-semibold text-[#8b5cf6] mb-2">Day 2: Circuits</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li>Multi‑qubit systems, entanglement.</li>
              <li>Compose and run simple circuits.</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-gray-900/90 border-l-4 border-[#fbbf24]">
          <CardContent>
            <h3 className="text-lg sm:text-xl font-semibold text-[#fbbf24] mb-2">Day 3: Algorithms</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li>Intro to basic algorithms.</li>
              <li>Guided practice + assessment briefing.</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-gray-900/90 border-l-4 border-[#ff4e50]">
          <CardContent>
            <h3 className="text-lg sm:text-xl font-semibold text-[#ff4e50] mb-2">Assessment</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li>Submission checklist and timeline.</li>
              <li>Certification eligibility criteria.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center mt-8">
        <Button asChild size="lg" variant="outline" className={ctaSecondary}>
          <a href="/assets/fallfest/FallFest_Schedule.pdf" download aria-label="Download schedule PDF">
            Download Full Schedule (PDF)
          </a>
        </Button>
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
          <Card
            key={i}
            className="bg-gray-900/80 p-6 flex flex-col items-center text-center rounded-lg hover:shadow-lg transition-shadow"
          >
            <img
              src={img}
              alt={name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-[#40c0cb] mb-3 sm:mb-4 object-cover block"
              loading="lazy"
              decoding="async"
            />
            <h3 className="text-white font-bold text-lg sm:text-xl">{name}</h3>
            <span className="text-[#8b5cf6] font-semibold">{role}</span>
            <p className="text-gray-300 mt-3">{bio}</p>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className={`mt-4 text-[#40c0cb] hover:text-[#58d4d7] ${ring}`}
            >
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
      <ul className="mb-6 text-gray-300 text-base sm:text-lg list-disc pl-5 space-y-2 text-left max-w-2xl mx-auto">
        <li>Open to everyone; no prior experience required.</li>
        <li>Join the 3‑day live program and complete the short assessment.</li>
        <li>Eligible participants receive a course certificate.</li>
      </ul>
      <Button asChild size="lg" className={`${ctaPrimary} px-10 py-3`}>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Register">Register Now</a>
      </Button>
    </section>
  );
}

function ResourcesSection() {
  const version = "v2025.09.16";
  const updated = "Updated Sep 16, 2025";

  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      style={anchorOffsetStyle}
      className="max-w-6xl mx-auto px-6 sm:px-12 my-12 text-center"
    >
      <SectionHeading title="Resources" />
      <p className="text-gray-400 max-w-xl mx-auto mb-6">
        Notebooks, slides, and recordings will be published after each session in the official repository.
      </p>
      <div className="flex items-center justify-center gap-3 mb-6 text-sm text-gray-400">
        <span className="px-2 py-1 rounded bg-white/5 border border-white/10">{version}</span>
        <span className="px-2 py-1 rounded bg-white/5 border border-white/10">{updated}</span>
      </div>
      <Button asChild variant="outline" size="lg" className={ctaSecondary}>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="View GitHub Repository">
          View GitHub Repository
        </a>
      </Button>
    </section>
  );
}

function TeamSponsorsSection() {
  // Equal-height, object-contain logos to prevent mismatched sizes
  const logos = [
    { src: "/assets/fallfest/IBM Quantum Logo.png", alt: "IBM Quantum" },
    { src: "/assets/fallfest/qiskit%20logo.svg", alt: "Qiskit" },
    { src: "/logo-mono.png", alt: "Symbiosis Quantum Club" },
  ];

  const handleErr = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const t = e.currentTarget;
    if (t.src.includes("qiskit%20logo.svg") && !t.dataset.fallback) {
      t.src = "/assets/fallfest/Qiskit_01.png";
      t.dataset.fallback = "true";
    } else if (t.src.includes("/logo-mono.png") && !t.dataset.fallback) {
      t.src = "/logo-mono.png"; // already mono; keep as is
      t.dataset.fallback = "true";
    }
  };

  return (
    <section
      id="team"
      aria-labelledby="team-title"
      style={anchorOffsetStyle}
      className="max-w-6xl mx-auto px-6 sm:px-12 my-12 text-center"
    >
      <SectionHeading title="Team · Organizers · Sponsors" />
      <div className="flex flex-wrap items-center justify-center gap-8">
        {logos.map(({ src, alt }, i) => (
          <div key={i} className="flex items-center justify-center">
            <img
              src={src}
              alt={alt}
              onError={handleErr}
              className={`${partnerH} w-auto object-contain block`}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
      <p className="text-gray-400 mt-6">
        For media or partnership inquiries, details are provided in registration confirmation emails.
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
      className="max-w-5xl mx-auto px-6 sm:px-12 py-12 text-gray-300"
    >
      <SectionHeading title="Code of Conduct" />
      <p className="mt-2">
        This virtual event is committed to a respectful, inclusive, and harassment‑free experience for everyone, consistent with widely adopted community standards and IBM Quantum community values.
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-white font-semibold mb-3">Standards</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Be respectful, considerate, and constructive; welcome differing viewpoints and feedback.</li>
            <li>Use inclusive language; focus on collaboration and community benefit.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-white font-semibold mb-3">Unacceptable behavior</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Harassment, discrimination, personal attacks, or sexualized language or imagery.</li>
            <li>“Zoombombing,” spamming, or sharing meeting links publicly to invite disruption.</li>
            <li>Recording or sharing content without permission; doxing or revealing private information.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 md:col-span-2">
          <h3 className="text-white font-semibold mb-3">Virtual etiquette</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Use recognizable display names; keep chat professional and on topic.</li>
            <li>Mute when not speaking; use backgrounds and avatars appropriate for a professional setting.</li>
            <li>Follow moderators’ instructions; use official channels for Q&A and reporting.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 md:col-span-2">
          <h3 className="text-white font-semibold mb-3">Reporting and enforcement</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Report issues via the organizer contacts provided in registration emails; urgent concerns are prioritized.</li>
            <li>Organizers may take actions needed to keep participants safe, including warnings, muting, removal, or access revocation.</li>
            <li>Reports are handled promptly and confidentially with proportionate action to stop harm.</li>
          </ul>
          <p className="mt-3 text-sm text-gray-400">
            This Code aligns with recognized community codes and W3C guidance for positive, safe environments at virtual events.
          </p>
        </div>
      </div>
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
  const [navOpen, setNavOpen] = useState(false);

  // Open sidebar by default on desktop, collapsed on small screens
  useEffect(() => {
    const w = typeof window !== "undefined" ? window.innerWidth : 0;
    setNavOpen(w >= 768);
  }, []);

  return (
    <main
      className="bg-[#0f0c29] text-white font-sans min-h-screen scroll-smooth"
      style={{
        // If the main site uses a fixed global header, set its height here (e.g., 64px)
        // @ts-ignore: CSS custom property
        "--global-nav-h": "64px",
      }}
    >
      <HamburgerButton open={navOpen} setOpen={setNavOpen} controlsId="site-sidebar" />
      <Sidebar open={navOpen} setOpen={setNavOpen} id="site-sidebar" />

      {/* Content shifts right when sidebar is open on md+ */}
      <div className={navOpen ? "md:ml-[280px]" : ""}>
        <FadeInOnScroll><HomeHero /></FadeInOnScroll>
        <FadeInOnScroll><EventSection /></FadeInOnScroll>
        <FadeInOnScroll><ScheduleSection /></FadeInOnScroll>
        <FadeInOnScroll><SpeakersSection /></FadeInOnScroll>
        <FadeInOnScroll><RegisterSection /></FadeInOnScroll>
        <FadeInOnScroll><ResourcesSection /></FadeInOnScroll>
        <FadeInOnScroll><TeamSponsorsSection /></FadeInOnScroll>
        <FadeInOnScroll><CodeOfConductSection /></FadeInOnScroll>
        <CodeOfConductFooter />
      </div>
    </main>
  );
}
