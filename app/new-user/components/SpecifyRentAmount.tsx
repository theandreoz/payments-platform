'use client';
import { Dispatch, SetStateAction } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SpecifyRentAmountProps {
  nextStage: string;
  setOnboardingStage: Dispatch<SetStateAction<string>>;
}

const SpecifyRentAmount = ({
  nextStage,
  setOnboardingStage,
}: SpecifyRentAmountProps) => {
  return (
    <div className="flex flex-col items-center gap-8 rounded-lg">
      <div className="flex flex-col gap-1 text-start">
        <h1 className="text-3xl font-bold text-slate-100">
          How much is your monthly rent amount?
        </h1>
        <p className="text-lg font-normal text-slate-400">
          How much is your share of monthly rent? Your landlord will receive a
          single payment for this amount every month from APP (on your behalf).
          Only enter the amount you are personally responsible for paying. This
          may include parking.
        </p>
      </div>

      <div className="flex w-full flex-col justify-start gap-2 text-start">
        <h3 className="text-lg font-semibold">Rent (USD)</h3>
        <Input
          className="w-1/4 text-gray-900"
          type="number"
          placeholder="e.g. 2,500"
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

export default SpecifyRentAmount;
