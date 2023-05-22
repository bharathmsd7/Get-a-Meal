/** @format */

import { Client as Appwrite, Databases, Account } from "appwrite";
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
    return api.provider().account.updatePreferences(preferences);
  },

  createDocument: (databaseId, collectionId, data, permissions) => {
    return api
      .provider()
      .database.createDocument(
        databaseId,
        collectionId,
        "unique()",
        data,
        permissions
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

  updateDocument: (databaseId, collectionId, documentId, data) => {
    return api
      .provider()
      .database.updateDocument(databaseId, collectionId, documentId, data);
  },

  deleteDocument: (databaseId, collectionId, documentId) => {
    return api
      .provider()
      .database.deleteDocument(databaseId, collectionId, documentId);
  },
};

export default api;
