import { aboutMeInfo } from "@/data/portfolio";

export default function AboutMe() {
  return (
    <section id="about" className="py-24 md:py-28 bg-background-light text-primary relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl md:text-5xl font-serif">About Me</h2>
            <div className="h-[1px] flex-1 bg-primary/20"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
            <div className="space-y-6 text-base md:text-lg text-primary/80 leading-8">
              <p>{aboutMeInfo.intro}</p>
              <p>{aboutMeInfo.additional}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {aboutMeInfo.blocks.map((block, index) => {
                const Icon = block.icon;
                return (
                  <div
                    key={index}
                    className="min-h-40 border border-primary/10 bg-white/70 p-6 shadow-sm shadow-black/5"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-accent/30 text-accent">
                      <Icon size={20} strokeWidth={1.6} />
                    </div>
                    <h4 className="text-[13px] font-semibold text-primary/60 uppercase tracking-wider mb-2">
                      {block.label}
                    </h4>
                    <p className="text-lg leading-7 font-medium text-primary">
                      {block.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
