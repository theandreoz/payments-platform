'use client';

import { Dispatch, SetStateAction } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { z } from 'zod';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { setLandlordInformation } from '@/lib/features/onboarding/onboardingSlice';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { countries } from '../constants/constants';
import { Button } from '@/components/ui/button';

interface LandlordInformationProps {
  nextStage: string;
  setOnboardingStage: Dispatch<SetStateAction<string>>;
}
const phoneNumberRegex = /^[1-9]\d{1,14}$/;

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  bankAccountNumber: z.string(),
  email: z.string().email(),
  countryCode: z.string(),
  phone: z.string().refine((value) => phoneNumberRegex.test(value), {
    message: 'Invalid phone number',
  }),
});

const LandlordInformation = ({
  nextStage,
  setOnboardingStage,
}: LandlordInformationProps) => {
  const dispatch = useAppDispatch();
  const { firstName, lastName, bankAccountNumber, email, countryCode, phone } =
    useAppSelector((state) => state.onboarding.landlordInformation);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName,
      lastName,
      bankAccountNumber,
      email,
      countryCode,
      phone,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    dispatch(setLandlordInformation(values));
    setOnboardingStage(nextStage);
  };

  return (
    <div className="flex flex-col items-center gap-8 rounded-lg">
      <div className="flex flex-col gap-1 text-start">
        <h1 className="text-3xl font-bold text-slate-100">
          What is your landlord's information?
        </h1>
        <p className="text-lg font-normal text-slate-400">
          We need your landlord's details so we know who to pay.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-4"
        >
          <div className="flex w-full gap-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex w-1/2 flex-col items-start">
                  <FormLabel>First Name*</FormLabel>
                  <FormControl>
                    <Input
                      className="text-gray-900"
                      type="text"
                      placeholder="First name"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="flex w-1/2 flex-col items-start">
                  <FormLabel>Last Name*</FormLabel>
                  <FormControl>
                    <Input
                      className="text-gray-900"
                      type="text"
                      placeholder="Last name"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="bankAccountNumber"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col items-start">
                <FormLabel>Bank Account Number*</FormLabel>
                <FormControl>
                  <Input
                    className="text-gray-900"
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex w-1/2 flex-col items-start">
                <FormLabel>Email*</FormLabel>
                <FormControl>
                  <Input
                    className="text-gray-900"
                    type="text"
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex w-full gap-2">
            <FormField
              control={form.control}
              name="countryCode"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel>Country code*</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="text-gray-900">
                        <SelectValue placeholder={countryCode} />
                      </SelectTrigger>

                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem value={country.code}>
                            <p className="mr-2">
                              {country.flag}{' '}
                              <span className="font-bold">{country.code}</span>{' '}
                            </p>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="flex w-1/2 flex-col items-start">
                  <FormLabel>Phone Number*</FormLabel>
                  <FormControl>
                    <Input
                      className="text-gray-900"
                      type="text"
                      placeholder="(999) 999-9999"
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

export default LandlordInformation;
