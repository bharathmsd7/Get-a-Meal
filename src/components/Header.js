/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";
import Avatar from "./Avatar";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Ionicons name={"menu"} size={28} color={"black"} />
      <Text style={styles.title}>{title}</Text>
      <Avatar url={"https://picsum.photos/701"} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    color: COLORS.black,
    fontWeight: "500",
  },
});
