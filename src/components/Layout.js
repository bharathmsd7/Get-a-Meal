/** @format */

import { StyleSheet, SafeAreaView, StatusBar, ScrollView } from "react-native";
import React from "react";

const Layout = ({ scroll, children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView scrollEnabled={scroll} showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
