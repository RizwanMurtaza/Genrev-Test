import { createSlice } from '@reduxjs/toolkit';

export const userReducer = createSlice({
  name: 'user',
  initialState: {
    authToken: null,
    user: null,
  },

  reducers: {
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    signOut: (state) => {
      state.user = null;
      state.authToken = null;
    }
  },
});

export const {
  setUser,
  signOut,
  setAuthToken,
} = userReducer.actions;

export default userReducer.reducer;
