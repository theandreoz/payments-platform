import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { setPaymentMethod } from '@/lib/features/onboarding/onboardingSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

interface SelectPaymentMethodProps {
  nextStage: string;
  setOnboardingStage: (stage: string) => void;
}

const SelectPaymentMethod = ({
  nextStage,
  setOnboardingStage,
}: SelectPaymentMethodProps) => {
  const dispatch = useAppDispatch();
  const { paymentMethod } = useAppSelector((state) => state.onboarding);

  return (
    <div className="flex flex-col items-center gap-8 rounded-lg">
      <div className="flex flex-col gap-1 text-start">
        <h1 className="text-3xl font-bold text-slate-100">
          How does your landlord want to get paid?
        </h1>

        <p className="text-lg font-normal text-slate-400">
          Select how you would like APP to pay your landlord.
        </p>
      </div>

      <div className="flex w-full flex-col">
        <RadioGroup
          defaultValue={paymentMethod}
          onValueChange={(newValue) => dispatch(setPaymentMethod(newValue))}
        >
          <div className="mb-2 flex w-full items-center space-x-2 rounded-lg bg-gray-600 p-4">
            <RadioGroupItem value="creditCard" id="creditCard" />
            <Label htmlFor="creditCard">
              <div className="ml-2 text-start">
                <h3 className="text-lg font-semibold text-slate-50">
                  Credit Card
                </h3>
                <p className="text-slate-400">
                  The easiest way to pay your landlord.
                </p>
              </div>
            </Label>
          </div>

          <div className="relative mb-2 flex w-full items-center space-x-2 rounded-lg bg-gray-600 p-4">
            <RadioGroupItem
              value="preAuthorizedDebit"
              id="preAuthorizedDebit"
              disabled
            />
            <Label htmlFor="preAuthorizedDebit">
              <div className="ml-2 text-start">
                <h3 className="text-lg font-semibold text-slate-50">
                  Pre-Authorized Debit
                </h3>
                <p className="text-slate-400">
                  For landlords paid by pre-authorized debit (PAD).
                </p>
              </div>
            </Label>
            <small className="absolute right-2 top-2 text-xs text-slate-400">
              Coming soon
            </small>
          </div>

          <div className="relative mb-2 flex w-full items-center space-x-2 rounded-lg bg-gray-600 p-4">
            <RadioGroupItem value="billPay" id="billPay" disabled />
            <Label htmlFor="billPay">
              <div className="ml-2 text-start">
                <h3 className="text-lg font-semibold text-slate-50">
                  Bill Pay
                </h3>
                <p className="text-slate-400">
                  For landlords who are set up as payees.
                </p>
              </div>
            </Label>
            <small className="absolute right-2 top-2 text-xs text-slate-400">
              Coming soon
            </small>
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

export default SelectPaymentMethod;
