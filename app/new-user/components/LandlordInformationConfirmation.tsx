'use client';

import { Dispatch, SetStateAction, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { Separator } from '@/components/ui/separator';

import ConfirmationItem from './ConfirmationItem';
import { stages } from '../constants/constants';
import { Button } from '@/components/ui/button';
import { formatPhoneNumber } from '@/utils/formatPhoneNumber';
import { createRentalProperty } from '@/firebase/rentalProperties/createRentalProperty';
import { createLandlord } from '@/firebase/landlords/createLandlord';
import { setOnboardingError } from '@/lib/features/onboarding/onboardingSlice';
import { useUser } from '@clerk/nextjs';
import { getUserByClerkId } from '@/firebase/users/getUserByClerkId';
import { getLandlordByEmail } from '@/firebase/landlords/getLandlordByEmail';
import ClipLoader from 'react-spinners/ClipLoader';
import {
  createPrice,
  createProduct,
  createStripeSubscription,
} from '@/utils/api/stripe';
import { formatAddressString } from '@/utils/formatAddressString';
import { findCurrency } from '@/utils/findCurrency';

interface LandlordInformationConfirmationProps {
  nextStage: string;
  setOnboardingStage: Dispatch<SetStateAction<string>>;
}

const LandlordInformationConfirmation = ({
  nextStage,
  setOnboardingStage,
}: LandlordInformationConfirmationProps) => {
  const dispatch = useAppDispatch();
  const {
    landlordInformation,
    address,
    paymentDate,
    paymentMethod,
    propertyType,
    rentAmount,
  } = useAppSelector((state) => state.onboarding);

  const [loading, setLoading] = useState<boolean>(false);

  const { user } = useUser();

  const handleSubmit = async () => {
    setLoading(true);
    let landlordId: string | undefined;

    const existingLandlord = await getLandlordByEmail(
      landlordInformation.email,
    );

    if (!existingLandlord.data) {
      const newLandlord = await createLandlord({ ...landlordInformation });

      if (newLandlord.error) {
        dispatch(setOnboardingError(true));
        setLoading(false);
        return;
      }

      landlordId = newLandlord!.data!.id;
    } else {
      landlordId = existingLandlord!.data!.id;
    }

    const firebaseUser = await getUserByClerkId(user!.id);

    const newRentalProperty = await createRentalProperty(
      {
        address,
        paymentDate,
        paymentMethod,
        propertyType,
        rentAmount,
      },
      firebaseUser?.data?.id as string,
      landlordId as string,
    );

    if (newRentalProperty.error) {
      dispatch(setOnboardingError(true));
      setLoading(false);
      return;
    }

    const newProduct = await createProduct(formatAddressString(address));

    if (newProduct.error) {
      dispatch(setOnboardingError(true));
      setLoading(false);
      return;
    }

    const currency = findCurrency(address.country);
    const unitAmount = parseFloat(rentAmount) * 100;
    const productName = newProduct.product.name;

    const newPrice = await createPrice(currency, unitAmount, productName);

    if (newPrice.error) {
      dispatch(setOnboardingError(true));
      setLoading(false);
      return;
    }

    const newSubscription = await createStripeSubscription(
      firebaseUser?.data?.stripeCustomerId as string,
      newPrice.product.id,
    );

    if (newSubscription.error) {
      dispatch(setOnboardingError(true));
      setLoading(false);
      return;
    }

    setLoading(false);
    setOnboardingStage(nextStage);
  };

  return (
    <div className="flex flex-col items-center gap-8 rounded-lg">
      <div className="flex flex-col gap-1 text-start">
        <h1 className="text-3xl font-bold text-slate-100">
          Confirm your landlord's information
        </h1>

        <p className="text-lg font-normal text-slate-400">
          Please look this over to make sure all the information is correct.
        </p>

        <Separator decorative className="mt-4 h-0.5 w-full" />

        <ConfirmationItem
          header="Name"
          value={
            landlordInformation.firstName + ' ' + landlordInformation.lastName
          }
          onboardingStage={stages.landlordInformation.name}
          setOnboardingStage={setOnboardingStage}
        />

        <Separator decorative className="mt-4 h-0.5 w-full" />

        <ConfirmationItem
          header="Email Address"
          value={landlordInformation.email}
          onboardingStage={stages.landlordInformation.name}
          setOnboardingStage={setOnboardingStage}
        />

        <Separator decorative className="mt-4 h-0.5 w-full" />

        <ConfirmationItem
          header="Phone Number"
          value={formatPhoneNumber(
            landlordInformation.countryCode + landlordInformation.phone,
          )}
          onboardingStage={stages.landlordInformation.name}
          setOnboardingStage={setOnboardingStage}
        />
      </div>

      <Button
        variant="secondary"
        size="lg"
        className="w-1/4"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? <ClipLoader size={20} /> : 'Continue'}
      </Button>
    </div>
  );
};

export default LandlordInformationConfirmation;
