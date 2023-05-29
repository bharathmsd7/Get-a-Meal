/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";

const ContactButton = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        paddingHorizontal: 16,
        paddingVertical: 4,
        borderRadius: 4,
      }}
    >
      <Text style={{ color: COLORS.white, fontFamily: "Outfit_600SemiBold" }}>
        Contact
      </Text>
    </View>
  );
};

export default ContactButton;

const styles = StyleSheet.create({});
