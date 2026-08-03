import { professionalStatement, personalInfo } from "@/data/portfolio";
import Image from "next/image";

export default function ProfessionalStatement() {
  return (
    <section className="py-24 md:py-32 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          <div className="max-w-xl">
            <h2 className="text-accent font-serif text-3xl md:text-4xl mb-8">
              {professionalStatement.heading}
            </h2>

            <p className="text-xl md:text-2xl leading-9 text-white/88 mb-8">
              {professionalStatement.statement}
            </p>

            <div className="border-t border-white/10 pt-6">
              <p className="text-white/62 text-base leading-8 font-medium">
                {professionalStatement.secondaryLine}
              </p>
            </div>
          </div>

          <div className="relative h-[420px] md:h-[520px] w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-full overflow-hidden bg-background border border-white/10">
              <Image
                src="/assets/images/profile-image.png"
                alt={`${personalInfo.name} alternate professional portrait treatment`}
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover object-[center_22%] grayscale contrast-110 opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
              <div className="absolute inset-4 border border-white/10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
