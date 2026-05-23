const express = require("express");
const path = require("path");

const app = express();
const FOOTBALL_API_KEY =
  process.env.FOOTBALL_API_KEY || "56bd3e8b75a2479f980f29b4350f00e7";

const projects = require("../data/projects");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));

const fetchPsgMatches = async () => {
  try {
    const url =
      "https://api.football-data.org/v4/teams/524/matches?status=SCHEDULED";

    const response = await fetch(url, {
      headers: { "X-Auth-Token": FOOTBALL_API_KEY },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Erreur API PSG:", response.status, errorText);
      throw new Error(`API Error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    const matches = data.matches || [];
    const now = new Date();

    const sortedMatches = matches
      .filter((match) => new Date(match.utcDate) > now)
      .sort((a, b) => new Date(a.utcDate) - new Date(b.utcDate))
      .slice(0, 3);

    console.log(`✅ ${sortedMatches.length} prochain(s) match(s) PSG récupéré(s)`);
    return sortedMatches;
  } catch (error) {
    console.error("❌ Erreur récupération matchs PSG:", error.message);
    return [];
  }
};

app.get("/", async (req, res) => {
  const psgMatches = await fetchPsgMatches();
  res.render("portfolio", { projects, psgMatches });
});

module.exports = app;
