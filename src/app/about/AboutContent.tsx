"use client";

import { Target, Eye, ShieldCheck, Users2, Layers, Sparkles } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/sections/CTASection";
import HeroGraphic from "@/components/graphics/HeroGraphic";
import AnimatedNumber from "@/components/AnimatedNumber";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const valueIcons = [ShieldCheck, Layers, Sparkles, Users2];

export default function AboutContent() {
  const { dict } = useLanguage();
  const a = dict.about;

  return (
    <>
      <PageHeader eyebrow={a.pageEyebrow} title={a.pageTitle} description={a.pageDescription} />

      <section className="py-20 lg:py-24">
        <div className="container-tunity grid items-center gap-14 lg:grid-cols-2">
          <SectionTitle
            eyebrow={a.storyEyebrow}
            title={a.storyTitle}
            description={a.storyDescription}
          />
          <div className="mx-auto w-full max-w-md">
            <HeroGraphic />
          </div>
        </div>
      </section>

      <section className="bg-navy-50/60 py-20 lg:py-24">
        <div className="container-tunity grid gap-8 sm:grid-cols-2">
          <div className="card-surface p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-gradient text-white">
              <Target className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">
              {a.missionTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-600">{a.missionText}</p>
          </div>
          <div className="card-surface p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-gradient text-white">
              <Eye className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">
              {a.visionTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-600">{a.visionText}</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-tunity">
          <SectionTitle eyebrow={a.valuesEyebrow} title={a.valuesTitle} align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <div key={value.title} className="card-surface p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-50 text-electric-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-navy-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy-gradient py-20 text-white lg:py-24">
        <div className="container-tunity grid grid-cols-2 gap-8 sm:grid-cols-4">
          {a.stats.map(([stat, label], i) => (
            <div key={label} className="text-center">
              {i === 0 ? (
                <p className="font-display text-3xl font-bold sm:text-4xl">{stat}</p>
              ) : (
                <AnimatedNumber value={stat} className="block font-display text-3xl font-bold sm:text-4xl" />
              )}
              <p className="mt-2 text-sm text-navy-300">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-tunity">
          <SectionTitle
            eyebrow={a.leadershipEyebrow}
            title={a.leadershipTitle}
            description={a.leadershipDescription}
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {a.leadership.map((member) => (
              <div
                key={member.role}
                className="card-surface flex flex-col items-center gap-4 p-8 text-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-gradient font-display text-lg font-bold text-white">
                  {member.initials}
                </span>
                <p className="font-display text-sm font-semibold text-navy-900">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={dict.cta.about.title} description={dict.cta.about.description} />
    </>
  );
}
