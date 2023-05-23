/** @format */

import { StyleSheet, TextInput, View, Pressable } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const SearchBar = ({ onPress }) => {
  const [isFocused, setIsFocused] = useState("#F5F4F4");

  return (
    <View style={styles.container}>
      <View style={[styles.searchBar, { borderColor: isFocused }]}>
        <Ionicons name={"search"} size={24} color={"gray"} />
        <TextInput
          onFocus={() => {
            setIsFocused("black");
          }}
          onBlur={() => {
            setIsFocused("#F5F4F4");
          }}
          cursorColor={"#000000"}
          maxLength={15}
          style={{
            fontSize: 16,
            fontFamily: "Outfit_500Medium",
            color: "gray",
            width: "100%",
          }}
          placeholder="Search"
        />
      </View>
      <Pressable onPress={onPress} style={styles.filter}>
        <Ionicons name={"ios-options"} size={28} color={"gray"} />
      </Pressable>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 8,
    marginHorizontal: 16,
  },
  filter: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 16,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: "#F5F4F4",
    backgroundColor: "#F5F4F4",
    flex: 1,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    gap: 16,
  },
});
