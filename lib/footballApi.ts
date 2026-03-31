export async function fetchFootballData(endpoint: string) {
  const url = `https://www.thesportsdb.com/api/v1/json/3/${endpoint}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Erro ao buscar dados de futebol');
  return res.json();
}
