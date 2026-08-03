import { whatIDo } from "@/data/portfolio";

export default function WhatIDo() {
  return (
    <section className="py-24 bg-background-light text-primary relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">What I Work On</h2>
          <div className="w-16 h-[2px] bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {whatIDo.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="group flex min-h-[310px] flex-col items-start p-7 md:p-8 bg-white/60 hover:bg-white transition-colors duration-300 border border-primary/10 hover:border-accent/45"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-medium mb-4 text-primary leading-snug">
                  {item.title}
                </h3>
                <p className="text-primary/72 text-[15px] leading-7">
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
