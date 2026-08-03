import { professionalStatement, personalInfo } from "@/data/portfolio";

export default function ProfessionalStatement() {
  return (
    <section className="py-24 md:py-32 bg-primary text-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Statement Content */}
          <div className="max-w-xl">
            <h2 className="text-accent font-serif text-3xl md:text-4xl mb-8">
              {professionalStatement.heading}
            </h2>
            
            <div className="relative">
              <span className="absolute -top-10 -left-6 text-7xl text-white/10 font-serif leading-none">
                &ldquo;
              </span>
              <p className="font-serif text-2xl md:text-3xl leading-relaxed text-white/90 mb-8 relative z-10">
                {professionalStatement.statement}
              </p>
            </div>
            
            <div className="border-t border-white/10 pt-6">
              <p className="text-white/60 font-medium tracking-wide whitespace-pre-wrap">
                {professionalStatement.secondaryLine}
              </p>
            </div>
          </div>

          {/* Right side visual placeholder */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-full overflow-hidden bg-background">
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-white/5 flex flex-col items-center justify-center text-center p-8">
                <div className="text-4xl font-serif text-white/20 mb-4 opacity-50">{personalInfo.monogram}</div>
                <p className="text-white/30 text-sm uppercase tracking-widest font-medium">Portrait / Abstract Visual</p>
              </div>
              
              {/* Decorative borders */}
              <div className="absolute inset-4 border border-white/10 pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
