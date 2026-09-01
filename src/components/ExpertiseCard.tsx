"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Expertise } from "@/data/expertises";
import ExpertiseIcon from "@/components/graphics/ExpertiseIcon";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ExpertiseCard({
  expertise,
  index = 0,
}: {
  expertise: Expertise;
  index?: number;
}) {
  const { locale, dict } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="card-surface group relative flex h-full flex-col overflow-hidden p-8 hover:shadow-card-hover"
    >
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-electric-50 transition-transform duration-500 group-hover:scale-125" />

      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-gradient text-white shadow-card">
        <ExpertiseIcon icon={expertise.icon} className="h-6 w-6" />
      </div>

      <h3 className="relative mt-6 font-display text-xl font-semibold text-navy-900">
        {expertise.title[locale]}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-navy-600">
        {expertise.summary[locale]}
      </p>

      <ul className="relative mt-6 space-y-2 border-t border-navy-100 pt-5">
        {expertise.capabilities[locale].slice(0, 3).map((cap) => (
          <li key={cap} className="flex items-start gap-2 text-xs text-navy-500">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-electric-500" />
            {cap}
          </li>
        ))}
      </ul>

      <div className="relative mt-6 flex items-center gap-1.5 text-sm font-semibold text-electric-600">
        {dict.common.learnMore}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </motion.div>
  );
}
