"use client";

import { personalInfo } from "@/data/portfolio";
import {
  Briefcase,
  Clock,
  Copy,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";

const Github = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
  </svg>
);

const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  const contactItems = [
    { label: "Location", value: personalInfo.location, icon: MapPin },
    { label: "Availability", value: personalInfo.availability, icon: Clock },
    { label: "Preferred Work Mode", value: personalInfo.workPreference, icon: Briefcase },
    { label: "Phone", value: personalInfo.phone, icon: Phone, href: `tel:${personalInfo.phone.replace(/\s+/g, "")}` },
  ];

  return (
    <section id="contact" className="py-12 md:py-20 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              <span className="h-2 w-2 rounded-full bg-accent"></span>
              {personalInfo.availability}
            </div>
            <h2 className="text-[32px] md:text-5xl font-serif text-white mb-5 md:mb-6">Let&apos;s Connect</h2>
            <p className="text-foreground/72 text-base md:text-lg leading-[1.6] md:leading-8 max-w-lg">
              I am open to backend engineering internships, trainee positions, junior opportunities,
              project collaboration and conversations about practical AI products.
            </p>

            <div className="mt-8 md:mt-10">
              <h4 className="text-[13px] font-semibold uppercase tracking-wider text-white/55 mb-4">
                Connect Professionally
              </h4>
              <div className="flex items-center gap-4">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary hover:border-white transition-all duration-300" aria-label="GitHub">
                  <Github size={21} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-300" aria-label="LinkedIn">
                  <Linkedin size={21} />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:text-white hover:border-accent transition-all duration-300" aria-label="Email">
                  <Mail size={21} />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
            {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4 border-b border-white/10 pb-5">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent flex-shrink-0">
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[13px] font-semibold uppercase tracking-wider text-white/55 mb-1">
                        {item.label}
                      </h4>
                      {"href" in item ? (
                        <a href={item.href} className="break-words text-white text-base md:text-lg leading-7 hover:text-accent transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="break-words text-white text-base md:text-lg leading-7">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}

              <div className="flex items-start gap-4 border-b border-white/10 pb-5 md:col-span-2">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[13px] font-semibold uppercase tracking-wider text-white/55 mb-1">Email</h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <a href={`mailto:${personalInfo.email}`} className="break-all text-white text-base md:text-lg hover:text-accent transition-colors">
                      {personalInfo.email}
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="inline-flex min-h-11 items-center gap-2 border border-white/15 px-3 py-1.5 text-sm text-white/70 hover:border-accent/50 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent transition-colors"
                    >
                      <Copy size={14} />
                      {isCopied ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
