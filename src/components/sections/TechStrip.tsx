import TechLogo from "@/components/TechLogo";
import { techStripLogos } from "@/data/portfolio";

export default function TechStrip() {
  return (
    <section className="border-y border-primary/10 bg-white py-12 md:py-14 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex overflow-x-auto pb-4 md:pb-0 justify-start lg:justify-center items-center gap-9 md:gap-12">
          {techStripLogos.map((tech) => (
            <div
              key={tech.name}
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
