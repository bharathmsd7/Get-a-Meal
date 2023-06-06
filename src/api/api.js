/** @format */

import { Client as Appwrite, Databases, Account, Storage } from "appwrite";
import { Server } from "../config/Server";

let api = {
  sdk: null,

  provider: () => {
    if (api.sdk) {
      return api.sdk;
    }
    let appwrite = new Appwrite();
    appwrite.setEndpoint(Server.endpoint).setProject(Server.project);
    const account = new Account(appwrite);
    const database = new Databases(appwrite);

    api.sdk = { database, account };

    return api.sdk;
  },

  createAccount: (email, password, name) => {
    return api.provider().account.create("unique()", email, password, name);
  },

  getAccount: () => {
    let account = api.provider().account;
    return account.get();
  },

  createSession: (email, password) => {
    return api.provider().account.createEmailSession(email, password);
  },

  getSession: (sessionId) => {
    return api.provider().account.getSession(sessionId);
  },

  deleteCurrentSession: () => {
    return api.provider().account.deleteSession("current");
  },

  deleteSessions: () => {
    return api.provider().account.deleteSessions();
  },

  updatePreferences: (preferences) => {
    console.log("API :", preferences);
    return api.provider().account.updatePrefs(preferences);
  },

  createDocument: (data) => {
    return api
      .provider()
      .database.createDocument(
        Server.databaseID,
        Server.collectionID,
        "unique()",
        data
      );
  },

  listDocuments: (databaseId, collectionId) => {
    return api.provider().database.listDocuments(databaseId, collectionId);
  },

  getDocument: (databaseId, collectionId, documentId) => {
    return api
      .provider()
      .database.getDocument(databaseId, collectionId, documentId);
  },

  updateDocument: (documentId, data) => {
    return api
      .provider()
      .database.updateDocument(
        Server.databaseID,
        Server.collectionID,
        documentId,
        data
      );
  },

  deleteDocument: (databaseId, collectionId, documentId) => {
    return api
      .provider()
      .database.deleteDocument(databaseId, collectionId, documentId);
  },

  uploadImage: async (image) => {
    let filename = image.split("/").pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(image);
    let type = match ? `image/${match[1]}` : `image`;

    let formData = new FormData();
    formData.append("fileId", "unique()");
    formData.append("file", {
      uri: image,
      name: filename,
      type,
    });
    console.log("FORM DATA :", formData);
    return fetch(
      `${Server.endpoint}/storage/buckets/${Server.bucketID}/files/`,
      {
        method: "POST",
        headers: {
          "content-type": "multipart/form-data",
          "X-Appwrite-Project": Server.project,
          "x-sdk-version": "appwrite:web:11.0.0",
          "X-Appwrite-Response-Format": "0.15.0",
        },
        body: formData,
        credentials: "include",
      }
    )
      .then((response) => response.json())
      .then((result) => {
        let imageURL = `https://cloud.appwrite.io/v1/storage/buckets/${result.bucketId}/files/${result.$id}/view?project=getamealnow&mode=admin`;
        console.log("API RESPONSE", JSON.stringify(result));
        return imageURL;
      })
      .catch((error) => {
        console.log("API ERROR", error);
        return "error";
      });
  },
};

export default api;
