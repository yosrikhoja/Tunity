"use client";

import { motion } from "framer-motion";
import { Boxes } from "lucide-react";
import type { Partner } from "@/data/partners";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function PartnerCard({ partner, index = 0 }: { partner: Partner; index?: number }) {
  const { locale } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-navy-100 bg-white px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-electric-200 hover:shadow-card"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
        <Boxes className="h-5 w-5" strokeWidth={1.75} />
      </div>
      <div>
        <p className="font-display text-sm font-semibold text-navy-900">{partner.name}</p>
        <p className="mt-0.5 text-xs text-navy-400">{partner.category[locale]}</p>
      </div>
    </motion.div>
  );
}
