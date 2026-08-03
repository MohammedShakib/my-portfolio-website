"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personalInfo, navigationLinks } from "@/data/portfolio";
import Link from "next/link";
import clsx from "clsx";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navigationLinks.map(link => link.href.substring(1));
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 150)) {
          current = section;
        }
      }
      
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled
          ? "bg-background/88 backdrop-blur-md border-white/10 py-4 shadow-lg shadow-black/10"
          : "bg-background/35 backdrop-blur-sm py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3 z-50">
          <div className="h-11 w-11 rounded-full border border-accent/60 bg-background/80 flex items-center justify-center text-accent font-serif text-base shadow-[0_0_24px_rgba(168,133,94,0.18)]">
            {personalInfo.monogram}
          </div>
          <span className="font-serif text-xl tracking-wide text-white hidden sm:block">
            {personalInfo.logoText}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-[14px] font-medium">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={clsx(
                    "transition-colors hover:text-accent relative py-2",
                    activeSection === link.href.substring(1)
                      ? "text-accent"
                      : "text-foreground/80"
                  )}
                >
                  {link.label}
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-accent"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          
          <a
            href={personalInfo.cvLink}
            className="px-5 py-2.5 text-sm border border-accent/50 text-accent hover:bg-accent hover:text-white transition-all duration-300"
          >
            Download CV
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 left-0 w-full h-screen bg-background flex flex-col items-center justify-center gap-8 pt-20"
            >
              <ul className="flex flex-col items-center gap-6 text-xl font-serif">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={clsx(
                        "transition-colors",
                        activeSection === link.href.substring(1)
                          ? "text-accent"
                          : "text-foreground/80"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <a
                href={personalInfo.cvLink}
                className="mt-4 px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300"
              >
                Download CV
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
