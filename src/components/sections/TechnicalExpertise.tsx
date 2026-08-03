import { technicalExpertise } from "@/data/portfolio";
import TechLogo from "@/components/TechLogo";

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
};

export default function TechnicalExpertise() {
  return (
    <section id="skills" className="relative py-24 md:py-28 bg-background overflow-hidden">
      {/* Background with abstract code/tech pattern (using grid and gradient overlay) */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
      </div>
      
      {/* Top and Bottom faded edges for blending */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Technical Skills & Tools
          </h2>
          <p className="text-foreground/74 text-lg leading-8">
            Technologies and engineering areas I am currently learning and applying through practical projects.
          </p>
          <div className="w-16 h-[1px] bg-accent mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
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
