import { professionalStats } from "@/data/portfolio";

export default function StatsBar() {
  return (
    <section className="relative z-20 lg:-mt-20">
      <div className="container mx-auto px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="bg-[#2a221d] text-white shadow-xl shadow-black/20 p-5 md:p-10 lg:p-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4 text-center divide-x-0 md:divide-x divide-white/10">
            {professionalStats.map((stat, index) => (
              <div key={index} className="flex min-h-28 flex-col items-center justify-center px-2 md:px-4">
                <span className="font-serif text-[44px] md:text-5xl lg:text-6xl xl:text-7xl text-white mb-2 md:mb-3 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[12px] md:text-sm font-medium text-white/75 uppercase tracking-wider md:tracking-widest leading-5 md:leading-6 max-w-[150px] md:max-w-[170px]">
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
