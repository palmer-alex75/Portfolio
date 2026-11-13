const projects = [
  {
    title: "Equidata Sport — Section Actualités & contenus",
    description:
      "Création et animation de la section Actualités du site Equidata Sport, une start-up française spécialisée dans la data prédictive appliquée au saut d'obstacles haut niveau.",
    summary:
      "Mission en cours : je conçois la page, je produis les posts et les vidéos, et je les diffuse sur LinkedIn, Instagram et Facebook pour toucher les prospects ciblés.",
    domains: ["Contenu", "Vidéo", "Site web", "CRM", "Social media"],
    logo: "/images/equidata-logo.svg",
    date: "Depuis octobre 2026 · en cours",
    tools: "Site Equidata, Canva, Meta Business Suite, Claude Code",
    link: "https://www.equidata-sport.com/news",
    linkLabel: "Voir les actualités Equidata",
    sections: {
      intro:
        "J'ai créé la section Actualités du site Equidata Sport pour rendre visibles les analyses data de la start-up et donner aux prospects des preuves concrètes de sa technologie.",
      approach: [
        "Conception de la page Actualités : une carte par contenu, avec une vignette, la date, un résumé « L'essentiel » et un bouton d'accès.",
        "Production de vidéos et d'articles : détection de chevaux de Grand Prix grâce à la donnée, analyses de performers, étude Sportech 2026, témoignages d'ambassadeurs.",
        "Déclinaison bilingue FR/EN des contenus sur LinkedIn, Instagram et Facebook (carrousels, stories, newsletter).",
        "Ciblage des prospects : Top 100 mondial (US, Europe).",
      ],
      results: [
        "Section Actualités en ligne, mise à jour régulièrement avec des vidéos et des articles.",
        "Un point d'entrée unique pour montrer l'expertise d'Equidata aux prospects et aux partenaires.",
        "Résultats vs objectifs : +300% par rapport à septembre 2026.",
      ],
    },
  },
  {
    title: "FormAI — Coach sportif IA",
    description:
      "Coach de poche conçu avec Timothée Carrel pour le cours « Conception et prototypage d'interfaces » à Eugenia School : il reconnaît ta machine ou ton mouvement, compte tes répétitions et corrige ta technique en direct.",
    summary:
      "100% automatisé et sans capteur : tu ouvres l'appli, tu fais ton exercice, le téléphone suit ton mouvement en direct et tu reçois un retour à la fin de ta série.",
    domains: ["IA", "UX/UI", "Prototypage", "Sport"],
    logo: "/images/formai-logo.svg",
    date: "Novembre 2026",
    tools: "Figma, IA",
    link: "https://formai-neon-ten.vercel.app/",
    linkLabel: "Tester FormAI en live (sur mobile)",
    sections: {
      intro:
        "FormAI vise le pratiquant débutant ou intermédiaire qui s'entraîne seul : devant une machine jamais utilisée, il ne sait ni quoi travailler, ni s'il le fait bien.",
      approach: [
        "Reconnaît : une photo de la machine ou un mouvement filmé, et l'IA dit ce que c'est et ce que ça travaille.",
        "Compte : chaque répétition est suivie en direct.",
        "Corrige : un conseil court à la fois, puis un score et l'historique de la séance.",
      ],
      results: [
        "Appli en ligne, utilisable directement depuis un téléphone.",
        "De la réflexion UX sur Figma jusqu'au prototype publié.",
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
    title: "La Fleur de la Paix — Événementiel mariage",
    description:
      "Site fictif d'une entreprise d'événementiel spécialisée dans les mariages, pensé comme un outil interactif qui guide les futurs mariés jusqu'à la décision.",
    summary:
      "Simulateur de devis, simulateur de bouquet et chatbot conseil, avec l'IA intégrée au parcours pour personnaliser chaque projet de mariage.",
    domains: ["IA", "Développement", "Simulateurs", "UX"],
    logo: "/images/fleur-de-la-paix-logo.svg",
    date: "2026",
    link: "https://la-fleur-de-la-paix.vercel.app/",
    sections: {
      intro:
        "La Fleur de la Paix est un projet fictif : un site vitrine d'événementiel mariage transformé en expérience interactive qui aide les couples à se projeter et à décider.",
      approach: [
        "Simulateur de devis : estimation du budget en temps réel selon les options choisies.",
        "Simulateur de bouquet : composition personnalisée des fleurs et du style.",
        "Chatbot IA intégré pour conseiller les futurs mariés et répondre à leurs questions.",
      ],
      results: [
        "Parcours engageant qui transforme la visite du site en projet concret.",
        "Outils d'aide à la décision qui rendent le devis et les choix transparents.",
        "Site déployé et accessible en ligne sur Vercel.",
      ],
    },
  },
];

module.exports = projects;
