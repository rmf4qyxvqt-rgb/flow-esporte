"use client";

import { useEffect, useState, use } from "react";

function AlertForm({ matchId }: { matchId: string }) {
  const [email, setEmail] = useState("");
  const [type, setType] = useState("gol");
  const [msg, setMsg] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setMsg("");
    const res = await fetch("/api/alerts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, type, matchId }),
    });
    const data = await res.json();
    setMsg(data.message);
  };
  return (
    <form onSubmit={handleSubmit} style={{ margin: "24px 0" }}>
      <h4>Receber alerta:</h4>
      <input
        type="email"
        placeholder="Seu email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        style={{ marginRight: 8 }}
      />
      <select value={type} onChange={e => setType(e.target.value)} style={{ marginRight: 8 }}>
        <option value="gol">Gol</option>
        <option value="inicio">Início do jogo</option>
        <option value="final">Final do jogo</option>
      </select>
      <button type="submit">Cadastrar alerta</button>
      {msg && <span style={{ marginLeft: 12 }}>{msg}</span>}
    </form>
  );
}

function getStat(stats: any[], type: string) {
  const stat = stats.find((s) => s.type === type);
  return stat ? stat.value : "-";
}

export default function MatchPage({ params }: any) {
  // Next.js recomenda: params é Promise, usar React.use()
  const { id } = typeof params.then === "function" ? use(params) : params;
  const [stats, setStats] = useState<any[]>([]);
  const [analysis, setAnalysis] = useState<string>("");
  const [loadingAnalysis, setLoadingAnalysis] = useState(true);

  useEffect(() => {
    fetch(`/api/stats/${id}`)
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, [id]);

  useEffect(() => {
    setLoadingAnalysis(true);
    fetch(`/api/analyze/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: `Gerar análise detalhada do jogo ${id}` })
    })
      .then(res => res.json())
      .then(data => setAnalysis(data.analysis || ""))
      .finally(() => setLoadingAnalysis(false));
  }, [id]);

  // Gráfico simples de barras horizontais
  function Bar({ value, max, color }: { value: number; max: number; color: string }) {
    const width = max > 0 ? (100 * value) / max : 0;
    return (
      <div style={{ background: "#eee", height: 12, borderRadius: 6, margin: "4px 0" }}>
        <div style={{ width: `${width}%`, background: color, height: 12, borderRadius: 6 }} />
      </div>
    );
  }

  // Comparar estatísticas lado a lado
  function StatCompare({ type }: { type: string }) {
    if (stats.length < 2) return null;
    const home = stats[0];
    const away = stats[1];
    const homeVal = Number(getStat(home.statistics, type)) || 0;
    const awayVal = Number(getStat(away.statistics, type)) || 0;
    const max = Math.max(homeVal, awayVal, 1);
    return (
      <div style={{ margin: "8px 0" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ width: 100 }}>{home.team.name}</span>
          <Bar value={homeVal} max={max} color="#4f8cff" />
          <span style={{ margin: "0 8px" }}>{type}</span>
          <Bar value={awayVal} max={max} color="#ff4f4f" />
          <span style={{ width: 100, textAlign: "right" }}>{away.team.name}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
          <span>{homeVal}</span>
          <span>{awayVal}</span>
        </div>
      </div>
    );
  }

  // Estatísticas principais para comparar
  const mainStats = [
    "Possession (%)",
    "Total Shots",
    "Shots on Goal",
    "Shots off Goal",
    "Blocked Shots",
    "Fouls",
    "Corners",
    "Yellow Cards",
    "Red Cards",
    "Offsides",
    "Goalkeeper Saves",
    "Passes Accurate",
    "Passes Total",
  ];

  return (
    <main style={{ padding: "20px" }}>
      <h2>🧠 Análise por IA</h2>
      <div style={{
        background: '#23272f',
        color: '#f8fafc',
        borderRadius: 18,
        boxShadow: '0 2px 16px #7c3aed22',
        padding: '24px 20px',
        marginBottom: 28,
        fontSize: 18,
        fontWeight: 500,
        minHeight: 80,
        whiteSpace: 'pre-line',
      }}>
        {loadingAnalysis ? 'Gerando análise...' : (analysis || 'Nenhuma análise disponível para este jogo.')}
      </div>
      <h2>📊 Estatísticas da Partida</h2>
      <AlertForm matchId={id} />
      {stats.length === 0 && <div className="feedback-success">Carregando...</div>}
      {stats.length === 1 && !stats[0]?.statistics?.length && (
        <div className="feedback-error">Nenhuma estatística disponível para este jogo.</div>
      )}
      {stats.length >= 2 && (
        <div style={{ margin: "24px 0" }}>
          {mainStats.map((type) => (
            <StatCompare key={type} type={type} />
          ))}
        </div>
      )}
      <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
        {stats.map((team, index) => (
          <div key={index} className="card" style={{ minWidth: 200 }}>
            <h3>{team.team.name}</h3>
            {team.statistics && team.statistics.length > 0 ? (
              team.statistics.map((stat: any, i: number) => (
                <p key={i}>
                  {stat.type}: {stat.value}
                </p>
              ))
            ) : (
              <p>Sem estatísticas para este time.</p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
