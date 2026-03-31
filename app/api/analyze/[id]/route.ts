import { NextRequest, NextResponse } from 'next/server';
import { generateAnalysis } from '../../../../lib/analyzer';

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const { prompt } = await req.json();
  const analysis = await generateAnalysis(prompt);
  return NextResponse.json({ analysis });
}

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  try {
    // Extrai o id da URL
    const url = new URL(req.url);
    const paths = url.pathname.split("/");
    const id = paths[paths.indexOf("analyze") + 1];

    const fakeGame = {
      home_team: "Time A",
      away_team: "Time B",
      league: "Liga Exemplo",
      id: id || "desconhecido"
    };
    const prompt = `
Você é um analista esportivo profissional.

Analise a partida:

${fakeGame.home_team} vs ${fakeGame.away_team}
Liga: ${fakeGame.league}
ID: ${fakeGame.id}

Faça:
  • visão geral
  • forma recente
  • análise tática
  • probabilidades
  • conclusão

Nunca recomende apostas.
`;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4.1",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Erro na análise" });
  }
}
