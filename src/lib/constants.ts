export const SITE_CONFIG = {
  name: "CineFlow",
  description: "Suite IA révolutionnaire pour les professionnels de la vidéo",
  url: "https://cineflow.io",
  email: "contact@cineflow.io",
  company: {
    name: "CineFlow SAS",
    address: "123 Avenue de la Création, 75001 Paris, France",
    siret: "XXX XXX XXX XXXXX",
    capital: "10 000 €",
    rcs: "Paris B XXX XXX XXX",
    tva: "FR XX XXX XXX XXX",
    director: "John Doe",
  },
  social: {
    twitter: "https://twitter.com/cineflow",
    linkedin: "https://linkedin.com/company/cineflow",
    youtube: "https://youtube.com/@cineflow",
  },
};

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/produits", label: "Produits" },
  { href: "/contact", label: "Contact" },
];

export const LEGAL_LINKS = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-confidentialite", label: "Confidentialité" },
  { href: "/politique-cookies", label: "Cookies" },
  { href: "/cgu", label: "CGU" },
  { href: "/cgv", label: "CGV" },
];

export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter",
    description: "Parfait pour débuter avec l'IA",
    price: 29,
    period: "mois",
    features: [
      "RoughCut Bot uniquement",
      "10h de traitement/mois",
      "Export HD 1080p",
      "Support email",
      "1 projet actif",
    ],
    cta: "Commencer",
    popular: false,
  },
  {
    id: "pro",
    name: "Pro",
    description: "Pour les créateurs professionnels",
    price: 79,
    period: "mois",
    features: [
      "RoughCut Bot + LocalMind",
      "50h de traitement/mois",
      "Export 4K",
      "Support prioritaire",
      "Exports illimités",
      "10 projets actifs",
      "Intégration Premiere/DaVinci",
    ],
    cta: "Choisir Pro",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Solutions sur mesure pour les équipes",
    price: null,
    period: null,
    features: [
      "Tout inclus",
      "Traitement illimité",
      "Support dédié 24/7",
      "API access",
      "Formation personnalisée",
      "Projets illimités",
      "SLA garanti",
      "Déploiement on-premise",
    ],
    cta: "Nous contacter",
    popular: false,
  },
];

export const FEATURES = [
  {
    id: "roughcut",
    title: "RoughCut Bot",
    subtitle: "Assistant IA de Premier Montage",
    description:
      "Analysez automatiquement vos rushes, éliminez les mauvaises prises et générez une timeline narrative en quelques minutes.",
    features: [
      "Analyse intelligente de la mise au point",
      "Détection des expressions et émotions",
      "Suppression automatique des ratés",
      "Génération de timeline par prompt",
      "Export vers Premiere Pro & DaVinci",
    ],
    icon: "Clapperboard",
  },
  {
    id: "localmind",
    title: "LocalMind",
    subtitle: "Gestion d'Assets Locale",
    description:
      "Indexez et retrouvez instantanément n'importe quel clip dans vos téraoctets de fichiers, sans upload cloud.",
    features: [
      "Indexation IA locale",
      "Recherche par description",
      "Support disques externes",
      "Pas d'upload cloud requis",
      "Métadonnées automatiques",
    ],
    icon: "HardDrive",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Marie Dupont",
    role: "Réalisatrice documentaire",
    company: "Studio Lumière",
    content:
      "CineFlow a réduit mon temps de dérushage de 80%. Je peux enfin me concentrer sur la créativité plutôt que sur le tri.",
    avatar: "/avatars/marie.jpg",
  },
  {
    id: 2,
    name: "Thomas Martin",
    role: "Monteur senior",
    company: "PostProd Paris",
    content:
      "LocalMind est une révolution. J'ai retrouvé des plans que je cherchais depuis des mois en quelques secondes.",
    avatar: "/avatars/thomas.jpg",
  },
  {
    id: 3,
    name: "Sophie Bernard",
    role: "YouTubeuse",
    company: "1.2M abonnés",
    content:
      "Le RoughCut Bot comprend exactement ce que je veux. Je lui décris ma vidéo et il me propose un premier montage parfait.",
    avatar: "/avatars/sophie.jpg",
  },
];

export const CONTACT_SUBJECTS = [
  { value: "general", label: "Question générale" },
  { value: "demo", label: "Demande de démo" },
  { value: "pricing", label: "Tarification" },
  { value: "support", label: "Support technique" },
  { value: "partnership", label: "Partenariat" },
  { value: "other", label: "Autre" },
];
