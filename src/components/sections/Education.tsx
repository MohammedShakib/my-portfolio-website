import { certifications, educationList } from "@/data/portfolio";
import { Award, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 bg-background-light text-primary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-[32px] md:text-5xl font-serif mb-5 md:mb-6">Education & Certifications</h2>
          <div className="w-16 h-[2px] bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/5 flex items-center justify-center text-accent shrink-0">
                <GraduationCap size={22} />
              </div>
              <h3 className="font-serif text-[24px] md:text-2xl">Education</h3>
            </div>

            {educationList.map((edu) => (
              <div key={edu.institution} className="bg-white p-5 md:p-8 shadow-xl shadow-black/5 border border-primary/8">
                <div className="flex gap-4 md:gap-5">
                  <Image
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    width={72}
                    height={72}
                    className="h-14 w-14 md:h-16 md:w-16 shrink-0 object-contain"
                  />
                  <div className="min-w-0">
                    <p className="font-serif text-[21px] md:text-2xl text-primary font-medium leading-snug">{edu.degree}</p>
                    <p className="text-primary/82 text-base md:text-lg mt-1">{edu.institution}</p>

                    <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div>
                        <p className="text-[12px] uppercase tracking-widest text-primary/55 font-semibold mb-1">
                          Date
                        </p>
                        <p className="text-[15px] font-medium">{edu.date ?? edu.batch}</p>
                      </div>
                      <div>
                        <p className="text-[12px] uppercase tracking-widest text-primary/55 font-semibold mb-1">
                          {edu.expectedGraduation ? "Expected Graduation" : "Status"}
                        </p>
                        <p className="text-[15px] font-medium">{edu.expectedGraduation ?? edu.status}</p>
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <p className="text-[12px] uppercase tracking-widest text-primary/55 font-semibold mb-1">
                          {edu.scoreLabel}
                        </p>
                        <p className="text-[15px] font-medium">
                          {edu.scoreHidden ? (
                            <span
                              aria-label={`${edu.scoreLabel} hidden`}
                              className="inline-flex select-none items-center rounded-sm bg-primary/10 px-2 py-0.5 text-primary/35 blur-[3px]"
                            >
                              **** / ****
                            </span>
                          ) : (
                            edu.score
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/5 flex items-center justify-center text-accent shrink-0">
                <Award size={22} />
              </div>
              <h3 className="font-serif text-[24px] md:text-2xl">Awards & Certifications</h3>
            </div>

            <div className="grid grid-cols-1 min-[390px]:grid-cols-2 gap-4 md:gap-6 h-full">
              {certifications.map((cert) => {
                const Icon = cert.icon;
                return (
                  <div key={cert.title} className="bg-white p-5 md:p-6 shadow-xl shadow-black/5 border border-primary/8 flex flex-col">
                    <div className="mb-4 md:mb-5 flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full border border-accent/30 text-accent">
                      <Icon size={21} strokeWidth={1.6} />
                    </div>
                    <span className="mb-3 text-[12px] font-semibold tracking-widest text-accent uppercase">
                      {cert.category}
                    </span>
                    <h4 className="font-serif text-[18px] font-medium text-primary mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-sm md:text-[15px] text-primary/72 leading-6 md:leading-7">{cert.description}</p>
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
