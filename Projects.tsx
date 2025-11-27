import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, NotebookPen } from "lucide-react";
import histiaRender from "@/assets/histia-render.pdf";
import carrefourRender from "@/assets/carrefour-render.jpg";
import maltRender from "@/assets/malt-render.jpg";
import histiaLogo from "@/assets/histia-logo.jpg";
import carrefourLogo from "@/assets/carrefour-logo.png";
import maltLogo from "@/assets/malt-logo.png";

const projects = [
  {
    title: "BDD Histia",
    description:
      "Outil de veille automatisé pour libérer du temps analyste et suivre 70+ indicateurs clés sur les startups.",
    summary:
      "Recherche ciblée, scoring de pertinence et restitution instantanée pour alimenter les Business Deep Dives.",
    domains: ["Travail en équipe", "Data", "Communication", "Pitch"],
    logo: histiaLogo,
    render: histiaRender,
    renderType: "pdf",
    link: "#",
    date: "12/02/2025",
    tools: "Google Sheets, ChatGPT, Looker Studio, Canva",
    sections: {
      intro:
        "Le projet Histia visait à automatiser la collecte et la synthèse d’information pour des études de marché plus rapides.",
      approach: [
        "Recherche automatisée et ciblée d’informations fiables et à jour.",
        "Tri et évaluation de la pertinence des données selon chaque niche.",
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
      "Challenge d’innovation de 48h pour proposer une solution IA/no-code pertinente et déployable pour Malt.",
    summary:
      "Approche design thinking, prototypage rapide et restitution percutante devant le jury.",
    domains: ["Travail en équipe", "No-Code", "IA", "Data", "Pitch"],
    logo: maltLogo,
    render: maltRender,
    renderType: "image",
    link: "#",
    date: "12/02/2025",
    tools: "Miro, Google Sheets, Canva, ChatGPT",
    sections: {
      intro:
        "Le Geniathon Malt est un hackathon intensif où nous devions co-construire une solution innovante et réaliste.",
      approach: [
        "Cadrage rapide du besoin client et des contraintes business.",
        "Idéation collective via design thinking et sélection de la solution.",
        "Prototypage no-code + IA, storyboard sur Miro et pitch deck Canva.",
      ],
      results: [
        "Concept aligné sur les attentes clients et salué pour sa pertinence.",
        "Scénario de déploiement crédible et roadmap claire.",
        "Présentation visuelle et orale remarquée par le jury.",
      ],
    },
  },
  {
    title: "BDD Carrefour",
    description:
      "Analyse data-driven des achats non-alimentaires G6 pour révéler des leviers d’économies.",
    summary:
      "Nettoyage de 12 fichiers, indicateur stratégique “Enjeux N1” et dashboard Looker Studio pour guider les négociations.",
    domains: ["Travail en équipe", "Data", "Pitch"],
    logo: carrefourLogo,
    render: carrefourRender,
    renderType: "image",
    link: "#",
    date: "13/05/2025",
    tools: "Google Sheets, ChatGPT, Looker Studio",
    sections: {
      intro:
        "Mission Carrefour : identifier les opportunités de négociation via la centralisation des achats non-alimentaires dans le G6.",
      approach: [
        "Nettoyage et structuration des données provenant de 12 fichiers Excel (prix, quantités, produits, fournisseurs).",
        "Création de l’indicateur “Enjeux Niveau 1” pour estimer les économies en se calant sur le meilleur prix observé.",
        "Dashboard Looker Studio avec KPI, filtres dynamiques et visualisations actionnables pour les acheteurs.",
      ],
      results: [
        "Mise en évidence de plusieurs centaines de milliers d’euros d’économies potentielles.",
        "Priorisation des produits/fournisseurs critiques et suivi 2023 vs 2024.",
        "Livrables opérationnels : dashboard, base nettoyée et recommandations de négociation.",
      ],
    },
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[number] | null>(null);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4 text-foreground">
          Projets <span className="text-gradient">Réalisés</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Une sélection de mes réalisations les plus significatives
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift border-border bg-card group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-32 md:h-40 overflow-hidden bg-gradient-to-r from-background via-muted to-background flex items-center justify-center">
                <img
                  src={project.logo}
                  alt={project.title}
                  className="max-h-full max-w-[70%] object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-40" />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex gap-2 text-sm text-muted-foreground mt-2">
                  <span>{project.date}</span>
                  {project.tools && <span>• {project.tools}</span>}
                </div>
                <CardDescription className="text-base mt-2 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <p className="text-sm text-muted-foreground mt-2">
                  {project.summary}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.domains.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-primary mb-2">
                  {selectedProject.title}
                </DialogTitle>
                <div className="flex gap-2 text-sm text-muted-foreground mb-4">
                  <span>{selectedProject.date}</span>
                  <span>•</span>
                  <span>{selectedProject.tools}</span>
                </div>
              </DialogHeader>
              
              <div className="space-y-6">
                <div 
                  className="relative w-full h-64 rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => window.open(selectedProject.render, '_blank')}
                >
                  {selectedProject.renderType === 'pdf' ? (
                    <div className="w-full h-full bg-muted flex items-center justify-center border-2 border-border hover:border-primary transition-colors">
                      <div className="text-center">
                        <ExternalLink className="w-12 h-12 mx-auto mb-2 text-primary" />
                        <p className="text-sm text-muted-foreground">Cliquez pour ouvrir le PDF</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <img 
                        src={selectedProject.render} 
                        alt={selectedProject.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <ExternalLink className="w-8 h-8 text-primary" />
                      </div>
                    </>
                  )}
                </div>
                
                <div className="space-y-5 rounded-2xl border border-border bg-card/60 p-5">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      Description complète
                    </h3>
                    <DialogDescription className="text-base leading-relaxed text-muted-foreground">
                      {selectedProject.summary}
                    </DialogDescription>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
                        Intro
                      </p>
                      <p className="mt-1 text-muted-foreground">
                        {selectedProject.sections.intro}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
                        Approche
                      </p>
                      <ul className="mt-2 space-y-2">
                        {selectedProject.sections.approach.map((step, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
                        Résultats
                      </p>
                      <ul className="mt-2 space-y-2">
                        {selectedProject.sections.results.map((outcome, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      Outils & Domaines activés
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {selectedProject.domains.map((skill, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-primary text-primary-foreground font-semibold text-sm px-3 py-1"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-muted-foreground">{selectedProject.tools}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
