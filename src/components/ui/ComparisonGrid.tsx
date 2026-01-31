"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

interface Column {
  name: string;
  highlighted?: boolean;
  values: Record<string, string>;
}

interface ComparisonGridProps {
  features: string[];
  columns: Column[];
  className?: string;
}

export default function ComparisonGrid({
  features,
  columns,
  className = "",
}: ComparisonGridProps) {
  return (
    <div className={className}>
      {/* Desktop Table */}
      <motion.div
        className="hidden md:block overflow-x-auto"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left p-4 text-[var(--color-text-muted)] font-medium">
                Característica
              </th>
              {columns.map((column) => (
                <th
                  key={column.name}
                  className={`
                    p-4 text-center font-semibold
                    ${
                      column.highlighted
                        ? "text-[var(--color-accent)] bg-[var(--color-accent-subtle)] border-2 border-[var(--color-accent)] rounded-t-lg"
                        : "text-[var(--color-text-primary)]"
                    }
                  `}
                >
                  {column.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr
                key={feature}
                className={
                  index % 2 === 0 ? "bg-[var(--color-bg-secondary)]/50" : ""
                }
              >
                <td className="p-4 text-[var(--color-text-secondary)] border-t border-[var(--color-border)]">
                  {feature}
                </td>
                {columns.map((column) => (
                  <td
                    key={`${column.name}-${feature}`}
                    className={`
                      p-4 text-center border-t border-[var(--color-border)]
                      ${
                        column.highlighted
                          ? "bg-[var(--color-accent-subtle)]/50 border-x-2 border-[var(--color-accent)] text-[var(--color-text-primary)]"
                          : "text-[var(--color-text-muted)]"
                      }
                      ${
                        index === features.length - 1 && column.highlighted
                          ? "rounded-b-lg border-b-2"
                          : ""
                      }
                    `}
                  >
                    {column.values[feature] || "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Mobile Cards */}
      <motion.div
        className="md:hidden space-y-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {columns.map((column) => (
          <motion.div
            key={column.name}
            variants={staggerItem}
            className={`
              rounded-[var(--radius-card)] p-6
              ${
                column.highlighted
                  ? "bg-[var(--color-accent-subtle)] border-2 border-[var(--color-accent)]"
                  : "bg-[var(--color-bg-secondary)] border border-[var(--color-border)]"
              }
            `}
          >
            <h3
              className={`
                text-xl font-semibold mb-4
                ${
                  column.highlighted
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-text-primary)]"
                }
              `}
            >
              {column.name}
              {column.highlighted && (
                <span className="ml-2 text-xs font-normal px-2 py-1 bg-[var(--color-accent)] text-[#0f172a] rounded-full">
                  Recomendado
                </span>
              )}
            </h3>

            <dl className="space-y-3">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex justify-between items-center py-2 border-b border-[var(--color-border)]/50 last:border-0"
                >
                  <dt className="text-sm text-[var(--color-text-muted)]">
                    {feature}
                  </dt>
                  <dd
                    className={`
                      text-sm font-medium
                      ${
                        column.highlighted
                          ? "text-[var(--color-text-primary)]"
                          : "text-[var(--color-text-secondary)]"
                      }
                    `}
                  >
                    {column.values[feature] || "—"}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
