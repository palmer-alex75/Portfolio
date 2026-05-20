# Prompt pour ChatGPT - Rendu Portfolio

Copie-colle ce prompt dans ChatGPT pour générer ton document PDF de 3 pages :

---

**Prompt à donner à ChatGPT :**

Je dois créer un document PDF de 3 pages pour le rendu de mon portfolio. Le document doit contenir :
1. Les choix techniques et la stratégie de valorisation
2. Le lien de mon portfolio en production
3. Des explications détaillées sur mes choix

Voici les informations sur mon portfolio :

## CONTEXTE ET OBJECTIF
Portfolio personnel d'Alexandre Palmer, étudiant en Bachelor "AI Applied to Business" chez Eugenia School. Le portfolio met en avant mon profil "Sport x Tech" en combinant mes compétences en data/IA avec ma passion pour le sport (musculation, MMA, PSG).

## STACK TECHNIQUE CHOISIE

### Backend
- **Node.js** avec **Express.js** : Choix pour sa simplicité et sa performance pour un portfolio avec des fonctionnalités serveur (récupération d'APIs, rendu de templates)
- **EJS (Embedded JavaScript)** : Template engine pour générer du HTML dynamique côté serveur, permettant d'injecter les données projets et matchs PSG directement dans le template

### Frontend
- **Tailwind CSS** (via CDN) : Framework CSS utility-first choisi pour :
  - Développement rapide sans fichier CSS séparé
  - Design moderne et responsive natif
  - Palette de couleurs cohérente (fond sombre #030712, accents bleu/rose)
- **JavaScript vanilla** : Pas de framework frontend lourd, juste du JS natif pour les interactions (modal Loom, formulaire de contact)

### Déploiement
- **Vercel** : Plateforme serverless choisie pour :
  - Déploiement automatique depuis GitHub
  - Performance et CDN global
  - Configuration simple avec vercel.json
  - Fonctions serverless pour l'API Express

## DESIGN ET DIRECTION ARTISTIQUE

### Inspirations
- Design moderne "dark mode" avec dégradés subtils
- Esthétique tech/sportive : fond sombre (#030712) avec accents colorés (bleu #3b82f6, rose #f43f5e)
- Effets de glassmorphism (backdrop-blur, bordures semi-transparentes)
- Animations subtiles au survol (translate-y, scale)

### Palette de couleurs
- Fond principal : #030712 (noir profond)
- Texte : #f1f5f9 (blanc cassé)
- Accents : dégradés bleu-rose pour le branding "PALMER"
- Sections : bordures blanches à 10% d'opacité

### Typographie
- Police système (San Francisco, Segoe UI, etc.)
- Hiérarchie claire : titres en font-black, textes en font-semibold
- Tracking serré pour un look moderne

## APIS INTÉGRÉES

### 1. Football Data API (api.football-data.org)
- **Usage** : Afficher les 3 prochains matchs du PSG
- **Pourquoi** : Montrer ma passion PSG de manière dynamique et technique
- **Fonctionnalités** :
  - Récupération des matchs programmés (status=SCHEDULED)
  - Filtrage des matchs futurs
  - Formatage des dates en français avec fuseau horaire Europe/Paris
  - Affichage du stade, compétition, et indication domicile/extérieur

### 2. Formspree (formspree.io)
- **Usage** : Gestion du formulaire de contact
- **Pourquoi** : Solution simple, gratuite, sans backend complexe
- **Fonctionnalités** : Envoi d'emails automatique, validation côté client

## SECTIONS ET CONTENU

### 1. Hero Section
- Présentation "builder sport x tech"
- Stats personnelles (Muscu, MMA, PSG, Tech)
- Call-to-action vers projets et contact

### 2. About / Profil
- Expériences professionnelles :
  - EquiData Sport (2022 - Stage de seconde)
  - Go Fusion Station F (2025 - Stage Bachelor)
  - Business Deep Dives & Hackathons (2024-2025)
- Photo de profil avec infos formation

### 3. Skills / Compétences
- 4 blocs : Bases code/no-code, Data & IA, Business & finances, Pitch & communication
- Mise en avant des compétences transversales

### 4. Projects / Projets
- 3 projets détaillés :
  - **BDD Histia** : Outil de veille automatisé (70+ indicateurs)
  - **Hackathon Malt (Geniathon)** : Solution IA/no-code en 48h
  - **BDD Carrefour** : Analyse data-driven des achats G6
- Chaque projet contient :
  - Logo entreprise
  - Description et résumé
  - Vidéo Loom intégrée (modal)
  - Domaines activés (badges)
  - Détails approche/résultats (section dépliable)

### 5. PSG Matches
- Affichage dynamique des 3 prochains matchs
- Design avec badges compétition, date/heure formatées, stade

### 6. Contact
- Formulaire Formspree
- Logos cliquables pour téléphone, email, LinkedIn (avec texte)
- Informations de contact visibles

## FONCTIONNALITÉS TECHNIQUES

### Vidéos Loom
- Intégration via codes d'intégration officiels
- Modal JavaScript pour affichage sans quitter la page
- Ratios d'aspect adaptés par vidéo (56.25% ou 66.67%)
- Fermeture via bouton X, clic extérieur, ou touche Escape

### Responsive Design
- Mobile-first avec breakpoints Tailwind (md:, lg:)
- Navigation adaptative (menu burger sur mobile)
- Grilles flexibles pour projets et matchs

### Performance
- Chargement lazy des iframes Loom
- Images optimisées dans /public/images
- CDN Vercel pour distribution globale

## STRATÉGIE DE VALORISATION

### Positionnement
- **"Sport x Tech"** : Différenciation par la combinaison unique sport/tech
- Storytelling autour de la discipline athlète appliquée au travail
- Mise en avant des Business Deep Dives et hackathons

### Expériences mises en avant
1. **Stages** : EquiData Sport, Go Fusion (Station F)
2. **Projets clients** : Histia, Carrefour (analyse data, dashboards)
3. **Hackathons** : Geniathon Malt (48h, solution IA/no-code)
4. **Compétences** : Code/no-code, Data, IA, Pitch

### Points forts valorisés
- Approche terrain (stages + projets réels)
- Livrables opérationnels (dashboards Looker Studio, pitch decks)
- Capacité à pitcher (jurys, COMEX)
- Polyvalence (data, IA, business, communication)

## LIEN DE PRODUCTION
[À compléter avec ton URL Vercel, par exemple : https://portfolio-palmer.vercel.app]

## DÉCISIONS TECHNIQUES REMARQUABLES

1. **Express + EJS plutôt que React** : Choix pour simplicité et performance, pas besoin de SPA complexe
2. **Tailwind CDN** : Rapidité de développement, pas de build nécessaire
3. **Vercel serverless** : Déploiement automatique, scaling automatique
4. **APIs externes** : Démontre capacité d'intégration et veille technique
5. **Modal Loom** : UX optimale pour présenter les projets sans quitter la page

---

**Instructions pour ChatGPT :**
À partir de ces informations, génère un document PDF de 3 pages professionnel qui :
- Page 1 : Choix techniques (stack, APIs, architecture) et justifications
- Page 2 : Design & Direction Artistique + Stratégie de valorisation
- Page 3 : Fonctionnalités techniques + Expériences mises en avant + Lien production

Le document doit être structuré, professionnel, et mettre en avant la réflexion derrière chaque choix technique et de design.

