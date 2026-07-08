"use client";

import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white border-t border-line">
      <div className="max-w-content mx-auto px-6 lg:px-10 flex flex-col gap-16 md:gap-24">
        
        {/* РЯДОК 1: Професійні навички */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="text-section-title text-ink font-semibold">
              {skills.professionalHeading.ua}
            </h2>
          </div>
          <div className="md:col-span-8 lg:col-span-9">
            <div className="flex flex-wrap gap-3">
              {skills.professional.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-5 py-2.5 border border-line rounded-full text-body text-graphite bg-cloud/30 hover:border-mist transition-colors duration-300"
                >
                  {skill.ua}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* РЯДОК 2: Технічні інструменти */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 border-t border-line/50 pt-10 md:pt-0 md:border-0">
          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="text-section-title text-ink font-semibold">
              {skills.technicalHeading.ua}
            </h2>
          </div>
          <div className="md:col-span-8 lg:col-span-9">
            <div className="flex flex-wrap gap-3">
              {skills.technical.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-5 py-2.5 border border-line rounded-full text-body text-graphite bg-cloud/30 hover:border-mist transition-colors duration-300"
                >
                  {skill.ua}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* РЯДОК 3: Мови */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 border-t border-line/50 pt-10 md:pt-0 md:border-0">
          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="text-section-title text-ink font-semibold">
              {skills.languagesHeading.ua}
            </h2>
          </div>
          <div className="md:col-span-8 lg:col-span-9">
            <div className="flex flex-col gap-4 max-w-md">
              {skills.languages.map((lang, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between border-b border-line pb-4 last:border-0 last:pb-0"
                >
                  <span className="text-body font-medium text-ink">
                    {lang.name.ua}
                  </span>
                  <span className="text-body text-graphite text-right">
                    {lang.level.ua}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}