# Portfolio Alexandre Palmer

Portfolio personnel développé avec Express.js et EJS.

## 🚀 Déploiement sur Vercel

### Étape 1 : Pousser le code sur GitHub

1. Vérifiez que tous vos changements sont commités :
```bash
git add .
git commit -m "Préparation pour déploiement Vercel"
```

2. Poussez sur GitHub :
```bash
git push origin main
```

### Étape 2 : Connecter votre repo à Vercel

1. Allez sur [vercel.com](https://vercel.com) et connectez-vous avec votre compte GitHub
2. Cliquez sur **"Add New Project"** ou **"New Project"**
3. Sélectionnez votre repository `Portfolio` depuis la liste
4. Vercel détectera automatiquement la configuration

### Étape 3 : Configuration Vercel

Vercel devrait détecter automatiquement :
- **Framework Preset** : Other
- **Root Directory** : `./` (laisser par défaut)
- **Build Command** : (laisser vide, pas besoin de build)
- **Output Directory** : (laisser vide)

### Étape 4 : Variables d'environnement (optionnel)

Si vous voulez utiliser une clé API différente pour l'API Football Data :
- Allez dans **Settings** > **Environment Variables**
- Ajoutez `FOOTBALL_API_KEY` avec votre clé

### Étape 5 : Déployer

1. Cliquez sur **"Deploy"**
2. Attendez quelques secondes que le déploiement se termine
3. Votre portfolio sera accessible via l'URL fournie par Vercel (ex: `portfolio-xxx.vercel.app`)

### 🔄 Déploiements automatiques

À chaque push sur la branche `main` de GitHub, Vercel redéploiera automatiquement votre portfolio !

## 📝 Structure du projet

```
Portfolio/
├── api/
│   └── index.js          # Handler Vercel (serverless function)
├── public/
│   └── images/          # Images statiques
├── views/
│   └── portfolio.ejs    # Template EJS
├── server.js            # Serveur Express (pour développement local)
├── vercel.json          # Configuration Vercel
└── package.json
```

## 🛠️ Développement local

```bash
npm install
npm start
```

Le portfolio sera accessible sur `http://localhost:3000`

