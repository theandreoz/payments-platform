'use client';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setRentAmount } from '@/lib/features/onboarding/onboardingSlice';
import { findCurrency } from '@/utils/findCurrency';

interface SpecifyRentAmountProps {
  nextStage: string;
  setOnboardingStage: Dispatch<SetStateAction<string>>;
}

const SpecifyRentAmount = ({
  nextStage,
  setOnboardingStage,
}: SpecifyRentAmountProps) => {
  const dispatch = useAppDispatch();
  const { rentAmount, address } = useAppSelector((state) => state.onboarding);

  const formSchema = z.object({
    rentAmount: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rentAmount,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    dispatch(setRentAmount(values.rentAmount));
    setOnboardingStage(nextStage);
  };

  return (
    <div className="flex flex-col items-start gap-8 rounded-lg">
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

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col items-start gap-4"
        >
          <FormField
            control={form.control}
            name="rentAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{`Rent (${findCurrency(address.country, true)})`}</FormLabel>
                <FormControl>
                  <Input
                    className="text-gray-900"
                    type="number"
                    placeholder="e.g 2500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="mt-4">
            <Button type="submit" variant="secondary" size="lg">
              Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SpecifyRentAmount;
