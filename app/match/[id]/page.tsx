"use client";
import { useEffect, useState } from "react";

export default function MatchPage({ params }: { params: { id: string } }) {
  const [analysis, setAnalysis] = useState("");
  useEffect(() => {
    fetch(`/api/analyze/${params.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: `Gerar análise detalhada do jogo ${params.id}` })
    })
      .then(res => res.json())
      .then(data => setAnalysis(data.analysis || ""));
  }, [params.id]);
  return (
    <main>
      <h1>Detalhes do Jogo {params.id}</h1>
      <div className="my-4 bg-black bg-opacity-30 rounded p-4">
        <h2 className="font-bold mb-2">Análise AI</h2>
        <div>{analysis || "Carregando análise..."}</div>
      </div>
      {/* Estatísticas, histórico */}
    </main>
  );
}