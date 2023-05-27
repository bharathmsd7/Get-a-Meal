/** @format */

import { StyleSheet, View } from "react-native";
import React from "react";

const Symbol = ({ veg, style }) => {
  return (
    <View
      style={[
        style,
        {
          borderWidth: 1,
          height: 20,
          width: 20,
          borderColor: veg ? "green" : "red",
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      <View
        style={{
          height: 12,
          width: 12,
          backgroundColor: veg ? "green" : "red",
          borderRadius: 14,
        }}
      ></View>
    </View>
  );
};

export default Symbol;

const styles = StyleSheet.create({});
