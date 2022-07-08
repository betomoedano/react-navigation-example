import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/auth';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
