import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userToken: null,
  isLoading: true,
  isSignout: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    restoreToken: (state, action) => {
      state.userToken = action.payload;
      state.isLoading = false;
    },
    signIn: (state, action) => {
      state.isSignout = false;
      state.userToken = action.payload;
    },
    signOut: state => {
      state.isSignout = true;
      state.userToken = null;
    },
  },
});

export const { restoreToken, signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
