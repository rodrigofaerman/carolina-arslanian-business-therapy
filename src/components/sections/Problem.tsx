"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { PROBLEM } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import InteractiveChecklist from "@/components/ui/InteractiveChecklist";

export default function Problem() {
  return (
    <section id="problema" className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          title={PROBLEM.title}
          subtitle={PROBLEM.subtitle}
        />

        {/* Narrative */}
        <motion.div
          className="mb-12 space-y-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {PROBLEM.narrative.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={staggerItem}
              className={`text-lg text-center ${
                paragraph.startsWith("**")
                  ? "font-bold text-[var(--color-text-primary)]"
                  : "text-[var(--color-text-secondary)]"
              }`}
              dangerouslySetInnerHTML={{
                __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[var(--color-text-primary)]">$1</strong>')
              }}
            />
          ))}
        </motion.div>

        {/* Checklist Title */}
        <motion.h3
          className="text-xl font-bold text-center text-[var(--color-accent)] mb-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {PROBLEM.checklistTitle}
        </motion.h3>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <InteractiveChecklist
            items={PROBLEM.checklist}
            thresholds={[
              {
                count: 3,
                message: PROBLEM.thresholdMessage,
              },
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
}
