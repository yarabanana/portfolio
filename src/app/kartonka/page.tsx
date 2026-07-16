// src/app/kartonka/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function KartonkaPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-content mx-auto px-6 lg:px-10 text-center">
        
        {/* Кнопка повернення на головну сторінку */}
        <div className="mb-12 text-left">
          <Link href="/" className="text-mist hover:text-ink font-medium transition-colors">
            ← Повернутися на головну
          </Link>
        </div>

        <h1 className="text-h2 font-bold text-ink mb-12">
          Галерея: Картонка
        </h1>
        
        {/* Контейнер для нашої майбутньої сітки галереї */}
        <div className="flex flex-wrap justify-center gap-8">
          
          {/* Картка першої картинки */}
          <div className="bg-white p-8 rounded-card border border-line shadow-sm flex flex-col items-center">
            
            {/* Блок з картинкою */}
            <div className="relative w-64 h-64 mb-8 bg-cloud rounded-lg overflow-hidden flex items-center justify-center border border-dashed border-line">
              <Image 
                src="/assets/images/my-kartonka.png" // Шлях до твоєї картинки
                alt="Картонка" 
                fill 
                className="object-contain p-4" // Зберігає пропорції PNG
              />
            </div>
            
            {/* Кнопка завантаження */}
            <a 
              href="/assets/images/my-kartonka.png" 
              download="kartonka-isaiev.png" // Назва файлу, з якою він збережеться на комп'ютер користувача
              className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-white text-sm font-medium rounded-button hover:bg-graphite transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Завантажити PNG
            </a>
          </div>

          {/* У майбутньому ми просто скопіюємо цей блок "Картка" для нових картинок */}

        </div>
      </div>
    </main>
  );
}