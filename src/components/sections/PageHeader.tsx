"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-white py-20 lg:py-28">
      <Image
        src="/bg1.png"
        alt="Structural engineering and BIM digital transformation"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-white/78" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/70 to-white/30" />

      <div className="container-tunity relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-electric-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-electric-600">
              {eyebrow}
            </span>
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-navy-600">{description}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
