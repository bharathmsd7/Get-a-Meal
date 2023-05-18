/** @format */

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Button = ({ text, onPress, style }) => {
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
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 10,
    elevation: 3,
  },
  text: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
