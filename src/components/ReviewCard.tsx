"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import type { Review } from "@/data/reviews";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ReviewCard({ review, index = 0 }: { review: Review; index?: number }) {
  const { locale } = useLanguage();

  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="card-surface flex h-full flex-col justify-between p-8"
    >
      <div>
        <Quote className="h-8 w-8 text-electric-200" strokeWidth={1.5} />
        <blockquote className="mt-4 text-[15px] leading-relaxed text-navy-700">
          “{review.quote[locale]}”
        </blockquote>
      </div>

      <figcaption className="mt-8 flex items-center justify-between border-t border-navy-100 pt-5">
        <div>
          <p className="font-display text-sm font-semibold text-navy-900">{review.author}</p>
          <p className="text-xs text-navy-500">
            {review.role[locale]} · {review.company}
          </p>
        </div>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={
                i < review.rating
                  ? "h-4 w-4 fill-electric-400 text-electric-400"
                  : "h-4 w-4 text-navy-200"
              }
            />
          ))}
        </div>
      </figcaption>
    </motion.figure>
  );
}
