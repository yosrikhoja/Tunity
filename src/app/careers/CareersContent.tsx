"use client";

import Link from "next/link";
import { ArrowRight, GraduationCap, HeartHandshake, Rocket, Globe2 } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/sections/CTASection";
import TechPattern from "@/components/graphics/TechPattern";
import { jobs } from "@/data/jobs";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const benefitIcons = [GraduationCap, HeartHandshake, Rocket, Globe2];

export default function CareersContent() {
  const { dict } = useLanguage();
  const c = dict.careersPage;

  return (
    <>
      <PageHeader eyebrow={c.eyebrow} title={c.title} description={c.description} />

      <section className="py-20 lg:py-24">
        <div className="container-tunity grid items-center gap-14 lg:grid-cols-2">
          <div className="order-2 aspect-[4/3] overflow-hidden rounded-3xl shadow-card lg:order-1">
            <TechPattern pattern="circuit" />
          </div>
          <div className="order-1 lg:order-2">
            <SectionTitle eyebrow={c.lifeEyebrow} title={c.lifeTitle} description={c.lifeDescription} />
          </div>
        </div>
      </section>

      <section className="bg-navy-50/60 py-20 lg:py-24">
        <div className="container-tunity">
          <SectionTitle eyebrow={c.whyEyebrow} title={c.whyTitle} align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.benefits.map((benefit, i) => {
              const Icon = benefitIcons[i];
              return (
                <div key={benefit.title} className="card-surface p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-50 text-electric-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-navy-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-tunity">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionTitle
              eyebrow={c.openPositionsEyebrow}
              title={c.openPositionsTitle(jobs.length)}
              description={c.openPositionsDescription}
            />
            <Link href="/careers/jobs" className="btn-primary shrink-0">
              {c.viewAllJobs}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title={dict.cta.careers.title}
        description={dict.cta.careers.description}
        primaryLabel={dict.cta.careers.primary}
        primaryHref="/contact"
        secondaryLabel={dict.cta.careers.secondary}
        secondaryHref="/careers/jobs"
      />
    </>
  );
}
