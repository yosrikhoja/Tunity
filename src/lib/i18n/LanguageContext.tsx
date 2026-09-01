"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dictionaries, type Dictionary, type Locale } from "./dictionary";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  dict: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "tunity-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");
  const [hydrated, setHydrated] = useState(false);

  // One-time sync from localStorage after mount — window/localStorage isn't
  // available during SSR, so this can't be derived at render time. `hydrated`
  // gates the write-effect below so it never fires with the stale default
  // value before this read has settled (which would otherwise clobber the
  // stored preference, especially under StrictMode's double-invoked mount effects).
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "fr" || stored === "en") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLocaleState(stored);
      }
    } catch {
      // localStorage unavailable — keep default locale
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.lang = locale;
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // localStorage unavailable — locale just won't persist
    }
  }, [locale, hydrated]);

  const value: LanguageContextValue = {
    locale,
    setLocale: setLocaleState,
    toggleLocale: () => setLocaleState((prev) => (prev === "fr" ? "en" : "fr")),
    dict: dictionaries[locale],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
