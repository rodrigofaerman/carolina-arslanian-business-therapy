"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { CTA_FINAL } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { trackCTA } from "@/lib/analytics";

export default function CTAFinal() {
  return (
    <section id="decisao" className="py-24 bg-[var(--color-bg-elevated)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <motion.h2
              className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-6"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {CTA_FINAL.title}
            </motion.h2>

            <motion.p
              className="text-lg text-[var(--color-text-muted)] mb-4"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {CTA_FINAL.intro}
            </motion.p>

            <motion.p
              className="text-xl font-bold text-[var(--color-accent)] mb-10"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {CTA_FINAL.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <Button
                href={CTA_FINAL.ctaPrimary.href}
                size="lg"
                onClick={() => trackCTA("cta_final_primary")}
              >
                {CTA_FINAL.ctaPrimary.text}
              </Button>
              <Button
                href={CTA_FINAL.ctaSecondary.href}
                variant="secondary"
                size="lg"
              >
                {CTA_FINAL.ctaSecondary.text}
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap gap-6 justify-center lg:justify-start"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {CTA_FINAL.trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="flex items-center gap-2 text-[var(--color-text-muted)]"
                >
                  <span className="text-xl">{badge.icon}</span>
                  <span className="text-sm">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Carolina's photo */}
          <motion.div
            className="relative hidden lg:flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Decorative gold circle behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />

              {/* Main image with mask */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md">
                <Image
                  src="/images/carolina-closing.jpg"
                  alt="Carolina Arslanian - Mental Fitness Specialist"
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-elevated)]/50 via-transparent to-transparent" />
              </div>

              {/* Gold accent line */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-[var(--color-accent)] rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
