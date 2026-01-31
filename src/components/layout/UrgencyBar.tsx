"use client";

import { useCallback, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { URGENCY } from "@/lib/constants";
import Button from "@/components/ui/Button";

const STORAGE_KEY = "urgency-bar-dismissed";

// External store for dismissed state
function createDismissedStore() {
  let dismissed = false;
  const listeners = new Set<() => void>();

  return {
    subscribe: (listener: () => void) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    getSnapshot: () => {
      if (typeof window === "undefined") return true;
      return sessionStorage.getItem(STORAGE_KEY) === "true" || dismissed;
    },
    getServerSnapshot: () => true,
    dismiss: () => {
      dismissed = true;
      if (typeof window !== "undefined") {
        sessionStorage.setItem(STORAGE_KEY, "true");
      }
      listeners.forEach((listener) => listener());
    },
  };
}

const dismissedStore = createDismissedStore();

// External store for visibility based on scroll
function createVisibilityStore() {
  let visible = false;
  let observer: IntersectionObserver | null = null;
  const listeners = new Set<() => void>();

  const setupObserver = () => {
    if (typeof window === "undefined" || observer) return;

    // Defer to next frame to ensure hero exists
    requestAnimationFrame(() => {
      const heroSection = document.getElementById("hero");
      if (!heroSection) return;

      observer = new IntersectionObserver(
        ([entry]) => {
          const newVisible = !entry.isIntersecting;
          if (newVisible !== visible) {
            visible = newVisible;
            listeners.forEach((listener) => listener());
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(heroSection);
    });
  };

  return {
    subscribe: (listener: () => void) => {
      listeners.add(listener);
      setupObserver();
      return () => {
        listeners.delete(listener);
        if (listeners.size === 0 && observer) {
          observer.disconnect();
          observer = null;
        }
      };
    },
    getSnapshot: () => visible,
    getServerSnapshot: () => false,
  };
}

const visibilityStore = createVisibilityStore();

export default function UrgencyBar() {
  const dismissed = useSyncExternalStore(
    dismissedStore.subscribe,
    dismissedStore.getSnapshot,
    dismissedStore.getServerSnapshot
  );

  const visible = useSyncExternalStore(
    visibilityStore.subscribe,
    visibilityStore.getSnapshot,
    visibilityStore.getServerSnapshot
  );

  const handleDismiss = useCallback(() => {
    dismissedStore.dismiss();
  }, []);

  const remainingVacancies = URGENCY.totalVacancies - URGENCY.filledVacancies;

  // Don't render if dismissed
  const shouldShow = visible && !dismissed;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-[60] bg-[var(--color-bg-primary)]/95 backdrop-blur-sm border-b border-[var(--color-accent)]/30"
        >
          <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
            {/* Content */}
            <div className="flex items-center gap-4 flex-1 min-w-0">
              {/* Countdown placeholder - will be replaced with actual CountdownTimer */}
              <div className="hidden sm:flex items-center gap-2 text-sm font-medium text-[var(--color-accent)]">
                <span className="bg-[var(--color-accent-subtle)] px-2 py-1 rounded">
                  Oferta expira em breve
                </span>
              </div>

              {/* Vacancy text */}
              <span className="text-sm text-[var(--color-text-muted)] truncate">
                {remainingVacancies} vagas restantes
              </span>
            </div>

            {/* CTA */}
            <Button href="#investimento" size="sm" className="shrink-0">
              Garantir Vaga
            </Button>

            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="p-1 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors cursor-pointer"
              aria-label="Fechar barra de urgência"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
