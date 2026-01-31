"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { URGENCY } from "@/lib/constants";
import CountdownTimer from "@/components/ui/CountdownTimer";

export default function Urgency() {
  const remainingVacancies = URGENCY.totalVacancies - URGENCY.filledVacancies;

  return (
    <section id="urgencia" className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.p
          className="text-lg text-[var(--color-text-muted)] mb-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {URGENCY.title}
        </motion.p>

        <motion.div
          className="mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <CountdownTimer deadline={URGENCY.deadline} />
        </motion.div>

        {/* Vacancy progress */}
        <motion.div
          className="mb-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="flex justify-center gap-2 mb-4">
            {Array.from({ length: URGENCY.totalVacancies }).map((_, i) => (
              <motion.div
                key={i}
                className={`w-6 h-6 rounded-full ${
                  i < URGENCY.filledVacancies
                    ? "bg-[var(--color-accent)]"
                    : "bg-[var(--color-bg-elevated)] border border-[var(--color-border)]"
                }`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              />
            ))}
          </div>
          <p className="text-xl font-bold text-[var(--color-text-primary)]">
            {URGENCY.filledVacancies} de {URGENCY.totalVacancies} vagas preenchidas
          </p>
          <p className="text-[var(--color-accent)] font-semibold">
            Apenas {remainingVacancies} vagas restantes!
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <p className="text-[var(--color-text-muted)] mb-4">
            {URGENCY.vacancyText}
          </p>
          <p className="text-sm text-[var(--color-text-muted)]">
            {URGENCY.nextCohort}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
