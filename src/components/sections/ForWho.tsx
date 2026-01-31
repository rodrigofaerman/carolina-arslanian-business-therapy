"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { FOR_WHO } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

export default function ForWho() {
  return (
    <section id="para-quem" className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader title={FOR_WHO.title} />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ideal Profile */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <Card className="h-full border-[var(--color-accent)]/30">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">✅</span>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                  {FOR_WHO.idealProfile.title}
                </h3>
              </div>

              {/* Cargo Section */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wide mb-3">
                  {FOR_WHO.idealProfile.cargoSection.title}
                </h4>
                <motion.ul
                  className="space-y-2"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                >
                  {FOR_WHO.idealProfile.cargoSection.items.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={staggerItem}
                      className="flex items-start gap-3 text-[var(--color-text-secondary)]"
                    >
                      <span className="text-[var(--color-success)] mt-0.5">✓</span>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* Moment Section */}
              <div>
                <h4 className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wide mb-3">
                  {FOR_WHO.idealProfile.momentSection.title}
                </h4>
                <motion.ul
                  className="space-y-2"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                >
                  {FOR_WHO.idealProfile.momentSection.items.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={staggerItem}
                      className="flex items-start gap-3 text-[var(--color-text-secondary)]"
                    >
                      <span className="text-[var(--color-success)] mt-0.5">✓</span>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </Card>
          </motion.div>

          {/* Not For */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full bg-[var(--color-bg-primary)]">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">❌</span>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                  {FOR_WHO.notFor.title}
                </h3>
              </div>
              <motion.ul
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
              >
                {FOR_WHO.notFor.items.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={staggerItem}
                    className="flex items-start gap-3 text-[var(--color-text-muted)]"
                  >
                    <span className="text-[var(--color-danger)] mt-0.5">✗</span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
