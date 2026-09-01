"use client";

import SectionTitle from "@/components/SectionTitle";
import ReviewCard from "@/components/ReviewCard";
import { reviews } from "@/data/reviews";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ReviewsSection() {
  const { dict } = useLanguage();

  return (
    <section className="py-20 lg:py-24">
      <div className="container-tunity">
        <SectionTitle
          eyebrow={dict.reviews.eyebrow}
          title={dict.reviews.title}
          description={dict.reviews.description}
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {reviews.map((review, i) => (
            <ReviewCard key={review.author} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
