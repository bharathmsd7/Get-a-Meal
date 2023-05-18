/** @format */

import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Symbol from "./Symbol";
import ContactButton from "./ContactButton";

const FoodCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 90, height: 90, borderRadius: 16 }}>
          <Image
            source={{ uri: item.url }}
            style={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              borderRadius: 16,
            }}
          />
        </View>
        <View
          style={{
            paddingLeft: 16,
            justifyContent: "space-around",
            flex: 1,
          }}
        >
          <View>
            <Text numberOfLines={1} style={{ fontSize: 18, fontWeight: "500" }}>
              {item.title}
            </Text>
            <Text
              numberOfLines={1}
              style={{ fontSize: 14, fontWeight: "400", color: "gray" }}
            >
              {item.description}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Ionicons name={"location-outline"} size={18} color={"gray"} />
              <View
                style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
              >
                <Text style={{ color: "gray" }}> {item.distance} km</Text>
                <Symbol veg={item.veg} />
              </View>
            </View>
            <ContactButton />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    borderWidth: 1.5,
    padding: 12,
    borderColor: "#F5F4F4",
    backgroundColor: "#FFFFFF",
  },
});
