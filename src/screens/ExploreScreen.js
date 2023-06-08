/** @format */

import { StyleSheet, View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { donationStore } from "../store/donationStore";
import FoodCard from "../components/FoodCard";
import { ButtonGroup } from "../components/ButtonGroup";

const ExploreScreen = (props) => {
  const [selection, setSelection] = useState("All");
  const donations = donationStore((state) => state.data);
  const [filteredDonation, setFilteredDonation] = useState([]);
  useEffect(() => {
    if (props.route.params !== undefined) {
      setSelection(props.route.params);
    }
  }, []);

  useEffect(() => {
    if (selection == "All") {
      setFilteredDonation(donations);
    } else {
      console.log(donations);
      setFilteredDonation(
        donations.filter((donation) => donation.category == selection)
      );
      console.log(filteredDonation);
    }
  }, [selection]);

  return (
    <Layout>
      <Header title={"Explore"} />
      <View style={styles.container}>
        <ButtonGroup selection={selection} setSelection={setSelection} />
        <View style={{ paddingTop: 16 }}>
          {filteredDonation?.map((donation, index) => (
            <FoodCard item={donation} key={index} />
          ))}
          {filteredDonation.length == 0 && (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 100,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Outfit_500Medium",
                  textAlign: "center",
                }}
              >
                No Donations Found for this category
              </Text>
            </View>
          )}
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
