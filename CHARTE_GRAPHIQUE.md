# CineFlow - Charte Graphique & Identité Visuelle

---

## 1. Logo

### 1.1 Concept du Logo

Le logo CineFlow représente la fusion entre le **cinéma** et le **flux créatif**. Il combine :
- Un **bouton Play** stylisé symbolisant la vidéo et le montage
- Une forme **arrondie moderne** évoquant la fluidité et l'innovation
- Un **dégradé dynamique** représentant l'intelligence artificielle et la technologie

### 1.2 Construction du Logo

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│     ┌──────────────┐                                        │
│     │   ▶ Play     │   +   CineFlow                         │
│     │   Icon       │       (Wordmark)                       │
│     └──────────────┘                                        │
│                                                             │
│     Icône dans un carré arrondi (border-radius: 12px)       │
│     avec dégradé Primary → Secondary                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 1.3 Versions du Logo

| Version | Usage |
|---------|-------|
| **Logo complet** | Site web, documents officiels, présentations |
| **Logo icône seul** | Favicon, app icon, réseaux sociaux (avatar) |
| **Logo monochrome blanc** | Fonds colorés, vidéos |
| **Logo monochrome noir** | Impressions N&B, documents légaux |

### 1.4 Zone de Protection

Une zone de protection équivalente à la hauteur du "C" de CineFlow doit être respectée autour du logo.

```
        ┌─────────────────────────────────┐
        │         Zone protégée           │
        │   ┌─────────────────────────┐   │
        │   │                         │   │
        │   │   [▶] CineFlow          │   │
        │   │                         │   │
        │   └─────────────────────────┘   │
        │                                 │
        └─────────────────────────────────┘
```

### 1.5 Tailles Minimales

| Support | Taille minimale |
|---------|-----------------|
| Digital | 32px de hauteur |
| Print | 15mm de hauteur |

---

## 2. Palette de Couleurs

### 2.1 Couleurs Principales

#### Primary - Indigo
```
Hex: #6366F1
RGB: 99, 102, 241
HSL: 239°, 84%, 67%

Usage: CTAs, liens, éléments interactifs, accents
```

#### Primary Hover
```
Hex: #818CF8
RGB: 129, 140, 248
```

#### Primary Dark
```
Hex: #4F46E5
RGB: 79, 70, 229
```

### 2.2 Couleurs Secondaires

#### Secondary - Violet
```
Hex: #8B5CF6
RGB: 139, 92, 246
HSL: 263°, 90%, 66%

Usage: Dégradés, éléments décoratifs, badges
```

#### Accent - Cyan
```
Hex: #06B6D4
RGB: 6, 182, 212
HSL: 189°, 94%, 43%

Usage: Highlights, notifications, éléments de succès
```

### 2.3 Couleurs de Fond (Dark Theme)

| Nom | Hex | Usage |
|-----|-----|-------|
| Background | `#0A0A0F` | Fond principal |
| Surface | `#13131A` | Cartes, modales |
| Surface Hover | `#1A1A24` | États hover |
| Border | `#1F1F2E` | Bordures |
| Border Hover | `#2A2A3E` | Bordures actives |

### 2.4 Couleurs de Texte

| Nom | Hex | Usage |
|-----|-----|-------|
| Text Primary | `#FAFAFA` | Titres, texte principal |
| Text Secondary | `#A1A1AA` | Paragraphes, descriptions |
| Text Muted | `#71717A` | Labels, placeholders |

### 2.5 Couleurs de Statut

| Statut | Hex | Usage |
|--------|-----|-------|
| Success | `#10B981` | Confirmations, validations |
| Warning | `#F59E0B` | Alertes, avertissements |
| Error | `#EF4444` | Erreurs, suppressions |

### 2.6 Dégradés

#### Gradient Primary
```css
background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
```
Usage: Boutons principaux, logo, éléments premium

#### Gradient Accent
```css
background: linear-gradient(135deg, #06B6D4 0%, #6366F1 100%);
```
Usage: Badges, highlights, éléments secondaires

#### Gradient Glow
```css
background: radial-gradient(ellipse at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
```
Usage: Effets de fond, ambiance

---

## 3. Typographie

### 3.1 Police Principale - Inter

**Inter** est une police sans-serif moderne, optimisée pour les écrans.

```
Font Family: 'Inter', system-ui, -apple-system, sans-serif
```

| Style | Poids | Usage |
|-------|-------|-------|
| Regular | 400 | Corps de texte |
| Medium | 500 | Labels, navigation |
| Semi-Bold | 600 | Sous-titres |
| Bold | 700 | Titres, CTAs |

### 3.2 Police Monospace - JetBrains Mono

Pour le code et les éléments techniques.

```
Font Family: 'JetBrains Mono', monospace
```

### 3.3 Échelle Typographique

| Élément | Taille | Poids | Line Height |
|---------|--------|-------|-------------|
| H1 | 48-72px | Bold | 1.1 |
| H2 | 36-48px | Bold | 1.2 |
| H3 | 24-30px | Semi-Bold | 1.3 |
| H4 | 20-24px | Semi-Bold | 1.4 |
| Body Large | 18-20px | Regular | 1.6 |
| Body | 16px | Regular | 1.6 |
| Small | 14px | Regular | 1.5 |
| Caption | 12px | Medium | 1.4 |

### 3.4 Responsive Typography

```
Mobile (< 640px):
- H1: 36px → 48px
- H2: 30px → 36px
- Body: 16px

Tablet (640px - 1024px):
- H1: 48px → 60px
- H2: 36px → 42px

Desktop (> 1024px):
- H1: 60px → 72px
- H2: 42px → 48px
```

---

## 4. Espacements

### 4.1 Système de Spacing

Basé sur une unité de 4px.

| Token | Valeur | Usage |
|-------|--------|-------|
| xs | 4px | Micro-espacements |
| sm | 8px | Espacements internes compacts |
| md | 16px | Espacements standards |
| lg | 24px | Espacements entre sections |
| xl | 32px | Grands espacements |
| 2xl | 48px | Espacements majeurs |
| 3xl | 64px | Entre sections |
| section | 120px | Entre grandes sections |

### 4.2 Container

```
Max Width: 1280px
Padding horizontal: 
  - Mobile: 16px
  - Tablet: 24px
  - Desktop: 32px
```

---

## 5. Composants UI

### 5.1 Boutons

#### Primary Button
```
Background: Gradient Primary
Text: White
Border Radius: 12px
Padding: 12px 24px (md), 16px 32px (lg)
Font Weight: 600
Hover: Scale 1.02, brightness increase
```

#### Secondary Button
```
Background: Surface
Border: 1px solid Border
Text: Text Primary
Hover: Background Surface Hover
```

#### Ghost Button
```
Background: Transparent
Text: Text Secondary
Hover: Background Surface
```

### 5.2 Cards

```
Background: Surface (ou Glass effect)
Border: 1px solid Border
Border Radius: 16px (lg) ou 24px (xl)
Padding: 24px - 32px
Shadow: Subtle glow on hover
```

#### Glass Effect
```css
background: rgba(19, 19, 26, 0.8);
backdrop-filter: blur(12px);
border: 1px solid var(--color-border);
```

### 5.3 Inputs

```
Background: Surface
Border: 1px solid Border
Border Radius: 12px
Padding: 12px 16px
Focus: Border Primary, Ring 2px Primary/20%
```

### 5.4 Badges

```
Border Radius: 9999px (full)
Padding: 6px 12px
Font Size: 12px
Font Weight: 500
```

---

## 6. Iconographie

### 6.1 Bibliothèque

**Lucide React** - Icons modernes et cohérentes

### 6.2 Tailles Standards

| Contexte | Taille |
|----------|--------|
| Inline (texte) | 16px |
| Boutons | 20px |
| Navigation | 24px |
| Features | 28-32px |
| Hero | 40-48px |

### 6.3 Style

- Stroke width: 2px (default)
- Style: Outlined
- Coins: Arrondis

---

## 7. Effets & Animations

### 7.1 Transitions

```css
/* Standard */
transition: all 0.2s ease;

/* Smooth */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### 7.2 Hover Effects

- **Scale**: `transform: scale(1.02)` pour les cartes
- **Glow**: Box-shadow avec couleur primary
- **Brightness**: Légère augmentation de luminosité

### 7.3 Animations

#### Float
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```

#### Pulse Glow
```css
@keyframes pulse-glow {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}
```

---

## 8. Responsive Design

### 8.1 Breakpoints

| Nom | Valeur | Cible |
|-----|--------|-------|
| sm | 640px | Mobile large |
| md | 768px | Tablet |
| lg | 1024px | Desktop |
| xl | 1280px | Large desktop |
| 2xl | 1536px | Extra large |

### 8.2 Approche

- **Mobile-first**: Styles de base pour mobile
- **Progressive enhancement**: Ajout de complexité pour grands écrans

---

## 9. Accessibilité

### 9.1 Contraste

- Ratio minimum: 4.5:1 pour le texte normal
- Ratio minimum: 3:1 pour le texte large (>18px bold)

### 9.2 Focus States

```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### 9.3 Motion

Respecter `prefers-reduced-motion` pour les utilisateurs sensibles aux animations.

---

## 10. Fichiers & Assets

### 10.1 Structure

```
/public
  /images
    logo.svg
    logo-white.svg
    logo-icon.svg
    favicon.ico
  /videos
    cineflow_promo_hd.mp4
    AI_Video_Editing_Simulation_Generated.mp4
```

### 10.2 Formats

| Type | Format | Usage |
|------|--------|-------|
| Logo | SVG | Web, scalable |
| Logo | PNG | Réseaux sociaux, documents |
| Favicon | ICO, PNG | Navigateurs |
| Images | WebP, PNG | Contenu |
| Vidéos | MP4 (H.264) | Web |

---

## 11. Ton & Voix

### 11.1 Personnalité de Marque

- **Innovant**: À la pointe de la technologie IA
- **Professionnel**: Fiable et expert
- **Accessible**: Simple à comprendre
- **Dynamique**: Énergique et moderne

### 11.2 Style d'Écriture

- Phrases courtes et percutantes
- Vocabulaire technique accessible
- Ton confiant mais pas arrogant
- Focus sur les bénéfices utilisateur

---

## 12. Do's & Don'ts

### ✅ Do's

- Utiliser les couleurs de la palette
- Respecter les espacements définis
- Maintenir la cohérence typographique
- Utiliser les dégradés pour les éléments premium
- Garder le dark theme comme base

### ❌ Don'ts

- Ne pas déformer le logo
- Ne pas utiliser de couleurs hors palette
- Ne pas mélanger les styles de boutons
- Ne pas surcharger les animations
- Ne pas utiliser de polices non approuvées

---

*Document créé pour CineFlow - Décembre 2024*
*Version 1.0*
