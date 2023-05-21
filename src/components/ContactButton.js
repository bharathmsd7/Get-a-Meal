/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ContactButton = () => {
  return (
    <View
      style={{
        backgroundColor: "#EE4544",
        paddingHorizontal: 16,
        paddingVertical: 4,
        borderRadius: 4,
      }}
    >
      <Text style={{ color: "#fff", fontFamily: "Outfit_600SemiBold" }}>
        Contact
      </Text>
    </View>
  );
};

export default ContactButton;

const styles = StyleSheet.create({});
