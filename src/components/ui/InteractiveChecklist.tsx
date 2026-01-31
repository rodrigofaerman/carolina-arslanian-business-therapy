"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useChecklist } from "@/hooks/useChecklist";
import { trackChecklistComplete } from "@/lib/analytics";
import { useEffect, useRef } from "react";

interface Threshold {
  count: number;
  message: string;
}

interface InteractiveChecklistProps {
  items: string[];
  thresholds?: Threshold[];
  className?: string;
}

export default function InteractiveChecklist({
  items,
  thresholds = [{ count: 3, message: "Se você marcou 3 ou mais, algo precisa mudar." }],
  className = "",
}: InteractiveChecklistProps) {
  const { count, toggle, isChecked } = useChecklist();
  const prevCountRef = useRef(count);

  // Track when threshold is reached
  useEffect(() => {
    if (count >= 3 && prevCountRef.current < 3) {
      trackChecklistComplete(count);
    }
    prevCountRef.current = count;
  }, [count]);

  // Get active threshold message
  const activeThreshold = thresholds
    .filter((t) => count >= t.count)
    .sort((a, b) => b.count - a.count)[0];

  return (
    <div className={className}>
      {/* Checklist items */}
      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.button
            key={index}
            type="button"
            role="checkbox"
            aria-checked={isChecked(index)}
            onClick={() => toggle(index)}
            className={`
              w-full flex items-start gap-4 p-4 rounded-[var(--radius-card)] border text-left transition-all cursor-pointer
              ${
                isChecked(index)
                  ? "bg-[var(--color-accent-subtle)] border-[var(--color-accent)]/50"
                  : "bg-[var(--color-bg-secondary)] border-[var(--color-border)] hover:border-[var(--color-border-hover)]"
              }
            `}
            whileTap={{ scale: 0.99 }}
          >
            {/* Checkbox */}
            <motion.div
              className={`
                flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center
                ${
                  isChecked(index)
                    ? "bg-[var(--color-accent)] border-[var(--color-accent)]"
                    : "border-[var(--color-text-muted)]"
                }
              `}
              animate={isChecked(index) ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.2 }}
            >
              <AnimatePresence>
                {isChecked(index) && (
                  <motion.svg
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="w-4 h-4 text-[#0f172a]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Label */}
            <span
              className={`
                text-base leading-relaxed
                ${
                  isChecked(index)
                    ? "text-[var(--color-text-primary)]"
                    : "text-[var(--color-text-secondary)]"
                }
              `}
            >
              {item}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Counter */}
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-[var(--color-text-muted)]">
          {count} de {items.length} selecionados
        </p>
      </div>

      {/* Threshold message */}
      <AnimatePresence>
        {activeThreshold && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 p-4 rounded-[var(--radius-card)] bg-[var(--color-accent-subtle)] border border-[var(--color-accent)]/30"
          >
            <p className="text-[var(--color-accent)] font-medium">
              {activeThreshold.message}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
