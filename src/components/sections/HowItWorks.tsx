"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { HOW_IT_WORKS } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

export default function HowItWorks() {
  const formatItems = [
    { icon: "✔", text: HOW_IT_WORKS.format.totalMeetings },
    { icon: "✔", text: HOW_IT_WORKS.format.frequency },
    { icon: "✔", text: HOW_IT_WORKS.format.hybrid },
    { icon: "✔", text: HOW_IT_WORKS.format.boutique },
    { icon: "✔", text: HOW_IT_WORKS.format.whatsapp },
    { icon: "✔", text: HOW_IT_WORKS.format.deliverables },
    { icon: "✔", text: HOW_IT_WORKS.format.scorecard },
  ];

  return (
    <section id="como-funciona" className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title={HOW_IT_WORKS.title}
          subtitle={HOW_IT_WORKS.subtitle}
        />

        {/* Format Summary */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <Card className="bg-[var(--color-bg-primary)]">
            <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-6 text-center">
              Formato da Mentoria
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {formatItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-[var(--color-text-secondary)]"
                >
                  <span className="text-[var(--color-accent)] mt-0.5">{item.icon}</span>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/30 -translate-x-1/2" />

          {HOW_IT_WORKS.timeline.map((phase, index) => (
            <motion.div
              key={phase.phase}
              variants={staggerItem}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[var(--color-accent)] rounded-full -translate-x-1/2 mt-8" />

              {/* Content */}
              <div className={`md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <Card hover={false}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-bold text-[var(--color-accent)]">
                      {phase.phase}
                    </span>
                    <span className="text-xs text-[var(--color-text-muted)]">
                      {phase.weeks}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
                    {phase.title}
                  </h3>

                  <p className="text-[var(--color-text-muted)] mb-4">
                    {phase.description}
                  </p>

                  <ul className="space-y-2">
                    {phase.includes.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]"
                      >
                        <span className="text-[var(--color-accent)]">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </motion.div>

        {/* Start Date */}
        <motion.div
          className="mt-16 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <Card gold className="max-w-xl mx-auto">
            <p className="text-xl font-bold">
              {HOW_IT_WORKS.startDate}
            </p>
            <p className="text-sm opacity-80 mt-2">
              {HOW_IT_WORKS.nextCohort}
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
