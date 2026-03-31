"use client";
import { useEffect, useState } from "react";

export default function Basketball() {
  const [games, setGames] = useState<any[]>([]);
  useEffect(() => {
    fetch("/api/basketball").then(res => res.json()).then(data => setGames(data.data || []));
  }, []);
  return (
    <main>
      <h1>Basquete</h1>
      <ul className="space-y-2">
        {games.map((game: any) => (
          <li key={game.id} className="bg-black bg-opacity-30 rounded p-2">
            <div>{game.home_team?.full_name} x {game.visitor_team?.full_name} - {game.date?.slice(0,10)}</div>
            {/* Aqui pode chamar análise AI por jogo */}
          </li>
        ))}
      </ul>
    </main>
  );
}