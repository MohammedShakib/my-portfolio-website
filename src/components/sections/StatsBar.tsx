import { professionalStats } from "@/data/portfolio";

export default function StatsBar() {
  return (
    <section className="relative z-20 -mt-16 md:-mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-[#2a221d] text-white shadow-xl shadow-black/20 p-8 md:p-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-7 md:gap-4 text-center divide-x-0 md:divide-x divide-white/10">
            {professionalStats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center px-4">
                <span className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-3 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[13px] md:text-sm font-medium text-white/75 uppercase tracking-widest leading-6 max-w-[170px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
