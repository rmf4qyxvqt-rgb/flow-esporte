import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { supabase } from '../../../lib/supabase';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2023-10-16' });

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature')!;
  const body = await req.text();
  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    return NextResponse.json({ error: 'Webhook Error' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as any;
    await supabase.from('profiles').update({ plan: 'premium' }).eq('email', session.customer_email);
  }
  if (event.type === 'customer.subscription.deleted') {
    const session = event.data.object as any;
    await supabase.from('profiles').update({ plan: 'free' }).eq('email', session.customer_email);
  }
  return NextResponse.json({ received: true });
}
