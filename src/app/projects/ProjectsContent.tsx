"use client";

import PageHeader from "@/components/sections/PageHeader";
import CTASection from "@/components/sections/CTASection";
import ProjectsGrid from "./ProjectsGrid";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ProjectsContent() {
  const { dict } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={dict.projectsPage.eyebrow}
        title={dict.projectsPage.title}
        description={dict.projectsPage.description}
      />

      <section className="py-20 lg:py-24">
        <div className="container-tunity">
          <ProjectsGrid />
        </div>
      </section>

      <CTASection title={dict.projectsPage.ctaTitle} description={dict.projectsPage.ctaDescription} />
    </>
  );
}
