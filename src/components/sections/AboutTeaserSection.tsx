"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Layers,
  Target,
  Lightbulb,
  Boxes,
  CheckCircle2,
  TrendingUp,
  Clock,
  Compass,
  Wrench,
  MoreHorizontal,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const featureIcons = [Layers, Target, Lightbulb];
const statIcons = [Clock, Compass, Wrench];

export default function AboutTeaserSection() {
  const { dict } = useLanguage();
  const t = dict.aboutTeaser;

  const circumference = 2 * Math.PI * 42;
  const progressDash = (t.performanceCard.progressValue / 100) * circumference;

  return (
    <section className="py-20 lg:py-24">
      <div className="container-tunity">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-electric-600">
                {t.eyebrow}
              </span>
              <span className="h-px w-8 bg-electric-500" />
            </div>

            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              {t.title}
            </h2>

            <p className="mt-5 text-base leading-relaxed text-navy-600">{t.description}</p>

            <ul className="mt-8 space-y-6">
              {t.features.map((feature, i) => {
                const Icon = featureIcons[i];
                return (
                  <li key={feature.title} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-electric-50 text-electric-600">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <div>
                      <p className="font-display text-base font-semibold text-navy-900">
                        {feature.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-navy-600">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-card sm:aspect-[5/5.5]">
              <Image
                src="/bg1.png"
                alt="BIM modeling and infrastructure performance"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-navy-950/10 via-transparent to-navy-950/30" />
            </div>

            <div className="absolute inset-x-3 top-3 flex items-start gap-2.5 sm:inset-x-5 sm:top-5 sm:gap-3">
              <div className="min-w-0 flex-1 rounded-xl bg-white/95 p-3 shadow-card-hover backdrop-blur sm:p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-navy-800 sm:text-xs">
                    <Boxes className="h-3.5 w-3.5 shrink-0 text-electric-600 sm:h-4 sm:w-4" />
                    <span className="truncate">{t.bimCard.label}</span>
                  </div>
                  <MoreHorizontal className="h-3.5 w-3.5 shrink-0 text-navy-300" />
                </div>
                <ul className="mt-2.5 space-y-1.5 sm:mt-3 sm:space-y-2">
                  {t.bimCard.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-between gap-2 text-[10px] text-navy-600 sm:text-xs"
                    >
                      <span className="truncate">{item}</span>
                      <CheckCircle2 className="h-3 w-3 shrink-0 text-emerald-500 sm:h-3.5 sm:w-3.5" />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-[132px] shrink-0 rounded-xl bg-white/95 p-3 shadow-card-hover backdrop-blur sm:w-[190px] sm:p-4">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-wide text-navy-800 sm:text-[11px]">
                  {t.performanceCard.label}
                </span>
                <TrendingUp className="h-3 w-3 shrink-0 text-electric-600 sm:h-3.5 sm:w-3.5" />
              </div>

              <div className="mt-2 flex items-center gap-2 sm:mt-3 sm:gap-3">
                <svg viewBox="0 0 100 100" className="h-12 w-12 shrink-0 sm:h-16 sm:w-16">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#e6ecf5" strokeWidth="9" />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="#0090ff"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeDasharray={`${progressDash} ${circumference}`}
                    transform="rotate(-90 50 50)"
                  />
                  <text
                    x="50"
                    y="55"
                    textAnchor="middle"
                    className="fill-navy-900 font-display font-bold"
                    style={{ fontSize: "22px" }}
                  >
                    {t.performanceCard.progressValue}%
                  </text>
                </svg>
                <p className="text-[9px] leading-tight text-navy-500 sm:text-[11px]">
                  {t.performanceCard.progressLabel}
                </p>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 border-t border-navy-100 pt-2.5 sm:mt-4 sm:pt-3">
                <div>
                  <p className="text-[9px] text-navy-400 sm:text-[10px]">
                    {t.performanceCard.co2Label}
                  </p>
                  <p className="text-xs font-bold text-navy-900 sm:text-sm">
                    {t.performanceCard.co2Value}
                  </p>
                  <p className="text-[8px] text-navy-400 sm:text-[9px]">
                    {t.performanceCard.co2Sub}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] text-navy-400 sm:text-[10px]">
                    {t.performanceCard.budgetLabel}
                  </p>
                  <p className="text-xs font-bold text-navy-900 sm:text-sm">
                    {t.performanceCard.budgetValue}
                  </p>
                  <p className="text-[8px] text-navy-400 sm:text-[9px]">
                    {t.performanceCard.budgetSub}
                  </p>
                </div>
              </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16 grid gap-6 sm:grid-cols-3 lg:mt-20"
        >
          {t.stats.map((stat, i) => {
            const Icon = statIcons[i];
            return (
              <div key={stat.title} className="card-surface p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-50 text-electric-600">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <p className="mt-4 font-display text-3xl font-bold text-navy-900">{stat.value}</p>
                <p className="mt-1 font-display text-sm font-semibold text-navy-800">
                  {stat.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{stat.description}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
