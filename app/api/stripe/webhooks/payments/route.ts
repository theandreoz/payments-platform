import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

import { addPaymentIntent } from '@/firebase/paymentIntents/addPaymentIntent';
import { addPaymentMethod } from '@/firebase/paymentMethods/addPaymentMethod';
import { getUserByStripeCustomerId } from '@/firebase/users/getUserByStripeCustomerId';
import { attachPaymentMethodToCustomer } from '@/utils/api/stripe';

export const config = {
  api: {
    bodyParser: false,
  },
};

export const POST = async (req: NextRequest) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  const sig = req.headers.get('stripe-signature')!;

  let event;
  let firebaseUser;

  try {
    const body = await req.text();
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (error) {
    return new NextResponse(`Webhook Error: ${(error as Error).message}`, {
      status: 400,
    });
  }

  switch (event.type) {
    case 'payment_intent.succeeded':
      const successfulPaymentIntent = event.data.object;

      firebaseUser = await getUserByStripeCustomerId(
        successfulPaymentIntent.customer as string,
      );

      const newSuccessfulPaymentIntent = await addPaymentIntent({
        userId: firebaseUser?.data?.id as string,
        // userId: 'eAddFyXhd5gvXfY7x5ud',
        amount: successfulPaymentIntent.amount,
        amountReceived: successfulPaymentIntent.amount_received,
        created: successfulPaymentIntent.created,
        currency: successfulPaymentIntent.currency,
        status: successfulPaymentIntent.status,
        stripeCustomerId: successfulPaymentIntent.customer,
        // stripeCustomerId: 'cus_Qjal3Uh9SgSClN',
        stripePaymentIntentId: successfulPaymentIntent.id,
        stripePaymentMethodId: successfulPaymentIntent.payment_method,
      });

      if (newSuccessfulPaymentIntent.error) {
        return new NextResponse(JSON.stringify(newSuccessfulPaymentIntent), {
          status: 400,
        });
      }

      // TODO Andres: notify landlord via email
      // TODO Andres: send email confirmation to user

      return new NextResponse(JSON.stringify(newSuccessfulPaymentIntent), {
        status: 201,
      });

    case 'payment_intent.payment_failed':
      const failedPaymentIntent = event.data.object;

      firebaseUser = await getUserByStripeCustomerId(
        failedPaymentIntent.customer as string,
      );

      const newFailedPaymentIntent = await addPaymentIntent({
        userId: firebaseUser?.data?.id as string,
        // userId: 'eAddFyXhd5gvXfY7x5ud',
        amount: failedPaymentIntent.amount,
        amountReceived: failedPaymentIntent.amount_received,
        created: failedPaymentIntent.created,
        currency: failedPaymentIntent.currency,
        status: failedPaymentIntent.status,
        stripeCustomerId: failedPaymentIntent.customer,
        // stripeCustomerId: 'cus_Qjal3Uh9SgSClN',
        stripePaymentIntentId: failedPaymentIntent.id,
        stripePaymentMethodId: failedPaymentIntent.payment_method,
      });

      if (newFailedPaymentIntent.error) {
        return new NextResponse(JSON.stringify(newFailedPaymentIntent), {
          status: 400,
        });
      }

      // TODO Andres: notify user via email

      return new NextResponse(JSON.stringify(newFailedPaymentIntent), {
        status: 201,
      });

    case 'payment_method.attached':
      const paymentMethod = event.data.object;

      firebaseUser = await getUserByStripeCustomerId(
        paymentMethod.customer as string,
      );

      const newPaymentMethod = await addPaymentMethod({
        userId: firebaseUser?.data?.id as string,
        stripePaymentMethodId: paymentMethod.id,
      });

      if (newPaymentMethod.error) {
        return new NextResponse(JSON.stringify(newPaymentMethod), {
          status: 400,
        });
      }

      const attachedPaymentMethod = await attachPaymentMethodToCustomer(
        paymentMethod.customer as string,
        // 'cus_Qjal3Uh9SgSClN',
        paymentMethod.id as string,
      );

      if (attachedPaymentMethod.error) {
        return new NextResponse(JSON.stringify(attachedPaymentMethod), {
          status: 400,
        });
      }

      // TODO Andres: send email confirmation to user

      return new NextResponse(JSON.stringify(attachedPaymentMethod), {
        status: 201,
      });

    default:
      return (
        new NextResponse(`Unhandled event type ${event.type}`),
        {
          status: 500,
        }
      );
  }
};
