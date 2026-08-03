import { certifications, educationList } from "@/data/portfolio";
import { Award, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-background-light text-primary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Education & Certifications</h2>
          <div className="w-16 h-[2px] bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 bg-primary/5 flex items-center justify-center text-accent shrink-0">
                <GraduationCap size={24} />
              </div>
              <h3 className="font-serif text-2xl">Academic Education</h3>
            </div>

            {educationList.map((edu) => (
              <div key={edu.institution} className="bg-white p-7 md:p-8 shadow-xl shadow-black/5 border border-primary/8">
                <div className="flex gap-5">
                  <Image
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    width={56}
                    height={56}
                    className="h-14 w-14 shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="font-serif text-xl text-primary font-medium leading-snug">{edu.degree}</p>
                    <p className="text-primary/80 text-base mt-1">{edu.institution}</p>

                    <div className="mt-5 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[12px] uppercase tracking-widest text-primary/55 font-semibold mb-1">
                          {edu.expectedGraduation ? "Expected" : "Batch"}
                        </p>
                        <p className="text-sm font-medium">{edu.expectedGraduation ?? edu.batch}</p>
                      </div>
                      <div>
                        <p className="text-[12px] uppercase tracking-widest text-primary/55 font-semibold mb-1">
                          GPA / CGPA
                        </p>
                        <p className="text-sm font-medium">{edu.cgpa}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 bg-primary/5 flex items-center justify-center text-accent shrink-0">
                <Award size={24} />
              </div>
              <h3 className="font-serif text-2xl">Certifications & Awards</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              {certifications.map((cert) => {
                const Icon = cert.icon;
                return (
                  <div key={cert.title} className="bg-white p-6 shadow-xl shadow-black/5 border border-primary/8 flex flex-col">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-accent/30 text-accent">
                      <Icon size={22} strokeWidth={1.6} />
                    </div>
                    <h4 className="font-serif text-lg font-medium text-primary mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-[15px] text-primary/72 leading-7">{cert.description}</p>
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
