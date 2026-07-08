"use client";

import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="py-24 bg-cloud/30">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          
          {/* Заголовок секції */}
          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="text-section-title text-ink font-semibold sticky top-28">
              {about.heading.ua}
            </h2>
          </div>

          {/* Контент секції */}
          <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-6">
            <div className="text-body text-graphite leading-relaxed">
              {about.description.ua.map((paragraph, index) => (
                <p key={index} className="mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}