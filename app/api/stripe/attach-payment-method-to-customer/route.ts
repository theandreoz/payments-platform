import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const POST = async (req: Request) => {
  try {
    const { stripeCustomerId, paymentMethodId } = await req.json();

    await stripe.paymentMethods.attach(paymentMethodId, {
      customer: stripeCustomerId,
    });

    const updatedCustomer = await stripe.customers.update(stripeCustomerId, {
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    });

    return NextResponse.json({ updatedCustomer });
  } catch (error) {
    console.error(
      'Error attaching Stripe payment method:',
      (error as Error).message,
    );
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
};
