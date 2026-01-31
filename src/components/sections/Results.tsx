"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { RESULTS } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Results() {
  return (
    <section id="resultados" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title={RESULTS.title}
          subtitle={RESULTS.subtitle}
        />

        {/* Science stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {RESULTS.scienceStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="text-center p-6 rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)]"
            >
              <div className="text-4xl font-bold text-[var(--color-accent)] mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-[var(--color-text-muted)]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Science source */}
        <motion.p
          className="text-center text-sm text-[var(--color-text-muted)] mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {RESULTS.scienceSource}
        </motion.p>

        {/* Metrics before/after */}
        <motion.div
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] text-center mb-8">
            {RESULTS.metricsTitle}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {RESULTS.metrics.map((metric, index) => (
              <Card key={index} hover={false} className="text-center">
                <div className="text-2xl mb-2">{metric.emoji}</div>
                <p className="text-sm text-[var(--color-text-muted)] mb-4 font-semibold">
                  {metric.label}
                </p>
                <div className="flex items-center justify-center gap-2">
                  <div>
                    <p className="text-xs text-[var(--color-text-muted)]">Antes</p>
                    <p className="text-xl font-bold text-red-400">
                      {metric.before}/10
                    </p>
                  </div>
                  <div className="text-[var(--color-accent)] text-xl">→</div>
                  <div>
                    <p className="text-xs text-[var(--color-text-muted)]">Depois</p>
                    <p className="text-xl font-bold text-[var(--color-success)]">
                      {metric.after}/10
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <span className={`text-sm font-semibold ${metric.change > 0 ? "text-[var(--color-success)]" : "text-[var(--color-accent)]"}`}>
                    {metric.change > 0 ? "+" : ""}{metric.change}%
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* ROI Financial */}
        <motion.div
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <Card gold className="text-center">
            <h3 className="text-2xl font-bold mb-8">{RESULTS.roiFinancial.title}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {RESULTS.roiFinancial.items.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 rounded-xl bg-[#0f172a]/10">
                  <span className="text-4xl mb-3">{item.icon}</span>
                  <p className="text-2xl font-bold mb-1">{item.highlight}</p>
                  <p className="text-base opacity-80">{item.text}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Testimonials */}
        <h3 className="text-xl font-bold text-[var(--color-text-primary)] text-center mb-8">
          Depoimentos de Participantes
        </h3>
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {RESULTS.testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card className="h-full flex flex-col">
                <blockquote className="text-[var(--color-text-secondary)] italic mb-6 flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-semibold text-[var(--color-text-primary)]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {testimonial.role} | {testimonial.company}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* ROI Calculation */}
        <motion.div
          className="mt-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <Card gold className="text-center">
            <h3 className="text-2xl font-bold mb-6">
              {RESULTS.roiCalculation.title}
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 mb-6">
              {RESULTS.roiCalculation.costs.map((cost, index) => (
                <div key={index}>
                  <p className="text-sm opacity-80">{cost.label}</p>
                  <p className="text-xl font-bold">{cost.value}</p>
                </div>
              ))}
            </div>
            <div className="text-lg font-semibold">
              {RESULTS.roiCalculation.result}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
