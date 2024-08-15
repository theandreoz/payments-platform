'use client';

import { useState, Dispatch, SetStateAction } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import {
  useStripe,
  useElements,
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from '@stripe/react-stripe-js';
import { useUser } from '@clerk/nextjs';
import { attachPaymentMethodToCustomer } from '@/utils/api/stripe';
import { getUserByClerkId } from '@/firebase/users/getUserByClerkId';
import { Button } from '@/components/ui/button';
import { addPaymentMethod } from '@/firebase/paymentMethods/addPaymentMethod';

interface CreditCardDetailsProps {
  nextStage: string;
  setOnboardingStage: Dispatch<SetStateAction<string>>;
}

const CreditCardDetails = ({
  nextStage,
  setOnboardingStage,
}: CreditCardDetailsProps) => {
  const { user } = useUser();

  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const cardElement = elements.getElement(CardNumberElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement!,
    });

    if (error) {
      setErrorMessage(
        error.message || 'An error occurred creating Stripe payment method',
      );
      setLoading(false);
      return;
    }

    const firebaseUser = await getUserByClerkId(user!.id);
    const stripeCustomerId = firebaseUser?.data?.stripeCustomerId;

    const addPaymentMethodResponse = await addPaymentMethod({
      userId: firebaseUser?.data?.id as string,
      stripePaymentMethodId: paymentMethod.id,
    });

    if (addPaymentMethodResponse.error) {
      setErrorMessage(addPaymentMethodResponse.message);
      setLoading(false);
      return;
    }

    const attachPaymentMethodToCustomerResponse =
      await attachPaymentMethodToCustomer(stripeCustomerId!, paymentMethod.id);

    if (attachPaymentMethodToCustomerResponse.error) {
      setErrorMessage(attachPaymentMethodToCustomerResponse.message);
      setLoading(false);
      return;
    }

    setLoading(false);

    if (!errorMessage) {
      setOnboardingStage(nextStage);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 rounded-lg">
      <div className="flex flex-col gap-1 text-start">
        <h1 className="text-3xl font-bold text-slate-100">
          Please enter your credit card details.
        </h1>

        <p className="text-lg font-normal text-slate-400">
          We will charge your credit card for your rent payment each month.
        </p>
      </div>

      <div className="flex w-full gap-2">
        <CardNumberElement className="h-12 w-1/2 rounded-lg bg-white p-4" />
        <CardExpiryElement className="h-12 w-1/4 rounded-lg bg-white p-4" />
        <CardCvcElement className="h-12 w-1/4 rounded-lg bg-white p-4" />
      </div>

      <Button
        type="submit"
        onClick={handleSubmit}
        variant="secondary"
        disabled={!stripe || loading}
        className="w-1/2"
      >
        {loading ? <ClipLoader size={20} /> : 'Save Payment Details'}
      </Button>
    </div>
  );
};

export default CreditCardDetails;
