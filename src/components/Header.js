/** @format */

import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../constants/colors";
import Avatar from "./Avatar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { navigateToScreen } from "../utils/commonutils";
import { userStore } from "../store/userStore";

const Header = ({ title, back = true, avatar = true }) => {
  const [gender, setGender] = useState("male");
  const user = userStore((state) => state.data);

  useEffect(() => {
    if (user !== {}) {
      setGender(user?.prefs?.gender);
    }
  }, [user]);

  return (
    <View style={styles.container}>
      {back ? (
        <Pressable onPress={() => navigateToScreen("Home")}>
          <Ionicons name={"arrow-back"} size={28} color={"gray"} />
        </Pressable>
      ) : (
        <View style={{ width: 28 }} />
      )}

      <Text style={styles.title}>{title}</Text>
      {avatar ? <Avatar gender={gender} /> : <View style={{ width: 28 }} />}
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
    textAlign: "center",
    fontSize: 22,
    color: COLORS.black,
    fontFamily: "Outfit_700Bold",
  },
});
