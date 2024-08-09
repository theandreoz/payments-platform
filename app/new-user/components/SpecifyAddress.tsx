'use client';

import { Dispatch, SetStateAction } from 'react';
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
import { setAddress } from '@/lib/features/onboarding/onboardingSlice';

interface SpecifyAddressProps {
  nextStage: string;
  setOnboardingStage: Dispatch<SetStateAction<string>>;
}

const formSchema = z.object({
  street: z.string(),
  streetLine2: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  country: z.string(),
});

const SpecifyAddress = ({
  nextStage,
  setOnboardingStage,
}: SpecifyAddressProps) => {
  const dispatch = useAppDispatch();
  const { street, streetLine2, city, state, zip, country } = useAppSelector(
    (state) => state.onboarding.address,
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      street,
      streetLine2,
      city,
      state,
      zip,
      country,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    dispatch(setAddress(values));
    setOnboardingStage(nextStage);
  };

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

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel>Street Address*</FormLabel>
                <FormControl>
                  <Input
                    className="text-gray-900"
                    type="text"
                    placeholder="Street address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="streetLine2"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel>Address Line 2</FormLabel>
                <FormControl>
                  <Input
                    className="text-gray-900"
                    type="text"
                    placeholder="Street address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex w-full gap-2">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel>City*</FormLabel>
                  <FormControl>
                    <Input
                      className="text-gray-900"
                      type="text"
                      placeholder="City"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel>State*</FormLabel>
                  <FormControl>
                    <Input
                      className="text-gray-900"
                      type="text"
                      placeholder="State"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex w-full gap-2">
            <FormField
              control={form.control}
              name="zip"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel>Zip code*</FormLabel>
                  <FormControl>
                    <Input
                      className="text-gray-900"
                      type="text"
                      placeholder="Zip Code"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel>Country*</FormLabel>
                  <FormControl>
                    <Input
                      className="text-gray-900"
                      type="text"
                      placeholder="Country"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="mt-4">
            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className="w-1/4"
            >
              Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SpecifyAddress;
