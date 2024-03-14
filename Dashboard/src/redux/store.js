import { createSlice, configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: true,
    isAdmin: true,
  },
  reducers: {
    // login fun
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});
export const authAction = authSlice.actions;
export const store = configureStore({
  reducer: authSlice.reducer,
});
