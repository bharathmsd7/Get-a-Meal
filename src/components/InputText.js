/** @format */

import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../constants/colors";

const InputText = ({
  title,
  placeholder,
  value,
  onChangeText,
  password = false,
  disabled = false,
  editable = true,
}) => {
  const [isFocused, setIsFocused] = useState("lightgrey");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
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
        maxLength={20}
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
    fontFamily: "Outfit_700Bold",
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
