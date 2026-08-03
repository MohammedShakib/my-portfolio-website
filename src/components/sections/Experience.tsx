import { learningJourney } from "@/data/portfolio";
import Image from "next/image";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20 bg-background text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Professional Experience</h2>
          <div className="w-16 h-[1px] bg-accent mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-accent/45 md:left-1/2 md:-translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-10">
            {learningJourney.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex w-full">
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-2 border-accent bg-background -translate-x-1/2 mt-8 z-10"></div>

                  <div
                    className={`w-full pl-16 md:w-[calc(50%-1.5rem)] md:pl-0 ${
                      isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className="border border-white/12 bg-white/[0.055] p-6 md:p-7 hover:border-accent/35 transition-colors duration-300">
                      <div className="flex items-start gap-4 mb-5">
                        <Image
                          src={item.logo}
                          alt={`${item.company} logo`}
                          width={64}
                          height={64}
                          className="h-16 w-16 shrink-0"
                        />
                        <div>
                          <span className="block text-accent text-[13px] font-medium tracking-widest uppercase mb-2">
                            {item.period}
                          </span>
                          <h3 className="font-serif text-xl md:text-2xl text-white mb-1">
                            {item.title}
                          </h3>
                          <h4 className="text-white/80 font-medium text-base">{item.company}</h4>
                        </div>
                      </div>

                      <ul className="space-y-3 text-foreground/72 text-[15px] leading-7">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-3 h-1.5 w-1.5 rounded-full bg-accent/70 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
