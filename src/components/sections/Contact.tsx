"use client";

import { contactOptions, personalInfo } from "@/data/portfolio";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  Copy,
  Mail,
  MapPin,
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    opportunity: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        opportunity: "",
        message: "",
      });

      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const inputClass =
    "w-full min-h-12 bg-transparent border-b border-primary/25 py-3 text-primary focus:outline-none focus:border-accent transition-colors";
  const labelClass = "block text-[13px] font-semibold uppercase tracking-widest text-primary/70 mb-2";

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              <span className="h-2 w-2 rounded-full bg-accent"></span>
              {personalInfo.availability}
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Let&apos;s Connect</h2>
            <p className="text-foreground/72 text-lg leading-8 mb-12 max-w-lg">
              I am open to backend engineering internships, trainee positions, junior opportunities,
              project collaboration and conversations about practical AI products.
            </p>

            <div className="space-y-8 mb-12">
              {[
                { label: "Location", value: personalInfo.location, icon: MapPin },
                { label: "Availability", value: personalInfo.availability, icon: Clock },
                { label: "Preferred Work Mode", value: personalInfo.workPreference, icon: Briefcase },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent flex-shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-semibold uppercase tracking-wider text-white/55 mb-1">
                        {item.label}
                      </h4>
                      <p className="text-white text-lg leading-7">{item.value}</p>
                    </div>
                  </div>
                );
              })}

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-[13px] font-semibold uppercase tracking-wider text-white/55 mb-1">Email</h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <a href={`mailto:${personalInfo.email}`} className="text-white text-lg hover:text-accent transition-colors">
                      {personalInfo.email}
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="inline-flex items-center gap-2 border border-white/15 px-3 py-1.5 text-sm text-white/70 hover:border-accent/50 hover:text-accent transition-colors"
                    >
                      <Copy size={14} />
                      {isCopied ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
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

          <div className="bg-background-light p-8 md:p-12 shadow-2xl relative lg:max-w-[620px] lg:ml-auto w-full">
            <h3 className="text-2xl font-serif text-primary mb-8">Send a Message</h3>

            {isSuccess ? (
              <div className="absolute inset-0 bg-background-light flex flex-col items-center justify-center text-center p-8 z-10 animate-in fade-in duration-500">
                <CheckCircle2 size={64} className="text-green-600 mb-6" />
                <h4 className="text-2xl font-serif text-primary mb-2">Message Sent</h4>
                <p className="text-primary/70">Thank you for reaching out. I will get back to you as soon as possible.</p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={labelClass}>Full Name *</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email Address *</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className={labelClass}>Company / Org</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="opportunity" className={labelClass}>Opportunity Type *</label>
                  <select id="opportunity" name="opportunity" required value={formData.opportunity} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer`}>
                    <option value="" disabled>Select an option</option>
                    {contactOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={labelClass}>Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className={inputClass} />
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>Message *</label>
                <textarea id="message" name="message" required rows={4} value={formData.message} onChange={handleChange} className="w-full min-h-32 bg-transparent border-b border-primary/25 py-3 text-primary focus:outline-none focus:border-accent transition-colors resize-none" />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-4 font-medium tracking-wide flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <ArrowRight size={18} />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
