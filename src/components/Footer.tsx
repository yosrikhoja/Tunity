"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { navLinks } from "@/data/nav";
import { expertises } from "@/data/expertises";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { locale, dict } = useLanguage();

  return (
    <footer className="border-t border-navy-100 bg-navy-950 text-navy-100">
      <div className="container-tunity grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-card">
            <Image
              src="/logo.png"
              alt="TUNITY Engineering"
              width={774}
              height={322}
              unoptimized
              className="h-9 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-300">{dict.footer.tagline}</p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-navy-200 transition-colors hover:border-electric-400 hover:text-electric-400"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-navy-200 transition-colors hover:border-electric-400 hover:text-electric-400"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            {dict.footer.navigate}
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-navy-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-electric-400">
                  {dict.nav[link.key]}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/careers/jobs" className="transition-colors hover:text-electric-400">
                {dict.footer.openPositions}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            {dict.footer.expertises}
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-navy-300">
            {expertises.slice(0, 5).map((e) => (
              <li key={e.slug}>
                <Link href="/expertises" className="transition-colors hover:text-electric-400">
                  {e.title[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            {dict.footer.contact}
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-navy-300">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" />
              <span>Avenue Habib Bourguiba, Monastir, Tunisie</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-electric-400" />
              <span>+216 70 000 000</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-electric-400" />
              <span>contact@tunity-eng.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-tunity flex flex-col items-center justify-between gap-3 py-6 text-xs text-navy-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} TUNITY Engineering. {dict.footer.rights}
          </p>
          <div className="flex gap-6">
            <span className="cursor-default">{dict.footer.privacy}</span>
            <span className="cursor-default">{dict.footer.terms}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
