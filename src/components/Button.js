/** @format */

import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { themeStore } from "../store/themeStore";
import { COLORS } from "../constants/colors";

const Button = ({ text, onPress, style, disabled = false }) => {
  const theme = themeStore((state) => state.theme);

  if (disabled) {
    return (
      <Pressable
        style={[
          styles.container,
          style,
          { backgroundColor: theme.button.buttonColorDisabled },
        ]}
      >
        <Text style={[styles.text, { color: theme.button.textColorDisabled }]}>
          {text}
        </Text>
      </Pressable>
    );
  }
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        style,
        {
          backgroundColor: theme.button.buttonColor,
        },
      ]}
    >
      <Text style={[styles.text, { color: theme.button.textColor }]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 55,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Outfit_700Bold",
  },
});
