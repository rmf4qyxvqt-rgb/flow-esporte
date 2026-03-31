"use client";

import { useEffect, useState } from "react";

export default function FootballPage() {
  const [games, setGames] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/football")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <main style={{ padding: "20px" }}>
      <h2>⚽ Jogos de Futebol Hoje</h2>
      {games.length === 0 && <p>Carregando jogos...</p>}
      {games.map((game, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          <strong>
            {game.strHomeTeam} vs {game.strAwayTeam}
          </strong>
          <p>{game.strLeague}</p>
          <p>{game.strTime}</p>
        </div>
      ))}
    </main>
  );
}
