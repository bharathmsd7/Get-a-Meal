/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";

const ChatScreen = () => {
  return (
    <Layout>
      <Header title='Chat' />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Outfit_400Regular",
            fontSize: 20,
            paddingVertical: 50,
          }}
        >
          Comming soon...
        </Text>
      </View>
    </Layout>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
