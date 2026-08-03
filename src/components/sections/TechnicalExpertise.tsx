import { technicalExpertise } from "@/data/portfolio";
import Link from "next/link";

export default function TechnicalExpertise() {
  return (
    <section id="skills" className="relative py-28 md:py-36 bg-background overflow-hidden">
      {/* Background with abstract code/tech pattern (using grid and gradient overlay) */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
      </div>
      
      {/* Top and Bottom faded edges for blending */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Technical Expertise
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Technologies and engineering areas I am currently learning and applying through practical projects.
          </p>
          <div className="w-16 h-[1px] bg-accent mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {technicalExpertise.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index}
                className="group flex flex-col items-center text-center px-4 transition-all duration-300"
              >
                <div className="mb-6 w-14 h-14 rounded-none border border-white/10 bg-white/5 flex items-center justify-center text-accent group-hover:-translate-y-2 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3 text-white">
                  {skill.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed max-w-[280px]">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 flex justify-center">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-accent/50 text-accent hover:bg-accent hover:text-white transition-colors duration-300 tracking-wide text-sm font-medium"
          >
            Explore All Skills
          </Link>
        </div>
      </div>
    </section>
  );
}
