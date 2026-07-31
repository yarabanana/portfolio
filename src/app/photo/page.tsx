// src/app/photo/page.tsx
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Репортажна фотографія | Ярослав Ісаєв",
};

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

        {/* Тут згодом буде сітка з твоїми репортажними фото */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="aspect-[4/3] bg-cloud rounded-card border border-dashed border-line flex items-center justify-center text-mist text-sm">
            Місце для фото 1
          </div>
          <div className="aspect-[4/3] bg-cloud rounded-card border border-dashed border-line flex items-center justify-center text-mist text-sm">
            Місце для фото 2
          </div>
        </div>

      </div>

      {/* Футер */}
      <footer className="w-full py-6 mt-auto border-t border-line">
        <div className="text-center text-xs text-gray-400">
          <Link href="/" className="hover:text-gray-600 transition-colors inline-block">
            Ярослав Ісаєв - комунікаційник
          </Link>
        </div>
      </footer>
    </main>
  );
}