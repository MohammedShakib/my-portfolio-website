import { featuredProjects, otherProjects } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Github = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
  </svg>
);

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 bg-background-light text-primary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Featured Projects</h2>
            <p className="text-primary/72 text-lg leading-8">
              A selection of academic, professional and experimental projects that reflect my interest in
              backend systems, AI-enabled workflows and practical digital products.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col bg-white border border-primary/10 overflow-hidden hover:border-accent/35 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/25 to-transparent" />
                <Image
                  src={project.logo}
                  alt={`${project.title} logo`}
                  width={48}
                  height={48}
                  className="absolute left-5 top-5 h-12 w-12"
                />

                <div className="absolute bottom-4 left-6 right-6">
                  <span className="inline-block px-3 py-1 bg-accent/90 text-white text-[12px] font-medium tracking-wide mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-serif text-white leading-tight">{project.title}</h3>
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <p className="text-primary/72 text-[15px] leading-7 mb-6 flex-1">
                  {project.description}
                </p>

                <div className="mb-6 border-l-2 border-accent pl-4">
                  <p className="text-[12px] font-semibold uppercase tracking-widest text-primary/50 mb-1">
                    Role
                  </p>
                  <p className="text-sm font-medium text-primary mb-3">{project.role}</p>
                  <p className="text-[12px] font-semibold uppercase tracking-widest text-primary/50 mb-1">
                    Contribution
                  </p>
                  <p className="text-[14px] leading-6 text-primary/70">{project.contribution}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-1 text-[12px] border border-primary/20 text-primary/65 bg-primary/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {(project.liveLink || project.githubLink || project.caseStudyLink) && (
                  <div className="flex items-center gap-4 pt-6 border-t border-primary/10">
                    {project.caseStudyLink && (
                      <a
                        href={project.caseStudyLink}
                        className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                      >
                        View Case Study <ArrowUpRight size={16} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                      >
                        Live Preview <ArrowUpRight size={16} />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        className="flex items-center gap-2 text-sm font-medium text-primary/50 hover:text-primary transition-colors ml-auto"
                        aria-label="View source code on GitHub"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {otherProjects && otherProjects.length > 0 && (
          <div>
            <h3 className="text-3xl font-serif mb-8 border-b border-primary/10 pb-4">Additional Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="group min-h-[260px] p-7 md:p-8 bg-white border border-primary/10 hover:border-accent/35 transition-colors"
                >
                  <div className="flex items-start gap-5 mb-6">
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      width={60}
                      height={60}
                      className="h-[60px] w-[60px] shrink-0"
                    />
                    <div>
                      <h4 className="text-2xl font-serif text-primary mb-3">{project.title}</h4>
                      <p className="text-primary/72 text-base leading-8">{project.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-full border border-primary/15 px-3.5 py-1.5 text-[12px] text-primary/65 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {"image" in project && project.image ? (
                    <div className="relative mt-6 aspect-[16/9] overflow-hidden border border-primary/10 bg-primary/5">
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
