import { aboutMeInfo } from "@/data/portfolio";

export default function AboutMe() {
  return (
    <section id="about" className="py-24 bg-background-light text-primary relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl md:text-5xl font-serif">About Me</h2>
            <div className="h-[1px] flex-1 bg-primary/20"></div>
          </div>
          
          <div className="space-y-6 text-lg text-primary/80 leading-relaxed mb-16">
            <p>{aboutMeInfo.intro}</p>
            <p>{aboutMeInfo.additional}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {aboutMeInfo.blocks.map((block, index) => (
              <div 
                key={index} 
                className="border-l-2 border-accent pl-6 py-1"
              >
                <h4 className="text-sm font-semibold text-primary/60 uppercase tracking-wider mb-2">
                  {block.label}
                </h4>
                <p className="font-serif text-xl text-primary">
                  {block.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
