/** @format */

import { StyleSheet, SafeAreaView, StatusBar, ScrollView } from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";
import { themeStore } from "../store/themeStore";

const Layout = ({ scroll, children, paddingTop }) => {
  const theme = themeStore((state) => state.theme);
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme.backgroundColor },
        { paddingTop },
      ]}
    >
      <ScrollView scrollEnabled={scroll} showsVerticalScrollIndicator={false}>
        <StatusBar
          backgroundColor={theme.statusBarColor}
          barStyle={theme.barStyle}
        />
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
