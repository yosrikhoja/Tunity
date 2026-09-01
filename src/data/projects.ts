import type { Locale } from "@/lib/i18n/dictionary";

export type ProjectCategoryKey = "structural" | "bim" | "architecture" | "web" | "digital";

type LocalizedText = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;

export type Project = {
  slug: string;
  title: string;
  categoryKey: ProjectCategoryKey;
  location: LocalizedText;
  year: string;
  summary: LocalizedText;
  tags: LocalizedList;
  pattern: "blueprint" | "grid" | "beam" | "tower" | "circuit" | "contour";
};

export const projectCategoryLabels: Record<ProjectCategoryKey, LocalizedText> = {
  structural: { fr: "Ingénierie Structurelle", en: "Structural Engineering" },
  bim: { fr: "Coordination BIM", en: "BIM Coordination" },
  architecture: { fr: "Architecture", en: "Architecture" },
  web: { fr: "Développement Web", en: "Web Development" },
  digital: { fr: "Transformation Digitale", en: "Digital Transformation" },
};

export const projects: Project[] = [
  {
    slug: "meridian-tower",
    title: "Meridian Tower",
    categoryKey: "structural",
    location: { fr: "Tunis, Tunisie", en: "Tunis, Tunisia" },
    year: "2024",
    summary: {
      fr: "Conception structurelle et analyse sismique d'une tour mixte de 28 étages avec un noyau en béton post-contraint.",
      en: "Structural design and seismic analysis for a 28-story mixed-use tower with a post-tensioned concrete core.",
    },
    tags: {
      fr: ["Tour de grande hauteur", "Conception sismique", "Béton"],
      en: ["High-rise", "Seismic Design", "Concrete"],
    },
    pattern: "tower",
  },
  {
    slug: "harbor-logistics-hub",
    title: "Harbor Logistics Hub",
    categoryKey: "bim",
    location: { fr: "Sfax, Tunisie", en: "Sfax, Tunisia" },
    year: "2023",
    summary: {
      fr: "Modèle BIM fédéré coordonnant structure, CVC/électricité et façades pour une plateforme logistique de 60 000 m².",
      en: "Federated BIM model coordinating structure, MEP and facade systems for a 60,000 m² logistics facility.",
    },
    tags: {
      fr: ["BIM 400", "Détection de collisions", "Industriel"],
      en: ["BIM 400", "Clash Detection", "Industrial"],
    },
    pattern: "grid",
  },
  {
    slug: "lakeside-cultural-center",
    title: "Lakeside Cultural Center",
    categoryKey: "architecture",
    location: { fr: "Sousse, Tunisie", en: "Sousse, Tunisia" },
    year: "2023",
    summary: {
      fr: "Conception architecturale du concept au permis pour un centre culturel public avec stratégie de rafraîchissement passif.",
      en: "Concept-to-permit architectural design for a public cultural center with passive cooling strategy.",
    },
    tags: {
      fr: ["Bâtiment public", "Conception passive"],
      en: ["Public Building", "Passive Design"],
    },
    pattern: "contour",
  },
  {
    slug: "atlas-client-portal",
    title: "Atlas Client Portal",
    categoryKey: "web",
    location: { fr: "À distance / Multi-sites", en: "Remote / Multi-site" },
    year: "2024",
    summary: {
      fr: "Un portail projet unifiant gestion documentaire, visualiseur BIM et tableaux de bord d'avancement pour un client multi-sites.",
      en: "A project portal unifying document control, BIM viewer and progress dashboards for a multi-site client.",
    },
    tags: {
      fr: ["Next.js", "Visualiseur 3D", "Tableaux de bord"],
      en: ["Next.js", "3D Viewer", "Dashboards"],
    },
    pattern: "circuit",
  },
  {
    slug: "digital-twin-rollout",
    title: "Digital Twin Rollout",
    categoryKey: "digital",
    location: { fr: "Monastir, Tunisie", en: "Monastir, Tunisia" },
    year: "2022",
    summary: {
      fr: "Stratégie de jumeau numérique et mise en place de pipelines de données pour un suivi en temps réel sur 4 sites de production.",
      en: "Digital twin strategy and data pipeline implementation for real-time facility monitoring across 4 plants.",
    },
    tags: {
      fr: ["Jumeau numérique", "Données IoT", "Automatisation"],
      en: ["Digital Twin", "IoT Data", "Automation"],
    },
    pattern: "blueprint",
  },
  {
    slug: "riverside-bridge-retrofit",
    title: "Riverside Bridge Retrofit",
    categoryKey: "structural",
    location: { fr: "Bizerte, Tunisie", en: "Bizerte, Tunisia" },
    year: "2022",
    summary: {
      fr: "Évaluation structurelle et conception de renforcement parasismique pour un pont routier en béton armé.",
      en: "Structural assessment and seismic retrofit design for a reinforced concrete road bridge.",
    },
    tags: {
      fr: ["Renforcement", "Infrastructure"],
      en: ["Retrofit", "Infrastructure"],
    },
    pattern: "beam",
  },
];

export const projectCategoryKeys: ProjectCategoryKey[] = Array.from(
  new Set(projects.map((p) => p.categoryKey))
);
