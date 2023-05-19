/** @format */

import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

const InputText = ({
  title,
  placeholder,
  value,
  onChangeText,
  password = false,
}) => {
  const [isFocused, setIsFocused] = useState("lightgrey");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      <TextInput
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
        cursorColor={"#000000"}
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
    fontWeight: 600,
  },
  input: {
    borderWidth: 1.5,
    borderColor: "lightgrey",
    height: 50,
    borderRadius: 10,
    padding: 16,
    fontSize: 16,
    paddingLeft: 24,
  },
});
