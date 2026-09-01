import type { Locale } from "@/lib/i18n/dictionary";

export type ExpertiseIconKey =
  | "structural"
  | "bim"
  | "architecture"
  | "web"
  | "digital"
  | "project-management";

type LocalizedText = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;

export type Expertise = {
  slug: string;
  icon: ExpertiseIconKey;
  title: LocalizedText;
  summary: LocalizedText;
  description: LocalizedText;
  capabilities: LocalizedList;
};

export const expertises: Expertise[] = [
  {
    slug: "structural-engineering",
    icon: "structural",
    title: { fr: "Ingénierie Structurelle", en: "Structural Engineering" },
    summary: {
      fr: "Des structures résilientes et conformes aux normes, conçues pour la performance et la durabilité.",
      en: "Resilient, code-compliant structures engineered for performance and longevity.",
    },
    description: {
      fr: "Nos ingénieurs structure conçoivent et analysent des systèmes en acier, béton, bois et composites pour bâtiments et infrastructures — en équilibrant sécurité, coût, constructibilité et durabilité, du concept jusqu'au support de chantier.",
      en: "Our structural engineers design and analyze steel, concrete, timber and composite systems for buildings and infrastructure — balancing safety, cost, constructability and sustainability from concept through construction support.",
    },
    capabilities: {
      fr: [
        "Analyse et conception structurelle (acier, béton, bois)",
        "Évaluation des charges sismiques et de vent",
        "Réhabilitation et renforcement structurel",
        "Support d'ingénierie en phase de construction",
      ],
      en: [
        "Structural analysis & design (steel, concrete, timber)",
        "Seismic & wind load assessment",
        "Retrofit and structural rehabilitation",
        "Construction-phase engineering support",
      ],
    },
  },
  {
    slug: "bim",
    icon: "bim",
    title: { fr: "Modélisation & Coordination BIM", en: "BIM Modeling & Coordination" },
    summary: {
      fr: "Des modèles 3D fédérés qui gardent chaque discipline alignée et sans collisions.",
      en: "Federated 3D models that keep every discipline aligned and clash-free.",
    },
    description: {
      fr: "Nous créons et gérons des modèles BIM riches et pilotés par les données, de LOD 200 à 400, en coordonnant architecture, structure et CVC/électricité dans un modèle fédéré unique qui réduit les reprises et accélère la livraison.",
      en: "We build and manage rich, data-driven BIM models across LOD 200–400, coordinating architecture, structure and MEP into a single federated model that reduces rework and accelerates delivery.",
    },
    capabilities: {
      fr: [
        "Modélisation 3D — Revit, Tekla, Navisworks",
        "Détection de collisions multidisciplinaire",
        "Planification 4D et intégration des coûts 5D",
        "Plans d'exécution et standards BIM",
      ],
      en: [
        "3D modeling — Revit, Tekla, Navisworks",
        "Multi-discipline clash detection",
        "4D scheduling & 5D cost integration",
        "BIM execution plans & standards",
      ],
    },
  },
  {
    slug: "architecture",
    icon: "architecture",
    title: { fr: "Architecture", en: "Architecture" },
    summary: {
      fr: "Une conception fonctionnelle et contextuelle qui relie le concept à la réalité constructible.",
      en: "Functional, contextual design that bridges concept and buildable reality.",
    },
    description: {
      fr: "Des études de volumétrie aux dossiers d'exécution, notre équipe d'architecture conçoit des espaces qui répondent au site, au programme et à la vision du client, tout en restant étroitement intégrée aux contraintes structurelles et techniques.",
      en: "From massing studies to construction documentation, our architecture team designs spaces that respond to site, program and client vision while staying tightly integrated with structural and technical constraints.",
    },
    capabilities: {
      fr: [
        "Conception de concept et études de volumétrie",
        "Dossiers de permis et d'exécution",
        "Aménagement des espaces intérieurs",
        "Stratégies de conception durable et passive",
      ],
      en: [
        "Concept design & massing studies",
        "Permit & construction documentation",
        "Interior space planning",
        "Sustainable & passive design strategies",
      ],
    },
  },
  {
    slug: "web-development",
    icon: "web",
    title: { fr: "Développement Web", en: "Web Development" },
    summary: {
      fr: "Des plateformes numériques modernes et performantes pour les entreprises d'ingénierie.",
      en: "Modern, high-performance digital platforms for engineering-driven businesses.",
    },
    description: {
      fr: "Nous concevons et développons des applications web rapides et évolutives ainsi que des portails clients — connectant données de projet, visualiseurs BIM et outils internes en une seule expérience numérique pour les équipes d'ingénierie et de construction.",
      en: "We design and build fast, scalable web applications and client portals — connecting project data, BIM viewers and internal tools into a single digital experience for engineering and construction teams.",
    },
    capabilities: {
      fr: [
        "Développement web et portails sur mesure",
        "Intégrations de visualiseurs 3D / BIM",
        "Intégration d'API et de systèmes",
        "Design systems et ingénierie UI",
      ],
      en: [
        "Custom web & portal development",
        "3D / BIM viewer integrations",
        "API & systems integration",
        "Design systems & UI engineering",
      ],
    },
  },
  {
    slug: "digital-transformation",
    icon: "digital",
    title: { fr: "Transformation Digitale", en: "Digital Transformation" },
    summary: {
      fr: "Connecter workflows, données et équipes au sein d'un écosystème numérique unifié.",
      en: "Connecting workflows, data and teams into a unified digital ecosystem.",
    },
    description: {
      fr: "Nous aidons les organisations d'ingénierie et de construction à moderniser leur façon de travailler — en automatisant les workflows, en digitalisant la documentation et en construisant l'infrastructure de données derrière des décisions plus intelligentes et plus rapides.",
      en: "We help engineering and construction organizations modernize the way they work — automating workflows, digitizing documentation and building the data infrastructure behind smarter, faster decisions.",
    },
    capabilities: {
      fr: [
        "Automatisation des processus et conception de workflows",
        "Mise en place d'environnements de données communs (CDE)",
        "Stratégie de jumeau numérique",
        "Pipelines de données et tableaux de bord",
      ],
      en: [
        "Process automation & workflow design",
        "Common data environment (CDE) setup",
        "Digital twin strategy",
        "Data pipelines & dashboarding",
      ],
    },
  },
  {
    slug: "project-management",
    icon: "project-management",
    title: { fr: "Gestion de Projet & Construction", en: "Project & Construction Management" },
    summary: {
      fr: "Un pilotage de bout en bout qui garde périmètre, calendrier et budget alignés.",
      en: "End-to-end oversight that keeps scope, schedule and budget aligned.",
    },
    description: {
      fr: "Notre équipe de gestion de projet coordonne les équipes de conception et de livraison tout au long du cycle de vie du projet, garantissant contrôle qualité, respect des délais et communication transparente entre toutes les parties prenantes.",
      en: "Our project management team coordinates design and delivery teams across the project lifecycle, ensuring quality control, schedule integrity and transparent communication between all stakeholders.",
    },
    capabilities: {
      fr: [
        "Représentation du maître d'ouvrage",
        "Contrôle des délais et des coûts",
        "Assurance qualité et inspection de chantier",
        "Coordination des parties prenantes et sous-traitants",
      ],
      en: [
        "Owner's representation",
        "Schedule & cost control",
        "Quality assurance & site inspection",
        "Stakeholder & contractor coordination",
      ],
    },
  },
];
