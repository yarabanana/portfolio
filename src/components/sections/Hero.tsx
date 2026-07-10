// src/components/sections/Hero.tsx
"use client";

import Image from "next/image";
// Додали siteConfig, щоб брати правильне посилання на резюме
import { hero, siteConfig } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            
            <h1 className="text-hero text-ink mb-6 mt-4 font-extrabold tracking-tight">
              {hero.heading.ua}
            </h1>

            <p className="text-subtitle text-graphite max-w-md mb-10">
              {hero.description.ua}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              {/* Оновлена кнопка завантаження резюме */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  const link = document.createElement("a");
                  // Беремо правильний шлях до PDF із файлу налаштувань
                  link.href = siteConfig.cvPath;
                  link.download = "";
                  link.click();
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-button bg-ink text-white text-body font-medium hover:bg-accent-dark transition-colors"
              >
                {hero.primaryCta.ua}
              </a>

              <button
                onClick={() =>
                  document
                    .getElementById("contacts")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-button border border-line text-ink text-body font-medium hover:bg-cloud transition-colors"
              >
                {hero.secondaryCta.ua}
              </button>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/5] w-full max-w-xs mx-auto rounded-card overflow-hidden bg-cloud shadow-sm">
              <Image
                src={hero.photo.src}
                alt={hero.photo.alt.ua}
                fill
                priority
                sizes="(max-width: 768px) 80vw, 30vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}