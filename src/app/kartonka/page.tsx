// src/app/kartonka/page.tsx
import Image from "next/image";

// ТВОЯ БАЗА КАРТИНОК
// Для кожної картки ми чітко розділяємо легке прев'ю та важкий оригінал
const kartonkas = [
  { 
    id: 1, 
    preview: "kartonka-1-preview.jpg", // легка картинка для швидкого завантаження сайту
    downloadFile: "kartonka-1.png"     // оригінальний PNG на прозорому фоні
  },
  { 
    id: 2, 
    preview: "kartonka-2-preview.jpg", 
    downloadFile: "kartonka-2.png" 
  },
  { 
    id: 3, 
    preview: "kartonka-3-preview.jpg", 
    downloadFile: "kartonka-3.png" 
  },
];

export default function KartonkaPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      
      {/* Головний блок із галереєю */}
      <div className="max-w-content mx-auto px-6 lg:px-10 py-16 flex-grow flex flex-col items-center justify-center">
        
        <div className="flex flex-wrap justify-center gap-8">
          
          {kartonkas.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-card border border-line shadow-sm flex flex-col items-center">
              
              {/* Блок з картинкою-прев'ю (візуальна частина) */}
              <div className="relative w-64 h-64 mb-8 bg-cloud rounded-lg overflow-hidden flex items-center justify-center border border-dashed border-line">
                <Image 
                  src={`/assets/images/${item.preview}`} // Відображаємо надлегкий JPEG або WebP
                  alt={`Протестний плакат ${item.id}`}
                  fill 
                  priority // Пріоритет завантаження прев'ю для миттєвого відображення
                  sizes="256px"
                  className="object-contain p-4"
                />
              </div>
              
              {/* Кнопка завантаження оригіналу */}
              <a 
                href={`/assets/images/${item.downloadFile}`} // Посилання веде на оригінальний PNG
                download={item.downloadFile} // Файл збережеться під своїм оригінальним ім'я kantonka-X.png
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

      {/* Супер-мінімалістичний футер */}
      <footer className="w-full py-6 mt-auto">
        <div className="text-center text-xs text-gray-400">
          <a href="/" className="hover:text-gray-600 transition-colors inline-block">
            Ярослав Ісаєв - комунікаційник
          </a>
        </div>
      </footer>

    </main>
  );
}