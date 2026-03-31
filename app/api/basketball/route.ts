import { NextRequest, NextResponse } from 'next/server';
import { fetchBasketballData } from '../../../lib/basketballApi';

export async function GET() {
  const data = await fetchBasketballData('games');
  return NextResponse.json(data);
}
