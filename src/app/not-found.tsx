"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function NotFound() {
  const { dict } = useLanguage();

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-navy-gradient text-white">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container-tunity relative flex flex-col items-center text-center">
        <span className="flex items-center justify-center rounded-2xl bg-white px-5 py-4 shadow-card">
          <Image src="/logo.png" alt="TUNITY Engineering" width={774} height={322} unoptimized className="h-8 w-auto" />
        </span>
        <p className="mt-6 font-display text-6xl font-bold">404</p>
        <h1 className="mt-3 font-display text-2xl font-semibold">{dict.notFound.title}</h1>
        <p className="mt-3 max-w-md text-navy-300">{dict.notFound.description}</p>
        <Link href="/" className="btn-primary mt-8">
          <ArrowLeft className="h-4 w-4" />
          {dict.notFound.back}
        </Link>
      </div>
    </section>
  );
}
