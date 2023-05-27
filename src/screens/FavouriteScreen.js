import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { donationStore } from "../store/donationStore";
import { ButtonGroup } from "../components/ButtonGroup";
import FavouriteFoodCard from "../components/FavouriteFoodCard";

const FavouriteScreen = () => {
  const donations = donationStore((state) => state.data);
  return (
    <Layout>
      <Header title={"Your Favourites"} />

      <View style={styles.container}>
        <ButtonGroup />
        <View style={{ paddingTop: 16 }}>
          {donations?.map((donation, index) => (
            <FavouriteFoodCard item={donation} key={index} />
          ))}
        </View>
      </View>
    </Layout>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
