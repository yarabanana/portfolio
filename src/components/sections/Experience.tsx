// src/components/sections/Experience.tsx
"use client";

import { experience } from "@/data/content";

export default function Experience() {
  return (
    // Змінено border-y на border-t border-line для ідеальної верхньої лінії
    <section id="experience" className="py-24 bg-gray-50 border-t border-line">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <h2 className="text-h2 font-bold text-ink mb-16 border-b border-line pb-4">
          Досвід роботи
        </h2>

        <div>
          {experience.map((job, index) => (
            <div key={job.id}>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                
                {/* Ліва колонка: Дати та Компанія */}
                <div className="md:col-span-4 lg:col-span-3">
                  <div className="text-sm font-medium text-mist uppercase tracking-wider mb-2">
                    {job.period.ua}
                  </div>
                  <h3 className="text-lg font-bold text-ink uppercase pr-4">
                    {job.company.ua}
                  </h3>
                </div>

                {/* Права колонка */}
                <div className="md:col-span-8 lg:col-span-9">
                  <h4 className="text-xl font-bold text-ink mb-6">
                    {job.role.ua}
                  </h4>
                  
                  <div className="space-y-6 text-body text-graphite leading-relaxed">
                    {job.achievements.ua.map((item: any, itemIndex: number) => {
                      const parts = item.text.split(':');
                      const hasBoldTitle = parts.length > 1 && item.text.indexOf(':') < 50;

                      return (
                        <div key={itemIndex} className="block">
                          <p>
                            {hasBoldTitle ? (
                              <>
                                <strong className="text-ink font-bold">{parts[0]}:</strong>
                                {parts.slice(1).join(':')}
                              </>
                            ) : (
                              item.text
                            )}
                          </p>

                          {/* Кнопка-посилання (тепер однаковий дизайн для всього) */}
                          {item.link && (
                            <div className="mt-3">
                              <a 
                                href={item.link.url} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-line rounded-button text-ink text-sm font-medium hover:bg-cloud transition-colors shadow-sm"
                              >
                                {item.link.label}
                              </a>
                            </div>
                          )}

                          {/* YouTube Відео */}
                          {item.embed && item.embed.type === "youtube" && (
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                              {item.embed.ids.map((id: string) => (
                                <div key={id} className="aspect-video w-full rounded-card overflow-hidden shadow-sm bg-line">
                                  <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${id}`}
                                    title="YouTube video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full border-0"
                                  ></iframe>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Кнопка на Instagram Reel */}
                          {item.embed && item.embed.type === "instagram-reel" && (
                            <div className="mt-4">
                              <a 
                                href={item.embed.url} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-line rounded-button text-ink text-sm font-medium hover:bg-cloud transition-colors shadow-sm"
                              >
                                Дивитися Reel ↗
                              </a>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {index !== experience.length - 1 && (
                <hr className="border-t border-line w-full my-16" />
              )}
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}