/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { login, getSession, logout } from "../../hooks";
import {
  deleteLocalStorage,
  navigateToScreen,
  setLocalStorage,
  compareDateTime,
  getLocalStorage,
} from "../../utils/commonutils";

const initialState = {
  data: {},
  isError: false,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoginSuccess: (state, action) => {
      setLocalStorage("user", action.payload);
      state.data = action.payload;
      state.isError = false;
    },
    userLoginFailure: (state) => {
      deleteLocalStorage("user");
      state.isError = true;
    },
    userLogoutSuccess: (state) => {
      state.data = {};
      state.isError = false;
      deleteLocalStorage("user");
      navigateToScreen("Splash");
    },
    userSessionSuccess: (state, action) => {
      state.data = action.payload;
      state.isError = false;
    },
  },
});

export const selectUser = (state) => state.user;

export const {
  userLoginSuccess,
  userLoginFailure,
  userLogoutSuccess,
  userSessionSuccess,
} = userReducer.actions;

export const userLogin =
  ({ email, password }) =>
  async (dispatch) => {
    const response = await login(email, password);
    console.log("RESPONES ", response);
    if (response && response !== "error") {
      dispatch(userLoginSuccess(response));
    } else {
      dispatch(userLoginFailure());
    }
  };

export const userSession = () => async (dispatch) => {
  const user = await getLocalStorage("user");
  if (user && user.expire) {
    const expired = compareDateTime(user.expire);
    if (expired) {
      console.warn("User not logged out");
    } else {
      dispatch(userSessionSuccess(user));
    }
  } else {
    console.warn("User not logged out");
  }
};

export const userLogout = () => async (dispatch) => {
  const response = await logout();
  if (response && response !== "error") {
    dispatch(userLogoutSuccess(response));
  } else {
    console.warn("User not logged out");
  }
};

export default userReducer.reducer;
