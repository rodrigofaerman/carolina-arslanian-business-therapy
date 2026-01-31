"use client";

import { motion } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";

interface CountdownTimerProps {
  deadline: string;
  compact?: boolean;
  labels?: {
    days?: string;
    hours?: string;
    minutes?: string;
    seconds?: string;
  };
  className?: string;
  onExpire?: () => void;
}

const defaultLabels = {
  days: "dias",
  hours: "horas",
  minutes: "min",
  seconds: "seg",
};

export default function CountdownTimer({
  deadline,
  compact = false,
  labels = defaultLabels,
  className = "",
}: CountdownTimerProps) {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(deadline);

  const mergedLabels = { ...defaultLabels, ...labels };

  if (isExpired) {
    return (
      <div className={`text-[var(--color-accent)] font-semibold ${className}`}>
        Encerrado
      </div>
    );
  }

  // Compact mode for UrgencyBar
  if (compact) {
    return (
      <div className={`flex items-center gap-1 text-sm font-mono ${className}`}>
        <span className="text-[var(--color-accent)] font-semibold">
          {String(days).padStart(2, "0")}d
        </span>
        <span className="text-[var(--color-text-muted)]">:</span>
        <span className="text-[var(--color-accent)] font-semibold">
          {String(hours).padStart(2, "0")}h
        </span>
        <span className="text-[var(--color-text-muted)]">:</span>
        <span className="text-[var(--color-accent)] font-semibold">
          {String(minutes).padStart(2, "0")}m
        </span>
        <span className="text-[var(--color-text-muted)]">:</span>
        <span className="text-[var(--color-accent)] font-semibold">
          {String(seconds).padStart(2, "0")}s
        </span>
      </div>
    );
  }

  // Full mode
  const segments = [
    { value: days, label: mergedLabels.days },
    { value: hours, label: mergedLabels.hours },
    { value: minutes, label: mergedLabels.minutes },
    { value: seconds, label: mergedLabels.seconds },
  ];

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      {segments.map((segment, index) => (
        <div key={segment.label} className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <motion.div
              key={segment.value}
              initial={{ opacity: 0.5, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg px-4 py-3 min-w-[70px]"
            >
              <span className="text-3xl md:text-4xl font-bold text-[var(--color-accent)] font-mono">
                {String(segment.value).padStart(2, "0")}
              </span>
            </motion.div>
            <span className="mt-2 text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
              {segment.label}
            </span>
          </div>

          {/* Separator */}
          {index < segments.length - 1 && (
            <span className="text-2xl text-[var(--color-text-muted)] mb-6">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
