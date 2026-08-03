import { featuredProjects, otherProjects } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

const Github = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 bg-background-light text-primary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Featured Projects</h2>
            <p className="text-primary/70 text-lg leading-relaxed">
              A selection of academic, professional and experimental projects that reflect my interest in backend systems, AI and digital product development.
            </p>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <div key={index} className="group flex flex-col bg-white border border-primary/10 overflow-hidden hover:shadow-2xl hover:shadow-black/5 transition-all duration-500">
              <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
                <div className="absolute inset-0 bg-primary/10 group-hover:scale-105 transition-transform duration-700 ease-in-out flex items-center justify-center text-primary/30 font-serif">
                  <span className="opacity-0">Image Placeholder</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60"></div>
                
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="inline-block px-3 py-1 bg-accent/90 text-white text-xs font-medium tracking-wide mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-serif text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <p className="text-primary/70 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-2.5 py-1 text-xs border border-primary/20 text-primary/60 bg-primary/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {(project.liveLink || project.githubLink) && (
                  <div className="flex items-center gap-4 pt-6 border-t border-primary/10">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink}
                        className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                      >
                        View Project <ArrowUpRight size={16} />
                      </a>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink}
                        className={`flex items-center gap-2 text-sm font-medium text-primary/50 hover:text-primary transition-colors ${!project.liveLink ? '' : 'ml-auto'}`}
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
        
        {/* Other Projects Section */}
        {otherProjects && otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-serif mb-8 border-b border-primary/10 pb-4">More Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div key={index} className="p-6 bg-white border border-primary/5 hover:border-primary/10 transition-colors">
                  <h4 className="text-xl font-serif text-primary mb-3">{project.title}</h4>
                  <p className="text-primary/70 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs text-primary/50 font-medium">
                        {tag}{tagIndex < project.tags.length - 1 ? " •" : ""}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
