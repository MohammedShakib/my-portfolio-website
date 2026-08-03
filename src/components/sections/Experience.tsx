import { learningJourney } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background text-white">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Experience & Learning Journey</h2>
          <div className="w-16 h-[1px] bg-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block"></div>
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 md:hidden"></div>

          <div className="space-y-12 md:space-y-24">
            {learningJourney.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center w-full">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-2 border-accent bg-background -translate-x-1/2 mt-1.5 md:mt-0 z-10"></div>
                  
                  {/* Content (Desktop Left/Right, Mobile Right) */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                    <div className="p-6 md:p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300">
                      <span className="inline-block text-accent text-sm font-medium tracking-widest uppercase mb-3">
                        {item.period}
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl text-white mb-2">
                        {item.title}
                      </h3>
                      {item.company && (
                        <h4 className="text-white/80 font-medium mb-4">
                          {item.company}
                        </h4>
                      )}
                      <p className="text-foreground/70 text-sm leading-relaxed whitespace-pre-wrap">
                        {item.description}
                      </p>
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
