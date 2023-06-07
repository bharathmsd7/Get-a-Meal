/** @format */

import { StyleSheet, Image, View } from "react-native";
import React from "react";

const Avatar = ({ gender }) => {
  const size = 45;
  return (
    <View
      style={{
        borderRadius: 100,
        width: size,
        height: size,
        borderWidth: 1,
        borderColor: "lightgray",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "lightgray",
      }}
    >
      <Image
        style={{ width: "100%", height: "100%" }}
        source={
          gender === "male"
            ? require("../../assets/icons/avatar.png")
            : require("../../assets/icons/female.png")
        }
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({});
