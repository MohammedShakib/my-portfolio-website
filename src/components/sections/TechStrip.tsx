import TechLogo from "@/components/TechLogo";
import { techStripLogos } from "@/data/portfolio";

export default function TechStrip() {
  const scrollingLogos = [...techStripLogos, ...techStripLogos];

  return (
    <section className="border-y border-primary/10 bg-white py-12 md:py-14 overflow-hidden">
      <div className="tech-marquee no-scrollbar">
        <div className="tech-marquee-track flex w-max items-center gap-9 md:gap-12">
          {scrollingLogos.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="group flex min-w-[98px] flex-col items-center justify-center flex-shrink-0 cursor-default"
            >
              <TechLogo id={tech.logo} label={tech.name} sizeClass="h-10 w-10 md:h-11 md:w-11" />
              <span className="mt-3 text-[14px] font-medium text-primary/65 group-hover:text-primary transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
