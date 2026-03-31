export const runtime = "edge";

export async function GET() {
  try {
    // Buscar jogos do dia 31/03/2026
    const targetDate = "2026-03-31";
    const res = await fetch(
      `https://v3.football.api-sports.io/fixtures?date=${targetDate}`,
      {
        headers: {
          "x-apisports-key": process.env.API_FOOTBALL_KEY!,
        },
      }
    );

    const data = await res.json();

    const games = data.response.map((match: any) => ({
      id: match.fixture.id,
      home: match.teams.home.name,
      away: match.teams.away.name,
      league: match.league.name,
      time: match.fixture.date,
    }));

    return Response.json(games);
  } catch (error) {
    return Response.json([]);
  }
}
