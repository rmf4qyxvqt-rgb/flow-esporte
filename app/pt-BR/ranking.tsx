"use client";
import { useEffect, useState } from "react";

export default function Ranking() {
  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    // Simulação de ranking
    setUsers([
      { name: "Analista 1", acertos: 12 },
      { name: "Analista 2", acertos: 10 },
      { name: "Analista 3", acertos: 8 },
    ]);
  }, []);
  return (
    <main style={{ padding: 20 }}>
      <h2>🏆 Ranking de Analistas</h2>
      <ol>
        {users.map((u, i) => (
          <li key={i}>
            {i + 1}º {u.name} — {u.acertos} acertos
          </li>
        ))}
      </ol>
    </main>
  );
}
