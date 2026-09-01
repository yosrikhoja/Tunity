import type { Locale } from "@/lib/i18n/dictionary";

type LocalizedText = Record<Locale, string>;

export type Partner = {
  name: string;
  category: LocalizedText;
};

export const partners: Partner[] = [
  { name: "Autodesk", category: { fr: "Logiciel BIM", en: "BIM Software" } },
  { name: "Bentley Systems", category: { fr: "Logiciel d'infrastructure", en: "Infrastructure Software" } },
  { name: "Trimble", category: { fr: "Technologie de construction", en: "Construction Tech" } },
  { name: "Graphisoft", category: { fr: "Logiciel d'architecture", en: "Architecture Software" } },
  { name: "Microsoft Azure", category: { fr: "Infrastructure cloud", en: "Cloud Infrastructure" } },
  { name: "AWS", category: { fr: "Infrastructure cloud", en: "Cloud Infrastructure" } },
  { name: "Vercel", category: { fr: "Plateforme web", en: "Web Platform" } },
  { name: "Procore", category: { fr: "Gestion de construction", en: "Construction Management" } },
];
