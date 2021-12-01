import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  id: 0,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.id = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.id = 0;
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
