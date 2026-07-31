// src/app/photo/page.tsx
import Link from "next/link";
import { Metadata } from "next";
import Gallery from "@/components/ui/Gallery";

export const metadata: Metadata = {
  title: "Репортажна фотографія",
};

// Твоя база фотографій
const photoProjects = [
  { id: 1, src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1000", alt: "Фото 1" },
  { id: 2, src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000", alt: "Фото 2" },
];

export default function PhotoPortfolioPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <div className="max-w-content mx-auto px-6 lg:px-10 py-16 flex-grow w-full">
        
        {/* Кнопка повернення */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-mist hover:text-ink font-medium transition-colors">
            <span>←</span> На головну
          </Link>
        </div>

        {/* Заголовок */}
        <h1 className="text-h2 font-bold text-ink mb-12">Репортажна фотографія</h1>

        {/* Викликаємо галерею. aspect-[4/3] зробить прев'ю прямокутними */}
        <Gallery items={photoProjects} aspectClass="aspect-[4/3]" />

      </div>

      {/* Футер */}
      <footer className="w-full py-6 mt-auto border-t border-line bg-white">
        <div className="text-center text-xs text-gray-400">
          <Link href="/" className="hover:text-gray-600 transition-colors inline-block">
            Ярослав Ісаєв - комунікаційник
          </Link>
        </div>
      </footer>
    </main>
  );
}