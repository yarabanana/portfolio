// src/components/sections/Experience.tsx
"use client";

import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50 border-y border-line">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <h2 className="text-h2 font-bold text-ink mb-16 border-b border-line pb-4">
          Досвід роботи
        </h2>

        <div>
          {experience.map((job, index) => (
            <div key={job.id}>
              
              {/* Основний блок із місцем роботи */}
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

                {/* Права колонка: Посада, Опис, Посилання та Відео */}
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

                          {/* Елегантне посилання */}
                          {item.link && (
                            <a href={item.link.url} target="_blank" rel="noreferrer" className="inline-block mt-2 text-accent hover:text-ink font-medium underline underline-offset-4 transition-colors">
                              {item.link.label}
                            </a>
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
                              <a href={item.embed.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-line rounded-button text-ink font-medium hover:bg-cloud transition-colors shadow-sm">
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

              {/* Тонка розділяюча лінія, яка малюється для всіх блоків, крім останнього */}
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