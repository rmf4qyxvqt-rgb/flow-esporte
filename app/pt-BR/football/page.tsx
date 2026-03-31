"use client";
import { useEffect, useState } from "react";

export default function Football() {
  const [games, setGames] = useState<any[]>([]);
  const [countries, setCountries] = useState<any[]>([]);
  const [leagues, setLeagues] = useState<any[]>([]);
  const [teams, setTeams] = useState<any[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLeague, setSelectedLeague] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");

  useEffect(() => {
    fetch("/api/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      fetch(`/api/leagues?country=${encodeURIComponent(selectedCountry)}`)
        .then((res) => res.json())
        .then((data) => setLeagues(data));
    } else {
      setLeagues([]);
      setSelectedLeague("");
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedLeague) {
      fetch(`/api/teams?league=${encodeURIComponent(selectedLeague)}`)
        .then((res) => res.json())
        .then((data) => setTeams(data));
    } else {
      setTeams([]);
      setSelectedTeam("");
    }
  }, [selectedLeague]);

  useEffect(() => {
    let url = "/api/football";
    if (selectedLeague) {
      url += `?league=${encodeURIComponent(selectedLeague)}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let filtered = data;
        if (selectedTeam) {
          filtered = data.filter(
            (g: any) => g.home === selectedTeam || g.away === selectedTeam
          );
        }
        setGames(filtered);
      })
      .catch(() => setGames([]));
  }, [selectedLeague, selectedTeam]);

  return (
    <main style={{ padding: "20px" }}>
      <div style={{ marginBottom: 20 }}>
        <label>
          País:
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            style={{ marginLeft: 8 }}
          >
            <option value="">Todos</option>
            {countries.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <label style={{ marginLeft: 16 }}>
          Liga:
          <select
            value={selectedLeague}
            onChange={(e) => setSelectedLeague(e.target.value)}
            style={{ marginLeft: 8 }}
            disabled={!leagues.length}
          >
            <option value="">Todas</option>
            {leagues.map((l) => (
              <option key={l.league.id} value={l.league.id}>
                {l.league.name}
              </option>
            ))}
          </select>
        </label>
        <label style={{ marginLeft: 16 }}>
          Time:
          <select
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
            style={{ marginLeft: 8 }}
            disabled={!teams.length}
          >
            <option value="">Todos</option>
            {teams.map((t) => (
              <option key={t.team.id} value={t.team.name}>
                {t.team.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      ⚽ Jogos de Hoje
      {games.length === 0 && <p>Carregando jogos...</p>}

      {games.map((game) => (
        <a key={game.id} href={`/pt-BR/match/${game.id}`} style={{ textDecoration: "none" }}>
          <div className="game-card" style={{ cursor: "pointer" }}>
            <strong style={{ fontSize: 20, color: "#38bdf8" }}>
              {game.home} <span style={{ color: "#fff" }}>vs</span> {game.away}
            </strong>
            <p style={{ color: "#a78bfa", margin: 0 }}>{game.league}</p>
            <p style={{ color: "#fff", margin: 0 }}>{new Date(game.time).toLocaleTimeString()}</p>
          </div>
        </a>
      ))}
    </main>
  );
}