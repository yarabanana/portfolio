"use client";

import { contacts } from "@/data/content";

export default function Contacts() {
  return (
    <section id="contacts" className="py-24 bg-cloud/30 border-t border-line">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          
          {/* Ліва частина: Заголовок */}
          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="text-section-title text-ink font-semibold sticky top-28">
              {contacts.heading.ua}
            </h2>
          </div>

          {/* Права частина: Контактна інформація */}
          <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-10">
            <p className="text-subtitle text-graphite max-w-md">
              {contacts.description.ua}
            </p>
            
            <div className="flex flex-col gap-8 mt-4">
              
              {/* Блок Email */}
              <div>
                <p className="text-caption text-mist uppercase tracking-widest mb-2">
                  Email
                </p>
                <a 
                  href={`mailto:${contacts.email}`} 
                  className="text-body font-medium text-ink hover:text-graphite transition-colors"
                >
                  {contacts.email}
                </a>
              </div>

              {/* Блок Телефон */}
              <div>
                <p className="text-caption text-mist uppercase tracking-widest mb-2">
                  Телефон
                </p>
                <a 
                  href={`tel:${contacts.phone.replace(/[^0-9+]/g, '')}`} 
                  className="text-body font-medium text-ink hover:text-graphite transition-colors"
                >
                  {contacts.phone}
                </a>
              </div>

              {/* Блок Соцмережі */}
              <div>
                <p className="text-caption text-mist uppercase tracking-widest mb-3">
                  Соцмережі
                </p>
                <div className="flex flex-wrap gap-6">
                  {contacts.socials.map((social, index) => (
                    <a 
                      key={index} 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-body font-medium text-ink hover:text-graphite transition-colors relative group"
                    >
                      {social.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-ink transition-all duration-300 group-hover:w-full" />
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}