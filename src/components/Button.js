/** @format */

import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";

const Button = ({ text, onPress, style, disabled = false }) => {
  if (disabled) {
    return (
      <Pressable
        style={[
          styles.container,
          style,
          { backgroundColor: COLORS.background },
        ]}
      >
        <Text style={[styles.text, { color: "lightgrey" }]}>{text}</Text>
      </Pressable>
    );
  }
  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 55,
  },
  text: {
    textAlign: "center",
    color: COLORS.white,
    fontSize: 18,
    fontFamily: "Outfit_700Bold",
  },
});
