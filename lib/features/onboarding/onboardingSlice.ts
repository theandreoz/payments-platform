'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Address } from '@/types/Address';

export interface OnboardingState {
  propertyType: string;
  address: Address;
  rentAmount: string;
  paymentDate: number;
  paymentMethod: string;
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
  rentAmount: '',
  paymentDate: 1,
  paymentMethod: 'creditCard',
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
    setRentAmount: (state: OnboardingState, action: PayloadAction<string>) => {
      state.rentAmount = action.payload;
    },
    setPaymentDate: (state: OnboardingState, action: PayloadAction<number>) => {
      state.paymentDate = action.payload;
    },
    setPaymentMethod: (
      state: OnboardingState,
      action: PayloadAction<string>,
    ) => {
      state.paymentMethod = action.payload;
    },
  },
});

export const {
  setPropertyType,
  setAddress,
  setRentAmount,
  setPaymentDate,
  setPaymentMethod,
} = OnboardingSlice.actions;

export default OnboardingSlice.reducer;
