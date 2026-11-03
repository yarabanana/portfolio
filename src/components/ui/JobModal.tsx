// src/components/ui/JobModal.tsx
"use client";

import { useState, useEffect } from "react";

export default function JobModal() {
  // Створюємо "пам'ять" для вікна. Спочатку воно закрите (false), щоб не блимати миттєво при завантаженні.
  const [isOpen, setIsOpen] = useState(false);

  // Цей код спрацьовує один раз при завантаженні сторінки.
  // Він відкриває вікно через 500 мілісекунд для красивого плавного старту.
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 500);
    return () => clearTimeout(timer); // Очищаємо таймер, якщо користувач піде зі сторінки раніше
  }, []);

  // Якщо вікно має бути закрите — ми просто нічого не малюємо (return null).
  if (!isOpen) return null;

  return (
    // Головний контейнер на весь екран, поверх усього іншого (z-50)
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

      {/* Темний напівпрозорий фон (підкладка) */}
      <div
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)} // Закриваємо вікно, якщо клікнути повз нього на темний фон
      ></div>

      {/* Сама картка з ефектом глосморфізму (матового скла) */}
      <div className="relative w-full max-w-md bg-white/70 backdrop-blur-md border border-white/50 shadow-2xl rounded-3xl p-8 text-center">

        {/* Лаконічний малопомітний хрестик у правому верхньому куті */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-gray-400 hover:text-ink transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Контент вікна */}
        <div className="mb-2 mt-4">
          <h3 className="text-2xl font-bold text-ink mb-4">Я вже знайшов роботу 💼</h3>
          <p className="text-graphite text-sm leading-relaxed mb-6">
            Дякую всім за увагу до мого профілю! Наразі я не шукаю нових можливостей, тому що працюю. Але якщо у вас є супер-мега пропозиція, від якої просто неможливо втриматися — звісно, ви можете мені написати! 😉
          </p>
        </div>

        {/* Додаткова кнопка-закривашка (щоб користувачу було інтуїтивно зрозуміло, куди тиснути) */}
        <button
          onClick={() => setIsOpen(false)}
          className="px-6 py-2.5 bg-ink/10 text-ink text-sm font-medium rounded-button hover:bg-ink/20 transition-colors"
        >
          Зрозуміло
        </button>

      </div>
    </div>
  );
}