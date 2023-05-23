/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { login, logout, signup, updatePreferences } from "../../hooks";
import {
  deleteLocalStorage,
  navigateToScreen,
  setLocalStorage,
  compareDateTime,
  getLocalStorage,
} from "../../utils/commonutils";
import { Alert } from "react-native";

const initialState = {
  data: {},
  isError: false,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSignupSuccess: (state, action) => {
      state.isError = false;
    },
    userSignupFailure: (state) => {
      deleteLocalStorage("user");
      state.isError = true;
    },
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
    updatePreferencesSuccess: (state, action) => {
      state.data.prefs = action.payload.prefs;
      state.isError = false;
      setLocalStorage("user", state.data);
      navigateToScreen("Tabs");
    },
  },
});

export const selectUser = (state) => state.user;

export const {
  userLoginSuccess,
  userLoginFailure,
  userLogoutSuccess,
  userSessionSuccess,
  updatePreferencesSuccess,
} = userReducer.actions;

export const updateUserLocation = (location) => async (dispatch) => {
  console.log(location);
  if (location) {
    const response = await updatePreferences(location);
    if (response && response !== "error") {
      dispatch(updatePreferencesSuccess(response));
    } else {
      Alert.alert("Error");
    }
  }
};

export const userSignup =
  ({ email, password, name }) =>
  async (dispatch) => {
    console.log(email, password, name);
    const response = await signup(email, password, name);
    console.log("Signup RESPONSE ", response);
    if (response && response !== "error") {
      dispatch(userLogin({ email, password }));
    } else {
      dispatch(userLoginFailure());
    }
  };

export const userLogin =
  ({ email, password }) =>
  async (dispatch) => {
    console.log(email, password);
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
      console.warn("User session expired");
    } else {
      dispatch(userSessionSuccess(user));
    }
  } else {
    console.warn("User Session is not available");
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
