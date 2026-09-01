"use client";

import PageHeader from "@/components/sections/PageHeader";
import CTASection from "@/components/sections/CTASection";
import JobsList from "./JobsList";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function JobsContent() {
  const { dict } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={dict.jobsPage.eyebrow}
        title={dict.jobsPage.title}
        description={dict.jobsPage.description}
      />

      <section className="py-20 lg:py-24">
        <div className="container-tunity">
          <JobsList />
        </div>
      </section>

      <CTASection
        title={dict.jobsPage.ctaTitle}
        description={dict.jobsPage.ctaDescription}
        primaryLabel={dict.cta.jobs.primary}
        primaryHref="/contact"
        secondaryLabel={dict.cta.jobs.secondary}
        secondaryHref="/careers"
      />
    </>
  );
}
