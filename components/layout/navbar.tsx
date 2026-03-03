"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Spotlight", href: "/spotlight" },
    { name: "Team", href: "/team" },
    { name: "ChatBot", href: "/chatbot" },
    { name: "FallFest", href: "/fallfest", special: true },
  ];

  return (
    <>
      <style>
        {`
          @keyframes gradient-move {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
          .nav-link {
            position: relative;
            transition: color 0.3s ease;
          }
          .nav-link::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #00D9FF, #7C3AED);
            transition: width 0.3s ease;
          }
          .nav-link:hover::after {
            width: 100%;
          }
          .nav-link.active::after {
            width: 100%;
          }
          .fallfest-gradient-border {
            background: linear-gradient(270deg, #00D9FF, #7C3AED, #00D9FF);
            background-size: 200% 200%;
            animation: gradient-move 3.5s linear infinite;
            border-radius: 9999px;
            padding: 2px;
            display: inline-flex;
            box-shadow: 0 0 12px rgba(0, 217, 255, 0.2), 0 0 24px rgba(124, 58, 237, 0.1);
          }
          .fallfest-inner {
            background: linear-gradient(180deg, rgba(3, 6, 24, 0.95), rgba(6, 10, 44, 0.95));
            border-radius: 9999px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem 1.25rem;
            font-weight: 700;
            background-clip: text;
            color: transparent;
            background-image: linear-gradient(90deg, #00D9FF, #7C3AED, #00D9FF);
            background-size: 200% 200%;
            animation: gradient-move 3.5s linear infinite;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-quantum-dark/80 backdrop-blur-md border-b border-quantum-accent/20 shadow-lg" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image 
                src="/logo.svg" 
                width={48} 
                height={48} 
                alt="Symbiosis Quantum Club" 
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="hidden sm:inline font-title text-lg md:text-xl font-bold bg-gradient-to-r from-quantum-accent via-quantum-purple to-quantum-blue bg-clip-text text-transparent">
              Symbiosis Quantum Club
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              item.special ? (
                <div key={item.name} className="fallfest-gradient-border">
                  <Link 
                    href={item.href}
                    className="fallfest-inner px-6 py-2 text-sm font-display font-bold"
                  >
                    {item.name}
                  </Link>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-link text-sm md:text-base font-display tracking-wide transition-all duration-300 ${
                    pathname === item.href 
                      ? "active text-quantum-accent" 
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            {/* CTA Button - Hidden on small screens, shown on medium+ */}
            <Button 
              asChild
              className="hidden md:inline-flex bg-gradient-to-r from-quantum-blue to-quantum-purple hover:shadow-quantum-glow text-white font-display font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Link href="/#join">Get Started</Link>
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-300 hover:text-white hover:bg-quantum-medium transition-colors"
                >
                  <Menu size={24} />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[280px] bg-gradient-to-b from-quantum-dark to-quantum-medium border-quantum-accent/30 shadow-quantum-glow"
              >
                <SheetHeader className="pb-4 border-b border-quantum-accent/20">
                  <SheetTitle className="text-white text-xl font-title">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col mt-6 gap-2">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.name}>
                      {item.special ? (
                        <div className="fallfest-gradient-border w-full">
                          <Link 
                            href={item.href}
                            className="fallfest-inner w-full justify-center py-3 text-base font-display font-bold"
                          >
                            {item.name}
                          </Link>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className={`py-3 px-4 rounded-lg transition-all duration-300 font-display text-base ${
                            pathname === item.href
                              ? "bg-quantum-accent/20 text-quantum-accent border-l-4 border-quantum-accent pl-2"
                              : "text-gray-300 hover:text-white hover:bg-quantum-medium"
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Button 
                      asChild
                      className="w-full mt-4 bg-gradient-to-r from-quantum-blue to-quantum-purple hover:shadow-quantum-glow text-white font-display font-semibold py-3 rounded-lg transition-all duration-300"
                    >
                      <Link href="/#join">Get Started</Link>
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}