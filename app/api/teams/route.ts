export const runtime = "edge";

export async function GET(req: any) {
  try {
    const url = new URL(req.url);
    const league = url.searchParams.get("league");
    let apiUrl = `https://v3.football.api-sports.io/teams`;
    if (league) {
      apiUrl += `?league=${encodeURIComponent(league)}`;
    }
    const res = await fetch(apiUrl, {
      headers: {
        "x-apisports-key": process.env.API_FOOTBALL_KEY!,
      },
    });
    const data = await res.json();
    return Response.json(data.response);
  } catch (error) {
    return Response.json([]);
  }
}
