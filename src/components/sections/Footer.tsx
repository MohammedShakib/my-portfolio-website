"use client";

import { personalInfo, navigationLinks } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";

const Github = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Logo & Bio */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border border-accent/50 flex items-center justify-center bg-white/5 text-accent font-serif text-lg">
                {personalInfo.monogram}
              </div>
              <span className="font-serif text-xl tracking-wide">
                {personalInfo.logoText}
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Software Engineering student and Junior Developer focused on full-stack web applications, AI-enabled products, automation and user-focused digital solutions.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Navigation</h4>
            <ul className="space-y-3 text-sm text-white/60">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(link => {
                const navLink = navigationLinks.find(n => n.label === link);
                return (
                  <li key={link}>
                    <a href={navLink?.href || "#"} className="hover:text-accent transition-colors">
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Professional Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Professional Links</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={personalInfo.cvLink} className="hover:text-accent transition-colors">
                  Download CV
                </a>
              </li>
              <li>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-accent transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Current Focus */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Current Focus</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>React.js</li>
              <li>Express.js</li>
              <li>Spring Boot</li>
              <li>AI-Enabled Products</li>
              <li>Automation</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Notice</a>
            
            <div className="flex items-center gap-4 border-l border-white/10 pl-6">
              <a href={personalInfo.github} className="hover:text-white transition-colors" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href={personalInfo.linkedin} className="hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all ml-4"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
