/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../hooks";

const initialState = {
  data: null,
  isLoading: false,
  isError: false,
};

export const userLoginAction = createAsyncThunk(async () => {
  const response = await login(email, password);
  const result = response.json();
  return result;
});

export const userReducer = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(userLoginAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userLoginAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(userLoginAction.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

// export const { userLogin } = userReducer.actions;

export const selectUser = (state) => state.user;

export default userReducer.reducer;
