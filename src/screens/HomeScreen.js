/** @format */

import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import RadioGroup from "react-native-radio-buttons-group";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import Category from "../components/Category";
import Divider from "../components/Divider";
import ExploreSection from "../components/ExploreSection";
import SlidingUpPanel from "rn-sliding-up-panel";
import Slider from "@react-native-community/slider";
import Button from "../components/Button";
import Avatar from "../components/Avatar";
import { userStore } from "../store/userStore";
import { donationStore } from "../store/donationStore";
import { COLORS } from "../constants/colors";
import { navigateToScreen } from "../utils/commonutils";

const HomeScreen = () => {
  const [gender, setGender] = useState("male");
  const user = userStore((state) => state.data);
  const donations = donationStore((state) => state.data);
  const getDonations = donationStore((state) => state.getAllDonations);
  const isLoading = donationStore((state) => state.isLoading);

  useEffect(() => {
    function getDonationData() {
      getDonations();
    }
    getDonationData();
  }, []);

  useEffect(() => {
    if (user !== {}) {
      setGender(user?.prefs?.gender);
    }
  }, [user]);

  const FoodType = useMemo(
    () => [
      {
        id: "1",
        label: "All food",
        value: "All food",
      },
      {
        id: "2",
        label: "Veg",
        value: "Veg",
      },
      {
        id: "3",
        label: "Non Veg",
        value: "Non Veg",
      },
    ],
    []
  );
  const Sortby = useMemo(
    () => [
      {
        id: "1",
        label: "Newest",
        value: "Newest",
      },
      {
        id: "2",
        label: "Closest",
        value: "Closest",
      },
    ],
    []
  );
  const [selectedSortby, setSelectedSortby] = useState();
  const [selectedFoodType, setSelectedFoodType] = useState();
  return (
    <Layout>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Bonjour {user?.name} 👋🏻</Text>
        <Avatar gender={gender} />
      </View>

      <SearchBar onPress={() => this._panel.show()} />
      <Category />
      <Divider />

      <ExploreSection
        data={donations}
        onPress={() => navigateToScreen("Explore")}
        isLoading={isLoading}
      />

      <SlidingUpPanel snappingPoints={[50]} ref={(c) => (this._panel = c)}>
        <View style={styles.container}>
          <View
            style={{
              height: 5,
              width: 40,
              backgroundColor: "lightgray",
              alignSelf: "center",
            }}
          ></View>
          <View
            style={{
              marginTop: 16,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontFamily: "Outfit_700Bold" }}>
              Distance
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Outfit_600SemiBold",
                color: "gray",
              }}
            >
              2 km
            </Text>
          </View>
          <Slider
            step={0.1}
            thumbTintColor={COLORS.primary}
            style={{ width: "100%", height: 30 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor={COLORS.primary}
            // maximumTrackTintColor="#000000"
          />
          <Text
            style={{
              marginTop: 26,
              marginBottom: 8,
              fontSize: 18,
              fontFamily: "Outfit_700Bold",
            }}
          >
            Food type
          </Text>
          <RadioGroup
            color={COLORS.primary}
            radioButtons={FoodType}
            onPress={setSelectedFoodType}
            layout="row"
            selectedId={selectedFoodType}
            descriptionStyle={{ fontFamily: "Outfit_500Medium" }}
          />
          <Text
            style={{
              marginTop: 26,
              marginBottom: 8,
              fontSize: 18,
              fontFamily: "Outfit_700Bold",
            }}
          >
            Sort by
          </Text>
          <RadioGroup
            color={COLORS.primary}
            radioButtons={Sortby}
            onPress={setSelectedSortby}
            layout="row"
            selectedId={selectedSortby}
          />
          <Button
            style={{ marginTop: 26 }}
            onPress={() => this._panel.hide()}
            text="Show results"
          />
          <Pressable style={{ marginVertical: 8, alignSelf: "center" }}>
            <Text
              style={{
                color: "gray",
                marginTop: 16,
                fontSize: 16,
                fontFamily: "Outfit_700Bold",
              }}
            >
              Reset
            </Text>
          </Pressable>
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
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    marginHorizontal: 16,
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Outfit_600SemiBold",
    fontSize: 24,
    color: COLORS.black,
  },
});
