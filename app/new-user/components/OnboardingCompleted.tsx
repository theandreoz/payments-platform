'use client';

import { createLandlord } from '@/firebase/landlords/createLandlord';
import { createRentalProperty } from '@/firebase/rentalProperties/createRentalProperty';
import { useAppSelector } from '@/lib/hooks';

const OnboardingCompleted = () => {
  const {
    address,
    paymentDate,
    paymentMethod,
    propertyType,
    rentAmount,
    landlordInformation,
  } = useAppSelector((state) => state.onboarding);

  // TODO Andres: edit createRentalProperty and createLandlord to
  // check if the property or landlord already exists before creating

  createRentalProperty({
    address,
    paymentDate,
    paymentMethod,
    propertyType,
    rentAmount,
  })
    .then((response) => {
      console.log({ response });
    })
    .catch((error) => {
      console.error('Error creating rental property', error);
    });

  createLandlord({
    ...landlordInformation,
  })
    .then((response) => {
      console.log('landlord created');
      console.log({ response });
    })
    .catch((error) => {
      console.error('Error creating landlord', error);
    });

  return (
    <div>
      <h1>COMPLETED!</h1>
    </div>
  );
};

export default OnboardingCompleted;
