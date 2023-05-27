import { create } from "zustand";
import { fetchDonations } from "../hooks";

export const donationStore = create((set, get) => ({
  data: [],
  isLoading: false,
  isError: false,

  getAllDonations: async () => {
    try {
      set({ isLoading: true });
      const response = await fetchDonations();
      if (response !== "error") {
        set({ isLoading: false, data: response });
      }
    } catch (error) {
      console.log(error);
      set({ isLoading: false, isError: true });
    }
  },
}));
