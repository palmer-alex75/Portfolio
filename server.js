require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const FOOTBALL_API_KEY = process.env.FOOTBALL_API_KEY;

const projects = [
  {
    title: "BDD Histia",
    description:
      "Outil de veille automatisé pour libérer du temps analyste et suivre 70+ indicateurs clés sur les startups.",
    summary:
      "Recherche ciblée, scoring de pertinence et restitution instantanée pour alimenter les Business Deep Dives.",
    domains: ["Travail en équipe", "Data", "Communication", "Pitch"],
    logo: "/images/histia-logo-2.jpg",
    date: "12/02/2025",
    tools: "Google Sheets, ChatGPT, Looker Studio, Canva",
    loomEmbedId: "49ce4410ce5e4cee8b911aaa7e432923",
    loomAspectRatio: 56.25,
    sections: {
      intro:
        "Le projet Histia visait à automatiser la collecte et la synthèse d'information pour des études de marché plus rapides.",
      approach: [
        "Recherche automatisée et ciblée d'informations fiables et à jour.",
        "Tri et scoring de la pertinence des données selon chaque niche.",
        "Mise en forme structurée pour exploitation immédiate.",
        "Étude de marché qualitative (20+ entretiens) pour orienter la stratégie commerciale.",
      ],
      results: [
        "Outil de veille couvrant 70+ indicateurs (emplois, financements, actu).",
        "Priorisation des niches via Google Sheets + présentation exécutive.",
        "Temps analyste réduit sur les tâches à faible valeur ajoutée.",
      ],
    },
  },
  {
    title: "Hackathon Malt (Geniathon)",
    description:
      "Challenge d'innovation de 48h pour proposer une solution IA/no-code pertinente et déployable pour Malt.",
    summary:
      "Approche design thinking, prototypage rapide et restitution percutante devant le jury.",
    domains: ["Travail en équipe", "No-Code", "IA", "Data", "Pitch"],
    logo: "/images/malt-logo.png",
    date: "12/02/2025",
    tools: "Miro, Google Sheets, Canva, ChatGPT",
    loomEmbedId: "3d0c099b8bdd4e5d834ac31c8444c84a",
    loomAspectRatio: 66.67,
    sections: {
      intro:
        "Le Geniathon Malt est un hackathon intensif où nous devions co-construire une solution innovante et réaliste.",
      approach: [
        "Cadrage du besoin client et des contraintes business.",
        "Idéation collective via design thinking et sélection de la solution.",
        "Prototypage no-code + IA, storyboard sur Miro et pitch deck Canva.",
      ],
      results: [
        "Concept aligné sur les attentes clients et salué pour sa pertinence.",
        "Roadmap de déploiement crédible et concrète.",
        "Présentation visuelle et orale remarquée par le jury.",
      ],
    },
  },
  {
    title: "BDD Carrefour",
    description:
      "Analyse data-driven des achats non-alimentaires G6 pour révéler des leviers d'économies.",
    summary:
      "Nettoyage de 12 fichiers, indicateur stratégique « Enjeux N1 » et dashboard Looker Studio pour guider les négociations.",
    domains: ["Travail en équipe", "Data", "Pitch"],
    logo: "/images/carrefour-logo.png",
    date: "13/05/2025",
    tools: "Google Sheets, ChatGPT, Looker Studio",
    loomEmbedId: "12eec551afde453494373193603844cb",
    loomAspectRatio: 56.25,
    sections: {
      intro:
        "Mission Carrefour : identifier les opportunités de négociation via la centralisation des achats non-alimentaires dans le G6.",
      approach: [
        "Nettoyage/structuration des données (12 fichiers Excel : prix, quantités, fournisseurs).",
        "Création de l'indicateur « Enjeux Niveau 1 » pour estimer les économies au meilleur prix observé.",
        "Dashboard Looker Studio avec KPI, filtres dynamiques et visualisations actionnables.",
      ],
      results: [
        "Plusieurs centaines de milliers d'euros d'économies potentielles mises en lumière.",
        "Priorisation des produits/fournisseurs critiques et suivi 2023 vs 2024.",
        "Livrables opérationnels : dashboard, base nettoyée et recommandations de négociation.",
      ],
    },
  },
];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const fetchPsgMatches = async () => {
  if (!FOOTBALL_API_KEY) {
    console.warn("⚠️  FOOTBALL_API_KEY manquante dans .env");
    return [];
  }
  try {
    const response = await fetch(
      "https://api.football-data.org/v4/teams/524/matches?status=SCHEDULED",
      { headers: { "X-Auth-Token": FOOTBALL_API_KEY } }
    );
    if (!response.ok) throw new Error(`API ${response.status}`);
    const { matches = [] } = await response.json();
    const now = new Date();
    return matches
      .filter((m) => new Date(m.utcDate) > now)
      .sort((a, b) => new Date(a.utcDate) - new Date(b.utcDate))
      .slice(0, 3);
  } catch (err) {
    console.error("❌ Matchs PSG :", err.message);
    return [];
  }
};

app.get("/", async (req, res) => {
  const psgMatches = await fetchPsgMatches();
  res.render("portfolio", { projects, psgMatches });
});

app.listen(PORT, () => {
  console.log(`Portfolio en écoute → http://localhost:${PORT}`);
});
