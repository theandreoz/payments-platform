import { Dispatch, SetStateAction } from 'react';

import { useAppSelector } from '@/lib/hooks';
import { Separator } from '@/components/ui/separator';
import { formatAddressString } from '@/utils/formatAddressString';
import { formatCurrency } from '@/utils/formatCurrency';
import { formatPaymentDateForConfirmation } from '@/utils/formatPaymentDateForConfirmation';

import ConfirmationItem from './ConfirmationItem';
import { stages } from '../constants/constants';
import { Button } from '@/components/ui/button';
import { formatPhoneNumber } from '@/utils/formatPhoneNumber';

interface LandlordInformationConfirmationProps {
  nextStage: string;
  setOnboardingStage: Dispatch<SetStateAction<string>>;
}

const LandlordInformationConfirmation = ({
  nextStage,
  setOnboardingStage,
}: LandlordInformationConfirmationProps) => {
  const { firstName, lastName, email, countryCode, phone } = useAppSelector(
    (state) => state.onboarding.landlordInformation,
  );

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
          value={firstName + ' ' + lastName}
          onboardingStage={stages.landlordInformation.name}
          setOnboardingStage={setOnboardingStage}
        />

        <Separator decorative className="mt-4 h-0.5 w-full" />

        <ConfirmationItem
          header="Email Address"
          value={email}
          onboardingStage={stages.landlordInformation.name}
          setOnboardingStage={setOnboardingStage}
        />

        <Separator decorative className="mt-4 h-0.5 w-full" />

        <ConfirmationItem
          header="Phone Number"
          value={formatPhoneNumber(countryCode + phone)}
          onboardingStage={stages.landlordInformation.name}
          setOnboardingStage={setOnboardingStage}
        />
      </div>

      <Button
        variant="secondary"
        size="lg"
        className="w-1/4"
        onClick={() => setOnboardingStage(nextStage)}
      >
        Continue
      </Button>
    </div>
  );
};

export default LandlordInformationConfirmation;
