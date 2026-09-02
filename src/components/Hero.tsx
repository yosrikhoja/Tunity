"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, CheckCircle2, Leaf, Target } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const MotionLink = motion.create(Link);

const trustIcons = [ShieldCheck, CheckCircle2, Leaf, Target];

const trustContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const trustItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Hero() {
  const { dict } = useLanguage();

  return (
    <section className="relative isolate overflow-hidden bg-white pb-24 pt-6 lg:pb-28 lg:pt-8">
      <Image
        src="/bg1.png"
        alt="Structural engineering and BIM digital transformation"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-white/78" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/70 to-white/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-white via-transparent to-transparent" />

      <div className="container-tunity relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl py-20 lg:py-28"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-electric-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-electric-600">
              {dict.hero.pill}
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
            {dict.hero.titlePrefix}
            <span className="text-electric-500">{dict.hero.titleHighlight}</span>
            {dict.hero.titleSuffix}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-600 sm:text-lg">
            {dict.hero.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MotionLink
              href="/expertises"
              whileHover={{ scale: 1.035 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-2 rounded-lg bg-navy-900 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-card transition-colors duration-200 hover:bg-navy-800 sm:text-sm"
            >
              {dict.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </MotionLink>
            <MotionLink
              href="/contact"
              whileHover={{ scale: 1.035 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-2 rounded-lg border border-navy-200 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wide text-navy-900 transition-colors duration-200 hover:border-navy-400 sm:text-sm"
            >
              {dict.hero.ctaSecondary}
            </MotionLink>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={trustContainer}
          className="relative z-10 mt-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-card-hover lg:mt-8 lg:p-8"
        >
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:divide-x lg:divide-navy-100">
            {dict.hero.trust.map((item, i) => {
              const Icon = trustIcons[i];
              return (
                <motion.div
                  key={item.title}
                  variants={trustItem}
                  whileHover={{ y: -3 }}
                  className="flex items-start gap-3 lg:px-6 lg:first:pl-0"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-electric-50 text-electric-600">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-navy-900">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-navy-500">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
