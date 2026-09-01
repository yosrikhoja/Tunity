"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Boxes, HardHat } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const stepIcons = [Search, PenTool, Boxes, HardHat];

export default function ProcessSection() {
  const { dict } = useLanguage();

  return (
    <section className="py-20 lg:py-24">
      <div className="container-tunity">
        <SectionTitle
          eyebrow={dict.process.eyebrow}
          title={dict.process.title}
          description={dict.process.description}
          align="center"
        />

        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-navy-100 lg:block" />
          {dict.process.steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-gradient text-white shadow-card">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <span className="mt-4 text-xs font-semibold uppercase tracking-widest text-electric-500">
                  {dict.process.stepLabel} {i + 1}
                </span>
                <h3 className="mt-1 font-display text-lg font-semibold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
