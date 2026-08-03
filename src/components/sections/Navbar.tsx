"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personalInfo, navigationLinks } from "@/data/portfolio";
import Link from "next/link";
import Image from "next/image";
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

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={clsx(
        "sticky md:fixed top-0 left-0 w-full z-50 h-16 md:h-auto transition-all duration-300 ease-in-out border-b border-white/10 md:border-transparent",
        isScrolled
          ? "bg-background/92 backdrop-blur-md md:border-white/10 md:py-4 shadow-lg shadow-black/10"
          : "bg-background/92 md:bg-background/35 backdrop-blur-sm md:py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex h-full md:h-auto items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex min-w-0 items-center gap-3 z-50">
          <div className="relative h-10 w-10 md:h-11 md:w-11 overflow-hidden rounded-full border border-accent/60 bg-background/80 shadow-[0_0_24px_rgba(168,133,94,0.18)]">
            <Image
              src="/assets/images/profile-image.png"
              alt={`${personalInfo.name} portrait`}
              fill
              sizes="44px"
              className="object-cover object-top"
            />
          </div>
          <span className="block truncate font-serif text-lg tracking-wide text-white sm:text-xl">
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
          className="md:hidden text-foreground z-50 flex h-11 w-11 items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-controls="mobile-navigation"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              id="mobile-navigation"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 bottom-0 top-16 bg-background flex flex-col items-center justify-center gap-8 px-5"
              aria-label="Mobile navigation"
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
                <li>
                  <a
                    href={personalInfo.cvLink}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-accent transition-colors"
                  >
                    Download CV
                  </a>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
