import TechLogo from "@/components/TechLogo";
import { techStripLogos } from "@/data/portfolio";

export default function TechStrip() {
  return (
    <section className="border-y border-primary/10 bg-white py-8 md:py-14 overflow-hidden">
      <div className="tech-marquee no-scrollbar">
        <div className="tech-marquee-track">
          {[0, 1].map((groupIndex) => (
            <div
              key={groupIndex}
              className="tech-marquee-group"
              aria-hidden={groupIndex === 1}
            >
              {techStripLogos.map((tech) => (
                <div
                  key={`${tech.name}-${groupIndex}`}
                  className="group flex min-w-[92px] md:min-w-[98px] flex-col items-center justify-center flex-shrink-0 snap-center cursor-default"
                >
                  <TechLogo id={tech.logo} label={tech.name} sizeClass="h-8 w-8 md:h-11 md:w-11" />
                  <span className="mt-2 md:mt-3 text-[13px] md:text-[14px] font-medium text-primary/65 group-hover:text-primary transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
