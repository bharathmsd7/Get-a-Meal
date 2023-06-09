/** @format */

import { create } from "zustand";
import { login, signup, logout, updatePreferences, getAccount } from "../hooks";
import {
  setLocalStorage,
  getLocalStorage,
  compareDateTime,
  deleteLocalStorage,
} from "../utils/commonutils";

export const userStore = create((set, get) => ({
  data: {},
  isLoading: false,
  isError: false,
  isAuthenticated: false,
  isOnboardingDone: true,
  isProfileCreated: false,

  getUserSession: async () => {
    console.log("Getting user session");
    try {
      set({ isLoading: true });
      const onboardingDone = await getLocalStorage("@onboardingCompleted");
      const user = await getLocalStorage("@user");
      if (onboardingDone) {
        set({ isOnboardingDone: true });
        console.log("Onboarding done");
      } else {
        set({ isOnboardingDone: false });
        console.log("Onboarding not done");
      }
      if (user) {
        const expired = compareDateTime(user.expire);
        if (expired) {
          set({ isAuthenticated: false, isLoading: false });
          console.log("Session expired");
        } else {
          set({
            data: user,
            isAuthenticated: true,
            isLoading: false,
            isProfileCreated: true,
          });
          console.log("Silent Login Success");
        }
      } else {
        set({ isAuthenticated: false, isLoading: false });
        console.log("No session available");
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: userStore.js:39 ~ getUserSession: ~ error:",
        error
      );
    }
  },
  completeOnboarding: async () => {
    try {
      set({ isLoading: true });
      await setLocalStorage("@onboardingCompleted", true);
      set({ isOnboardingDone: true, isLoading: false });
    } catch (error) {
      set({ isLoading: false, isError: true });
      console.log(
        "🚀 ~ file: userStore.js:54 ~ completeOnboarding: ~ error:",
        error
      );
    }
  },
  userLogin: async (email, password) => {
    try {
      set({ isLoading: true });
      const response = await login(email, password);
      if (response !== "error") {
        const accountResponse = await getAccount();
        if (accountResponse !== "error") {
          let userResponse = { ...accountResponse, ...response };
          await setLocalStorage("@user", userResponse);
          set({
            isLoading: false,
            data: userResponse,
            isAuthenticated: true,
            isProfileCreated: true,
          });
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
        set({
          isLoading: false,
          data: {},
          isAuthenticated: false,
          isProfileCreated: false,
        });
        await deleteLocalStorage("@user");
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
          set({ isLoading: false, data: userData, isProfileCreated: true });
        } else {
          set({ isLoading: false, isError: true });
        }
      }
    } catch (error) {
      set({ isLoading: false, isError: true });
    }
  },
}));
