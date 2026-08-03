import { educationList, certifications } from "@/data/portfolio";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-background-light text-primary">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Education & Certifications</h2>
          <div className="w-16 h-[2px] bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Education Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/5 flex items-center justify-center text-accent shrink-0">
                <GraduationCap size={24} />
              </div>
              <h3 className="font-serif text-2xl">Academic Education</h3>
            </div>
            
            {educationList.map((edu, index) => (
              <div key={index} className="bg-white p-8 shadow-xl shadow-black/5 border border-primary/5">
                <div className="space-y-4">
                  <div>
                    <p className="font-serif text-lg text-primary font-medium">{edu.degree}</p>
                    <p className="text-primary/80">{edu.institution}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {edu.expectedGraduation ? (
                      <div>
                        <p className="text-xs uppercase tracking-widest text-primary/50 font-semibold mb-1">Expected</p>
                        <p className="text-sm font-medium">{edu.expectedGraduation}</p>
                      </div>
                    ) : edu.batch ? (
                      <div>
                        <p className="text-xs uppercase tracking-widest text-primary/50 font-semibold mb-1">Batch</p>
                        <p className="text-sm font-medium">{edu.batch}</p>
                      </div>
                    ) : null}
                    {edu.cgpa && (
                      <div>
                        <p className="text-xs uppercase tracking-widest text-primary/50 font-semibold mb-1">GPA / CGPA</p>
                        <p className="text-sm font-medium">{edu.cgpa}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/5 flex items-center justify-center text-accent shrink-0">
                <Award size={24} />
              </div>
              <h3 className="font-serif text-2xl">Certifications & Awards</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-6 shadow-xl shadow-black/5 border border-primary/5 flex flex-col justify-center">
                  <Award size={24} className="text-accent mb-4" />
                  <h4 className="font-serif text-lg font-medium text-primary mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-primary/70 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
