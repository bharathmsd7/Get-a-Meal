/** @format */

import { create } from "zustand";
import { login, signup, logout, updatePreferences, getAccount } from "../hooks";
import {
  setLocalStorage,
  getLocalStorage,
  compareDateTime,
  deleteLocalStorage,
  navigateToScreen,
} from "../utils/commonutils";

export const userStore = create((set, get) => ({
  data: {},
  isLoading: false,
  isError: false,

  userLogin: async (email, password) => {
    try {
      set({ isLoading: true });
      const response = await login(email, password);
      if (response !== "error") {
        const accountResponse = await getAccount();
        if (accountResponse !== "error") {
          let userResponse = { ...accountResponse, ...response };
          await setLocalStorage("@user", userResponse);
          set({ isLoading: false, data: userResponse });
        }
      } else {
        set({ isLoading: false, isError: true });
      }
    } catch (error) {
      set({ isLoading: false, isError: true });
    }
  },
  userSignup: async (email, password, name) => {
    try {
      set({ isLoading: true });
      const response = await signup(email, password, name);
      if (response !== "error") {
        get().userLogin(email, password);
      } else {
        set({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);
      set({ isLoading: false, isError: true });
    }
  },
  userLogout: async () => {
    try {
      set({ isLoading: true });
      const response = await logout();
      if (response !== "error") {
        set({ isLoading: false, data: {} });
        await deleteLocalStorage("@user");
        navigateToScreen("Login");
      } else {
        console.log("Logout failed");
        set({ isLoading: false, isError: true });
      }
    } catch (error) {
      set({ isLoading: false, isError: true });
    }
  },
  updateUserPreferences: async (preferences) => {
    try {
      if (preferences) {
        set({ isLoading: true });
        const response = await updatePreferences(preferences);
        if (response !== "error") {
          let userData = get().data;
          userData.prefs = preferences;
          await setLocalStorage("@user", userData);
          set({ isLoading: false, data: userData });
        } else {
          set({ isLoading: false, isError: true });
        }
      }
    } catch (error) {
      set({ isLoading: false, isError: true });
    }
  },
  userSession: async () => {
    try {
      console.log("GET USER SESSION");
      set({ isLoading: true });
      const onboardingDone = await getLocalStorage("@onboardingCompleted");
      const user = await getLocalStorage("@user");

      if (onboardingDone === null && user === null) {
        set({ isLoading: false });
        navigateToScreen("Onboarding");
      } else {
        if (user != null && user.expire) {
          const expired = compareDateTime(user.expire);
          if (expired) {
            set({ isLoading: false });
            navigateToScreen("Signup");
          } else {
            set({ isLoading: false, data: user });
            navigateToScreen("Tabs");
          }
        } else {
          console.log("User session not found");
          set({ isLoading: false, data: {} });
          navigateToScreen("Signup");
        }
      }
    } catch (error) {
      console.log("ERROR", error);
      set({ isLoading: false });
      navigateToScreen("Signup");
    }
  },
}));
