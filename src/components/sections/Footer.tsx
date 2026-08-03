"use client";

import { personalInfo } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";
import Image from "next/image";

const Github = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
  </svg>
);

const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white border-t border-white/10 py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-center gap-3 text-center md:flex-row md:text-left">
            <div className="relative w-11 h-11 overflow-hidden rounded-full border border-accent/60 bg-white/5">
              <Image
                src="/assets/images/profile-image.png"
                alt={`${personalInfo.name} portrait`}
                fill
                sizes="44px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="font-serif text-xl tracking-wide">{personalInfo.logoText}</p>
              <p className="text-[14px] text-white/55">CSE student & Junior Developer</p>
            </div>
          </div>

          <p className="mx-auto max-w-xs text-center text-[13px] leading-6 text-white/50 md:hidden">
            Computer Science & Engineering student focused on full-stack and AI-enabled product work.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 text-sm text-white/55 md:gap-x-5">
            <a href={personalInfo.cvLink} className="flex min-h-11 items-center px-2 hover:text-accent transition-colors">
              Download CV
            </a>
            <a href={`mailto:${personalInfo.email}`} className="flex min-h-11 items-center px-2 hover:text-accent transition-colors">
              Email
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center hover:text-white transition-colors" aria-label="GitHub">
              <Github size={19} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin size={19} />
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-white/8 border border-accent/35 text-accent flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <p className="mt-4 md:mt-6 border-t border-white/10 pt-5 text-center text-[13px] md:text-sm text-white/40 md:text-left">
          (c) {currentYear} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
