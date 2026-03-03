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
    { name: "FallFest", href: "/fallfest" },
    { name: "ChatBot", href: "/chatbot" },
    { name: "Team", href: "/team" },
    { name: "Mission", href: "/mission" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <style>
        {`
          @keyframes gradient-move {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
          .fallfest-gradient-border {
            background: linear-gradient(270deg, #00f0ff, #7c3aed, #e600ffff, #00f0ff 90%);
            background-size: 400% 400%;
            animation: gradient-move 3.5s linear infinite;
            border-radius: 9999px;
            padding: 2.5px;
            display: inline-block;
            box-shadow: 0 0 8px 2px #7c3aed55, 0 0 16px 4px #00f0ff33;
          }
          .fallfest-inner {
            background: #030618;
            border-radius: 9999px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.25rem 1.1rem;
            min-width: 80px;
          }
          .fallfest-gradient-text {
            background: linear-gradient(270deg, #00f0ff, #7c3aed, #e600ffff, #00f0ff 90%);
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-[#030618]/90 backdrop-blur-sm border-b border-gray-800/50" : ""
        }`}
      >
        <div className="container mx-auto px-1 h-14 sm:h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" width={70} height={70} alt="Logo" />
            <span className="font-title font-medium text-base xs:text-lg truncate max-w-[100px] sm:max-w-none">
              <span className="hidden sm:inline">Symbiosis Quantum Club</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              item.name === "FallFest" ? (
                <span key={item.name} className="fallfest-gradient-border">
                  <Link href={item.href} className="fallfest-inner">
                    <span className="fallfest-gradient-text font-display text-sm">{item.name}</span>
                  </Link>
                </span>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-display transition-colors px-2 py-1 ${
                    pathname === item.href ? "text-red font-medium" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Button className="bg-blue-800 text-white hover:bg-blue-600 font-display">Join Us</Button>
          </nav>

          {/* Mobile navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm" className="text-gray-200 h-10 w-10 p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] max-w-[280px] bg-[#030618]/95 border-gray-800">
              <SheetHeader className="pb-2 border-b border-gray-800/50">
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col mt-1 gap-2 p-2">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.name}>
                    {item.name === "FallFest" ? (
                      <span className="fallfest-gradient-border">
                        <Link href={item.href} className="fallfest-inner">
                          <span className="fallfest-gradient-text font-display text-base">{item.name}</span>
                        </Link>
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        className={`py-1 px-4 text-base hover:text-gray-300 ${
                          pathname === item.href
                            ? "text-white font-medium border-l-2 border-blue-500"
                            : "text-gray-300"
                        }`}
                      >
                        <SheetTitle
                          className={
                            item.name === "FallFest"
                              ? "text-yellow-400 hover:text-yellow-300 blink-animation fallfest-hover-bg"
                              : "text-gray-300 hover:text-gray-100"
                          }
                        >
                          {item.name}
                        </SheetTitle>
                      </Link>
                    )}
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}