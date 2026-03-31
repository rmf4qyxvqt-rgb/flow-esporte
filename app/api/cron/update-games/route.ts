import { NextRequest, NextResponse } from 'next/server';
import { fetchFootballData } from '../../../../lib/footballApi';
import { fetchBasketballData } from '../../../../lib/basketballApi';
import { supabase } from '../../../../lib/supabase';

export async function POST() {
  // Exemplo: Atualizar jogos de futebol
  const football = await fetchFootballData('eventsnextleague.php?id=4328');
  // Exemplo: Atualizar jogos de basquete
  const basketball = await fetchBasketballData('games');
  // Salvar no Supabase (exemplo simplificado)
  // await supabase.from('games').insert([...]);
  return NextResponse.json({ ok: true });
}
