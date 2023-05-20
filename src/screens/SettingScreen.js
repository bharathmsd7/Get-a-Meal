/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { userLogout } from "../redux/reducers/userReducer";

const SettingScreen = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>SettingScreen</Text>
      <Button onPress={() => dispatch(userLogout())} text={"Logout"} />
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
