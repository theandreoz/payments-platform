'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface OnboardingState {
  propertyType: string;
  address: {
    street: string;
    streetLine2?: string | undefined;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  rentAmount: number | undefined;
  paymentDate: number;
}

const initialState = {
  propertyType: 'existingRental',
  address: {
    street: '',
    streetLine2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  },
  rentAmount: undefined,
  paymentDate: 1,
};

export const OnboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setPropertyType: (
      state: OnboardingState,
      action: PayloadAction<string>,
    ) => {
      state.propertyType = action.payload;
    },
    setAddress: (
      state: OnboardingState,
      action: PayloadAction<{
        street: string;
        streetLine2: string;
        city: string;
        state: string;
        zip: string;
        country: string;
      }>,
    ) => {
      state.address = { ...action.payload };
    },
    setRentAmount: (state: OnboardingState, action: PayloadAction<number>) => {
      state.rentAmount = action.payload;
    },
    setPaymentDate: (state: OnboardingState, action: PayloadAction<number>) => {
      state.paymentDate = action.payload;
    },
  },
});

export const { setPropertyType, setAddress, setRentAmount, setPaymentDate } =
  OnboardingSlice.actions;

export default OnboardingSlice.reducer;
