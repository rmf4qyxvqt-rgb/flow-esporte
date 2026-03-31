export async function fetchBasketballData(endpoint: string) {
  const url = `https://www.balldontlie.io/api/v1/${endpoint}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Erro ao buscar dados de basquete');
  return res.json();
}
