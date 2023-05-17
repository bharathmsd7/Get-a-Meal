/** @format */

import { StyleSheet, View } from "react-native";
import React from "react";

const Symbol = ({ veg }) => {
  return (
    <View
      style={{
        borderWidth: 1,
        height: 18,
        width: 18,
        borderColor: veg ? "green" : "red",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 10,
          width: 10,
          backgroundColor: veg ? "green" : "red",
          borderRadius: 14,
        }}
      ></View>
    </View>
  );
};

export default Symbol;

const styles = StyleSheet.create({});
