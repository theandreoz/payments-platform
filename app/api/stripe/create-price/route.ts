import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const POST = async (req: Request) => {
  try {
    const { currency, unitAmount, productName } = await req.json();

    const product = await stripe.prices.create({
      currency,
      unit_amount: unitAmount,
      recurring: { interval: 'month' },
      product_data: {
        name: productName,
      },
    });

    return NextResponse.json({ product });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
};
