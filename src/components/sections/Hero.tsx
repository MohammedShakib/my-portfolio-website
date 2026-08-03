"use client";

import { personalInfo, heroFeatures } from "@/data/portfolio";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Allura, Cormorant_Garamond, Manrope } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "600",
  fallback: ["Georgia", "serif"],
});

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  fallback: ["Brush Script MT", "cursive"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600"],
  fallback: ["Arial", "sans-serif"],
});

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col justify-start pt-10 pb-10 md:min-h-screen md:pb-12 lg:justify-center lg:pt-24">
      {/* Background matched to the portrait's charcoal studio backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#151515]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(94,94,94,0.44)_0%,rgba(48,48,48,0.38)_25%,rgba(22,22,22,0.92)_55%,rgba(14,14,14,1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.96)_0%,rgba(20,20,20,0.82)_42%,rgba(20,20,20,0.62)_64%,rgba(15,15,15,0.96)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(255,255,255,0.13)_0%,rgba(255,255,255,0.04)_22%,transparent_42%)]" />
        <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-black/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/55 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-start md:flex-1 lg:justify-end">
        <div className="grid grid-cols-1 gap-10 md:gap-8 lg:grid-cols-2 lg:gap-8 items-center lg:items-end">
          
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl lg:pb-14 xl:pb-20"
          >
            <div className="mb-0 md:hidden">
              <p className={`${manrope.className} mb-2 text-[18px] font-normal leading-[1.2] text-foreground/86`}>
                Hi, I&rsquo;m
              </p>
              <h1 className="max-w-[340px]">
                <span className={`${cormorantGaramond.className} block text-[clamp(58px,15vw,66px)] font-semibold leading-[0.92] tracking-[-0.035em] text-foreground`}>
                  Mohammed
                </span>
                <span className={`${allura.className} block max-w-full text-[clamp(74px,19vw,84px)] font-normal leading-[0.82] text-accent`}>
                  Shakib
                </span>
              </h1>
            </div>
            <p className={`${manrope.className} mb-0 mt-6 text-[15px] font-semibold uppercase leading-[1.2] tracking-[0.14em] text-[#d8c4aa] md:hidden`}>
              Junior Developer
            </p>

            <h1 className="hidden text-5xl md:block md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.1] mb-6 text-balance">
              {personalInfo.heroHeading}
            </h1>
            
            <p className={`${manrope.className} mt-6 mb-0 max-w-[34ch] text-base font-normal leading-[1.65] text-foreground/78 md:hidden`}>
              I&apos;m a Software Engineering student at United International University and a Junior Developer at Royal Bengal AI, contributing to full-stack and AI-enabled web applications.
            </p>

            <p className="hidden text-lg md:block md:text-xl text-foreground/78 mb-10 text-balance leading-8">
              {personalInfo.heroSupportingText}
            </p>
            
            <div className="mb-8 hidden flex-wrap items-center gap-4 md:flex">
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
              <div className="hidden items-center gap-3 text-sm text-foreground/60 md:flex">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </span>
                {personalInfo.availability}
              </div>
            )}
          </motion.div>

          {/* Right Side Visual */}
          <div className="relative flex flex-col items-center justify-center lg:items-end lg:justify-end lg:self-end">
            <div className="relative h-[266px] w-full max-w-[282px] sm:h-[280px] sm:max-w-[300px] md:h-[580px] md:max-w-[520px] lg:h-[650px] lg:max-w-[610px]">
              {/* Subtle warm shadow behind subject */}
              <div className="absolute -inset-10 hidden rounded-full bg-accent/15 blur-3xl md:block"></div>
              <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/22 blur-3xl md:hidden"></div>
              <div className="absolute left-1/2 top-6 h-52 w-56 -translate-x-1/2 rounded-full bg-white/10 blur-3xl md:hidden"></div>
              <div className="absolute inset-x-[-26%] bottom-[-30px] z-10 h-36 bg-gradient-to-t from-[#111111] via-[#111111]/86 via-45% to-transparent md:hidden"></div>
              <div className="absolute inset-y-0 left-[-22%] z-10 w-28 bg-gradient-to-r from-[#111111] via-[#111111]/72 to-transparent md:hidden"></div>
              <div className="absolute inset-y-0 right-[-22%] z-10 w-28 bg-gradient-to-l from-[#111111] via-[#111111]/72 to-transparent md:hidden"></div>
              
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
                  className="block md:hidden object-contain object-bottom drop-shadow-[0_28px_46px_rgba(0,0,0,0.46)]"
                  style={{
                    maskImage: "linear-gradient(to bottom, #000 0%, #000 66%, rgba(0,0,0,.72) 80%, rgba(0,0,0,.25) 91%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, #000 0%, #000 66%, rgba(0,0,0,.72) 80%, rgba(0,0,0,.25) 91%, transparent 100%)",
                  }}
                  preload
                />
              </div>
            </div>
            <div className="mt-8 flex w-full flex-wrap items-center gap-3 md:hidden max-[389px]:flex-col">
              <Link
                href="#projects"
                className="flex min-h-12 flex-1 items-center justify-center bg-accent px-6 py-3 text-center text-[15px] font-medium text-white transition-colors duration-300 hover:bg-accent-hover max-[389px]:w-full"
              >
                Explore My Work
              </Link>
              <a
                href={personalInfo.cvLink}
                className="flex min-h-12 flex-1 items-center justify-center border border-white/25 px-6 py-3 text-center text-[15px] text-foreground transition-colors duration-300 hover:bg-white/5 max-[389px]:w-full"
              >
                Download CV
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Hero Feature Bar */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 mt-8 md:mt-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-white/10 pt-6 md:pt-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-4">
            {heroFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className={`flex items-start gap-3 md:gap-4 group ${index === 2 ? "col-span-2 md:col-span-1" : ""}`}>
                  <div className="mt-1 w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-[17px] md:text-lg text-foreground mb-1">
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
