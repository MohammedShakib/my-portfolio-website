import { whatIDo } from "@/data/portfolio";

export default function WhatIDo() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background-light text-primary relative">
      <div className="container mx-auto px-6 md:px-8 lg:px-10 xl:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-[32px] md:text-5xl font-serif mb-5 md:mb-6">What I Work On</h2>
          <div className="w-16 h-[2px] bg-accent mx-auto"></div>
        </div>

        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0 xl:grid-cols-4 xl:gap-8">
          {whatIDo.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="group flex min-h-[230px] w-[84vw] shrink-0 snap-start flex-col items-start p-5 bg-white/60 hover:bg-white transition-colors duration-300 border border-primary/10 hover:border-accent/45 md:min-h-[260px] md:w-auto md:p-6 xl:min-h-[310px] xl:p-8"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-accent/30 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 md:mb-6 md:h-14 md:w-14">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[18px] md:text-xl font-medium mb-3 md:mb-4 text-primary leading-snug">
                  {item.title}
                </h3>
                <p className="text-primary/72 text-sm md:text-[15px] leading-6 md:leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
