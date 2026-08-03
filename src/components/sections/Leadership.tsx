import { leadershipAndExtracurricular } from "@/data/portfolio";
import { Camera } from "lucide-react";
import Image from "next/image";

export default function Leadership() {
  if (!leadershipAndExtracurricular || leadershipAndExtracurricular.length === 0) return null;

  return (
    <section className="py-16 md:py-20 bg-primary text-white border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-accent">
                Leadership & Extracurricular
              </h2>
              <div className="w-12 h-[1px] bg-accent/50"></div>
            </div>
            <p className="text-white/60 text-base leading-7 max-w-md">
              Photography club involvement, campus activities and creative participation outside technical work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_0.85fr] gap-6">
            {leadershipAndExtracurricular.map((item) => (
              <div key={item.organisation} className="p-6 md:p-8 border border-white/10 bg-white/5 flex gap-5">
                <Image
                  src={item.logo}
                  alt={`${item.organisation} logo`}
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0"
                />
                <div>
                  <p className="text-accent text-[13px] font-medium tracking-widest uppercase mb-2">
                    {item.date}
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl text-white mb-2">
                    {item.role} - {item.organisation}
                  </h3>
                  <p className="text-foreground/72 text-[15px] leading-7">{item.description}</p>
                </div>
              </div>
            ))}

            <div className="border border-white/10 bg-white/[0.035] p-6 md:p-8 flex items-center gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-accent/30 text-accent">
                <Camera size={24} strokeWidth={1.5} />
              </div>
              <p className="text-white/65 text-[15px] leading-7">
                Photography helps me build visual judgment, composition awareness and a stronger sense of detail in interface work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
