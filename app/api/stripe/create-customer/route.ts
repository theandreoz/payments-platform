import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const POST = async (req: Request) => {
  try {
    const { email, name } = await req.json();

    const customer = await stripe.customers.create({
      email,
      name,
    });

    return NextResponse.json({ customerId: customer.id });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
};
