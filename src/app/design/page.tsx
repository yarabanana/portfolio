// src/app/design/page.tsx
import Link from "next/link";
import { Metadata } from "next";
import Gallery from "@/components/ui/Gallery";

export const metadata: Metadata = {
  title: "Дизайн-портфоліо",
};

// Твоя база дизайн-проєктів
const designProjects = [
  { id: 1, src: "https://images.unsplash.com/photo-1626785776929-b76e1f0e5318?q=80&w=1000", alt: "Дизайн 1" },
  { id: 2, src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000", alt: "Дизайн 2" },
  { id: 3, src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000", alt: "Дизайн 3" },
];

export default function DesignPortfolioPage() {
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
        <h1 className="text-h2 font-bold text-ink mb-12">Дизайн та Поліграфія</h1>

        {/* Викликаємо галерею. aspect-square зробить прев'ю квадратними */}
        <Gallery items={designProjects} aspectClass="aspect-square" />

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