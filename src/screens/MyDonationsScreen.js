/** @format */

import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { userStore } from "../store/userStore";
import { donationStore } from "../store/donationStore";
import Card from "../components/Card";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MyDonationsScreen = () => {
  const user = userStore((state) => state.data);
  const donations = donationStore((state) => state.data);
  const [myDonations, setMyDonations] = useState([]);

  useEffect(() => {
    if (user != {} && donations != []) {
      for (const element of donations) {
        if (element.userId === user.email) {
          myDonations.push(element);
        }
      }
    }
    const removeDuplicateObjects = () => {
      const uniqueArray = myDonations.filter(
        (obj, index, self) =>
          index ===
          self.findIndex((o) => JSON.stringify(o) === JSON.stringify(obj))
      );
      setMyDonations(uniqueArray);
    };

    // Usage
    removeDuplicateObjects();
  }, []);

  return (
    <Layout>
      <Header title="My Donations" />
      <View style={{ height: windowHeight, paddingHorizontal: 16 }}>
        {myDonations &&
          myDonations?.map((donation, index) => (
            <Card item={donation} key={index} />
          ))}
        {myDonations.length === 0 && (
          <>
            <Text
              style={{
                fontSize: 18,
                marginTop: 50,
                fontFamily: "Outfit_500Medium",
                textAlign: "center",
              }}
            >
              You havn't donated yet!
            </Text>
            <View
              style={{
                position: "absolute",
                bottom: 210,
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: "Outfit_500Medium",
                  textAlign: "center",
                }}
              >
                Click here to donate now!
              </Text>
              <Image
                style={{
                  width: 75,
                  height: 175,
                  opacity: 0.9,
                  alignSelf: "center",
                }}
                source={require("../../assets/icons/arrowdown.png")}
              />
            </View>
          </>
        )}
      </View>
    </Layout>
  );
};

export default MyDonationsScreen;

const styles = StyleSheet.create({});
