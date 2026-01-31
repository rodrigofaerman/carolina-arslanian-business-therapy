"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"default" | "elegant">("elegant");

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "elegant") {
      setTheme("elegant");
    } else {
      setTheme("default");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "elegant" ? "default" : "elegant";
    setTheme(newTheme);

    if (newTheme === "elegant") {
      document.documentElement.setAttribute("data-theme", "elegant");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-24 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] transition-all shadow-lg"
      aria-label="Alternar tema"
    >
      <span className="text-lg">{theme === "elegant" ? "🎨" : "💎"}</span>
      <span className="hidden sm:inline">
        {theme === "elegant" ? "Tema Elegant" : "Tema Navy"}
      </span>
    </button>
  );
}
