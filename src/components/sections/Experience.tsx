// src/components/sections/Experience.tsx
"use client";

import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-cloud">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <h2 className="text-h2 font-bold text-ink mb-16">Досвід</h2>

        <div className="space-y-12">
          {experience.map((job) => (
            <div key={job.id} className="bg-white p-8 md:p-10 rounded-card shadow-sm border border-line">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                <h3 className="text-h3 font-bold text-ink">{job.role.ua}</h3>
                <span className="text-caption font-medium text-mist whitespace-nowrap bg-cloud px-3 py-1 rounded-full">
                  {job.period.ua}
                </span>
              </div>
              
              <div className="text-body font-medium text-graphite mb-6">
                {job.company.ua}
              </div>

              <ul className="space-y-4 text-body text-graphite">
                {/* Додано тип : any для item та : number для index */}
                {job.achievements.ua.map((item: any, index: number) => (
                  <li key={index} className="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                    {item.text}
                    
                    {item.link && (
                      <a href={item.link.url} target="_blank" rel="noreferrer" className="block mt-2 text-accent hover:text-ink font-medium underline underline-offset-4 decoration-accent/30 transition-colors">
                        {item.link.label}
                      </a>
                    )}

                    {item.embed && item.embed.type === "youtube" && (
                      <div className="mt-4 p-4 bg-cloud rounded-lg text-sm text-mist border border-line">
                        [ Тут будуть вбудовані YouTube відео: {item.embed.ids?.join(', ')} ]
                      </div>
                    )}

                    {item.embed && item.embed.type === "instagram-reel" && (
                      <div className="mt-4">
                        <a href={item.embed.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-cloud border border-line rounded-button text-ink font-medium hover:bg-line transition-colors">
                          <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                          Дивитися Reel
                        </a>
                      </div>
                    )}

                    {item.hasPhotos && (
                      <div className="mt-4 p-8 bg-cloud rounded-lg text-sm text-mist border border-dashed border-line flex items-center justify-center">
                        [ Тут буде блок із фотографіями ]
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}