"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem, slideInLeft, slideInRight, viewportConfig } from "@/lib/animations";
import { ABOUT } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

export default function About() {
  return (
    <section id="sobre" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader title={ABOUT.title} />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            className="relative"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="relative">
              {/* Decorative gold glow */}
              <div className="absolute -inset-4 bg-[var(--color-accent)]/10 blur-2xl rounded-full" />

              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/carolina-about.jpg"
                  alt="Carolina Arslanian"
                  width={500}
                  height={625}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Decorative border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[var(--color-accent)]/40 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h3 className="text-2xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
              {ABOUT.name}
            </h3>

            {/* Quote */}
            <blockquote className="text-lg text-[var(--color-text-secondary)] italic mb-8 border-l-4 border-[var(--color-accent)] pl-6">
              &ldquo;{ABOUT.quote}&rdquo;
            </blockquote>

            {/* Credentials */}
            <motion.ul
              className="space-y-3 mb-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {ABOUT.credentials.map((credential, index) => (
                <motion.li
                  key={index}
                  variants={staggerItem}
                  className="flex items-center gap-3 text-[var(--color-text-secondary)]"
                >
                  <span className="text-[var(--color-accent)]">✓</span>
                  {credential}
                </motion.li>
              ))}
            </motion.ul>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {ABOUT.stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                  <p className="text-2xl font-bold text-[var(--color-accent)]">{stat.value}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Differentiator */}
            <Card hover={false} className="bg-[var(--color-accent-subtle)] border-[var(--color-accent)]/30">
              <p className="text-[var(--color-text-primary)] font-medium">
                {ABOUT.differentiator}
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
