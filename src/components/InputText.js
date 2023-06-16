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
  const [isFocused, setIsFocused] = useState(
    theme.inputText.borderColorUnFocused
  );

  return (
    <View style={styles.container}>
      <CustomText style={styles.label}>{title}</CustomText>
      <TextInput
        editable={editable}
        disabled={disabled}
        onFocus={() => {
          setIsFocused(theme.inputText.borderColorFocused);
        }}
        onBlur={() => {
          setIsFocused(theme.inputText.borderColorUnFocused);
        }}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={theme.inputText.borderColorUnFocused}
        placeholder={placeholder}
        maxLength={maxLength}
        cursorColor={theme.inputText.cursorColor}
        secureTextEntry={password}
        style={[
          styles.input,
          { borderColor: isFocused, color: theme.inputText.textColor },
        ]}
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
    height: 50,
    borderRadius: 10,
    padding: 16,
    fontSize: 16,
    paddingLeft: 24,
    fontFamily: "Outfit_600SemiBold",
  },
});
