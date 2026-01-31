"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { COMPARISON } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

export default function Comparison() {
  return (
    <section id="comparacao" className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader title={COMPARISON.title} />

        {/* Comparison Table */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {COMPARISON.columns.map((col) => (
            <motion.div key={col.type} variants={staggerItem}>
              <Card
                className={`h-full relative ${col.highlight ? "border-[var(--color-accent)] border-2" : ""}`}
                gold={col.highlight}
              >
                {col.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-accent)] text-[#0f172a] px-4 py-1 rounded-full text-sm font-bold z-10">
                    RECOMENDADO
                  </div>
                )}

                <h3 className={`text-xl font-bold mb-6 ${col.highlight ? "" : "text-[var(--color-text-primary)]"}`}>
                  {col.title}
                </h3>

                <div className="space-y-4">
                  <div>
                    <p className={`text-xs uppercase tracking-wide mb-1 ${col.highlight ? "opacity-70" : "text-[var(--color-text-muted)]"}`}>Foco</p>
                    <p className={`text-sm ${col.highlight ? "font-semibold" : "text-[var(--color-text-secondary)]"}`}>
                      {col.focus}
                    </p>
                  </div>

                  <div>
                    <p className={`text-xs uppercase tracking-wide mb-1 ${col.highlight ? "opacity-70" : "text-[var(--color-text-muted)]"}`}>Duração</p>
                    <p className={`text-sm ${col.highlight ? "font-semibold" : "text-[var(--color-text-secondary)]"}`}>
                      {col.duration}
                    </p>
                  </div>

                  <div>
                    <p className={`text-xs uppercase tracking-wide mb-1 ${col.highlight ? "opacity-70" : "text-[var(--color-text-muted)]"}`}>Aplicação</p>
                    <p className={`text-sm ${col.highlight ? "font-semibold" : "text-[var(--color-text-secondary)]"}`}>
                      {col.application}
                    </p>
                  </div>

                  <div>
                    <p className={`text-xs uppercase tracking-wide mb-1 ${col.highlight ? "opacity-70" : "text-[var(--color-text-muted)]"}`}>Formato</p>
                    <p className={`text-sm ${col.highlight ? "font-semibold" : "text-[var(--color-text-secondary)]"}`}>
                      {col.format}
                    </p>
                  </div>

                  <div>
                    <p className={`text-xs uppercase tracking-wide mb-1 ${col.highlight ? "opacity-70" : "text-[var(--color-text-muted)]"}`}>Investimento</p>
                    <p className={`text-sm ${col.highlight ? "font-semibold" : "text-[var(--color-text-secondary)]"}`}>
                      {col.investment}
                    </p>
                  </div>

                  <div className={`pt-4 border-t ${col.highlight ? "border-[#0f172a]/20" : "border-[var(--color-border)]"}`}>
                    <p className={`text-xs uppercase tracking-wide mb-1 ${col.highlight ? "opacity-70" : "text-[var(--color-text-muted)]"}`}>ROI</p>
                    <p className={`text-lg font-bold ${col.highlight ? "text-[#166534]" : "text-[var(--color-text-muted)]"}`}>
                      {col.roi}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Value Breakdown */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <Card gold className="text-center">
            <h3 className="text-2xl font-bold mb-4">{COMPARISON.valueBreakdown.title}</h3>
            <p className="text-3xl font-bold mb-2">
              {COMPARISON.valueBreakdown.calculation}
            </p>
            <p className="text-lg opacity-90 mb-6">
              {COMPARISON.valueBreakdown.comparison}
            </p>

            <p className="font-semibold mb-4">Mas você recebe:</p>
            <ul className="text-left max-w-md mx-auto space-y-2">
              {COMPARISON.valueBreakdown.includes.map((item, index) => (
                <li key={index} className="flex items-start gap-2 opacity-90">
                  <span className="text-[#166534]">✅</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
