"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/nav";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { Locale } from "@/lib/i18n/dictionary";

function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();
  const options: Locale[] = ["fr", "en"];

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-navy-100 bg-navy-50/60 p-0.5 text-xs font-semibold",
        className
      )}
    >
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLocale(option)}
          aria-pressed={locale === option}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors duration-200",
            locale === option
              ? "bg-electric-500 text-white shadow-sm"
              : "text-navy-500 hover:text-electric-600"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { dict } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (open) setOpen(false);
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-navy-100 bg-white/90 backdrop-blur-md shadow-sm"
          : "border-b border-transparent bg-white/70 backdrop-blur-sm"
      )}
    >
      <nav className="container-tunity flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="TUNITY Engineering"
            width={774}
            height={322}
            priority
            unoptimized
            className="h-10 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                  active
                    ? "text-electric-600"
                    : "text-navy-700 hover:text-electric-600"
                )}
              >
                {dict.nav[link.key]}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-electric-500"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-navy-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-navy-800"
          >
            {dict.nav.startProject}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-100 text-navy-800"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-navy-100 bg-white lg:hidden"
          >
            <div className="container-tunity flex flex-col gap-1 py-4">
              {navLinks.map((link) => {
                const active =
                  link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-xl px-4 py-3 text-base font-medium",
                      active
                        ? "bg-electric-50 text-electric-600"
                        : "text-navy-700 hover:bg-navy-50"
                    )}
                  >
                    {dict.nav[link.key]}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-navy-900 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-navy-800"
              >
                {dict.nav.startProject}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
