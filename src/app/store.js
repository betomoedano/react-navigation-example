import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/auth';
import contactsReducer from '../features/contacts/contacts';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
  },
});
