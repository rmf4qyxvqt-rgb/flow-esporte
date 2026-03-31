export const runtime = "edge";

export async function GET(req: any) {
  try {
    const url = new URL(req.url);
    const country = url.searchParams.get("country");
    let apiUrl = `https://v3.football.api-sports.io/leagues`;
    if (country) {
      apiUrl += `?country=${encodeURIComponent(country)}`;
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
