/** @format */

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Button = ({ text, onPress, style, disabled = false }) => {
  if (disabled) {
    return (
      <Pressable
        style={[styles.container, style, { backgroundColor: "#f5f5f5" }]}
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
    backgroundColor: "#EE4544",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 55,
  },
  text: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
  },
});
