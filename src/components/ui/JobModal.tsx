// src/components/ui/JobModal.tsx
"use client";

import { useState, useEffect } from "react";

export default function JobModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      
      {/* Спеціальний стиль для анімації БАГАТОКОЛІРНОГО градієнта */}
      <style>{`
        @keyframes led-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-led {
          /* Додали плавний перехід із теплими кольорами (оранжевий #f97316 та жовтий #facc15) */
          background: linear-gradient(90deg, #22d3ee, #a855f7, #ec4899, #f97316, #facc15, #22d3ee);
          background-size: 300% 300%;
          animation: led-gradient 4s ease infinite;
        }
      `}</style>

      {/* Темний напівпрозорий фон (підкладка) */}
      <div
        className="absolute inset-0 bg-gray-800/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* ОБГОРТКА ДЛЯ LED-ЕФЕКТУ: використовує клас animate-led і має теплу оранжеву тінь */}
      <div className="relative w-full max-w-md p-[2px] rounded-3xl animate-led shadow-[0_0_20px_rgba(249,115,22,0.3)]">
        
        {/* САМЕ ВІКНО: чистий білий глосморфізм, ЖОДНИХ градієнтів всередині */}
        <div className="relative bg-white/85 backdrop-blur-xl rounded-[calc(1.5rem-2px)] p-8 text-center w-full h-full">

          {/* Текстовий контент */}
          <div className="mb-2 mt-4">
            <h3 className="text-2xl font-bold text-ink mb-4">Я вже знайшов роботу 🥳️️️️️️</h3>
            <p className="text-graphite text-sm leading-relaxed mb-6">
              Дякую за увагу до мого профілю! <br />
              Наразі я не шукаю нових можливостей. <br />
              Але якщо у вас є супер-мєга пропозиція, від якої просто неможливо втриматися — звісно, ви можете мені написати! 😉
            </p>
          </div>

          {/* Кнопка "Зрозуміло" */}
          <button
            onClick={() => setIsOpen(false)}
            className="px-6 py-2.5 bg-ink/10 text-ink text-sm font-medium rounded-button hover:bg-ink/20 transition-colors"
          >
            Зрозуміло
          </button>
        </div>
      </div>
    </div>
  );
}