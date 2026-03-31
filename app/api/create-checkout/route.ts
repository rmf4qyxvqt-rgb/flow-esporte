import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2023-10-16' });

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'subscription',
    line_items: [{
      price: process.env.STRIPE_PRICE_ID!,
      quantity: 1,
    }],
    customer_email: email,
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard?success=1`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/premium?canceled=1`,
  });
  return NextResponse.json({ url: session.url });
}
