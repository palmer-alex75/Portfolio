# Trace écrite - Architecture et fonctionnement du Portfolio

## STACK TECHNIQUE

### Backend
- **Node.js** avec **Express.js** (version 5.1.0)
- **EJS** (Embedded JavaScript) version 3.1.10 comme moteur de template
- Architecture serveur simple : un fichier `server.js` qui gère les routes et les données

### Frontend
- **Tailwind CSS** chargé via CDN (https://cdn.tailwindcss.com)
- **JavaScript vanilla** (pas de framework) pour les interactions
- Design responsive avec breakpoints Tailwind (md:, lg:)

### Structure des fichiers
```
Portfolio/
├── server.js              # Serveur Express principal
├── api/index.js           # Handler pour Vercel (serverless)
├── views/
│   └── portfolio.ejs      # Template principal
├── public/
│   └── images/            # Images statiques (logos, photos)
└── vercel.json            # Configuration Vercel
```

## ARCHITECTURE

### Données des projets
Les projets sont stockés directement dans `server.js` et `api/index.js` sous forme d'array JavaScript :
- Chaque projet contient : title, description, summary, domains, logo, date, tools, loomEmbedId, loomAspectRatio, sections (intro, approach, results)

### Rendu côté serveur
- Express utilise EJS pour injecter les données dans le template HTML
- Route principale `app.get("/")` qui :
  1. Récupère les matchs PSG via API
  2. Rend le template `portfolio.ejs` avec les données `{ projects, psgMatches }`

## APIS INTÉGRÉES

### 1. Football Data API
- **Endpoint** : `https://api.football-data.org/v4/teams/524/matches?status=SCHEDULED`
- **Usage** : Récupérer les prochains matchs du PSG (équipe ID 524)
- **Authentification** : Header `X-Auth-Token` avec clé API
- **Traitement** :
  - Filtre les matchs futurs (date > maintenant)
  - Trie par date croissante
  - Prend les 3 premiers
  - Formate les dates en français avec fuseau horaire Europe/Paris

### 2. Formspree
- **Endpoint** : `https://formspree.io/f/mjklkyke`
- **Usage** : Gestion du formulaire de contact
- **Fonctionnement** : Envoi POST avec FormData, réponse JSON

## SECTIONS DU PORTFOLIO

### 1. Header / Navigation
- Logo "PALMER" avec dégradé bleu-rose
- Navigation sticky avec liens d'ancrage (#hero, #about, #skills, #projects, #psg-matches, #contact)
- Responsive : menu caché sur mobile

### 2. Hero Section (#hero)
- Titre principal "Je suis Alexandre Palmer builder sport x tech"
- Description du profil
- CTA vers projets et contact
- Carte avec stats personnelles (Muscu, MMA, PSG, Tech)

### 3. About / Profil (#about)
- Grille 2 colonnes : texte à gauche, photo à droite
- Liste des expériences (EquiData Sport, Go Fusion, BDD & Hackathons)
- Photo de profil avec infos formation

### 4. Skills / Compétences (#skills)
- 4 blocs de compétences en grille responsive
- Chaque bloc contient un titre et une liste à puces
- Effets hover avec translation et ombre

### 5. Projects / Projets (#projects)
- Grille 2 colonnes (1 sur mobile)
- Pour chaque projet :
  - Logo entreprise dans un conteneur avec dégradé
  - Titre, date, outils
  - Description et résumé
  - **Bouton "Voir la vidéo Loom"** (si loomEmbedId existe)
  - Badges des domaines (Travail en équipe, Data, IA, etc.)
  - Section dépliable "Approche & résultats" avec détails

### 6. PSG Matches (#psg-matches)
- Affichage des 3 prochains matchs en grille
- Pour chaque match :
  - Badge compétition
  - Badge DOMICILE/EXTERIEUR
  - Date et heure formatées en français
  - Affichage PSG vs Adversaire
  - Stade si disponible
  - Animations au survol

### 7. Contact (#contact)
- Formulaire avec champs : nom, email, message
- Envoi via Formspree avec JavaScript (fetch API)
- Logos cliquables pour téléphone, email, LinkedIn (avec texte à côté)
- Informations de contact affichées

## FONCTIONNALITÉS JAVASCRIPT

### Modal Loom
- Fonction `openLoomModal(embedId, aspectRatio, title)` :
  - Crée dynamiquement l'iframe Loom avec le bon ratio
  - Affiche la modal en fullscreen avec overlay
  - Bloque le scroll de la page
- Fonction `closeLoomModal()` :
  - Cache la modal
  - Vide l'iframe
  - Restaure le scroll
- Fermeture possible via : bouton X, clic extérieur, touche Escape

### Formulaire de contact
- Validation HTML5 (required, type="email")
- Prévention du submit par défaut
- Envoi asynchrone avec fetch API
- Message de confirmation/erreur via alert

## DESIGN ET STYLE

### Couleurs principales
- Fond : `#030712` (noir profond)
- Texte : `#f1f5f9` (blanc cassé)
- Accents : dégradés `from-sky-400 via-blue-500 to-rose-500`
- Bordures : `rgba(255, 255, 255, 0.1)` (blanc à 10% opacité)

### Effets visuels
- Glassmorphism : `bg-white/5 backdrop-blur` (fond semi-transparent avec flou)
- Dégradés radiaux en arrière-plan pour ambiance
- Animations : `hover:-translate-y-1`, `hover:scale-105`
- Ombres colorées : `shadow-blue-500/10`

### Typographie
- Police système (San Francisco, Segoe UI, etc.)
- Titres : `font-black` ou `font-bold`
- Tracking serré pour un look moderne
- Hiérarchie claire avec tailles variables (text-4xl, text-3xl, text-2xl, etc.)

## DÉPLOIEMENT

### Configuration Vercel
- Fichier `vercel.json` configure les routes serverless
- `api/index.js` exporte l'app Express pour Vercel
- Déploiement automatique depuis GitHub (push sur main)

### Variables d'environnement
- `FOOTBALL_API_KEY` : Clé API Football Data (optionnel, valeur par défaut dans le code)
- `PORT` : Port du serveur (3000 par défaut)

## DONNÉES DES PROJETS

### BDD Histia
- Logo : `/images/histia-logo-2.jpg`
- Loom ID : `49ce4410ce5e4cee8b911aaa7e432923`
- Ratio : 56.25%
- Domaines : Travail en équipe, Data, Communication, Pitch

### Hackathon Malt (Geniathon)
- Logo : `/images/malt-logo.png`
- Loom ID : `3d0c099b8bdd4e5d834ac31c8444c84a`
- Ratio : 66.67%
- Domaines : Travail en équipe, No-Code, IA, Data, Pitch

### BDD Carrefour
- Logo : `/images/carrefour-logo.png`
- Loom ID : `12eec551afde453494373193603844cb`
- Ratio : 56.25%
- Domaines : Travail en équipe, Data, Pitch

## POINTS TECHNIQUES IMPORTANTS

1. **Rendu côté serveur** : Pas de SPA, tout est généré par EJS côté serveur
2. **Pas de build** : Tailwind via CDN, pas de compilation nécessaire
3. **Simplicité** : Architecture minimaliste, pas de dépendances lourdes
4. **Performance** : Chargement lazy des iframes Loom, images optimisées
5. **Responsive** : Design mobile-first avec Tailwind
6. **Accessibilité** : Labels HTML, attributs ARIA, navigation clavier

## FICHIERS STATIQUES

### Images dans `/public/images/`
- `alexandre-palmer.jpg` : Photo de profil
- `histia-logo-2.jpg`, `malt-logo.png`, `carrefour-logo.png` : Logos projets
- `logo_email.jpg`, `logo_linkedin.png`, `logo_téléphone.jpg` : Logos contact

Tous les fichiers statiques sont servis via `express.static()` depuis le dossier `public`.

