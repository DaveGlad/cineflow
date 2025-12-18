# 📋 CAHIER DES CHARGES - CINEFLOW

## 🎬 Présentation du Projet

**CineFlow** est une plateforme SaaS innovante dédiée aux professionnels de la vidéo, proposant deux solutions IA révolutionnaires pour optimiser le workflow de montage et la gestion des assets numériques.

---

## 🎯 Vision Produit

### Produit Unique : **CineFlow Suite**

Une suite logicielle complète intégrant deux modules complémentaires :

#### 1. **RoughCut Bot** — Assistant IA de Premier Montage
| Aspect | Description |
|--------|-------------|
| **Problème résolu** | Les monteurs passent 80% de leur temps à visionner, trier et organiser des heures d'images brutes |
| **Solution** | IA qui analyse les images (mise au point, expressions, action), supprime les mauvaises prises et assemble une timeline narrative via prompt textuel |
| **Marché** | Océan Bleu — Concurrence très faible (Timebolt/Gling ne font que supprimer les silences) |

#### 2. **LocalMind** — Gestion d'Assets Locale Intelligente
| Aspect | Description |
|--------|-------------|
| **Problème résolu** | Téraoctets de fichiers impossibles à retrouver car les explorateurs ne "voient" pas le contenu vidéo |
| **Solution** | MAM local utilisant l'IA pour étiqueter et indexer les disques durs hors ligne sans upload cloud |
| **Marché** | Océan Bleu — Solutions existantes cloud-only (chères/lentes) ou enterprise |

---

## 🏗️ Architecture Technique

### Stack Technologique

```
┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND                              │
├─────────────────────────────────────────────────────────────┤
│  Framework      │  Next.js 16 (App Router)                  │
│  UI Library     │  React 19                                 │
│  Styling        │  Tailwind CSS 4                           │
│  Icons          │  Lucide React                             │
│  Animations     │  Framer Motion                            │
│  Video Player   │  React Player / Video.js                  │
│  Forms          │  React Hook Form + Zod                    │
│  State          │  Zustand (si nécessaire)                  │
└─────────────────────────────────────────────────────────────┘
```

### Design System

```
┌─────────────────────────────────────────────────────────────┐
│                    DESIGN TOKENS                             │
├─────────────────────────────────────────────────────────────┤
│  COULEURS                                                    │
│  ─────────                                                   │
│  Primary      │  #6366F1 (Indigo 500)                       │
│  Secondary    │  #8B5CF6 (Violet 500)                       │
│  Accent       │  #06B6D4 (Cyan 500)                         │
│  Background   │  #0A0A0F (Dark)                             │
│  Surface      │  #13131A (Cards)                            │
│  Border       │  #1F1F2E (Subtle)                           │
│  Text Primary │  #FAFAFA                                    │
│  Text Muted   │  #71717A                                    │
│                                                              │
│  TYPOGRAPHIE                                                 │
│  ───────────                                                 │
│  Font Family  │  Inter (Sans) + JetBrains Mono (Code)       │
│  H1           │  48px / 700 / -0.02em                       │
│  H2           │  36px / 600 / -0.01em                       │
│  H3           │  24px / 600                                 │
│  Body         │  16px / 400 / 1.6 line-height               │
│  Small        │  14px / 400                                 │
│                                                              │
│  SPACING                                                     │
│  ───────                                                     │
│  Base Unit    │  4px                                        │
│  Section Gap  │  80px - 120px                               │
│  Card Padding │  24px - 32px                                │
│                                                              │
│  EFFECTS                                                     │
│  ───────                                                     │
│  Border Radius│  8px (sm) / 12px (md) / 16px (lg)           │
│  Shadows      │  Glow effects avec couleurs primaires       │
│  Glassmorphism│  backdrop-blur + bg-opacity                 │
└─────────────────────────────────────────────────────────────┘
```

---

## 📄 Structure des Pages

### Arborescence

```
/                           → Page Accueil
/produits                   → Liste des Produits
/produits/cineflow-suite    → Détail Produit + Abonnements
/contact                    → Formulaire Contact (RGPD)
/mentions-legales           → Mentions Légales
/politique-confidentialite  → Politique de Confidentialité
/politique-cookies          → Politique Cookies
/cgu                        → Conditions Générales d'Utilisation
/cgv                        → Conditions Générales de Vente
```

---

## 📱 Spécifications par Page

### 1. PAGE ACCUEIL (`/`)

#### Objectif
Captiver immédiatement le visiteur avec une vidéo promotionnelle impactante et présenter la proposition de valeur.

#### Sections

| Section | Contenu | Comportement |
|---------|---------|--------------|
| **Hero** | Vidéo 30s en autoplay (muted), titre accrocheur, CTA principal | Vidéo en background avec overlay gradient |
| **Pain Points** | 3 cards illustrant les problèmes des monteurs | Animation au scroll |
| **Solution** | Présentation des 2 modules (RoughCut Bot + LocalMind) | Cards interactives avec hover effects |
| **Features** | Grille de fonctionnalités clés | Icons animés |
| **Testimonials** | Slider de témoignages clients | Autoplay avec pause on hover |
| **CTA Final** | Bloc d'appel à l'action vers les produits | Gradient animé |
| **Footer** | Navigation, liens légaux, réseaux sociaux | Sticky sur mobile |

#### Spécifications Vidéo Hero
- **Format** : MP4 (H.264) + WebM (VP9) pour compatibilité
- **Durée** : 30 secondes max
- **Résolution** : 1920x1080 (avec version mobile 720p)
- **Comportement** : Autoplay, muted, loop, lazy loading
- **Fallback** : Image poster statique

---

### 2. PAGE LISTE PRODUITS (`/produits`)

#### Objectif
Présenter CineFlow Suite et ses deux modules avec démonstrations vidéo.

#### Sections

| Section | Contenu |
|---------|---------|
| **Header** | Titre "Nos Solutions", sous-titre explicatif |
| **Product Card** | Card principale CineFlow Suite avec vidéo démo |
| **Modules Grid** | 2 cards pour RoughCut Bot et LocalMind |
| **Comparison** | Tableau comparatif avec concurrence |
| **CTA** | Bouton vers page détail |

#### Lecteur Vidéo
- Contrôles personnalisés (play/pause, volume, fullscreen)
- Barre de progression stylisée
- Thumbnail preview au hover
- Qualité adaptative (si plusieurs sources)

---

### 3. PAGE DÉTAIL PRODUIT (`/produits/cineflow-suite`)

#### Objectif
Convertir le visiteur en présentant les fonctionnalités détaillées et les options d'abonnement.

#### Sections

| Section | Contenu |
|---------|---------|
| **Hero Produit** | Nom, description, vidéo démo principale |
| **Features Deep Dive** | Accordéon/Tabs des fonctionnalités détaillées |
| **How It Works** | Timeline visuelle du workflow |
| **Pricing** | 3 plans d'abonnement |
| **FAQ** | Questions fréquentes |
| **CTA** | Sélection du plan + redirection |

#### Plans d'Abonnement

| Plan | Prix | Fonctionnalités |
|------|------|-----------------|
| **Starter** | 29€/mois | RoughCut Bot uniquement, 10h de traitement/mois, Support email |
| **Pro** | 79€/mois | RoughCut Bot + LocalMind, 50h de traitement/mois, Support prioritaire, Exports illimités |
| **Enterprise** | Sur devis | Tout inclus, Traitement illimité, Support dédié, API access, Formation |

---

### 4. PAGE CONTACT (`/contact`)

#### Objectif
Permettre aux visiteurs de contacter l'équipe avec conformité RGPD.

#### Formulaire

| Champ | Type | Validation | Obligatoire |
|-------|------|------------|-------------|
| Nom | text | min 2 chars | ✅ |
| Prénom | text | min 2 chars | ✅ |
| Email | email | format email | ✅ |
| Entreprise | text | - | ❌ |
| Sujet | select | liste prédéfinie | ✅ |
| Message | textarea | min 10 chars | ✅ |
| RGPD Consent | checkbox | must be checked | ✅ |
| Newsletter | checkbox | - | ❌ |

#### Case RGPD (obligatoire)
```
☐ J'accepte que mes données soient traitées conformément à la 
  politique de confidentialité de CineFlow. Ces données seront 
  utilisées uniquement pour répondre à ma demande et ne seront 
  pas transmises à des tiers. Je dispose d'un droit d'accès, de 
  rectification et de suppression de mes données.
```

#### UX
- Validation en temps réel
- Messages d'erreur explicites
- Confirmation visuelle après envoi
- Protection anti-spam (honeypot + rate limiting)

---

### 5. PAGES LÉGALES

#### 5.1 Mentions Légales (`/mentions-legales`)
- Identité de l'éditeur (raison sociale, SIRET, adresse)
- Directeur de publication
- Hébergeur (nom, adresse)
- Propriété intellectuelle
- Crédits (photos, vidéos, icônes)

#### 5.2 Politique de Confidentialité (`/politique-confidentialite`)
- Responsable du traitement
- Données collectées et finalités
- Base légale du traitement
- Durée de conservation
- Destinataires des données
- Transferts hors UE
- Droits des utilisateurs (accès, rectification, suppression, portabilité)
- Contact DPO
- Réclamation CNIL

#### 5.3 Politique Cookies (`/politique-cookies`)
- Définition des cookies
- Types de cookies utilisés (essentiels, analytiques, marketing)
- Tableau détaillé des cookies
- Gestion des préférences
- Durée de vie des cookies

#### 5.4 CGU (`/cgu`)
- Objet et acceptation
- Accès au service
- Propriété intellectuelle
- Responsabilités
- Données personnelles
- Modification des CGU
- Droit applicable et juridiction

#### 5.5 CGV (`/cgv`)
- Objet
- Prix et modalités de paiement
- Abonnements et renouvellement
- Droit de rétractation (14 jours)
- Résiliation
- Garanties
- Limitation de responsabilité
- Service client
- Médiation

---

## 🎨 Composants UI Réutilisables

```
components/
├── ui/
│   ├── Button.tsx          # Variantes: primary, secondary, ghost, outline
│   ├── Card.tsx            # Glass effect, hover animations
│   ├── Input.tsx           # Avec états error/success
│   ├── Checkbox.tsx        # Custom styled
│   ├── Select.tsx          # Dropdown personnalisé
│   ├── Badge.tsx           # Tags et labels
│   ├── Accordion.tsx       # FAQ, features
│   └── Modal.tsx           # Overlays
├── layout/
│   ├── Header.tsx          # Navigation principale
│   ├── Footer.tsx          # Links + legal
│   ├── Container.tsx       # Max-width wrapper
│   └── Section.tsx         # Spacing standardisé
├── video/
│   ├── VideoPlayer.tsx     # Lecteur personnalisé
│   ├── VideoHero.tsx       # Background video
│   └── VideoThumbnail.tsx  # Preview cards
├── forms/
│   ├── ContactForm.tsx     # Formulaire contact
│   └── NewsletterForm.tsx  # Inscription newsletter
└── sections/
    ├── Hero.tsx
    ├── Features.tsx
    ├── Pricing.tsx
    ├── Testimonials.tsx
    └── CTA.tsx
```

---

## 📁 Structure des Fichiers

```
src/
├── app/
│   ├── layout.tsx                    # Layout racine
│   ├── page.tsx                      # Accueil
│   ├── produits/
│   │   ├── page.tsx                  # Liste produits
│   │   └── cineflow-suite/
│   │       └── page.tsx              # Détail produit
│   ├── contact/
│   │   └── page.tsx                  # Contact
│   ├── mentions-legales/
│   │   └── page.tsx
│   ├── politique-confidentialite/
│   │   └── page.tsx
│   ├── politique-cookies/
│   │   └── page.tsx
│   ├── cgu/
│   │   └── page.tsx
│   └── cgv/
│       └── page.tsx
├── components/
│   ├── ui/
│   ├── layout/
│   ├── video/
│   ├── forms/
│   └── sections/
├── lib/
│   ├── utils.ts                      # Helpers (cn, formatters)
│   └── constants.ts                  # Config, pricing data
├── styles/
│   └── globals.css                   # Tailwind + custom CSS
└── types/
    └── index.ts                      # TypeScript interfaces
```

---

## ✅ Checklist de Développement

### Phase 1 : Setup & Design System
- [ ] Configurer Tailwind avec design tokens
- [ ] Installer dépendances (lucide-react, framer-motion, react-hook-form, zod)
- [ ] Créer composants UI de base
- [ ] Configurer fonts (Inter, JetBrains Mono)

### Phase 2 : Layout & Navigation
- [ ] Header responsive avec navigation
- [ ] Footer avec liens légaux
- [ ] Layout global avec metadata SEO

### Phase 3 : Pages Principales
- [ ] Page Accueil avec vidéo hero
- [ ] Page Liste Produits
- [ ] Page Détail Produit avec pricing
- [ ] Page Contact avec formulaire RGPD

### Phase 4 : Pages Légales
- [ ] Mentions Légales
- [ ] Politique de Confidentialité
- [ ] Politique Cookies
- [ ] CGU
- [ ] CGV

### Phase 5 : Polish & Optimisation
- [ ] Animations et transitions
- [ ] Responsive design (mobile-first)
- [ ] Performance (lazy loading, optimisation images/vidéos)
- [ ] Accessibilité (ARIA, keyboard navigation)
- [ ] SEO (metadata, sitemap, robots.txt)

---

## 🚀 Livrables

1. **Code source** complet Next.js
2. **Design system** documenté
3. **Composants** réutilisables et typés
4. **Pages** responsive et accessibles
5. **Documentation** technique

---

## 📊 KPIs de Qualité

| Métrique | Objectif |
|----------|----------|
| Lighthouse Performance | > 90 |
| Lighthouse Accessibility | > 95 |
| Lighthouse SEO | > 95 |
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 3s |
| Cumulative Layout Shift | < 0.1 |

---

*Document créé le 17/12/2024 — CineFlow v0.1.0*
