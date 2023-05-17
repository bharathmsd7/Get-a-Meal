/** @format */

import { StyleSheet, View } from "react-native";
import React from "react";

const Divider = () => {
  return <View style={styles.divider}></View>;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: "#F5F4F4",
    marginVertical: 5,
    marginHorizontal: 16,
  },
});
