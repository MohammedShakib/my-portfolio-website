import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import WhatIDo from "@/components/sections/WhatIDo";
import StatsBar from "@/components/sections/StatsBar";
import TechnicalExpertise from "@/components/sections/TechnicalExpertise";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Leadership from "@/components/sections/Leadership";
import ProfessionalStatement from "@/components/sections/ProfessionalStatement";
import TechStrip from "@/components/sections/TechStrip";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutMe />
      <WhatIDo />
      <StatsBar />
      <TechnicalExpertise />
      <FeaturedProjects />
      <Experience />
      <Education />
      <Leadership />
      <ProfessionalStatement />
      <TechStrip />
      <Contact />
      <Footer />
    </main>
  );
}
