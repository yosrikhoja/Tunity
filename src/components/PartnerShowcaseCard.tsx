"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { BusinessPartner } from "@/data/businessPartners";
import PartnerLogoMark from "@/components/graphics/PartnerLogoMark";
import TechPattern from "@/components/graphics/TechPattern";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function PartnerShowcaseCard({
  partner,
  index = 0,
}: {
  partner: BusinessPartner;
  index?: number;
}) {
  const { locale, dict } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="flex flex-col rounded-3xl border border-navy-100 bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
    >
      <PartnerLogoMark logo={partner.logo} />

      {partner.tagline && (
        <p className="mt-4 text-sm font-semibold text-electric-600">{partner.tagline[locale]}</p>
      )}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">
        {partner.description[locale]}
      </p>

      <div className="mt-6">
        <p className="text-[11px] font-bold uppercase tracking-widest text-navy-400">
          {dict.partnersShowcase.projectsLabel}
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {partner.projectPatterns.map((pattern, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden rounded-lg">
              <TechPattern pattern={pattern} />
            </div>
          ))}
        </div>
      </div>

      {partner.website && (
        <a
          href={partner.website.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${dict.partnersShowcase.visitSite} — ${partner.name}`}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-navy-100 px-4 py-2.5 text-sm font-semibold text-electric-600 transition-colors duration-200 hover:border-electric-300 hover:bg-electric-50"
        >
          {partner.website.label}
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      )}
    </motion.div>
  );
}
