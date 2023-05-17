/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Category from "../components/Category";
import Divider from "../components/Divider";
import ExploreSection from "../components/ExploreSection";
import SlidingUpPanel from "rn-sliding-up-panel";
import Slider from "@react-native-community/slider";

const HomeScreen = () => {
  return (
    <Layout>
      <Header title={"Get a Meal"} />

      <SearchBar onPress={() => this._panel.show()} />
      <Category />
      <Divider />
      <ExploreSection />

      <SlidingUpPanel ref={(c) => (this._panel = c)}>
        <View style={styles.container}>
          <View style={{}}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Distance</Text>
          </View>
          <Slider
            step={0.1}
            thumbTintColor="#EE4544"
            style={{ width: "100%", height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#EE4544"
            // maximumTrackTintColor="#000000"
          />
        </View>
      </SlidingUpPanel>
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});
