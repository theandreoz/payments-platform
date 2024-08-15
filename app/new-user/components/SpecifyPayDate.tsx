'use client';

import { Dispatch, SetStateAction } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setPaymentDate } from '@/lib/features/onboarding/onboardingSlice';

interface SpecifyPayDateProps {
  nextStage: string;
  setOnboardingStage: Dispatch<SetStateAction<string>>;
}

const SpecifyPayDate = ({
  nextStage,
  setOnboardingStage,
}: SpecifyPayDateProps) => {
  const dispatch = useAppDispatch();
  const { paymentDate } = useAppSelector((state) => state.onboarding);

  return (
    <div className="flex flex-col items-center gap-8 rounded-lg">
      <div className="flex flex-col gap-1 text-start">
        <h1 className="text-3xl font-bold text-slate-100">
          When should we pay your landlord?
        </h1>
        <p className="text-lg font-normal text-slate-400">
          Enter your monthly due date. APP will pay your landlord on this day
          every month and charge you 5 business days before.
        </p>
      </div>

      <div className="flex w-full flex-col items-start justify-start gap-6 text-start">
        <span className="text-slate-100">
          <h3 className="text-4xl font-semibold">{paymentDate}</h3>
          <p className="text-lg font-normal text-slate-400">of each month</p>
        </span>

        <Slider
          defaultValue={[paymentDate]}
          max={31}
          step={1}
          onValueChange={(newValue) => dispatch(setPaymentDate(newValue[0]))}
        />
      </div>

      <Button
        variant="secondary"
        size="lg"
        onClick={() => setOnboardingStage(nextStage)}
      >
        Next
      </Button>
    </div>
  );
};

export default SpecifyPayDate;
