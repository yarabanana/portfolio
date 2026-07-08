"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navItems, navCta, siteConfig } from "@/data/content";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`no-print fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-card-title font-semibold text-ink tracking-tight"
        >
          {siteConfig.logoName.ua}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="relative text-body text-graphite hover:text-ink transition-colors group"
            >
              {item.label.ua}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-ink transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.cvPath}
            download
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-button bg-ink text-white text-caption font-medium hover:bg-accent-dark transition-colors"
          >
            {navCta.ua}
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Меню"
          >
            <span
              className={`block w-6 h-px bg-ink transition-transform ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-ink transition-opacity ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-ink transition-transform ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-line px-6 py-6 flex flex-col gap-5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-left text-body text-graphite hover:text-ink transition-colors"
            >
              {item.label.ua}
            </button>
          ))}
          <a
            href={siteConfig.cvPath}
            download
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-button bg-ink text-white text-caption font-medium"
          >
            {navCta.ua}
          </a>
        </div>
      )}
    </header>
  );
}