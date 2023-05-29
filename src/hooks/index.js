/** @format */

import api from "../api/api";
import { Server } from "../config/Server";

export async function signup(email, password, name) {
  try {
    const result = await api.createAccount(email, password, name);
    return result;
  } catch (err) {
    console.log("ERROR", err);
    return "error";
  }
}
export async function login(email, password) {
  try {
    const result = await api.createSession(email, password);
    return result;
  } catch (err) {
    console.log("ERROR", err);
    return "error";
  }
}
export async function getAccount() {
  try {
    const result = await api.getAccount();
    return result;
  } catch (err) {
    console.log("ERROR", err);
    return "error";
  }
}

export async function getSession(sessionId) {
  try {
    const result = await api.getSession(sessionId);
    console.log("SESSION RESPONSE ", JSON.stringify(result));
    return result;
  } catch (err) {
    console.log("ERROR", err);
    return "error";
  }
}
export async function updatePreferences(preferences) {
  console.log("PREFE", JSON.stringify(preferences));
  try {
    const result = await api.updatePreferences(preferences);
    console.log("UPDATE PREFERENCES RESPONSE ", JSON.stringify(result));
    return result;
  } catch (err) {
    console.log("ERROR", err);
    return "error";
  }
}
export async function logout() {
  try {
    const result = await api.deleteCurrentSession();
    console.log("RESPONSE ", JSON.stringify(result));
    return result;
  } catch (err) {
    console.log("ERROR", err);
    return "error";
  }
}

export async function fetchDonations() {
  try {
    const result = await api.listDocuments(
      Server.databaseID,
      Server.collectionID
    );
    return result?.documents;
  } catch (err) {
    console.log("ERROR", err);
  }
}

export async function fetchOne(databaseId, collectionId, documentId) {
  try {
    const result = await api.getDocument(databaseId, collectionId, documentId);
    console.log("RESPONSE ", JSON.stringify(result));
  } catch (err) {
    console.log("ERROR", err);
  }
}
