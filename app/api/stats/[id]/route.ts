export const runtime = "edge";

export async function GET(req: any, { params }: any) {
  try {
    const fixtureId = params.id;
    const res = await fetch(
      `https://v3.football.api-sports.io/fixtures/statistics?fixture=${fixtureId}`,
      {
        headers: {
          "x-apisports-key": process.env.API_FOOTBALL_KEY!,
        },
      }
    );

    const data = await res.json();

    return Response.json(data.response);
  } catch {
    return Response.json([]);
  }
}
