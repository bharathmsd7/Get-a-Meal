/** @format */

import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Symbol from "./Symbol";
import ContactButton from "./ContactButton";
import { COLORS } from "../constants/colors";
import { timeAgo } from "../utils/commonutils";

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
            gap: 8,
          }}
        >
          <View>
            <Text
              numberOfLines={1}
              style={{ fontSize: 18, fontFamily: "Outfit_600SemiBold" }}
            >
              {item.title}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 14,
                fontFamily: "Outfit_500Medium",
                color: "gray",
              }}
            >
              {item.description}
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 16 }}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name={"location-outline"} size={18} color={"gray"} />
              <Text style={{ color: "gray", fontFamily: "Outfit_400Regular" }}>
                {" "}
                {item.location}{" "}
              </Text>
            </View>
            <Symbol veg={item.veg} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ContactButton />
            <Text style={{ color: "gray", fontFamily: "Outfit_400Regular" }}>
              {" "}
              Posted {timeAgo(item.createdAt)}
            </Text>

            {/* <ContactButton /> */}
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
    borderWidth: 1,
    padding: 16,
    borderColor: "lightgray",
    backgroundColor: COLORS.white,
    marginBottom: 16,
  },
});
