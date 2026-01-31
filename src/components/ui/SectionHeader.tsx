"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  highlight,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <motion.div
      className={`mb-16 ${alignClass} ${className}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] font-bold text-[var(--color-text-primary)]">
        {title}
        {highlight && (
          <span className="text-gradient-gold block mt-1">{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-6 text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto font-light">
          {subtitle}
        </p>
      )}
      <div className={`gold-line w-24 mt-8 ${align === "center" ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
