// src/components/sections/Contacts.tsx
"use client";

import { contacts } from "@/data/content";

export default function Contacts() {
  return (
    <section id="contacts" className="py-24 bg-white">
      <div className="max-w-content mx-auto px-6 lg:px-10 text-center">
        <h2 className="text-h2 font-bold text-ink mb-6">
          {contacts.heading.ua}
        </h2>
        <p className="text-body text-graphite max-w-md mx-auto mb-12">
          {contacts.description.ua}
        </p>

        <div className="flex flex-col items-center gap-6">
          {/* Email */}
          <a
            href={`mailto:${contacts.email}`}
            className="text-h3 font-medium text-ink hover:text-accent transition-colors"
          >
            {contacts.email}
          </a>

          {/* Нова кнопка Telegram */}
          <a
            href={contacts.telegram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-white rounded-button font-medium hover:bg-graphite transition-colors mt-4"
          >
            Написати в Telegram
          </a>

          {/* Соціальні мережі */}
          <div className="flex gap-6 mt-8">
            {contacts.socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-body font-medium text-graphite hover:text-ink transition-colors underline underline-offset-4"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}