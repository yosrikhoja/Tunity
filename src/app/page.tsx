"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ExpertiseCard from "@/components/ExpertiseCard";
import AboutTeaserSection from "@/components/sections/AboutTeaserSection";
import PartnersShowcaseSection from "@/components/sections/PartnersShowcaseSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import CTASection from "@/components/sections/CTASection";
import { expertises } from "@/data/expertises";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function HomePage() {
  const { dict } = useLanguage();

  return (
    <>
      <Hero />
      <AboutTeaserSection />
      <PartnersShowcaseSection />

      <section className="py-20 lg:py-24">
        <div className="container-tunity">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionTitle
              eyebrow={dict.home.expertisesEyebrow}
              title={dict.home.expertisesTitle}
              description={dict.home.expertisesDescription}
            />
            <Link
              href="/expertises"
              className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-electric-600 hover:text-electric-700"
            >
              {dict.home.viewAllExpertises}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertises.map((expertise, i) => (
              <ExpertiseCard key={expertise.slug} expertise={expertise} index={i} />
            ))}
          </div>
        </div>
      </section>

      <div className="bg-navy-50/60">
        <ProcessSection />
      </div>

      <PartnersSection />
      <ReviewsSection />
      <CTASection />
    </>
  );
}
