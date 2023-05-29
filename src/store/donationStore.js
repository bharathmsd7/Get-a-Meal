/** @format */

import { create } from "zustand";
import { fetchDonations, updateFavourite } from "../hooks";

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
  updateFavourite: async (documentId, data) => {
    try {
      set({ isLoading: true });
      const response = await updateFavourite(documentId, data);
      if (response !== "error") {
        let newData = get().data;
        const updatedData = newData.map((item) => {
          if (item.$id === documentId) {
            return { ...item, data };
          }
          return item;
        });
        // set({ data: updatedData });
        set({ isLoading: false });
      }
    } catch (error) {
      console.log(error);
      set({ isLoading: false, isError: true });
    }
  },
}));
