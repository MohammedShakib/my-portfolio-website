import { whatIDo } from "@/data/portfolio";

export default function WhatIDo() {
  return (
    <section className="py-24 bg-background-light text-primary relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">What I Do</h2>
          <div className="w-16 h-[2px] bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whatIDo.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="group flex flex-col items-center text-center p-8 bg-white/50 hover:bg-white transition-colors duration-500 border border-primary/5 hover:border-accent/20"
              >
                <div className="mb-6 text-accent group-hover:-translate-y-1 transition-transform duration-300">
                  <Icon size={40} strokeWidth={1} />
                </div>
                <h3 className="font-serif text-xl font-medium mb-4 text-primary">
                  {item.title}
                </h3>
                <p className="text-primary/70 text-sm leading-relaxed">
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
