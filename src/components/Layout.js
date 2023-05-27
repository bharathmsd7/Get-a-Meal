/** @format */

import { StyleSheet, SafeAreaView, StatusBar, ScrollView } from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";

const Layout = ({ scroll, children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView scrollEnabled={scroll} showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor={COLORS.white} barStyle='dark-content' />
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
