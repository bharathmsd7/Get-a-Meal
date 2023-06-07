/** @format */

import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../constants/colors";
import Avatar from "./Avatar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { navigateToScreen } from "../utils/commonutils";
import { userStore } from "../store/userStore";

const Header = ({ title }) => {
  const [gender, setGender] = useState("male");
  const user = userStore((state) => state.data);

  useEffect(() => {
    if (user !== {}) {
      setGender(user?.prefs?.gender);
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigateToScreen("Home")}>
        <Ionicons name={"arrow-back"} size={28} color={"gray"} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
      <Avatar gender={gender} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    color: COLORS.black,
    fontFamily: "Outfit_700Bold",
  },
});
