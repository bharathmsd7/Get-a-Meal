import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigation";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

TimeAgo.addLocale(en);

export function timeAgo(time) {
  const timeAgo = new TimeAgo("en-US");
  try {
    const temp = time.split("+")[0];
    const ist = temp + "+05:30";
    const timer = new Date(ist);
    return timeAgo.format(timer);
  } catch (err) {
    console.log(err);
  }
}

export function navigateToScreen(screen, data) {
  try {
    setTimeout(function () {
      navigate(screen, data);
    }, 100);
  } catch (e) {
    console.error(e);
  }
}

export async function setLocalStorage(key, value) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log("ERROR: " + e.message);
  }
}

export async function getLocalStorage(key) {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("ERROR: " + e.message);
  }
}

export async function deleteLocalStorage(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log("ERROR: " + e.message);
  }
}

export async function clearLocalStorage() {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log("ERROR: " + e.message);
  }
}

export function compareDateTime(expiry) {
  var currentDate = new Date();
  var specifiedDate = new Date(expiry);

  if (currentDate > specifiedDate) {
    return true;
  } else if (currentDate < specifiedDate) {
    return false;
  } else {
    return false;
  }
}

// Call the function
compareDateTime();
