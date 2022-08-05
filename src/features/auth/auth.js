import { createSlice } from '@reduxjs/toolkit';

// possible auth states
// 'signedIn'
// 'signUp'
// 'signOut'
// 'confirmSignUp'
// 'forgotPassword'
// 'confirmForgotPassword',

const initialState = {
  authState: 'signIn',
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
    setAuthState: (state, action) => {
      state.authState = action.payload;
    },
  },
});

export const { restoreToken, signIn, signOut, setAuthState } =
  authSlice.actions;
export default authSlice.reducer;
