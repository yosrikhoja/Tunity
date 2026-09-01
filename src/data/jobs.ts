import type { Locale } from "@/lib/i18n/dictionary";

export type JobDepartmentKey = "structural" | "bim" | "architecture" | "web" | "digital";

type LocalizedText = Record<Locale, string>;

export type Job = {
  slug: string;
  departmentKey: JobDepartmentKey;
  title: LocalizedText;
  location: LocalizedText;
  type: LocalizedText;
  level: LocalizedText;
  summary: LocalizedText;
};

export const jobDepartmentLabels: Record<JobDepartmentKey, LocalizedText> = {
  structural: { fr: "Ingénierie Structurelle", en: "Structural Engineering" },
  bim: { fr: "BIM", en: "BIM" },
  architecture: { fr: "Architecture", en: "Architecture" },
  web: { fr: "Développement Web", en: "Web Development" },
  digital: { fr: "Transformation Digitale", en: "Digital Transformation" },
};

export const jobs: Job[] = [
  {
    slug: "senior-structural-engineer",
    departmentKey: "structural",
    title: { fr: "Ingénieur Structure Senior", en: "Senior Structural Engineer" },
    location: { fr: "Tunis, Tunisie", en: "Tunis, Tunisia" },
    type: { fr: "Temps plein", en: "Full-time" },
    level: { fr: "Senior", en: "Senior" },
    summary: {
      fr: "Piloter l'analyse et la conception structurelle pour des projets de moyenne à grande hauteur, encadrer les ingénieurs juniors et échanger directement avec les clients.",
      en: "Lead structural analysis and design for mid- to high-rise projects, mentoring junior engineers and interfacing directly with clients.",
    },
  },
  {
    slug: "bim-coordinator",
    departmentKey: "bim",
    title: { fr: "Coordinateur BIM", en: "BIM Coordinator" },
    location: { fr: "Sfax, Tunisie", en: "Sfax, Tunisia" },
    type: { fr: "Temps plein", en: "Full-time" },
    level: { fr: "Confirmé", en: "Mid-level" },
    summary: {
      fr: "Prendre en charge la coordination des modèles et la détection de collisions entre les équipes architecture, structure et CVC/électricité avec Revit et Navisworks.",
      en: "Own model coordination and clash detection across architecture, structure and MEP teams using Revit and Navisworks.",
    },
  },
  {
    slug: "architect-project-lead",
    departmentKey: "architecture",
    title: { fr: "Architecte — Chef de Projet", en: "Architect — Project Lead" },
    location: { fr: "Sousse, Tunisie", en: "Sousse, Tunisia" },
    type: { fr: "Temps plein", en: "Full-time" },
    level: { fr: "Senior", en: "Senior" },
    summary: {
      fr: "Piloter des projets de conception du concept jusqu'au dossier d'exécution, en coordination avec les équipes structure et numérique.",
      en: "Drive design projects from concept through construction documentation while coordinating with structural and digital teams.",
    },
  },
  {
    slug: "frontend-engineer-nextjs",
    departmentKey: "web",
    title: { fr: "Ingénieur Frontend (Next.js)", en: "Frontend Engineer (Next.js)" },
    location: { fr: "À distance (Tunisie)", en: "Remote (Tunisia)" },
    type: { fr: "Temps plein", en: "Full-time" },
    level: { fr: "Confirmé", en: "Mid-level" },
    summary: {
      fr: "Développer des portails clients et outils internes avec Next.js, TypeScript et des intégrations modernes de visualiseurs 3D/BIM.",
      en: "Build client-facing portals and internal tools using Next.js, TypeScript and modern 3D/BIM viewer integrations.",
    },
  },
  {
    slug: "digital-transformation-consultant",
    departmentKey: "digital",
    title: { fr: "Consultant Transformation Digitale", en: "Digital Transformation Consultant" },
    location: { fr: "Tunis, Tunisie", en: "Tunis, Tunisia" },
    type: { fr: "Temps plein", en: "Full-time" },
    level: { fr: "Confirmé", en: "Mid-level" },
    summary: {
      fr: "Concevoir et mettre en œuvre l'automatisation de workflows et des pipelines de données pour des clients de l'ingénierie et de la construction.",
      en: "Design and implement workflow automation and data pipelines for engineering and construction clients.",
    },
  },
  {
    slug: "structural-engineering-intern",
    departmentKey: "structural",
    title: { fr: "Stagiaire Ingénierie Structurelle", en: "Structural Engineering Intern" },
    location: { fr: "Tunis, Tunisie", en: "Tunis, Tunisia" },
    type: { fr: "Stage", en: "Internship" },
    level: { fr: "Débutant", en: "Entry-level" },
    summary: {
      fr: "Accompagner les ingénieurs seniors sur les calculs structurels, les plans et la documentation de chantier dans le cadre d'un programme de 6 mois.",
      en: "Support senior engineers on structural calculations, drawings and site documentation as part of a 6-month program.",
    },
  },
];
