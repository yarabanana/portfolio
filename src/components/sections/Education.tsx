"use client";

import { education } from "@/data/content";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-cloud/30">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        
        {/* Заголовок секції */}
        <h2 className="text-section-title text-ink font-semibold mb-16">
          Освіта
        </h2>

        {/* Сітка з університетами */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {education.map((item) => (
            <div key={item.id} className="flex flex-col border-t border-line pt-6">
              <p className="text-caption text-mist font-medium uppercase tracking-widest mb-4">
                {item.period.ua} • {item.degree.ua}
              </p>
              <h3 className="text-subtitle text-ink font-medium mb-2">
                {item.major.ua}
              </h3>
              <p className="text-body text-graphite leading-relaxed">
                {item.university.ua}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}