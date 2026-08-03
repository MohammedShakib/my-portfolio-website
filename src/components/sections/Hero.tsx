"use client";

import { personalInfo, heroFeatures } from "@/data/portfolio";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-start lg:justify-center pt-10 sm:pt-16 lg:pt-24 pb-12">
      {/* Background matched to the portrait's charcoal studio backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#151515]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(94,94,94,0.44)_0%,rgba(48,48,48,0.38)_25%,rgba(22,22,22,0.92)_55%,rgba(14,14,14,1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.96)_0%,rgba(20,20,20,0.82)_42%,rgba(20,20,20,0.62)_64%,rgba(15,15,15,0.96)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(255,255,255,0.13)_0%,rgba(255,255,255,0.04)_22%,transparent_42%)]" />
        <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-black/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/55 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex-1 flex flex-col justify-start lg:justify-end">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center lg:items-end">
          
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl lg:pb-14 xl:pb-20"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.1] mb-6 text-balance">
              {personalInfo.heroHeading}
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/78 mb-10 text-balance leading-8">
              {personalInfo.heroSupportingText}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link
                href="#projects"
                className="px-8 py-3.5 bg-accent text-white font-medium hover:bg-accent-hover transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                Explore My Work
              </Link>
              <a
                href={personalInfo.cvLink}
                className="px-8 py-3.5 border border-white/25 text-foreground hover:bg-white/5 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
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
          <div className="relative flex justify-center lg:justify-end lg:self-end">
            <div className="relative h-[500px] w-full max-w-[520px] sm:h-[580px] lg:h-[650px] lg:max-w-[610px]">
              {/* Subtle warm shadow behind subject */}
              <div className="absolute -inset-10 rounded-full bg-accent/15 blur-3xl"></div>
              
              <div className="w-full h-full relative overflow-visible">
                <Image
                  src="/assets/images/profile-image-zoomed.png"
                  alt={`${personalInfo.name} professional portrait`}
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 520px, 620px"
                  className="hidden md:block object-contain object-bottom drop-shadow-[0_28px_50px_rgba(0,0,0,0.42)]"
                  style={{
                    maskImage: "linear-gradient(to bottom, #000 0%, #000 82%, rgba(0,0,0,.7) 91%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, #000 0%, #000 82%, rgba(0,0,0,.7) 91%, transparent 100%)",
                  }}
                  preload
                />
                <Image
                  src="/assets/images/profile-image-mobile.png"
                  alt={`${personalInfo.name} mobile portrait crop`}
                  fill
                  sizes="92vw"
                  className="block md:hidden object-contain object-bottom drop-shadow-[0_24px_42px_rgba(0,0,0,0.46)]"
                  style={{
                    maskImage: "linear-gradient(to bottom, #000 0%, #000 82%, rgba(0,0,0,.72) 91%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, #000 0%, #000 82%, rgba(0,0,0,.72) 91%, transparent 100%)",
                  }}
                  preload
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Hero Feature Bar */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 mt-0">
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
