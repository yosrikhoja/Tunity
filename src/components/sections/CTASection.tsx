"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref = "/expertises",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  const { dict } = useLanguage();

  return (
    <section className="container-tunity py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-navy-gradient px-8 py-16 text-center text-white sm:px-16"
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-electric-500/20 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-electric-400/20 blur-3xl" />

        <div className="relative">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {title ?? dict.cta.default.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-200">
            {description ?? dict.cta.default.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href={primaryHref} className="btn-primary">
              {primaryLabel ?? dict.cta.default.primary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={secondaryHref} className="btn-outline-light">
              {secondaryLabel ?? dict.cta.default.secondary}
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
