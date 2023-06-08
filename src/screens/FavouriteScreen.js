/** @format */

import { StyleSheet, View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import FavouriteFoodCard from "../components/FavouriteFoodCard";
import FoodCardSkeleton from "../components/FoodCardSkeleton";
import { donationStore } from "../store/donationStore";
import { userStore } from "../store/userStore";
import { COLORS } from "../constants/colors";

const FavouriteScreen = () => {
  const user = userStore((state) => state.data);
  const donations = donationStore((state) => state.data);
  const [favouriteDonation, setFavouriteDonation] = useState([]);

  useEffect(() => {
    if (donations !== []) {
      donations.map((donation, index) => {
        if (donation.usersEnquired.includes(user?.email)) {
          favouriteDonation.push(donation);
        }
      });
    }
  }, [donations]);

  return (
    <Layout>
      <Header back={false} title={"Your Favourites"} avatar={false} />

      <View style={styles.container}>
        <View style={{ paddingTop: 16 }}>
          {favouriteDonation?.map((donation, index) => (
            <FavouriteFoodCard item={donation} key={index} />
          ))}
          {favouriteDonation.length == 0 && (
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Outfit_600SemiBold",
                }}
              >
                You havn't bookmarked any donation yet, you can do it simply by
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Outfit_500Medium",
                  paddingVertical: 8,
                  marginTop: 8,
                }}
              >
                1. Tap on any Donation
              </Text>
              <FoodCardSkeleton />

              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Outfit_500Medium",
                  paddingVertical: 8,
                }}
              >
                2. Tap on bookmark icon in the top right corner
              </Text>

              <View
                style={{
                  backgroundColor: COLORS.background,
                  height: 250,
                  width: "100%",
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    zIndex: 10,
                    borderRadius: 5,
                    height: 40,
                    width: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(200, 200, 200, 0.5)",
                  }}
                >
                  <AntDesign
                    name={"arrowleft"}
                    size={25}
                    color={COLORS.white}
                  />
                </View>

                <View
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    zIndex: 10,
                    borderRadius: 5,
                    height: 40,
                    width: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(200, 200, 200, 0.5)",
                  }}
                >
                  <Ionicons
                    name={"bookmark"}
                    size={25}
                    color={COLORS.primary}
                  />
                </View>

                <View
                  style={{
                    position: "absolute",
                    top: 24,
                    right: 65,
                    height: 100,
                    width: 100,
                    opacity: 0.5,
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    source={require("../../assets/icons/curved-arrow.png")}
                  />
                </View>
              </View>
            </View>
          )}
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
