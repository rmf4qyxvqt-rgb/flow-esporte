export const runtime = "edge";

export async function GET() {
  try {
    const res = await fetch(
      `https://v3.football.api-sports.io/countries`,
      {
        headers: {
          "x-apisports-key": process.env.API_FOOTBALL_KEY!,
        },
      }
    );
    const data = await res.json();
    return Response.json(data.response);
  } catch (error) {
    return Response.json([]);
  }
}
