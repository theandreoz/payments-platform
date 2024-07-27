import { Dispatch, SetStateAction } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SpecifyAddressProps {
  nextStage: string;
  setOnboardingStage: Dispatch<SetStateAction<string>>;
}

const SpecifyAddress = ({
  nextStage,
  setOnboardingStage,
}: SpecifyAddressProps) => {
  return (
    <div className="flex flex-col items-center gap-8 rounded-lg">
      <div className="flex flex-col gap-1 text-start">
        <h1 className="text-3xl font-bold text-slate-100">
          What is your address?
        </h1>
        <p className="text-lg font-normal text-slate-400">
          We need the address of the rental unit you are setting up payments
          for.
        </p>
      </div>

      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-lg font-semibold">Street Address*</h3>
          <Input
            className="w-full text-gray-900"
            type="text"
            placeholder="Street address"
          />
        </div>

        <div className="flex flex-col items-start gap-1">
          <h3 className="text-lg font-semibold">Address Line 2</h3>
          <Input className="w-full text-gray-900" type="text" placeholder="" />
        </div>

        <div className="flex w-full gap-2">
          <div className="flex w-1/2 flex-col items-start gap-1">
            <h3 className="text-lg font-semibold">City*</h3>
            <Input className="text-gray-900" type="text" placeholder="City" />
          </div>

          <div className="flex w-1/2 flex-col items-start gap-1">
            <h3 className="text-lg font-semibold">State*</h3>
            <Input className="text-gray-900" type="text" placeholder="State" />
          </div>
        </div>
        <div className="flex w-1/3 flex-col items-start gap-1">
          <h3 className="text-lg font-semibold">Country</h3>
          <Input className="text-gray-900" type="text" placeholder="Country*" />
        </div>
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

export default SpecifyAddress;
