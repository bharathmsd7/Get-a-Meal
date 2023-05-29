import { StyleSheet, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "../constants/colors";

const FavouriteButton = ({ onPress, style, favourite }) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      {!favourite && (
        <Ionicons name={"bookmark-outline"} size={30} color={"gray"} />
      )}
      {favourite && (
        <Ionicons name={"bookmark"} size={30} color={COLORS.primary} />
      )}
    </Pressable>
  );
};

export default FavouriteButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: 55,
    width: 55,
    borderRadius: 8,
    borderColor: COLORS.grey,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.3,
  },
});
