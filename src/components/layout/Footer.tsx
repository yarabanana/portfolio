// src/components/layout/Footer.tsx
"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 border-t border-line bg-white">
      <div className="max-w-content mx-auto px-6 lg:px-10 text-center">
        {/* Текст зроблено маленьким (text-xs) та блідо-сірим (text-mist або text-gray-400) */}
        <p className="text-xs text-mist font-medium">
          © {currentYear} Ярослав Ісаєв. Усі права захищені.
        </p>
      </div>
    </footer>
  );
}