'use client';

import { Dispatch, SetStateAction, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useAppDispatch, useAppSelector, useAppStore } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { setPropertyType } from '@/lib/features/onboarding/onboardingSlice';

interface StartUpRentalProps {
  nextStage: string;
  setOnboardingStage: Dispatch<SetStateAction<string>>;
}

const StartUpRental = ({
  nextStage,
  setOnboardingStage,
}: StartUpRentalProps) => {
  const dispatch = useAppDispatch();

  const propertyType = useAppSelector((state) => state.onboarding.propertyType);

  return (
    <div className="flex flex-col items-center gap-8 rounded-lg">
      <div className="flex flex-col gap-1 text-start">
        <h1 className="text-3xl font-bold text-slate-100">
          Let's start up your rent payments.
        </h1>
        <p className="text-lg font-semibold text-slate-400">
          Are you switching your current payments to APP or are you setting up
          your APP account for a new rental?
        </p>
      </div>

      <div className="flex w-full flex-col">
        <RadioGroup
          defaultValue={propertyType}
          onValueChange={(newValue) => dispatch(setPropertyType(newValue))}
        >
          <div className="mb-2 flex w-2/3 items-center space-x-2 rounded-lg bg-gray-600 p-4">
            <RadioGroupItem value="existingRental" id="existingRental" />
            <Label htmlFor="existingRental">
              <div className="ml-2 text-start">
                <h3 className="text-lg font-semibold text-slate-50">
                  Continue paying existing rent
                </h3>
                <p className="text-slate-400">
                  I would like to switch rent payments I already make to APP.
                </p>
              </div>
            </Label>
          </div>

          <div className="mb-2 flex w-2/3 items-center space-x-2 rounded-lg bg-gray-600 p-4">
            <RadioGroupItem value="newRental" id="newRental" />
            <Label htmlFor="newRental">
              <div className="ml-2 text-start">
                <h3 className="text-lg font-semibold text-slate-50">
                  Set up payments for a new rental unit
                </h3>
                <p className="text-slate-400">
                  I would like to set up payments for rent at a brand new
                  address.
                </p>
              </div>
            </Label>
          </div>
        </RadioGroup>
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

export default StartUpRental;
