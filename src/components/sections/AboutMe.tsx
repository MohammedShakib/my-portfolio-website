import { aboutMeInfo } from "@/data/portfolio";

export default function AboutMe() {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 xl:py-28 bg-background-light text-primary relative">
      <div className="container mx-auto px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-7 md:mb-8">
            <h2 className="text-[32px] md:text-5xl font-serif">About Me</h2>
            <div className="h-[1px] flex-1 bg-primary/20"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-16 items-start">
            <div className="space-y-5 text-base md:text-lg text-primary/80 leading-[1.6] md:leading-8">
              <p>{aboutMeInfo.intro}</p>
              <p>{aboutMeInfo.additional}</p>
            </div>

            <div className="grid grid-cols-1 min-[375px]:grid-cols-2 gap-4 md:gap-5">
              {aboutMeInfo.blocks.map((block, index) => {
                const Icon = block.icon;
                return (
                  <div
                    key={index}
                    className="flex min-h-36 flex-col border border-primary/10 bg-white/70 p-4 md:min-h-40 md:p-6 shadow-sm shadow-black/5"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 text-accent md:mb-5 md:h-11 md:w-11">
                      <Icon size={21} strokeWidth={1.6} />
                    </div>
                    <h4 className="text-[12px] md:text-[13px] font-semibold text-primary/60 uppercase tracking-wider mb-2">
                      {block.label}
                    </h4>
                    <p className="text-[15px] leading-6 md:text-lg md:leading-7 font-medium text-primary">
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
