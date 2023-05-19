/** @format */

import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import RadioGroup from "react-native-radio-buttons-group";
import Layout from "../components/Layout";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Category from "../components/Category";
import Divider from "../components/Divider";
import ExploreSection from "../components/ExploreSection";
import SlidingUpPanel from "rn-sliding-up-panel";
import Slider from "@react-native-community/slider";
import Button from "../components/Button";
import { fetchAll, fetchOne, getAccount, login, logout } from "../hooks";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/reducers/userReducer";

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(userLogin({ email: "test@test.com", password: "password" }));
  }, []);
  const username = useSelector(selectUser);
  console.log("USERNAME :", username);
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
      <Header title={"Get a Meal"} />

      <SearchBar onPress={() => this._panel.show()} />
      <Category />
      <Divider />
      <ExploreSection />

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
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Distance</Text>
            <Text style={{ fontSize: 16, fontWeight: "500", color: "gray" }}>
              2 km
            </Text>
          </View>
          <Slider
            step={0.1}
            thumbTintColor="#EE4544"
            style={{ width: "100%", height: 30 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#EE4544"
            // maximumTrackTintColor="#000000"
          />
          <Text
            style={{
              marginTop: 26,
              marginBottom: 8,
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            Food type
          </Text>
          <RadioGroup
            color="#EE4544"
            radioButtons={FoodType}
            onPress={setSelectedFoodType}
            layout="row"
            selectedId={selectedFoodType}
          />
          <Text
            style={{
              marginTop: 26,
              marginBottom: 8,
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            Sort by
          </Text>
          <RadioGroup
            color="#EE4544"
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
                fontWeight: "600",
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
});
