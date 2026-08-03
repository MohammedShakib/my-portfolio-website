import { leadershipAndExtracurricular } from "@/data/portfolio";

export default function Leadership() {
  if (!leadershipAndExtracurricular || leadershipAndExtracurricular.length === 0) return null;

  return (
    <section className="py-24 bg-primary text-white border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-accent">Leadership & Extracurricular</h2>
          <div className="w-12 h-[1px] bg-accent/50 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {leadershipAndExtracurricular.map((item, index) => (
            <div key={index} className="p-6 md:p-8 border border-white/10 bg-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/10 transition-colors">
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-white mb-2">{item.role} — {item.organisation}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
              </div>
              <div className="shrink-0 text-accent text-sm font-medium tracking-widest uppercase md:text-right">
                {item.date}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
