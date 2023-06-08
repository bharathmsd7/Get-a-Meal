/** @format */

import { create } from "zustand";
import { fetchDonations, updateFavourite, uploadImage } from "../hooks";
import api from "../api/api";

export const donationStore = create((set, get) => ({
  data: [],
  isLoading: false,
  isError: false,
  uploadedImage: null,
  isUploading: false,

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
      console.log(documentId, data);
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

  createDonation: async (data) => {
    try {
      set({ isUploading: true });
      const response = await api.uploadImage(data.url);
      if (response !== "error") {
        data.url = response;
        const result = await api.createDocument(data);
        set({ isUploading: false });
        return result;
      }
    } catch (error) {
      console.log(error);
      set({ isUploading: false, isError: true });
    }
  },

  completeDonation: async (documentId, data) => {
    try {
      set({ isLoading: true });
      const result = await api.updateDocument(documentId, data);
      set({ isLoading: false });
      return result;
    } catch (error) {
      console.log(error);
      set({ isLoading: false, isError: true });
    }
  },

  updateDonation: async (skipImageUpload, documentId, data) => {
    if (skipImageUpload) {
      console.log("Skipping Image Upload");
      try {
        set({ isUploading: true });
        const result = await api.updateDocument(documentId, data);
        set({ isUploading: false });
        return result;
      } catch (error) {
        console.log(error);
        set({ isUploading: false, isError: true });
      }
    } else {
      console.log("Uploading Image");
      try {
        set({ isUploading: true });
        const response = await api.uploadImage(data.url);
        if (response !== "error") {
          data.url = response;
          const result = await api.updateDocument(documentId, data);
          set({ isUploading: false });
          return result;
        }
      } catch (error) {
        console.log(error);
        set({ isUploading: false, isError: true });
      }
    }
  },
}));
