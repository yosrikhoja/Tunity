"use client";

import { Check } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import CTASection from "@/components/sections/CTASection";
import TechPattern from "@/components/graphics/TechPattern";
import ExpertiseIcon from "@/components/graphics/ExpertiseIcon";
import { expertises } from "@/data/expertises";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const visualPatterns = ["blueprint", "grid", "contour", "circuit", "tower", "beam"] as const;

export default function ExpertisesContent() {
  const { locale, dict } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={dict.expertisesPage.eyebrow}
        title={dict.expertisesPage.title}
        description={dict.expertisesPage.description}
      />

      <section className="py-20 lg:py-24">
        <div className="container-tunity space-y-16">
          {expertises.map((expertise, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={expertise.slug}
                id={expertise.slug}
                className="grid items-center gap-10 border-b border-navy-100 pb-16 last:border-0 last:pb-0 lg:grid-cols-2"
              >
                <div className={reversed ? "lg:order-2" : ""}>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-gradient text-white shadow-card">
                    <ExpertiseIcon icon={expertise.icon} className="h-6 w-6" />
                  </span>
                  <h2 className="mt-6 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                    {expertise.title[locale]}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-navy-600">
                    {expertise.description[locale]}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {expertise.capabilities[locale].map((cap) => (
                      <li key={cap} className="flex items-start gap-2 text-sm text-navy-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric-500" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={reversed ? "lg:order-1" : ""}>
                  <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
                    <TechPattern pattern={visualPatterns[i % visualPatterns.length]} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
