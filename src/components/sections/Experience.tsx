// src/components/sections/Experience.tsx
"use client";

import { experience } from "@/data/content";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        
        <h2 className="text-section-title text-ink font-semibold mb-16">
          Досвід роботи
        </h2>

        <div className="flex flex-col gap-16">
          {experience.map((job) => (
            <div key={job.id} className="grid md:grid-cols-12 gap-6 md:gap-12 border-t border-line pt-8">
              
              <div className="md:col-span-4 lg:col-span-3">
                <p className="text-caption text-mist font-medium uppercase tracking-widest mb-2">
                  {job.period.ua}
                </p>
                <h3 className="text-body font-semibold text-ink uppercase">
                  {job.company.ua}
                </h3>
              </div>

              <div className="md:col-span-8 lg:col-span-9">
                <h4 className="text-subtitle text-ink font-medium mb-6">
                  {job.role.ua}
                </h4>
                
                <ul className="flex flex-col gap-4 mb-8">
                  {job.achievements.ua.map((achievement, index) => {
                    const [title, ...rest] = achievement.split(":");
                    return (
                      <li key={index} className="text-body text-graphite leading-relaxed">
                        {rest.length > 0 ? (
                          <>
                            <strong className="text-ink font-medium">{title}:</strong>
                            {rest.join(":")}
                          </>
                        ) : (
                          achievement
                        )}
                      </li>
                    );
                  })}
                </ul>

                {job.id === "automagistral" ? (
                  <div className="grid sm:grid-cols-2 gap-6 mt-8">
                    <YouTubeEmbed videoId="LR278QtfDac" />
                    <YouTubeEmbed videoId="BNKLmgkbUWM" />
                  </div>
                ) : job.hasMedia ? (
                  <div className="w-full p-8 rounded-card border border-dashed border-mist/50 bg-cloud/30 flex items-center justify-center text-center mt-8">
                    <p className="text-caption text-mist">
                      {job.mediaNote || "Місце для медіа"}
                    </p>
                  </div>
                ) : null}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}