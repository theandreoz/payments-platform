import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const POST = async (req: Request) => {
  try {
    const { stripeCustomerId, priceId } = await req.json();

    const product = await stripe.subscriptions.create({
      customer: stripeCustomerId,
      items: [{ price: priceId }],
    });

    return NextResponse.json({ product });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
};
