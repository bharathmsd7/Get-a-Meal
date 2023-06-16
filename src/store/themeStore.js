/** @format */

import { create } from "zustand";
import { lightTheme, darkTheme } from "../theme";

export const themeStore = create((set, get) => ({
  darkMode: false,
  theme: lightTheme,

  setTheme: async (darkmode) => {
    if (darkmode) {
      set({ theme: darkTheme });
    } else {
      set({ theme: lightTheme });
    }
  },
}));
