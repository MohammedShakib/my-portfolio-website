import TechLogo from "@/components/TechLogo";
import { techStripLogos } from "@/data/portfolio";

export default function TechStrip() {
  return (
    <section className="border-y border-primary/10 bg-white py-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex overflow-x-auto pb-4 md:pb-0 justify-start lg:justify-center items-center gap-8 md:gap-12">
          {techStripLogos.map((tech) => (
            <div
              key={tech.name}
              className="group flex min-w-[86px] flex-col items-center justify-center flex-shrink-0 cursor-default"
            >
              <TechLogo id={tech.logo} label={tech.name} sizeClass="h-9 w-9" />
              <span className="mt-3 text-[13px] font-medium text-primary/55 group-hover:text-primary transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
