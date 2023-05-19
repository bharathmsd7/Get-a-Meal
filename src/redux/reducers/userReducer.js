/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { login, getSession } from "../../hooks";

const initialState = {
  data: {},
  isError: false,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoginSuccess: (state, action) => {
      state.data = action.payload;
    },
    userLoginFailure: (state) => {
      state.isError = true;
    },
  },
});

export const selectUser = (state) => state.user;

export const { userLoginSuccess, userLoginFailure } = userReducer.actions;

export const userLogin =
  ({ email, password }) =>
  async (dispatch) => {
    const response = await login(email, password);
    if (response && response !== "error") {
      dispatch(userLoginSuccess(response));
    } else {
      dispatch(userLoginFailure());
    }
  };

export const userSession = (sessionId) => async (dispatch) => {
  const response = await getSession(sessionId);
  if (response && response !== "error") {
    dispatch(userLoginSuccess(response));
  } else {
    dispatch(userLoginFailure());
  }
};

export default userReducer.reducer;
