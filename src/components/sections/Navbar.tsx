"use client";

import { useState, useEffect } from "react";
import { personalInfo, navigationLinks } from "@/data/portfolio";
import Link from "next/link";
import clsx from "clsx";
import {
  Briefcase,
  Code,
  Download,
  Folder,
  Award,
  Home,
  Mail,
  User,
  type LucideIcon,
} from "lucide-react";

const navIcons: Record<string, LucideIcon> = {
  Home,
  About: User,
  Skills: Code,
  Projects: Folder,
  Experience: Briefcase,
  Credentials: Award,
  Contact: Mail,
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
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
        "pointer-events-none fixed left-5 top-1/2 z-50 hidden -translate-y-1/2 2xl:block",
        isScrolled ? "opacity-100" : "opacity-95"
      )}
    >
      <nav
        aria-label="Section navigation"
        className="pointer-events-auto flex w-16 flex-col items-center gap-2 rounded-full border border-white/10 bg-background/42 px-2.5 py-3 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
      >
        {navigationLinks.map((link) => {
          const Icon = navIcons[link.label] ?? Home;
          const isActive = activeSection === link.href.substring(1);

          return (
            <Link
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className={clsx(
                "group relative flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                isActive
                  ? "border-accent bg-accent text-white shadow-[0_12px_32px_rgba(168,133,94,0.32)]"
                  : "border-transparent text-foreground/65 hover:border-white/12 hover:bg-white/[0.07] hover:text-white"
              )}
            >
              <Icon size={19} strokeWidth={1.65} />
              <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap border border-white/10 bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground/85 opacity-0 shadow-xl shadow-black/20 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                {link.label}
              </span>
            </Link>
          );
        })}

        <div className="my-1 h-px w-8 bg-white/10" />

        <a
          href={personalInfo.cvLink}
          aria-label="Download CV"
          className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-accent transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <Download size={18} strokeWidth={1.7} />
          <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap border border-white/10 bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground/85 opacity-0 shadow-xl shadow-black/20 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
            Download CV
          </span>
        </a>
      </nav>
    </header>
  );
}
