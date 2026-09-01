"use client";

import SectionTitle from "@/components/SectionTitle";
import PartnerCard from "@/components/PartnerCard";
import { partners } from "@/data/partners";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function PartnersSection() {
  const { dict } = useLanguage();

  return (
    <section className="bg-navy-50/60 py-20 lg:py-24">
      <div className="container-tunity">
        <SectionTitle
          eyebrow={dict.partners.eyebrow}
          title={dict.partners.title}
          description={dict.partners.description}
          align="center"
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {partners.map((partner, i) => (
            <PartnerCard key={partner.name} partner={partner} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
