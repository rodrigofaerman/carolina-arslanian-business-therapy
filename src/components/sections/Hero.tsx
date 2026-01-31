"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, fadeIn, staggerContainer, staggerItem } from "@/lib/animations";
import { HERO } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { trackCTA } from "@/lib/analytics";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[90vh] flex items-center bg-grid relative overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg-primary)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <Badge className="mb-6">{HERO.badge}</Badge>
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-[var(--color-text-primary)] mb-6 leading-tight"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              {HERO.title}{" "}
              <span className="text-gradient-gold block mt-2 text-2xl md:text-3xl lg:text-4xl">
                {HERO.titleHighlight}
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-[var(--color-text-muted)] mb-8 max-w-xl leading-relaxed"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              {HERO.subtitle}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <Button
                href={HERO.ctaPrimary.href}
                size="lg"
                onClick={() => trackCTA("hero_primary")}
              >
                {HERO.ctaPrimary.text}
              </Button>
              <Button
                href={HERO.ctaSecondary.href}
                variant="secondary"
                size="lg"
              >
                {HERO.ctaSecondary.text}
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {HERO.trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"
                >
                  <span className="text-lg">{badge.icon}</span>
                  <span>{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Carolina's photo */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative flex justify-center">
              {/* Decorative gold glow behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[var(--color-accent)]/15 blur-3xl" />

              {/* Main image - transparent background */}
              <div className="relative">
                <Image
                  src="/images/carolina-hero-red.png"
                  alt="Carolina Arslanian - Mental Fitness Specialist"
                  width={450}
                  height={580}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-[var(--color-text-muted)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
