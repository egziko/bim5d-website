# BIM 5D - Modern Website

Une plateforme web moderne et performante pour BIM 5D, destinée à présenter les services de modélisation 3D/5D, d'estimation et de gestion de projets de construction.

## 🚀 Caractéristiques

- **Framework**: Next.js 14 avec React 18
- **Styling**: Tailwind CSS pour une mise en page moderne et responsive
- **SEO**: Optimisation complète pour les moteurs de recherche
- **Performance**: Static Generation et Incremental Static Regeneration
- **Typesafety**: TypeScript pour une meilleure qualité du code
- **Accessibilité**: Standards WCAG 2.1 AA

## 📋 Pages

- **Accueil** (`/`) - Présentation générale avec statistiques et appels à l'action
- **Services** (`/services`) - Détail des services d'estimation et de modélisation
- **Plateforme** (`/plateforme`) - Informations sur la plateforme BIM 5D
- **Formation** (`/formation`) - Webinaires et guides de formation
- **Projets** (`/projets`) - Portfolio de projets réalisés
- **Contact** (`/contact`) - Formulaire de contact et informations

## 🛠️ Installation

### Prérequis
- Node.js 18+
- npm 8+

### Installation des dépendances

```bash
npm install
```

## 🏃 Démarrage

### Mode développement
```bash
npm run dev
```
L'application sera disponible à `http://localhost:3000`

### Build pour production
```bash
npm run build
```

### Lancer en production
```bash
npm start
```

## 📁 Structure du projet

```
.
├── app/
│   ├── layout.tsx           # Layout global avec métadonnées SEO
│   ├── globals.css          # Styles globaux
│   ├── page.tsx             # Page d'accueil
│   ├── services/
│   ├── plateforme/
│   ├── formation/
│   ├── projets/
│   └── contact/
├── components/
│   ├── Header.tsx           # Navigation et header
│   └── Footer.tsx           # Footer avec liens et info de contact
├── public/                  # Fichiers statiques
├── tailwind.config.js       # Configuration Tailwind
├── tsconfig.json            # Configuration TypeScript
├── next.config.js           # Configuration Next.js
└── package.json
```

## 🎨 Palette de couleurs

- **Primaire**: Bleu ciel moderne (#0ea5e9)
- **Accent**: Ambre chaleureux (#f59e0b)
- **Sombre**: Gris charbon (#111827)
- **Clair**: Blanc pur (#ffffff)

## 📝 Contenu

Le site utilise du contenu adapté du site original bim5d.ca avec:
- Traduction française complète
- Contenu optimisé pour le SEO
- Métadonnées structurées
- URLs SEO-friendly

## 🔧 Configuration SEO

Le projet est configuré avec:
- Métadonnées de base dans `layout.tsx`
- Open Graph pour les réseaux sociaux
- Sitemap automatique via Next.js
- Robots.txt pour le référencement

## 📱 Responsive Design

Le site est entièrement responsive:
- Mobile: 320px et plus
- Tablet: 768px et plus
- Desktop: 1024px et plus
- Large: 1280px et plus

## ⚡ Optimisations de performance

- Image optimization avec Next.js Image
- Code splitting automatique
- CSS-in-JS minifié
- Compression gzip
- Lazy loading des composants

## 🔗 Liens importants

- **Email**: info@bim5d.org
- **Téléphone**: (438) 874-2498
- **Adresse**: 2475 chemin de Chambly, Longueuil, QC, Canada
- **LinkedIn**: https://www.linkedin.com/company/bim-5d/

## 📄 Licence

MIT

## 👨‍💼 Auteur

Yvon Chabot - BIM 5D
