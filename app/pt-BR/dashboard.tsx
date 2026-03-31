"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState<any>({});
  useEffect(() => {
    // Simulação de tendências
    setStats({
      gols: 2.7,
      empates: 28,
      vitoriasCasa: 45,
      vitoriasFora: 27,
      over25: 61,
      under25: 39,
    });
  }, []);
  return (
    <main style={{ padding: 20 }}>
      <h2>📈 Tendências Globais</h2>
      <ul>
        <li>Média de gols: {stats.gols}</li>
        <li>% Empates: {stats.empates}%</li>
        <li>% Vitórias Casa: {stats.vitoriasCasa}%</li>
        <li>% Vitórias Fora: {stats.vitoriasFora}%</li>
        <li>Over 2.5: {stats.over25}%</li>
        <li>Under 2.5: {stats.under25}%</li>
      </ul>
    </main>
  );
}
