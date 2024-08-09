'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface OnboardingState {
  propertyType: string;
}

const initialState = {
  propertyType: 'existingRental',
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
  },
});

export const { setPropertyType } = OnboardingSlice.actions;

export default OnboardingSlice.reducer;
