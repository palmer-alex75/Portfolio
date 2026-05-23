const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const FOOTBALL_API_KEY =
  process.env.FOOTBALL_API_KEY || "56bd3e8b75a2479f980f29b4350f00e7";

// Données projets (reprennent le contenu de Projects.tsx)
const projects = [
  {
    title: "Equidata Sport — Stratégie SEO & GEO",
    description:
      "Audit stratégique SEO/GEO réalisé pour Equidata Sport, une startup française spécialisée dans l'IA prédictive appliquée au saut d'obstacles haut niveau.",
    summary:
      "Analyse du positionnement Google et IA (ChatGPT, Claude, Gemini), identification des opportunités de visibilité et conception d'un système de production de contenu industrialisé via agents IA.",
    domains: ["Stratégie", "SEO & GEO", "IA", "Audit", "Pitch"],
    logo: "/images/equidata-logo.svg",
    date: "Avril 2026",
    tools: "Dust, ChatGPT, SE Ranking, Canva",
    loomVideo: "https://www.loom.com/share/a6fc3a2a012b4138875515956414f976",
    loomEmbedId: "a6fc3a2a012b4138875515956414f976",
    loomAspectRatio: 56.25,
    sections: {
      intro:
        "Le projet visait à transformer Equidata Sport en référence informationnelle et IA du marché du CSO haut niveau — être citée par les LLMs, pas seulement bien rankée.",
      approach: [
        "Audit SEO : analyse du ranking, mots-clés stratégiques et visibilité concurrentielle (SE Ranking).",
        "Audit GEO : tests de présence sur 3 LLMs via 5 prompts ciblés (ChatGPT, Claude, Gemini).",
        "Identification des opportunités éditoriales : 4 piliers (éducatif, actualité, data, preuve).",
        "Conception d'un système multi-agents IA (Dust) pour industrialiser la production de contenus SEO/GEO structurés.",
        "Structuration d'une roadmap 6 mois avec KPIs de visibilité Google et citabilité IA.",
      ],
      results: [
        "Mise en évidence d'une quasi-invisibilité SEO/GEO malgré une technologie différenciante (1/20 mots-clés positionnés).",
        "Identification d'une catégorie libre : aucun concurrent ne combine IA prédictive + CSO + détection de potentiel.",
        "Stratégie éditoriale orientée intention de recherche investisseur et citabilité IA.",
        "Architecture de production automatisée : agent cerveau projet → agent rédacteur → article SEO/GEO optimisé.",
        "Positionnement stratégique : faire d'Equidata \"la réponse\" plutôt qu'un simple site visible.",
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
    loomVideo: "https://www.loom.com/share/3d0c099b8bdd4e5d834ac31c8444c84a?sid=298cadad-54f8-4649-8fe6-d4e76a267b11",
    loomEmbedId: "3d0c099b8bdd4e5d834ac31c8444c84a",
    loomAspectRatio: 66.66666666666666,
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
    title: "AdvisorAI — Investor Intelligence",
    description:
      "SaaS d'analyse investisseur alimentée par l'IA pour évaluer les idées business comme un VC professionnel en 10-15 secondes.",
    summary:
      "Dashboard complet avec scoring, taille marché, benchmark concurrentiel, évaluation d'équipe et prévisions financières générées via ingénierie de prompt optimisée.",
    domains: ["IA", "Développement", "Prompt Engineering", "Multi-langue"],
    logo: "/images/advisorai-logo.svg",
    date: "2026",
    tools: "Next.js 16, React 19, TypeScript, Mistral AI",
    link: "https://app-investisseur-advisor.vercel.app/",
    loomVideo: "https://www.loom.com/share/815e50e6179d44e491101c268430ea57",
    loomEmbedId: "815e50e6179d44e491101c268430ea57",
    loomAspectRatio: 56.25,
    sections: {
      intro:
        "AdvisorAI est un SaaS fullstack conçu pour simuler l'analyse d'un investisseur VC professionnel via un pipeline de prompt engineering optimisé.",
      approach: [
        "Ingénierie de prompt multi-dimensionnelle : scoring VC réaliste avec règles explicites (TAM, équipe, exécution).",
        "Architecture bilingue (FR/EN) avec cache localStorage et traduction instantanée via API dédiée.",
        "System prompt qualité : prompts qui demandent au modèle d'être un senior VC avec règles de scoring précises et reproductibles.",
      ],
      results: [
        "Dashboard investisseur 9 sections (pitch, marché, équipe, financials, SWOT, roadmap, recommandations).",
        "Support multi-langue transparent : cache des analyses, traduction sous 5s au changement de langue.",
        "Analyses de qualité professionnelle : scores réalistes (45-85 en majorité), pas d'inflation de verdicts.",
      ],
    },
  },
  {
    title: "BDD Carrefour",
    description:
      "Analyse data-driven des achats non-alimentaires G6 pour révéler des leviers d'économies.",
    summary:
      "Nettoyage de 12 fichiers, indicateur stratégique \"Enjeux N1\" et dashboard Looker Studio pour guider les négociations.",
    domains: ["Travail en équipe", "Data", "Pitch"],
    logo: "/images/carrefour-logo.png",
    date: "13/05/2025",
    tools: "Google Sheets, ChatGPT, Looker Studio",
    loomVideo: "https://www.loom.com/share/12eec551afde453494373193603844cb",
    loomEmbedId: "12eec551afde453494373193603844cb",
    loomAspectRatio: 56.25,
    sections: {
      intro:
        "Mission Carrefour : identifier les opportunités de négociation via la centralisation des achats non-alimentaires dans le G6.",
      approach: [
        "Nettoyage/structuration des données (12 fichiers Excel : prix, quantités, fournisseurs).",
        "Création de l'indicateur \"Enjeux Niveau 1\" pour estimer les économies au meilleur prix observé.",
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

// Configuration d'Express + EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Fichiers statiques (si tu veux ajouter des images, CSS custom, etc.)
app.use(express.static(path.join(__dirname, "public")));

const fetchPsgMatches = async () => {
  try {
    const url =
      "https://api.football-data.org/v4/teams/524/matches?status=SCHEDULED";
    
    const response = await fetch(url, {
      headers: {
        "X-Auth-Token": FOOTBALL_API_KEY,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Erreur API PSG:", response.status, errorText);
      throw new Error(`API Error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    const matches = data.matches || [];
    
    if (matches.length === 0) {
      console.log("⚠️ Aucun match programmé pour le PSG");
      return [];
    }
    
    // Filtrer pour ne garder que les matchs futurs (au cas où certains seraient encore SCHEDULED mais passés)
    const now = new Date();
    const futureMatches = matches.filter(match => {
      const matchDate = new Date(match.utcDate);
      return matchDate > now;
    });
    
    if (futureMatches.length === 0) {
      console.log("⚠️ Aucun match futur trouvé pour le PSG");
      return [];
    }
    
    // Trier par date croissante et prendre les 3 prochains matchs
    const sortedMatches = futureMatches
      .sort((a, b) => new Date(a.utcDate) - new Date(b.utcDate))
      .slice(0, 3);
    
    console.log(`✅ ${sortedMatches.length} prochain(s) match(s) PSG récupéré(s)`);
    if (sortedMatches.length > 0) {
      const nextMatchDate = new Date(sortedMatches[0].utcDate);
      console.log(`   Prochain match: ${nextMatchDate.toLocaleString('fr-FR')}`);
    }
    return sortedMatches;
  } catch (error) {
    console.error("❌ Erreur récupération matchs PSG:", error.message);
    return [];
  }
};

// Route principale
app.get("/", async (req, res) => {
  const psgMatches = await fetchPsgMatches();
  // Debug: vérifier que les projets ont bien loomEmbedId
  console.log("Projets avec loomEmbedId:");
  projects.forEach(p => {
    console.log(`  - ${p.title}: ${p.loomEmbedId ? 'OK' : 'MANQUANT'}`);
  });
  res.render("portfolio", { projects, psgMatches });
});

app.listen(PORT, () => {
  console.log(`Portfolio Node.js en écoute sur http://localhost:${PORT}`);
});


