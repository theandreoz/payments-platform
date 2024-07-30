'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface OnboardingState {
  isNewProperty: boolean;
}

const initialState = {
  isNewProperty: true,
};

const setIsNewProperty = (
  state: OnboardingState,
  action: PayloadAction<boolean>,
) => {
  state.isNewProperty = action.payload;
};

export const OnboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setIsNewProperty,
  },
});
