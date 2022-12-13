import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    uid: "",
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.uid = "";
    },
    setUid: (state, action) => {
      state.currentUser = action.payload;
      state.uid = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, setUid } =
  userSlice.actions;
export default userSlice.reducer;
