"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SECTIONS } from "@/lib/constants";

export default function SectionDots() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3"
      aria-label="Navegação por seções"
    >
      {SECTIONS.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="group flex items-center gap-3 justify-end"
          aria-label={label}
        >
          <span className="text-xs text-[var(--color-text-muted)] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {label}
          </span>
          <motion.span
            className="block rounded-full transition-colors"
            animate={{
              width: active === id ? 12 : 8,
              height: active === id ? 12 : 8,
              backgroundColor:
                active === id
                  ? "var(--color-accent)"
                  : "var(--color-bg-elevated)",
            }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.3 }}
          />
        </a>
      ))}
    </nav>
  );
}
