// src/components/ui/Gallery.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

// Описуємо, які дані потрібні для кожної картинки
export type GalleryItem = {
  id: number;
  src: string;
  alt: string;
};

type GalleryProps = {
  items: GalleryItem[];
  aspectClass?: string; // Клас для пропорцій (наприклад, "aspect-square" або "aspect-[4/3]")
};

export default function Gallery({ items, aspectClass = "aspect-square" }: GalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Відкрити фото
  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Забороняємо прокручувати сторінку, поки відкрито фото
  };

  // Закрити фото
  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto"; // Повертаємо прокрутку
  };

  // Наступне фото
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Щоб клік не закривав модальне вікно
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  // Попереднє фото
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  return (
    <>
      {/* 1. Сітка прев'ю на сторінці */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div 
            key={item.id} 
            onClick={() => openModal(index)}
            className={`relative w-full ${aspectClass} bg-cloud rounded-card overflow-hidden cursor-pointer group border border-line`}
          >
            <Image 
              src={item.src} 
              alt={item.alt} 
              fill 
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* 2. Повноекранне модальне вікно (Lightbox) */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8"
          onClick={closeModal} // Закриваємо при кліку на темний фон
        >
          {/* Кнопка закриття */}
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:text-gray-300 z-50 p-2"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Кнопка Назад */}
          <button 
            onClick={prevImage}
            className="absolute left-4 sm:left-10 text-white hover:text-gray-300 z-50 p-2 bg-black/50 rounded-full"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          {/* Збільшене зображення */}
          <div className="relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center pointer-events-none">
             <Image 
                src={items[currentIndex].src} 
                alt={items[currentIndex].alt} 
                fill 
                className="object-contain"
                unoptimized // Для зовнішніх або тестових картинок
             />
          </div>

          {/* Кнопка Вперед */}
          <button 
            onClick={nextImage}
            className="absolute right-4 sm:right-10 text-white hover:text-gray-300 z-50 p-2 bg-black/50 rounded-full"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      )}
    </>
  );
}