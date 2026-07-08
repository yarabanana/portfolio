// src/app/layout.tsx
import { Onest } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script"; // <-- ДОДАЛИ: спеціальний компонент для скриптів
import "./globals.css";

// Налаштовуємо шрифт Onest для української та англійської мов
const onest = Onest({
  subsets: ["latin", "cyrillic"],
  variable: "--font-onest", // Створюємо змінну для Tailwind
  display: "swap",
});

// Базові SEO-налаштування для браузера
export const metadata: Metadata = {
  title: "Ярослав Ісаєв | Портфоліо",
  description: "Спеціаліст із комунікацій, маркетингу та брендингу",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Додаємо змінну шрифту в тег <html> та вмикаємо плавну прокрутку (scroll-smooth)
    <html lang="uk" className={`${onest.variable} scroll-smooth`}>
      <body className="antialiased bg-white text-ink font-sans">
        {children}

        {/* ДОДАЛИ: Google Analytics з твоїм ідентифікатором */}
        <Script 
          strategy="afterInteractive" 
          src="https://www.googletagmanager.com/gtag/js?id=G-TN9J6FWHWW" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TN9J6FWHWW');
          `}
        </Script>
      </body>
    </html>
  );
}