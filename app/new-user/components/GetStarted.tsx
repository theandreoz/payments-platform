'use client';

import { Dispatch, SetStateAction } from 'react';
import { Button } from '@/components/ui/button';
import OnboardingItem from './OnboardingItem';

interface GetStartedProps {
  nextStage: string;
  setOnboardingStage: Dispatch<SetStateAction<string>>;
}

const GetStarted = ({ nextStage, setOnboardingStage }: GetStartedProps) => {
  return (
    <div className="flex flex-col items-center gap-8 rounded-lg">
      <div className="flex w-full flex-col gap-1 text-start">
        <h1 className="text-3xl font-bold text-slate-100">
          Your account has been created!
        </h1>
        <p className="text-lg font-semibold text-slate-400">
          Let's get you onboarded.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <OnboardingItem
          icon="ICON"
          header="Add your rental terms"
          subHeader="Select your rent amount and due dates."
          duration="1-2 minutes"
        />

        <OnboardingItem
          icon="ICON"
          header="Set your payout instructions"
          subHeader="Tell us how we should pay your landlord."
          duration="1-2 minutes"
        />

        <OnboardingItem
          icon="ICON"
          header="Get verified"
          subHeader="Let's make sure it's you for added security."
          duration="1-2 minutes"
        />

        <OnboardingItem
          icon="ICON"
          header="Connect your card"
          subHeader="Connect your preferred credit or debit card to activate your rent subscription and schedule your first payment."
          duration="1-2 minutes"
        />
      </div>

      <Button
        variant="secondary"
        size="lg"
        onClick={() => setOnboardingStage(nextStage)}
      >
        Get started
      </Button>
    </div>
  );
};

export default GetStarted;
