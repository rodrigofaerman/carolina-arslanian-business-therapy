"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { NEXT_STEPS } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";

export default function NextSteps() {
  return (
    <section id="proximos-passos" className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader title={NEXT_STEPS.title} />

        {/* Timeline with gold line */}
        <motion.div
          className="relative border-l-2 border-[var(--color-accent)] pl-8 ml-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {NEXT_STEPS.steps.map((step) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              className="mb-10 last:mb-0 relative"
            >
              {/* Number circle */}
              <div className="absolute -left-12 w-8 h-8 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-[#0f172a] font-bold">
                {step.number}
              </div>

              <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
                ✅ PASSO {step.number}: {step.title}
              </h4>
              <p className="text-[var(--color-text-muted)]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Start info */}
        <motion.p
          className="mt-12 text-center text-lg font-bold text-[var(--color-accent)]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {NEXT_STEPS.startInfo}
        </motion.p>
      </div>
    </section>
  );
}
