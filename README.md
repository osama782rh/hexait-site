Markdown

# HEXAIT - Site Web d'Entreprise 💻

Site web officiel d'**HEXAIT**, société d'ingénierie informatique spécialisée dans le développement d'applications web modernes, l'architecture cloud et la sécurité.

---

## 🚀 À propos d'HEXAIT

HEXAIT est une société d'ingénierie informatique fondée en 2025, alliant **excellence technique** et **approche artisanale** pour transformer vos idées en produits digitaux performants et sécurisés.

**Notre mission** : Concevoir et livrer des produits digitaux fiables, performants et sécurisés qui accélèrent la croissance de nos clients.

### 🎯 Domaines d'expertise

* **Développement Web** : Applications React/Next.js, APIs REST/GraphQL
* **Cloud & DevOps** : Azure, AWS, Docker, déploiement automatisé
* **Cybersécurité** : Bonnes pratiques, tests de sécurité, code sécurisé
* **Conseil Technique** : Expertise et stratégie IT

---

## 🛠 Stack Technique

### Frontend
* **React 18** avec TypeScript
* **React Router** pour la navigation
* **Tailwind CSS** pour le styling
* **Lucide React** pour les icônes

### Outils de Développement
* **Vite** pour le build et le développement
* **ESLint** et **Prettier** pour la qualité de code

### Déploiement
* Configuration optimisée pour le déploiement cloud
* Images optimisées et chargement lazy
* Métadonnées SEO complètes

---

## 📁 Structure du Projet

apps/web/ ├── src/ │ ├── components/ # Composants réutilisables │ ├── pages/ # Pages de l'application │ ├── helpers/ # Utilitaires et helpers │ └── index.css # Styles globaux ├── public/ # Assets statiques └── package.json # Dépendances du projet


### Pages Principales

* **Accueil** (`/`) - Présentation et valeur proposition
* **Services** (`/services`) - Nos expertises techniques
* **Projets** (`/projets`) - Réalisations et portfolio
* **À propos** (`/a-propos`) - Histoire et valeurs
* **Contact** (`/contact`) - Formulaire de contact

### Pages Légales
* Mentions légales
* Politique de confidentialité
* Conditions générales
* Gestion des cookies

---

## 🎨 Design System

### Couleurs
* **Principal** : Dégradé cyan-bleu (`from-cyan-400 to-blue-500`)
* **Arrière-plan** : Nuances de slate (`slate-900`)
* **Texte** : Blanc et variations de slate

### Typographie
* Police système avec fallback sans-serif
* Hiérarchie claire (h1-h6)
* Espacement cohérent

### Composants UI
* **Cartes** : `card` - Conteneurs avec fond semi-transparent
* **Boutons** : `btn-cta`, `btn-ghost` - Styles primaire et secondaire
* **Sections** : Composant `Section` réutilisable
* **Badges** : `hero-badge` - Éléments d'accentuation

---

## 🚀 Installation et Développement

### Prérequis
* Node.js 18+
* npm ou yarn

### Installation
```bash
cd apps/web
npm install
Développement
Bash

npm run dev
Le site sera accessible sur http://localhost:5173

Build Production
Bash

npm run build
Preview Build
Bash

npm run preview
📱 Fonctionnalités
✨ Caractéristiques Techniques
Design Responsive : Adapté mobile, tablette, desktop

Performance Optimisée : Chargement lazy, images optimisées

SEO-Friendly : Métadonnées complètes, structure sémantique

Accessibilité : ARIA labels, navigation au clavier

Animations : Scroll-triggered animations douces

🎯 Composants Spéciaux
Hero Section avec vidéo de fond

Grilles de services interactives

Carrousels de projets avec modaux

Sections valeurs avec icônes

Call-to-actions stratégiques

🔧 Configuration
Variables d'Environnement
Le projet utilise des variables d'environnement pour la configuration :

Extrait de code

VITE_APP_TITLE="HEXAIT"
VITE_APP_DESCRIPTION="Société d'ingénierie informatique"
Assets
Les assets sont gérés via le helper asset :

TypeScript

import { asset } from "../helpers/assets";
const imageUrl = asset("nom-fichier.jpg");
📞 Informations Légales
HEXAIT SASU

SIRET : 992 031 351 000 16

RCS : Evry 992 031 351

Capital social : 5 000 €

Adresse : 20 Rue du Commandant Maurice Lissac, 91250 Tigery, France

Contact : contact@hexait.fr | +33 7 65 66 82 82

🤝 Contribution
Ce projet étant le site officiel d'HEXAIT, les contributions externes ne sont pas acceptées. Pour toute suggestion, merci de nous contacter via le formulaire de contact.

📄 Licence
Copyright © 2025 HEXAIT SASU. Tous droits réservés. Ce code est la propriété exclusive d'HEXAIT et n'est pas destiné à la réutilisation sans autorisation expresse.

HEXAIT - Expertise technique, vision artisanale 🚀


---

Voulez-vous que je structure une autre documentation ou un autre fichier pour votre projet