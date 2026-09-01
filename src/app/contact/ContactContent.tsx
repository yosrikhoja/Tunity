"use client";

import { Mail, MapPin, Phone, Clock } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import ContactForm from "@/components/ContactForm";
import TechPattern from "@/components/graphics/TechPattern";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactContent() {
  const { dict } = useLanguage();
  const c = dict.contactPage;

  const contactDetails = [
    { icon: MapPin, label: c.officeLabel, value: "Avenue Habib Bourguiba, Monastir, Tunisie" },
    { icon: Phone, label: c.phoneLabel, value: "+216 70 000 000" },
    { icon: Mail, label: c.emailLabel, value: "contact@tunity-eng.com" },
    { icon: Clock, label: c.hoursLabel, value: c.hoursValue },
  ];

  return (
    <>
      <PageHeader eyebrow={c.eyebrow} title={c.title} description={c.description} />

      <section className="py-20 lg:py-24">
        <div className="container-tunity grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-8">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
              <TechPattern pattern="blueprint" />
            </div>

            <div className="card-surface divide-y divide-navy-100">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4 p-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric-50 text-electric-600">
                    <detail.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">
                      {detail.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-navy-800">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
