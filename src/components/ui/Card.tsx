"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/animations";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gold?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
  gold = false,
}: CardProps) {
  return (
    <motion.div
      className={`
        rounded-[var(--radius-card)] p-8
        ${gold
          ? "bg-[var(--color-accent)] text-[#0f172a] shadow-[var(--shadow-gold)]"
          : "bg-[var(--color-bg-secondary)] border border-[var(--color-border)]"
        }
        ${hover ? "hover:border-[var(--color-border-hover)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300" : ""}
        ${className}
      `}
      variants={staggerItem}
      whileHover={hover ? { y: -4 } : undefined}
    >
      {children}
    </motion.div>
  );
}
