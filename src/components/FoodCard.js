/** @format */

import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Symbol from "./Symbol";
import { COLORS } from "../constants/colors";
import { navigateToScreen, timeAgo } from "../utils/commonutils";
import { userStore } from "../store/userStore";
import { SharedElement } from "react-navigation-shared-element";

const FoodCard = ({ item }) => {
  const user = userStore((state) => state.data);
  const favourite = item?.usersEnquired?.includes(user?.email);

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigateToScreen("Details", item)}
    >
      {favourite && (
        <View style={styles.favourite}>
          <Ionicons name={"bookmark"} size={26} color={COLORS.primary} />
        </View>
      )}

      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 95, height: 95, borderRadius: 16 }}>
          <SharedElement id={`item.${item.url}.photo`}>
            <Image
              source={{ uri: item?.url }}
              style={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                borderRadius: 16,
              }}
            />
          </SharedElement>
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
              {item?.title}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 14,
                fontFamily: "Outfit_500Medium",
                color: "gray",
              }}
            >
              {item?.description}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{}}>
              <View style={{ flexDirection: "row" }}>
                <Ionicons name={"location-outline"} size={18} color={"gray"} />
                <Text
                  style={{ color: "gray", fontFamily: "Outfit_400Regular" }}
                >
                  {" "}
                  {item?.location}
                </Text>
              </View>
              <Text
                style={{ color: COLORS.grey, fontFamily: "Outfit_400Regular" }}
              >
                {" "}
                Posted {timeAgo(item?.createdAt)}
              </Text>
            </View>
            <Symbol veg={item?.veg} />
            {/* <ContactButton /> */}
          </View>
        </View>
      </View>
    </Pressable>
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
  favourite: {
    position: "absolute",
    top: -8,
    right: 20,
  },
});
