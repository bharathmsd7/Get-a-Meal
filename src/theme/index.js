/** @format */

import { StyleSheet } from "react-native";

const COLORS = {
  primary: "#EE4544",
  darkPrimary: "#ffb3ad",
  white: "#fff",
  black: "#000",
  grey: "#6e6969",
  danger: "#ff5252",
  dark: "#0c0c0c",
  background: "#f5f5f5",
  green: "#00C853",
  divider: "#F5F4F4",
  inputText: "#808080",
  darkBackground: "#201a19",
  lightBackground: "#fffbff",
  lightText: "#201a19",
  darkText: "#ede0de",
  lightGrey: "#d3d3d3",
};

export const darkTheme = StyleSheet.create({
  backgroundColor: COLORS.darkBackground,
  statusBarColor: COLORS.darkBackground,
  barStyle: "light-content",
  textColor: COLORS.darkText,
  LoginScreen: {
    spinner: {
      color: COLORS.white,
      fontSize: 20,
      fontFamily: "Outfit_600SemiBold",
    },
    title: {
      fontSize: 30,
      fontFamily: "Outfit_600SemiBold",
      color: COLORS.darkText,
    },
    orText: {
      fontSize: 16,
      fontFamily: "Outfit_600SemiBold",
      color: "lightgrey",
      paddingHorizontal: 8,
    },
    line: {
      height: 1,
      width: "95%",
      backgroundColor: "lightgrey",
    },
    bottomText: {
      fontSize: 16,
      fontFamily: "Outfit_600SemiBold",
      textAlign: "center",
    },
    socialText: {
      fontSize: 16,
      fontFamily: "Outfit_600SemiBold",
    },
    socialContainer: {
      padding: 16,
      borderWidth: 1.5,
      borderColor: "lightgrey",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
      flexDirection: "row",
      marginBottom: 16,
      backgroundColor: COLORS.white,
    },
  },
});

export const lightTheme = StyleSheet.create({
  backgroundColor: COLORS.lightBackground,
  statusBarColor: COLORS.lightBackground,
  barStyle: "dark-content",
  textColor: COLORS.lightText,
  LoginScreen: {
    spinner: {
      color: COLORS.white,
      fontSize: 20,
      fontFamily: "Outfit_600SemiBold",
    },
    title: {
      fontSize: 30,
      fontFamily: "Outfit_600SemiBold",
      color: COLORS.lightText,
    },
    orText: {
      fontSize: 16,
      fontFamily: "Outfit_600SemiBold",
      color: "lightgrey",
      paddingHorizontal: 8,
    },
    line: {
      height: 1,
      width: "95%",
      backgroundColor: "lightgrey",
    },
    bottomText: {
      fontSize: 16,
      fontFamily: "Outfit_600SemiBold",
      textAlign: "center",
    },
    socialText: {
      fontSize: 16,
      fontFamily: "Outfit_600SemiBold",
    },
    socialContainer: {
      padding: 16,
      borderWidth: 1.5,
      borderColor: "lightgrey",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
      flexDirection: "row",
      marginBottom: 16,
      backgroundColor: COLORS.white,
    },
  },
});
