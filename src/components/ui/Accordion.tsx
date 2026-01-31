"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  onExpand?: (question: string) => void;
}

export default function Accordion({ items, onExpand }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number, question: string) => {
    const isOpen = openIndex === index;
    setOpenIndex(isOpen ? null : index);
    if (!isOpen && onExpand) {
      onExpand(question);
    }
  };

  return (
    <div className="space-y-3" role="list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `accordion-panel-${index}`;
        const buttonId = `accordion-button-${index}`;

        return (
          <div
            key={index}
            className="rounded-[var(--radius-card)] border border-[var(--color-border)] overflow-hidden"
            role="listitem"
          >
            <button
              id={buttonId}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-[var(--color-bg-secondary)] transition-colors cursor-pointer"
              onClick={() => handleToggle(index, item.question)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="text-lg font-medium text-[var(--color-text-primary)] pr-8">
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-[var(--color-accent)] text-2xl flex-shrink-0 leading-none"
                aria-hidden="true"
              >
                +
              </motion.span>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="px-6 pb-6 text-[var(--color-text-muted)] leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
