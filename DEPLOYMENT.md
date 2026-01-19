# BIM 5D - Modern Website - Configuration & Déploiement

## 📋 Résumé du Projet

Ce projet est une refonte moderne du site **bim5d.ca** avec:
- ✅ Design moderne et professionnel
- ✅ SEO optimisé pour les moteurs de recherche
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Performance optimale (Core Web Vitals)
- ✅ Accessibilité WCAG 2.1 AA
- ✅ Contenu en français (FR-CA)
- ✅ Architecture Next.js 14 + React 18 + TypeScript

## 🎨 Design & Branding

### Palette de couleurs
- **Primaire**: Bleu ciel (#0ea5e9) - Pour la confiance et la technologie
- **Accent**: Ambre (#f59e0b) - Pour l'énergie et l'innovation
- **Sombre**: Charbon (#111827) - Pour le texte et l'autorité
- **Clair**: Blanc (#ffffff) - Pour la clarté

### Typographie
- **Affichage**: Poppins (bold, large) - Pour les titres
- **Corps**: Inter (regular, medium) - Pour le contenu
- **Tailles**: Hiérarchie claire pour la lisibilité

### Composants UI
- Boutons arrondis et modernes
- Cartes avec ombres subtiles
- Gradients pour l'accent visuel
- Animations fluides et transitions
- Icônes Lucide React

## 📑 Pages du Site

### 1. Accueil (`/`)
- Hero avec call-to-action
- Statistiques clés (économies, temps, etc.)
- Aperçu des services
- Section bénéfices BIM 5D
- Section de confiance (expertise)

### 2. Services (`/services`)
- Détail complet des 4 services principaux
- Avantages et bénéfices de chaque service
- Public cible
- Section expertise et expérience
- Statistiques de l'entreprise

### 3. Plateforme (`/plateforme`)
- Explication du concept BIM 5D
- Fonctionnalités principales (6)
- Processus en 4 étapes
- Bénéfices concrets avec chiffres
- CTA pour démonstration

### 4. Formation (`/formation`)
- 3 programmes de formation
- Webinaires professionnels
- Guides de modélisation
- Bénéfices d'apprentissage
- Section accompagnement numérique
- CTA pour inscription

### 5. Projets (`/projets`)
- Galerie de 21 projets réalisés
- Catégorisation par type
- Filtres par catégorie
- Statistiques de succès
- Types: Résidentiel, Commercial, Infrastructure, etc.

### 6. Contact (`/contact`)
- 3 cartes d'information (téléphone, email, adresse)
- Formulaire de contact complet
- Lien vers calendly pour réservation
- Champs: nom, email, téléphone, adresse, objet, message
- Section de consultation

## 🔍 SEO & Métadonnées

### Métadonnées de base
```typescript
- Title: "BIM 5D - Modélisation 3D & Estimation de Projets de Construction"
- Description: "Transformez vos projets... services d'expertise..."
- Keywords: BIM 5D, Modélisation 3D, Estimation, Québec, Architecture, Construction
- Langue: Français (Canada) - fr_CA
```

### Open Graph
- Optimisé pour partage sur réseaux sociaux
- Images d'aperçu (og:image)
- Twitter Card format

### Robots & Crawling
- index: true (permet l'indexation)
- follow: true (suit les liens)
- GoogleBot configuration spécifique
- Sitemap automatique

### Structure des URLs
```
/                    - Accueil
/services            - Services
/plateforme          - Plateforme BIM 5D
/formation           - Formation
/projets             - Projets
/contact             - Contact
```

## 🚀 Installation & Démarrage

### Prérequis
- Node.js 18+ (testé avec 18.18.2)
- npm 8+ ou yarn

### Installation

```bash
cd "i:\workspace\websites\bim5d"
npm install
```

### Développement

#### Option 1: Via VS Code Tasks
1. Appuyez sur `Ctrl+Shift+B` pour voir les tâches disponibles
2. Sélectionnez "Start BIM 5D Dev Server"
3. Le serveur démarre sur `http://localhost:3000`

#### Option 2: Via Terminal
```bash
npm run dev
```

### Production

```bash
npm run build
npm start
```

## 📊 Performance & Optimisations

### Optimisations appliquées
- ✅ Image optimization avec Next.js Image
- ✅ Font optimization avec next/font
- ✅ Code splitting automatique
- ✅ Minification CSS/JS
- ✅ Lazy loading des composants
- ✅ Static Generation quand possible
- ✅ Compression Gzip
- ✅ Cache busting automatique

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## 🔧 Configuration Technique

### Next.js Configuration
```javascript
- reactStrictMode: true
- swcMinify: true (minimisation SWC)
- Headers de sécurité activés
- Redirects configurés
```

### Tailwind Configuration
```javascript
- Custom colors avec extension complète
- Font variables pour Inter et Poppins
- Utilitaires personnalisés (gradient, glass effect)
- Responsive design mobile-first
```

### TypeScript
```javascript
- Strict mode activé
- Module resolution bundler
- JSX react-jsx
- Paths alias configurés (@/*)
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 639px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px - 1279px
- **Large**: 1280px+

### Adaptatifs
- Navigation: Menu burger mobile ↔ Menu horizontal desktop
- Grilles: 1 col mobile ↔ 2-3 cols tablet/desktop
- Typographie: Tailles adaptées par breakpoint
- Espacement: Padding/margin responsif

## 🌐 Contenu & Localisation

### Langue
- Français canadien (fr_CA)
- Tous les textes traduits
- Termes techniques appropriés

### Contenu tiré de bim5d.ca
- Services: Préparation de budget, Contrôle de coût, Modélisation 3D/5D, Appels d'offres
- Formations: Webinaires, Guides, Accompagnement
- Projets: 21 projets diversifiés
- Témoignages: Expertise 40 ans
- CTA: Démonstration, consultation, contact

## 🔐 Sécurité & Headers

### Headers HTTP
```
X-UA-Compatible: IE=edge
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
```

### Bonnes pratiques
- Pas de secrets dans le code
- Environnement variables pour config sensible
- CSP ready pour futur renforcement

## 📦 Dépendances Principales

```json
{
  "react": "^19.2.3",
  "react-dom": "^19.2.3",
  "next": "^14.2.35",
  "tailwindcss": "^4.1.18",
  "typescript": "^5.9.3",
  "lucide-react": "^0.263.1"
}
```

## 🚢 Déploiement

### Sur Vercel (Recommandé)
```bash
# Installation de Vercel CLI
npm install -g vercel

# Déployer
vercel
```

### Sur serveur Node.js
```bash
npm run build
npm start
# ou avec PM2
pm2 start npm --name "bim5d" -- start
```

### Sur Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY .next ./
EXPOSE 3000
CMD ["npm", "start"]
```

## 📊 Fichiers de configuration importants

| Fichier | Purpose |
|---------|---------|
| `tsconfig.json` | Configuration TypeScript |
| `tailwind.config.js` | Styles et thème |
| `next.config.js` | Configuration Next.js |
| `package.json` | Dépendances et scripts |
| `.eslintrc.json` | Linting rules |
| `.gitignore` | Files to ignore en git |

## 🐛 Dépannage

### Le serveur ne démarre pas
- Vérifier Node.js version: `node --version` (doit être >= 18)
- Supprimer node_modules et réinstaller: `rm -r node_modules && npm install`
- Vérifier le port 3000 n'est pas utilisé

### Build échoue
- Vérifier la syntaxe TypeScript: `npm run lint`
- Supprimer .next: `rm -r .next`
- Réessayer: `npm run build`

### Pages ne s'affichent pas
- Vérifier que les fichiers page.tsx existent dans les bons dossiers
- Vérifier la structure du répertoire app/
- Vérifier les imports des composants

## 📞 Informations de Contact

- **Email**: info@bim5d.org
- **Téléphone**: (438) 874-2498
- **Adresse**: 2475 chemin de Chambly, Longueuil, QC, Canada
- **LinkedIn**: https://www.linkedin.com/company/bim-5d/
- **Calendly**: https://calendly.com/yvon-chabot-bim5d/

## ✅ Checklist Finale

- [x] Framework Next.js 14 configuré
- [x] Tailwind CSS avec palette personnalisée
- [x] Toutes les pages créées
- [x] SEO optimisé
- [x] Responsive design
- [x] Composants Header et Footer
- [x] Contenu français
- [x] Build réussi sans erreurs
- [x] Configuration Git
- [x] Documentation complète

## 🎉 Conclusion

Le site BIM 5D moderne est prêt pour déploiement! Il offre une expérience utilisateur professionnelle, optimisée pour les moteurs de recherche et performante sur tous les appareils.

Pour toute question ou amélioration, consultez la documentation Next.js: https://nextjs.org/docs
