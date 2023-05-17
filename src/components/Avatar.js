/** @format */

import { StyleSheet, Image, View } from "react-native";
import React from "react";

const Avatar = ({ url }) => {
  const size = 40;
  return (
    <View
      style={{
        borderRadius: 100,
        width: size,
        height: size,
        borderWidth: 1,
        borderColor: "lightgray",
        elevation: 5,
      }}
    >
      <Image
        style={{ width: "100%", height: "100%", borderRadius: 100 }}
        source={{ uri: url }}
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({});
