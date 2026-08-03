import { professionalStatement, personalInfo } from "@/data/portfolio";
import Image from "next/image";

export default function ProfessionalStatement() {
  return (
    <section className="py-16 md:py-32 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 hidden w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 md:block"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <h2 className="mb-8 text-accent font-serif text-[32px] md:hidden">
          {professionalStatement.heading}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-12 items-center">
          <div className="order-2 max-w-xl md:order-1">
            <h2 className="hidden text-accent font-serif text-3xl md:block md:text-4xl mb-8">
              {professionalStatement.heading}
            </h2>

            <p className="text-base md:text-2xl leading-[1.6] md:leading-9 text-white/88 mb-6 md:mb-8">
              {professionalStatement.statement}
            </p>

            <div className="border-t border-white/10 pt-5 md:pt-6">
              <p className="text-white/62 text-sm md:text-base leading-6 md:leading-8 font-medium">
                {professionalStatement.secondaryLine}
              </p>
            </div>
          </div>

          <div className="relative order-1 aspect-[4/3] w-full flex justify-center md:order-2 lg:justify-end md:h-[520px] md:aspect-auto">
            <div className="relative w-full max-w-md h-full overflow-hidden bg-background border border-white/10">
              <Image
                src="/assets/images/profile-image.png"
                alt={`${personalInfo.name} alternate professional portrait treatment`}
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover object-[center_18%] grayscale brightness-125 contrast-110 opacity-95 md:opacity-90"
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
