"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { FRAMEWORK } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const GameIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "brain":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    case "heart":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case "target":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Framework() {
  return (
    <section id="metodo" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title={FRAMEWORK.title} />

        {/* Hook and Intro */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <p
            className="text-xl text-[var(--color-text-secondary)] mb-6"
            dangerouslySetInnerHTML={{
              __html: FRAMEWORK.hook.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[var(--color-accent)]">$1</strong>')
            }}
          />

          {/* Transformations */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {FRAMEWORK.transformations.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2 text-left p-4 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)]"
              >
                <span className="text-[var(--color-success)] mt-1">✅</span>
                <span className="text-[var(--color-text-secondary)]">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-lg text-[var(--color-accent)] font-semibold mb-4">
            {FRAMEWORK.energyWaste}
          </p>
          <p
            className="text-[var(--color-text-muted)]"
            dangerouslySetInnerHTML={{
              __html: FRAMEWORK.innerGameText.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[var(--color-text-primary)]">$1</strong>')
            }}
          />
        </motion.div>

        {/* What is Mental Fitness */}
        <motion.div
          className="max-w-3xl mx-auto mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <Card gold className="text-center">
            <h3 className="text-2xl font-bold mb-4">{FRAMEWORK.whatIs.title}</h3>
            <p className="text-xl font-semibold mb-4">
              {FRAMEWORK.whatIs.definition}
            </p>
            <p className="opacity-90 mb-4">
              {FRAMEWORK.whatIs.explanation}
            </p>
            <p className="text-lg italic opacity-80">
              {FRAMEWORK.whatIs.quote}
            </p>
          </Card>
        </motion.div>

        {/* Video Placeholder */}
        <motion.div
          className="max-w-3xl mx-auto mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="aspect-video bg-[var(--color-bg-secondary)] rounded-[var(--radius-card)] border border-[var(--color-border)] flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-[var(--color-text-muted)]">{FRAMEWORK.videoPlaceholder}</p>
            </div>
          </div>
        </motion.div>

        {/* The 3 Games */}
        <h3 className="text-2xl font-bold text-center text-[var(--color-text-primary)] mb-8">
          Framework: Os 3 Performance Games
        </h3>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {FRAMEWORK.games.map((game) => (
            <motion.div key={game.number} variants={staggerItem}>
              <Card className="h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-[#0f172a]">
                    <GameIcon type={game.icon} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[var(--color-text-primary)]">
                      {game.name}
                    </h4>
                    <p className="text-sm text-[var(--color-accent)]">{game.period}</p>
                  </div>
                </div>

                {/* Subtitle */}
                <p className="text-lg font-semibold text-[var(--color-accent)] mb-2">
                  {game.subtitle}
                </p>

                {/* Main Benefit */}
                <p className="font-semibold text-[var(--color-text-primary)] mb-2">
                  {game.mainBenefit}
                </p>

                {/* Description */}
                <p className="text-[var(--color-text-muted)] mb-4">
                  {game.description}
                </p>

                {/* Tools */}
                <div className="mb-4 flex-1">
                  <p className="text-sm font-semibold text-[var(--color-text-secondary)] mb-2">
                    🔧 Ferramentas:
                  </p>
                  <ul className="space-y-1">
                    {game.tools.map((tool, index) => (
                      <li
                        key={index}
                        className="text-sm text-[var(--color-text-muted)] flex items-start gap-2"
                      >
                        <span className="text-[var(--color-border)]">•</span>
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverable */}
                <div className="pt-4 border-t border-[var(--color-border)]">
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    <span className="font-semibold">Entregável:</span>{" "}
                    {game.deliverable}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
