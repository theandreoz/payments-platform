'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { stages } from '../constants/constants';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

const Onboarding = () => {
  const [onboardingStage, setOnboardingStage] = useState('getStarted');

  const StageComponent = stages[onboardingStage].component;

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="relative flex w-1/2 min-w-60 flex-col items-center gap-8 rounded-lg bg-gray-900 p-12 text-center text-white">
        <div
          className={clsx(
            onboardingStage === stages.getStarted.name ? 'hidden' : '',
            'absolute left-4 top-10 text-white',
          )}
        >
          <Button
            onClick={() =>
              setOnboardingStage(stages[onboardingStage].prevStage)
            }
          >
            {'<-'}
          </Button>
        </div>
        <div className="w-1/2">
          <Progress value={stages[onboardingStage].progress} />
        </div>

        <Elements stripe={stripePromise}>
          <StageComponent
            nextStage={stages[onboardingStage].nextStage}
            setOnboardingStage={setOnboardingStage}
          />
        </Elements>
      </div>
    </div>
  );
};

export default Onboarding;
