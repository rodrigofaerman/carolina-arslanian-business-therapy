"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { FAQS } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import Accordion from "@/components/ui/Accordion";
import { trackFAQExpand } from "@/lib/analytics";

export default function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader title="Perguntas Frequentes" />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <Accordion items={FAQS} onExpand={trackFAQExpand} />
        </motion.div>
      </div>
    </section>
  );
}
