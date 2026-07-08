"use client";

export default function Footer() {
  // Автоматично беремо поточний рік, щоб не змінювати його вручну
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-white border-t border-line text-center">
      <p className="text-caption text-mist">
        © {currentYear} Ярослав Ісаєв. Усі права захищені.
      </p>
    </footer>
  );
}