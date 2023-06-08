/** @format */

import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import FoodCard from "./FoodCard";
import { COLORS } from "../constants/colors";
import FoodCardSkeleton from "./FoodCardSkeleton";

const ExploreSection = ({ data, onPress, isLoading }) => {
  let activeData = [];
  data?.map((item, index) => {
    if (!item.completed) {
      activeData.push(item);
    }
  });
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
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={onPress}
        >
          <Text style={{ color: "gray", fontFamily: "Outfit_600SemiBold" }}>
            See All
          </Text>
          <Ionicons name={"chevron-forward"} size={18} color={"gray"} />
        </Pressable>
      </View>
      {isLoading && (
        <>
          <FoodCardSkeleton />
          <FoodCardSkeleton />
          <FoodCardSkeleton />
          <FoodCardSkeleton />
          <FoodCardSkeleton />
        </>
      )}
      {activeData?.slice(0, 4).map((item, index) => (
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
    marginBottom: 70,
  },
  title: {
    fontFamily: "Outfit_700Bold",
    fontSize: 22,
  },
  desc: {
    fontFamily: "Outfit_600SemiBold",
    color: "gray",
  },
});
