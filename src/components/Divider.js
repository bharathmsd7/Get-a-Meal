/** @format */

import { StyleSheet, View } from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";

const Divider = () => {
  return <View style={styles.divider}></View>;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: COLORS.grey,
    marginVertical: 5,
    marginHorizontal: 16,
    opacity: 0.3,
  },
});
