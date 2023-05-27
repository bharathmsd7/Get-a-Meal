import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { donationStore } from "../store/donationStore";
import FoodCard from "../components/FoodCard";
import { ButtonGroup } from "../components/ButtonGroup";

const ExploreScreen = () => {
  const donations = donationStore((state) => state.data);
  return (
    <Layout>
      <Header title={"Explore"} />

      <View style={styles.container}>
        <ButtonGroup />
        <View style={{ paddingTop: 16 }}>
          {donations?.map((donation, index) => (
            <FoodCard item={donation} key={index} />
          ))}
        </View>
      </View>
    </Layout>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
