"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Handshake, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import PartnerShowcaseCard from "@/components/PartnerShowcaseCard";
import { businessPartners } from "@/data/businessPartners";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function PartnersShowcaseSection() {
  const { dict } = useLanguage();
  const t = dict.partnersShowcase;

  return (
    <section className="bg-navy-50/60 py-20 lg:py-24">
      <div className="container-tunity">
        <SectionTitle eyebrow={t.eyebrow} title={t.title} description={t.description} align="center" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {businessPartners.map((partner, i) => (
            <PartnerShowcaseCard key={partner.slug} partner={partner} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col items-center justify-between gap-6 rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:flex-row sm:p-7"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-electric-50 text-electric-600">
              <Handshake className="h-6 w-6" strokeWidth={2} />
            </span>
            <div>
              <p className="font-display text-base font-semibold text-navy-900">
                {t.networkTitle}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-navy-600">{t.networkDescription}</p>
            </div>
          </div>
          <Link href="/projects" className="btn-primary shrink-0">
            {t.networkCta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
