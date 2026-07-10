// src/components/sections/About.tsx
"use client";

import { about } from "@/data/content";

export default function About() {
  return (
    // Додали border-y (це border-top та border-bottom одночасно) та border-line
    <section id="about" className="py-24 bg-white border-y border-line">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="text-h2 font-bold text-ink mb-6">
              {about.heading.ua}
            </h2>
          </div>

          <div className="md:col-span-8 lg:col-span-9">
            <div className="space-y-6 text-body text-graphite leading-relaxed">
              {about.description.ua.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}