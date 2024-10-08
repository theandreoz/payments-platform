import { createURL } from '../createURL';

export const createStripeCustomer = async (email: string, name: string) => {
  const URL = createURL('/api/stripe/create-customer');

  const res = await fetch(
    new Request(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name }),
    }),
  );

  if (res.ok) {
    const data = await res.json();

    return data;
  } else {
    return { error: 'Error creating Stripe customer' };
  }
};

export const getStripeCustomerByEmail = async (email: string) => {
  const URL = createURL(`/api/stripe/get-customer?email=${email}`);

  const res = await fetch(URL);

  if (res.ok) {
    const data = await res.json();

    return data;
  } else {
    return { error: 'Stripe customer not found' };
  }
};

export const attachPaymentMethodToCustomer = async (
  stripeCustomerId: string,
  paymentMethodId: string,
) => {
  const URL = createURL('/api/stripe/attach-payment-method-to-customer');

  const res = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ stripeCustomerId, paymentMethodId }),
  });

  if (res.ok) {
    const data = await res.json();

    return data;
  } else {
    return { error: 'Error attaching payment method to customer' };
  }
};
