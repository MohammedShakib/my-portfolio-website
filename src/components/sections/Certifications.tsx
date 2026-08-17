"use client";

import { useEffect, useMemo, useState } from "react";
import { certifications, professionalCertifications } from "@/data/portfolio";
import { Award, ExternalLink, FileText, X } from "lucide-react";
import Image from "next/image";

type Certification = (typeof professionalCertifications)[number];

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const [preview, setPreview] = useState<Certification | null>(null);

  const featuredCertifications = useMemo(
    () => professionalCertifications.filter((cert) => cert.featured),
    []
  );
  const visibleCertifications = showAll ? professionalCertifications : featuredCertifications;

  useEffect(() => {
    if (!preview) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreview(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [preview]);

  return (
    <section id="certifications" className="bg-background-light pb-16 text-primary md:pb-20 lg:pb-24">
      <div className="container mx-auto px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 grid gap-6 border-t border-primary/10 pt-14 md:mb-14 md:grid-cols-[0.95fr_1.05fr] md:pt-20">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center border border-accent/20 bg-white text-accent shadow-lg shadow-black/5">
                <Award size={22} strokeWidth={1.65} />
              </div>
              <h2 className="font-serif text-[32px] leading-tight md:text-5xl">
                Certifications & Continuous Learning
              </h2>
              <div className="mt-5 h-[2px] w-16 bg-accent" />
            </div>
            <p className="max-w-2xl self-end text-base leading-8 text-primary/72 md:text-lg md:leading-9">
              Selected certifications and learning programs completed across data science,
              generative AI, Claude, communication, and career development.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
            {visibleCertifications.map((cert) => (
              <article
                key={`${cert.issuer}-${cert.title}`}
                className="flex h-full min-h-[300px] flex-col border border-accent/18 bg-white p-5 shadow-xl shadow-black/[0.045] transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 focus-within:-translate-y-1 focus-within:shadow-2xl focus-within:shadow-black/10 md:p-6"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center border border-primary/10 bg-background-light p-2.5">
                    <Image
                      src={cert.logo}
                      alt={`${cert.issuer} logo`}
                      width={56}
                      height={56}
                      unoptimized
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="max-w-[160px] border border-accent/20 bg-accent/8 px-3 py-1 text-right text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                    {cert.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col">
                  <h3 className="font-serif text-[23px] font-medium leading-tight text-primary md:text-[27px]">
                    {cert.title}
                  </h3>
                  <p className="mt-2 text-[15px] font-medium text-primary/72">{cert.issuer}</p>
                  <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-primary/50">
                    Issued {cert.issued}
                  </p>
                  {cert.credentialId ? (
                    <p className="mt-3 text-sm font-medium text-primary/62">
                      Credential ID: {cert.credentialId}
                    </p>
                  ) : null}

                  {cert.skills.length > 0 ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={`${cert.title}-${skill}`}
                          className="border border-primary/12 px-3 py-1 text-[12px] font-medium text-primary/68"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {(cert.credentialUrl || cert.certificateFile) ? (
                    <div className="mt-auto flex flex-col gap-3 pt-7 min-[420px]:flex-row">
                      {cert.credentialUrl ? (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 items-center justify-center gap-2 border border-accent/40 px-4 text-sm font-semibold text-accent transition-colors hover:border-accent hover:bg-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                        >
                          View Credential
                          <ExternalLink size={15} />
                        </a>
                      ) : null}
                      {cert.certificateFile ? (
                        <button
                          type="button"
                          onClick={() => setPreview(cert)}
                          className="inline-flex min-h-11 items-center justify-center gap-2 border border-primary/15 px-4 text-sm font-semibold text-primary transition-colors hover:border-primary/35 hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                        >
                          View Certificate
                          <FileText size={15} />
                        </button>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          {professionalCertifications.length > featuredCertifications.length ? (
            <div className="mt-9 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((value) => !value)}
                className="min-h-11 border border-accent/45 px-6 text-sm font-semibold text-accent transition-colors hover:border-accent hover:bg-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                aria-expanded={showAll}
              >
                {showAll ? "Show Featured Certifications" : "View All Certifications"}
              </button>
            </div>
          ) : null}

          <div className="mt-14 border-t border-primary/10 pt-10 md:mt-16 md:pt-12">
            <div className="mb-7 flex flex-col gap-3 md:mb-9 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">
                  Recognition
                </p>
                <h3 className="font-serif text-[28px] leading-tight md:text-4xl">
                  Awards & Activities
                </h3>
              </div>
              <p className="max-w-xl text-base leading-7 text-primary/68">
                Project show recognition, participation, workshops and campus learning activities.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {certifications.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="flex min-h-[250px] flex-col border border-primary/8 bg-white p-5 shadow-xl shadow-black/[0.045] transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 md:p-6"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-accent/30 text-accent">
                      <Icon size={21} strokeWidth={1.6} />
                    </div>
                    <span className="mb-3 text-[12px] font-semibold uppercase tracking-widest text-accent">
                      {item.category}
                    </span>
                    <h4 className="mb-3 font-serif text-[20px] font-medium leading-tight text-primary">
                      {item.title}
                    </h4>
                    <p className="text-[15px] leading-7 text-primary/72">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {preview ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-preview-title"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setPreview(null);
          }}
        >
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden bg-white text-primary shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-primary/10 p-4 md:p-5">
              <div>
                <h3 id="certificate-preview-title" className="font-serif text-2xl">
                  {preview.title}
                </h3>
                <p className="mt-1 text-sm text-primary/68">
                  {preview.issuer} - Issued {preview.issued}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPreview(null)}
                aria-label="Close certificate preview"
                className="flex h-11 w-11 items-center justify-center border border-primary/10 text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <X size={19} />
              </button>
            </div>

            <div className="max-h-[68vh] overflow-auto bg-background-light p-4 md:p-6">
              {preview.certificateFile.endsWith(".pdf") ? (
                <iframe
                  src={preview.certificateFile}
                  title={`${preview.title} certificate preview`}
                  className="h-[62vh] w-full border border-primary/10 bg-white"
                />
              ) : (
                <div className="relative mx-auto aspect-[4/3] max-h-[62vh] w-full">
                  <Image
                    src={preview.certificateFile}
                    alt={`${preview.title} certificate preview`}
                    fill
                    sizes="(max-width: 768px) 92vw, 850px"
                    className="object-contain"
                  />
                </div>
              )}
            </div>

            {preview.credentialUrl ? (
              <div className="border-t border-primary/10 p-4 md:p-5">
                <a
                  href={preview.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 border border-accent/40 px-4 text-sm font-semibold text-accent transition-colors hover:border-accent hover:bg-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Open Credential
                  <ExternalLink size={15} />
                </a>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  );
}
