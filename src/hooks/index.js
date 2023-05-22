/** @format */

import api from "../api/api";

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
    console.log("RESPONSE ", JSON.stringify(result));
  } catch (err) {
    console.log("ERROR", err);
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

export async function fetchAll(databaseId, collectionId) {
  try {
    const result = await api.listDocuments(databaseId, collectionId);
    console.log("RESPONSE ", JSON.stringify(result));
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
