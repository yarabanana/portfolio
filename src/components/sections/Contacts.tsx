// src/components/sections/Contacts.tsx
"use client";

import { contacts } from "@/data/content";

export default function Contacts() {
  return (
    // Замінили bg-white на bg-gray-50 та додали лінію зверху
    <section id="contacts" className="py-24 bg-gray-50 border-t border-line">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="text-h2 font-bold text-ink mb-6">
              {contacts.heading.ua}
            </h2>
          </div>

          <div className="md:col-span-8 lg:col-span-9 flex flex-col items-start gap-6">
            <p className="text-body text-graphite max-w-2xl mb-2">
              {contacts.description.ua}
            </p>

            <a
              href={contacts.telegram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-white rounded-button font-medium hover:bg-graphite transition-colors"
            >
              Написати в Telegram
            </a>

            <div className="flex flex-col sm:flex-row gap-6 mt-8 pt-8 border-t border-line w-full max-w-xl">
              <a
                href={`mailto:${contacts.email}`}
                className="text-body font-medium text-graphite hover:text-ink transition-colors"
              >
                {contacts.email}
              </a>
              
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
      </div>
    </section>
  );
}