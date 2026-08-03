import { professionalStats } from "@/data/portfolio";

export default function StatsBar() {
  return (
    <section className="relative z-20 -mt-16 md:-mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-[#2a221d] text-white shadow-xl shadow-black/20 p-10 md:p-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-white/10">
            {professionalStats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center px-4">
                <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-3 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm font-medium text-white/70 uppercase tracking-widest leading-relaxed max-w-[150px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          {/* NOTE: These values must be replaced with verified information as requested. */}
        </div>
      </div>
    </section>
  );
}
