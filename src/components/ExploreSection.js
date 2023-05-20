/** @format */

import { FlatList, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import FoodCard from "./FoodCard";

const data = [
  {
    title: "Food available for 5 people",
    description: "Cooked rice, fish, daal full packed",
    veg: false,
    distance: "02",
    url: "https://ministryofcurry.com/wp-content/uploads/2020/12/fish-curry-6-scaled.jpg",
  },
  {
    title: "Food available for 5 people",
    description: "Cooked rice, fish, daal full packed, dry fruits and cucumber",
    veg: true,
    distance: "2",
    url: "https://ministryofcurry.com/wp-content/uploads/2020/12/fish-curry-6-scaled.jpg",
  },
  {
    title: "Food available for 5 people",
    description: "Cooked rice, fish, daal full packed",
    veg: false,
    distance: "2",
    url: "https://ministryofcurry.com/wp-content/uploads/2020/12/fish-curry-6-scaled.jpg",
  },
  {
    title: "Food available for 5 people",
    description: "Cooked rice, fish, daal full packed",
    veg: false,
    distance: "2",
    url: "https://ministryofcurry.com/wp-content/uploads/2020/12/fish-curry-6-scaled.jpg",
  },
  {
    title: "Food available for 5 people",
    description: "Cooked rice, fish, daal full packed",
    veg: false,
    distance: "2",
    url: "https://ministryofcurry.com/wp-content/uploads/2020/12/fish-curry-6-scaled.jpg",
  },
];

const ExploreSection = () => {
  const HeaderComponent = (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 16,
      }}
    >
      <View style={{ gap: 4 }}>
        <Text style={styles.title}>Explore Food</Text>
        <Text style={styles.desc}>Find your nearest donor</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "gray" }}>See All</Text>
        <Ionicons name={"chevron-forward"} size={18} color={"gray"} />
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <View style={{ gap: 4 }}>
          <Text style={styles.title}>Explore Food</Text>
          <Text style={styles.desc}>Find your nearest donor</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "gray" }}>See All</Text>
          <Ionicons name={"chevron-forward"} size={18} color={"gray"} />
        </View>
      </View>
      {data.map((item, index) => (
        <FoodCard item={item} key={index} />
      ))}
    </View>
  );
};

export default ExploreSection;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  desc: {
    color: "gray",
  },
});
