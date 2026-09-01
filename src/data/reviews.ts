import type { Locale } from "@/lib/i18n/dictionary";

type LocalizedText = Record<Locale, string>;

export type Review = {
  quote: LocalizedText;
  author: string;
  role: LocalizedText;
  company: string;
  rating: number;
};

export const reviews: Review[] = [
  {
    quote: {
      fr: "La coordination BIM de TUNITY a divisé par deux notre temps de résolution des collisions. La qualité de leur modèle a donné à chaque discipline une source de vérité unique.",
      en: "TUNITY's BIM coordination cut our clash-resolution time in half. Their model quality gave every discipline a single source of truth.",
    },
    author: "L. Haddad",
    role: { fr: "Directeur de Projet", en: "Project Director" },
    company: "Northline Developments",
    rating: 5,
  },
  {
    quote: {
      fr: "L'équipe structure a livré une conception de renforcement parasismique à la fois rigoureuse et maîtrisée en coût. La communication a été claire dès le premier jour.",
      en: "The structural team delivered a seismic retrofit design that was both rigorous and cost-conscious. Communication was clear from day one.",
    },
    author: "M. Belkacem",
    role: { fr: "Responsable Infrastructure", en: "Infrastructure Manager" },
    company: "Bizerte Public Works",
    rating: 5,
  },
  {
    quote: {
      fr: "Ils ne nous ont pas seulement construit un site web — ils ont connecté notre visualiseur BIM, nos tableaux de bord et notre gestion documentaire en une seule plateforme que toute notre équipe utilise réellement.",
      en: "They didn't just build us a website — they connected our BIM viewer, dashboards and document control into one platform our whole team actually uses.",
    },
    author: "S. Trabelsi",
    role: { fr: "Responsable des Opérations", en: "Operations Lead" },
    company: "Atlas Group",
    rating: 5,
  },
  {
    quote: {
      fr: "Un partenaire véritablement pluridisciplinaire. Architecture, structure et outils numériques ont avancé en parfaite synchronisation, sans silos.",
      en: "A genuinely multidisciplinary partner. Architecture, structure and digital tools all moved in sync instead of in silos.",
    },
    author: "R. Fourati",
    role: { fr: "Responsable Développement", en: "Development Manager" },
    company: "Lakeside Ventures",
    rating: 4,
  },
];
