"use client";

import { technicalExpertise } from "@/data/portfolio";
import TechLogo from "@/components/TechLogo";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const logoLabels: Record<string, string> = {
  docker: "Docker",
  express: "Express.js",
  firebase: "Firebase",
  github: "GitHub",
  java: "Java",
  javascript: "JavaScript",
  nodejs: "Node.js",
  python: "Python",
  railway: "Railway",
  react: "React.js",
  redis: "Redis",
  springboot: "Spring Boot",
  supabase: "Supabase",
  tailwindcss: "Tailwind CSS",
  typescript: "TypeScript",
  html5: "HTML5",
  css3: "CSS3",
  mongodb: "MongoDB",
  postgresql: "PostgreSQL",
  git: "Git",
  vercel: "Vercel",
  vscode: "VS Code",
};

const skillTechnologyMap: Record<string, { label: string; logo?: string }[]> = {
  "Programming Languages": [
    { label: "JavaScript", logo: "javascript" },
    { label: "TypeScript", logo: "typescript" },
    { label: "Python", logo: "python" },
    { label: "Java", logo: "java" },
  ],
  "Frontend Development": [
    { label: "React.js", logo: "react" },
    { label: "Next.js", logo: "nextjs" },
    { label: "HTML5", logo: "html5" },
    { label: "CSS3", logo: "css3" },
    { label: "Tailwind CSS", logo: "tailwindcss" },
  ],
  "Backend Development": [
    { label: "Node.js", logo: "nodejs" },
    { label: "Express.js", logo: "express" },
    { label: "Spring Boot", logo: "springboot" },
  ],
  "Automation and APIs": [
    { label: "Telegram Bot API" },
    { label: "API Integration" },
    { label: "Automated Workflows" },
  ],
  "Databases and Services": [
    { label: "Supabase", logo: "supabase" },
    { label: "Firebase", logo: "firebase" },
    { label: "Redis", logo: "redis" },
    { label: "MongoDB", logo: "mongodb" },
    { label: "PostgreSQL", logo: "postgresql" },
  ],
  "Deployment and DevOps Tools": [
    { label: "Railway", logo: "railway" },
    { label: "Docker", logo: "docker" },
    { label: "Git", logo: "git" },
    { label: "GitHub", logo: "github" },
    { label: "Vercel", logo: "vercel" },
  ],
  "Software Testing": [
    { label: "Debugging" },
    { label: "Feature Testing" },
    { label: "Workflow Validation" },
  ],
  "Design and Documentation": [
    { label: "Canva" },
    { label: "Microsoft Word" },
    { label: "PowerPoint" },
    { label: "Excel" },
  ],
  "Professional Skills": [
    { label: "Leadership" },
    { label: "Communication" },
    { label: "Teamwork" },
    { label: "Problem Solving" },
  ],
};

const iconFor = (title: string) =>
  technicalExpertise.find((skill) => skill.title === title)?.icon ?? technicalExpertise[0].icon;

const mobileSkillCategories = [
  {
    title: "Programming Languages",
    description: "Core languages I use for web, backend and academic work.",
    icon: iconFor("Programming Languages"),
    technologies: skillTechnologyMap["Programming Languages"],
  },
  {
    title: "Frontend Development",
    description: "Interface technologies for responsive, user-focused web apps.",
    icon: iconFor("Frontend Development"),
    technologies: skillTechnologyMap["Frontend Development"],
  },
  {
    title: "Backend Development",
    description: "Server-side technologies and API implementation tools.",
    icon: iconFor("Backend Development"),
    technologies: skillTechnologyMap["Backend Development"],
  },
  {
    title: "Databases & Services",
    description: "Data, realtime and managed services used in product workflows.",
    icon: iconFor("Databases and Services"),
    technologies: skillTechnologyMap["Databases and Services"],
  },
  {
    title: "Deployment Tools",
    description: "Tools used for source control, deployment and delivery.",
    icon: iconFor("Deployment and DevOps Tools"),
    technologies: skillTechnologyMap["Deployment and DevOps Tools"],
  },
  {
    title: "Testing & Documentation",
    description: "Practical quality checks, workflow validation and documentation.",
    icon: iconFor("Software Testing"),
    technologies: [
      ...(skillTechnologyMap["Software Testing"] ?? []),
      ...(skillTechnologyMap["Design and Documentation"] ?? []),
    ],
  },
  {
    title: "Professional Skills",
    description: "Communication and collaboration skills used in team work.",
    icon: iconFor("Professional Skills"),
    technologies: skillTechnologyMap["Professional Skills"],
  },
];

export default function TechnicalExpertise() {
  const [openSkill, setOpenSkill] = useState(mobileSkillCategories[0]?.title ?? "");

  return (
    <section id="skills" className="relative py-16 md:py-28 bg-background overflow-hidden">
      {/* Background with abstract code/tech pattern (using grid and gradient overlay) */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
      </div>
      
      {/* Top and Bottom faded edges for blending */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-[32px] md:text-5xl font-serif text-white mb-5 md:mb-6">
            Technical Skills & Tools
          </h2>
          <p className="text-foreground/74 text-base md:text-lg leading-[1.6] md:leading-8">
            Technologies and engineering areas I am currently learning and applying through practical projects.
          </p>
          <div className="w-16 h-[1px] bg-accent mx-auto mt-8"></div>
        </div>

        <div className="space-y-3 md:hidden">
          {mobileSkillCategories.map((skill) => {
            const Icon = skill.icon;
            const isOpen = openSkill === skill.title;
            const technologies = skill.technologies ?? [];

            return (
              <div key={skill.title} className="border border-white/10 bg-white/[0.045]">
                <button
                  type="button"
                  onClick={() => setOpenSkill(isOpen ? "" : skill.title)}
                  className="flex min-h-14 w-full items-center justify-between gap-4 px-4 py-3 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-accent/25 text-accent">
                      <Icon size={20} strokeWidth={1.6} />
                    </span>
                    <span className="font-serif text-[18px] text-white">{skill.title}</span>
                  </span>
                  <ChevronDown
                    size={19}
                    className={`shrink-0 text-accent transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-white/10 px-4 pb-4 pt-3">
                    <p className="mb-4 text-sm leading-6 text-foreground/70">{skill.description}</p>
                    <div className="flex flex-wrap gap-2.5">
                      {technologies.map((technology) => (
                        <span
                          key={technology.label}
                          className="inline-flex min-h-11 items-center gap-2 border border-white/10 bg-white/[0.055] px-3 text-sm text-foreground/86"
                        >
                          {technology.logo ? (
                            <TechLogo
                              id={technology.logo}
                              label={technology.label}
                              sizeClass="h-7 w-7"
                            />
                          ) : (
                            <Icon size={18} strokeWidth={1.5} className="text-accent" />
                          )}
                          {technology.label}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {technicalExpertise.map((skill, index) => {
            const Icon = skill.icon;
            const logos = "logos" in skill ? skill.logos : undefined;
            return (
              <div 
                key={index}
                className="group flex flex-col items-center text-center px-4 transition-all duration-300"
              >
                <div className="mb-7 min-h-16 flex items-center justify-center gap-3">
                  {logos ? (
                    logos.map((logo) => (
                      <span
                        key={logo}
                        className="group flex h-16 w-16 items-center justify-center border border-white/10 bg-white/5 transition-colors duration-300 hover:border-accent/50 hover:bg-accent/10"
                      >
                        <TechLogo id={logo} label={logoLabels[logo] ?? logo} sizeClass="h-9 w-9" />
                      </span>
                    ))
                  ) : (
                    <span className="flex h-16 w-16 items-center justify-center border border-white/10 bg-white/5 text-accent group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors duration-300">
                      <Icon size={28} strokeWidth={1.5} />
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-2xl font-medium mb-4 text-white">
                  {skill.title}
                </h3>
                <p className="text-foreground/72 text-base leading-8 max-w-[320px]">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
