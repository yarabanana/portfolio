// src/app/kartonka/page.tsx
import Image from "next/image";

// ТВОЯ БАЗА КАРТИНОК
const kartonkas = [
  { id: 1, filename: "kartonka-1.png" },
  { id: 2, filename: "kartonka-2.png" },
  { id: 3, filename: "kartonka-3.png" },
];

export default function KartonkaPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      
      {/* Головний блок із галереєю */}
      <div className="max-w-content mx-auto px-6 lg:px-10 py-16 flex-grow flex flex-col items-center justify-center">
        
        <div className="flex flex-wrap justify-center gap-8">
          
          {/* Програма виводить усі картинки з бази */}
          {kartonkas.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-card border border-line shadow-sm flex flex-col items-center">
              
              {/* Блок з картинкою */}
              <div className="relative w-64 h-64 mb-8 bg-cloud rounded-lg overflow-hidden flex items-center justify-center border border-dashed border-line">
                <Image 
                  src={`/assets/images/${item.filename}`}
                  alt={`Протестний плакат ${item.id}`}
                  fill 
                  className="object-contain p-4"
                />
              </div>
              
              {/* Кнопка завантаження. Тепер завантажує файл під його оригінальною назвою */}
              <a 
                href={`/assets/images/${item.filename}`}
                download={item.filename}
                className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-white text-sm font-medium rounded-button hover:bg-graphite transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Завантажити PNG
              </a>
            </div>
          ))}

        </div>
      </div>

      {/* Оновлений футер: текст є активним посиланням на головну сторінку */}
      <footer className="w-full py-8 border-t border-line bg-white mt-auto">
        <div className="text-center text-sm font-medium text-mist">
          <a href="/" className="hover:text-ink transition-colors underline underline-offset-4 inline-block">
            Ярослав Ісаєв - комунікаційник
          </a>
        </div>
      </footer>

    </main>
  );
}