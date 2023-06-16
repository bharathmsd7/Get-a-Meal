/** @format */

import { StyleSheet, View, TextInput } from "react-native";
import React, { useState } from "react";
import CustomText from "./CustomText";
import { COLORS } from "../constants/colors";
import { themeStore } from "../store/themeStore";

const InputText = ({
  title,
  placeholder,
  value,
  onChangeText,
  password = false,
  disabled = false,
  editable = true,
  maxLength = 35,
}) => {
  const theme = themeStore((state) => state.theme);
  const [isFocused, setIsFocused] = useState("#d3d3d3");

  return (
    <View style={styles.container}>
      <CustomText style={styles.label}>{title}</CustomText>
      <TextInput
        editable={editable}
        disabled={disabled}
        onFocus={() => {
          setIsFocused("black");
        }}
        onBlur={() => {
          setIsFocused("lightgrey");
        }}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={"lightgrey"}
        placeholder={placeholder}
        maxLength={maxLength}
        cursorColor={COLORS.black}
        secureTextEntry={password}
        style={[styles.input, { borderColor: isFocused }]}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    gap: 8,
    marginVertical: 8,
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontFamily: "Outfit_600SemiBold",
  },
  input: {
    borderWidth: 1.5,
    borderColor: "lightgrey",
    height: 50,
    borderRadius: 10,
    padding: 16,
    fontSize: 16,
    paddingLeft: 24,
    color: COLORS.inputText,
    fontFamily: "Outfit_600SemiBold",
  },
});
