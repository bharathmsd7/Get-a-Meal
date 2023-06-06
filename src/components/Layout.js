/** @format */

import { StyleSheet, SafeAreaView, StatusBar, ScrollView } from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";

const Layout = ({
  scroll,
  backgroundColor = COLORS.white,
  children,
  paddingTop,
}) => {
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor }, { paddingTop }]}
    >
      <ScrollView scrollEnabled={scroll} showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
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
