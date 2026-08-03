"use client";

import { personalInfo, heroFeatures } from "@/data/portfolio";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 pb-12">
      {/* Background with abstract dark architectural/gradient feel */}
      <div className="absolute inset-0 z-0 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/40 via-background to-background"></div>
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-block px-4 py-1.5 mb-6 border border-accent/30 text-accent text-sm font-medium tracking-wide bg-accent/5">
              Hello, I’m {personalInfo.name}
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.1] mb-6 text-balance">
              {personalInfo.heroHeading}
            </h1>
            
            <p className="text-lg text-foreground/70 mb-10 text-balance leading-relaxed">
              {personalInfo.heroSupportingText}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link
                href="#projects"
                className="px-8 py-3.5 bg-accent text-white font-medium hover:bg-accent-hover transition-colors duration-300"
              >
                View My Projects
              </Link>
              <a
                href={personalInfo.cvLink}
                className="px-8 py-3.5 border border-white/20 text-foreground hover:bg-white/5 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>

            {personalInfo.availability && (
              <div className="flex items-center gap-3 text-sm text-foreground/60">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </span>
                {personalInfo.availability}
              </div>
            )}
          </motion.div>

          {/* Right Side Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[600px] flex justify-center lg:justify-end items-center"
          >
            <div className="relative w-full max-w-md aspect-[4/5] lg:aspect-auto lg:h-full group">
              {/* Subtle warm shadow behind subject */}
              <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <div className="w-full h-full border border-white/10 bg-primary/30 relative overflow-hidden flex items-center justify-center">
                {/* Placeholder for professional portrait */}
                <div className="text-center p-8 text-foreground/40 font-serif">
                  <div className="text-6xl mb-4 opacity-20">{personalInfo.monogram}</div>
                  <p className="text-sm uppercase tracking-widest">Professional Portrait Space</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Hero Feature Bar */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 mt-16 lg:mt-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {heroFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-foreground/60 leading-relaxed max-w-[250px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
