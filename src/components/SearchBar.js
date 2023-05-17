/** @format */

import { StyleSheet, TextInput, View, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const SearchBar = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name={"search"} size={24} color={"gray"} />
        <TextInput
          maxLength={15}
          style={{ fontSize: 16, color: "gray" }}
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
    backgroundColor: "#F5F4F4",
    flex: 1,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    gap: 16,
  },
});
