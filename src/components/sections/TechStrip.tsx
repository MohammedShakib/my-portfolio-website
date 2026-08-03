import { techStripLogos } from "@/data/portfolio";

export default function TechStrip() {
  return (
    <section className="border-y border-primary/10 bg-white py-12 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex overflow-x-auto pb-4 md:pb-0 hide-scrollbar justify-start lg:justify-center items-center gap-12 md:gap-16 lg:gap-20">
          {techStripLogos.map((tech, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center justify-center flex-shrink-0 cursor-default"
            >
              {/* Fallback for logo: just elegant text that acts like a logo */}
              <span className="text-xl md:text-2xl font-serif text-primary/40 group-hover:text-primary transition-all duration-300 group-hover:scale-105">
                {tech}
              </span>
              <div className="h-[2px] w-0 bg-accent mt-2 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
