import type { Locale } from "@/lib/i18n/dictionary";

type LocalizedText = Record<Locale, string>;

export type BusinessPartnerLogo = "camag" | "sms" | "mcd" | "cabe";

export type BusinessPartner = {
  slug: string;
  name: string;
  logo: BusinessPartnerLogo;
  tagline?: LocalizedText;
  description: LocalizedText;
  website?: {
    url: string;
    label: string;
  };
  projectPatterns: ("blueprint" | "grid" | "beam" | "tower" | "circuit" | "contour")[];
};

export const businessPartners: BusinessPartner[] = [
  {
    slug: "camag-conseil",
    name: "CAMAG CONSEIL",
    logo: "camag",
    description: {
      fr: "CAMAG CONSEIL est le premier cabinet guinéen d'expertise comptable entièrement en ligne, dédié à l'accompagnement des entreprises et des entrepreneurs dans la gestion, le pilotage et le développement de leur activité.",
      en: "CAMAG CONSEIL is Guinea's first fully online chartered accounting firm, dedicated to supporting businesses and entrepreneurs in managing, steering and growing their operations.",
    },
    website: { url: "https://www.camag-gn.com/", label: "camag-gn.com" },
    projectPatterns: ["grid", "circuit"],
  },
  {
    slug: "sms-protech",
    name: "SMS PROTECH",
    logo: "sms",
    tagline: {
      fr: "Votre partenaire technique industriel",
      en: "Your industrial technical partner",
    },
    description: {
      fr: "SMS PROTECH est une entreprise spécialisée en maintenance industrielle pluridisciplinaire, intervenant en électricité industrielle, mécanique, hydraulique et pneumatique sur l'ensemble de vos installations. Basés à Saint-Priest, nous accompagnons les industriels de la région dans la fiabilisation de leurs équipements et la réduction des temps d'arrêt, avec une astreinte disponible 24h/24 et 7j/7.",
      en: "SMS PROTECH specializes in multidisciplinary industrial maintenance, covering industrial electricity, mechanics, hydraulics and pneumatics across all your installations. Based in Saint-Priest, we help regional manufacturers improve equipment reliability and reduce downtime, with 24/7 on-call support.",
    },
    website: { url: "https://www.smsprotech.fr/", label: "smsprotech.fr" },
    projectPatterns: ["circuit", "blueprint"],
  },
  {
    slug: "mcd-bat",
    name: "MCD BAT",
    logo: "mcd",
    description: {
      fr: "Spécialiste des structures et des fondations, nous intervenons partout en France pour garantir la stabilité, la sécurité et la durabilité de vos ouvrages. Qualité et proximité au service de vos projets.",
      en: "Specialists in structures and foundations, we work across France to guarantee the stability, safety and durability of your structures. Quality and close support for your projects.",
    },
    website: { url: "https://mcdbat.fr/", label: "mcdbat.fr" },
    projectPatterns: ["beam", "tower"],
  },
  {
    slug: "cabe-structure",
    name: "CABE Structure",
    logo: "cabe",
    description: {
      fr: "CABE Structure est un bureau d'étude structure dynamique et disponible. Notre souhait : répondre au mieux à vos besoins. Nos atouts : savoir-faire, polyvalence et rigueur. Nous offrons des études de conception, d'exécution, des diagnostics et expertises dans le domaine du sinistre, pour les professionnels du BTP comme pour les particuliers, assureurs et experts.",
      en: "CABE Structure is a dynamic, responsive structural engineering firm. Our goal: to best meet your needs. Our strengths: expertise, versatility and rigor. We provide design and execution studies, diagnostics and damage-assessment expertise, for construction professionals as well as individuals, insurers and experts.",
    },
    website: { url: "https://cabestructure.fr/", label: "cabestructure.fr" },
    projectPatterns: ["tower", "grid"],
  },
];
