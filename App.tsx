import React, { FormEvent, useEffect, useState } from "react";
import Projects from "./Projects";

const navItems = [
  { href: "#hero", label: "Accueil" },
  { href: "#about", label: "Profil" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#ai-news", label: "Actu IA" },
  { href: "#contact", label: "Contact" },
];

const heroStats = [
  { label: "Muscu", value: "2 séances/sem" },
  { label: "MMA", value: "Sparring & Striking" },
  { label: "PSG", value: "fan depuis 2014" },
  { label: "Tech", value: "No-Code + IA" },
] as const;

const PROFILE_IMAGE = "/images/alexandre-palmer.jpg"; // place ton portrait dans public/images

const contactDetails = {
  phone: "06 64 29 03 11",
  email: "alexandrepalmer06@gmail.com",
  linkedin: "https://www.linkedin.com/in/alexandre-palmer/",
  address: "29 rue du Docteur Blanche, 75016 Paris",
};

const experiences = [
  {
    title: "EquiData Sport (start-up)",
    period: "2022 · Stage de seconde",
    details: [
      "Marketing digital & data pour booster la visibilité de la start-up.",
      "Collecte et analyse de signaux marché pour nourrir les campagnes.",
    ],
  },
  {
    title: "Go Fusion (Station F)",
    period: "2025 · Stage Bachelor",
    details: [
      "Chargé de mission SEO dans un incubateur deeptech.",
      "Cartographie des requêtes, optimisation contenu et reporting d’impact.",
    ],
  },
  {
    title: "Business Deep Dives & Hackathons",
    period: "2024-2025",
    details: [
      "BDD Carrefour, Histia, Geniathon Malt : analyse data, dashboards, pitch decks.",
      "Animation d’entretiens marché, restitution pour COMEX et jurys.",
    ],
  },
] as const;

type AiArticle = {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  source: { name: string };
  publishedAt: string;
};

const AI_NEWS_ENDPOINT =
  "https://newsapi.org/v2/everything?q=artificial%20intelligence&language=fr&sortBy=publishedAt&pageSize=6&apiKey=05d311af538a4fdfb02eea14a1f0dc02";

const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    await fetch("https://formspree.io/f/mjklkyke", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });
    alert("Merci pour ton message !");
    form.reset();
  } catch (error) {
    alert("Une erreur est survenue, merci de réessayer.");
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

const App = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(244,63,94,0.25),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(45,212,191,0.15),transparent_40%)]" />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/80 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <a href="#hero" className="text-2xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-rose-500 bg-clip-text text-transparent">
              PA·LMER
            </span>
          </a>

          <nav className="hidden gap-6 md:flex text-sm font-semibold">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

        </div>
      </header>

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <Projects />
        <AiNewsSection />
        <ContactSection />
      </main>

      <footer className="border-t border-white/10 py-8 mt-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-400">
          <span>© {new Date().getFullYear()} Alexandre Palmer • Sport x Tech.</span>
        </div>
      </footer>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-slate-300">
            Sport • IA • Storytelling
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            <span className="text-white">Je suis Alexandre Palmer</span>{" "}
            <span className="text-blue-400">builder sport x tech</span> qui mêle
            IA, data et énergie athlète.
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            En Bachelor “AI Applied to Business” chez Eugenia School, je transforme des problématiques
            business en plans d’action data & IA. Musculation, MMA et passion PSG m’apprennent la discipline
            et l’impact visuel que j’applique à mes Business Deep Dives et hackathons.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow hover:-translate-y-0.5 transition"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Parler collab
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 blur-3xl bg-gradient-to-tr from-blue-600/40 via-rose-500/30 to-emerald-400/20" />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="text-xs text-slate-400 uppercase tracking-[0.4em]">
                  Routine sport x études
                </p>
                <h3 className="mt-3 text-2xl font-bold">Discipline athlète</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Sessions muscu, sparring MMA, veille tech et projets data. Même exigence sur la préparation
                  et la restitution.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/10 bg-slate-900/50 p-4"
                  >
                    <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600/40 to-rose-500/40 p-4 text-sm">
                <p className="uppercase text-[11px] tracking-[0.35em] text-slate-200">
                  Mission
                </p>
                <p className="mt-2 text-white">
                  Construire des expériences qui mixent énergie sportive, intensité PSG et ambition tech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-300">Profil</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Builder formé par le terrain : stages, BDD et hackathons.
          </h2>
          <p className="text-slate-300">
            Je capitalise sur chaque mission pour faire le pont entre business et data. Mes stages en start-up,
            mon passage à Station F et les Business Deep Dives menés pour Histia, Carrefour ou Malt forgent un
            mindset orienté action, pitch et livrables visuels.
          </p>

          <div className="space-y-4">
            {experiences.map((exp) => (
              <div key={exp.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span className="uppercase tracking-[0.3em]">{exp.period}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-white">{exp.title}</h3>
                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                  {exp.details.map((detail) => (
                    <li key={detail}>• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="relative max-w-sm mx-auto">
          <div className="absolute inset-0 blur-3xl bg-gradient-to-tr from-blue-600/30 via-rose-500/20 to-emerald-400/20" />
          <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-4 backdrop-blur">
            <img
              src={PROFILE_IMAGE}
              alt="Portrait d'Alexandre Palmer"
              className="aspect-[3/4] w-full rounded-2xl object-cover border border-white/10"
            />
            <div className="mt-4 text-center space-y-1">
              <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Eugenia School</p>
              <p className="text-lg font-semibold text-white">Bachelor AI Applied to Business</p>
              <p className="text-sm text-slate-300">Promo en cours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const skillsBlocks = [
    {
      title: "Bases du code & no-code",
      items: [
        "Automatisations IA / no-code",
        "Structuration via Google Sheets",
      ],
    },
    {
      title: "Data & IA",
      items: [
        "Introduction aux bases de données",
        "Looker Studio, premiers workflows IA",
      ],
    },
    {
      title: "Business & finances",
      items: ["Marketing & finances", "Modèles économiques"],
    },
    {
      title: "Pitch & communication",
      items: [
        "Storytelling exécutif",
        "Pitching jury / clients",
        "Design de présentations",
      ],
    },
  ] as const;

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.4em] text-rose-400">
            Compétences
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Ce que je mets sur le terrain pour vos projets.
          </h2>
          <p className="mt-4 text-slate-300">
            Bases solides en code/no-code, data, IA et storytelling business. Chaque mission est
            travaillée comme une préparation sportive : structure, répétition, impact visuel.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillsBlocks.map((block) => (
            <div
              key={block.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:-translate-y-1 transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <h3 className="text-lg font-semibold text-white">{block.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {block.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AiNewsSection = () => {
  const [articles, setArticles] = useState<AiArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(AI_NEWS_ENDPOINT);
        if (!response.ok) {
          throw new Error("Impossible de récupérer les actualités IA.");
        }
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "short",
    });

  return (
    <section id="ai-news" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-300">
              Actualités IA
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              Veille temps réel sur l’intelligence artificielle.
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl">
              Je reste branché sur les tendances IA pour nourrir mes projets et
              proposer des solutions à jour. Voici ce qui m’inspire cette
              semaine.
            </p>
          </div>
          <span className="text-xs uppercase tracking-[0.4em] text-slate-400">
            data source: newsapi.org
          </span>
        </div>

        <div className="mt-10">
          {isLoading && (
            <div className="text-center text-slate-400">Chargement...</div>
          )}

          {error && (
            <div className="text-center text-rose-400">
              {error} (pense à vérifier ton quota ou ta connexion)
            </div>
          )}

          {!isLoading && !error && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article: AiArticle) => (
                <article
                  key={article.url}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:-translate-y-1 transition shadow-xl shadow-blue-500/5"
                >
                  {article.urlToImage && (
                    <div className="h-40 w-full overflow-hidden rounded-2xl mb-4">
                      <img
                        src={article.urlToImage}
                        alt={article.title}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      />
                    </div>
                  )}
                  <p className="text-[11px] uppercase tracking-[0.35em] text-blue-300">
                    {article.source?.name || "Source inconnue"} •{" "}
                    {formatDate(article.publishedAt)}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-white line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 line-clamp-3">
                    {article.description || "Pas de description disponible."}
                  </p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center text-sm font-semibold text-blue-300 hover:text-blue-100"
                  >
                    Lire l’article →
                  </a>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-300">
            Contact
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Prêt à monter sur le ring pour votre projet.
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Dites-moi ce que vous voulez construire. On structure, on s’aligne, on délivre.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xl">
          <form className="space-y-4" onSubmit={handleContactSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-200" htmlFor="name">
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-200" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-200" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-rose-500 px-6 py-3 text-sm font-semibold text-white shadow shadow-blue-500/30 transition hover:-translate-y-0.5"
            >
              Envoyer
            </button>
          </form>

          <div className="mt-6 text-sm text-slate-300 flex flex-wrap gap-4 justify-between">
            <span>
              Téléphone :{" "}
              <a href={`tel:${contactDetails.phone.replace(/\s/g, "")}`} className="text-blue-300 hover:underline">
                {contactDetails.phone}
              </a>
            </span>
            <span>
              Email :{" "}
              <a href={`mailto:${contactDetails.email}`} className="text-blue-300 hover:underline">
                {contactDetails.email}
              </a>
            </span>
            <span>
              LinkedIn :{" "}
              <a href={contactDetails.linkedin} target="_blank" rel="noreferrer" className="text-blue-300 hover:underline">
                alexandre-palmer
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;

