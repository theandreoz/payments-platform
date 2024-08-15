'use client';

import { configureStore } from '@reduxjs/toolkit';

import onboardingReducer from '@/lib/features/onboarding/onboardingSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      onboarding: onboardingReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
