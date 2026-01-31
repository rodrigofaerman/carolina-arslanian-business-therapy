"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { INVESTMENT } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { trackCTA } from "@/lib/analytics";

export default function Investment() {
  const { pricing, bonuses, guarantee, paymentOptions } = INVESTMENT;

  return (
    <section id="investimento" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader title={INVESTMENT.title} />

        {/* Main price card */}
        <motion.div
          className="mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <Card gold className="text-center max-w-lg mx-auto">
            <p className="text-lg line-through opacity-60 mb-2">
              Valor Regular: R$ {pricing.regular.toLocaleString("pt-BR")}
            </p>
            <Badge className="mb-4 bg-[#0f172a] text-[var(--color-accent)] border-[#0f172a]">
              {pricing.preLaunchLabel}
            </Badge>
            <p className="text-5xl md:text-6xl font-bold mb-2">
              R$ {pricing.preLaunch.toLocaleString("pt-BR")}
            </p>
            <p className="text-sm opacity-80 mb-6">{pricing.validUntil}</p>
            <Button
              href="#"
              size="lg"
              className="w-full bg-[#0f172a] text-[var(--color-accent)] hover:bg-[#1e293b]"
              onClick={() => trackCTA("investment_primary")}
            >
              {pricing.ctaText}
            </Button>
          </Card>
        </motion.div>

        {/* Bonuses */}
        <motion.div
          className="mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] text-center mb-8">
            {bonuses.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {bonuses.items.map((bonus, index) => (
              <Card key={index}>
                <div className="text-3xl mb-4">{bonus.icon}</div>
                <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
                  {bonus.title}
                </h4>
                <p className="text-[var(--color-accent)] font-semibold mb-4">
                  Valor: R$ {bonus.value.toLocaleString("pt-BR")}
                </p>
                <ul className="space-y-2">
                  {bonus.details.map((detail, i) => (
                    <li
                      key={i}
                      className="text-sm text-[var(--color-text-muted)]"
                    >
                      • {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          className="mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <Card className="border-[var(--color-accent)]/50 text-center">
            <div className="text-4xl mb-4">{guarantee.icon}</div>
            <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-3">
              {guarantee.title}
            </h4>
            <p className="text-[var(--color-text-muted)] mb-4 max-w-xl mx-auto">
              {guarantee.text}
            </p>
            <p className="text-[var(--color-accent)] font-bold text-lg">
              {guarantee.tagline}
            </p>
          </Card>
        </motion.div>

        {/* Payment options */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] text-center mb-6">
            {paymentOptions.title}
          </h3>
          <motion.ul
            className="space-y-3 max-w-md mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {paymentOptions.options.map((option, index) => (
              <motion.li
                key={index}
                variants={staggerItem}
                className="flex items-center gap-3 text-[var(--color-text-secondary)]"
              >
                <span className="text-[var(--color-success)]">✅</span>
                {option}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
