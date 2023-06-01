/** @format */

import {
  StyleSheet,
  Image,
  View,
  ImageBackground,
  StatusBar,
  Text,
  Pressable,
} from "react-native";
import React from "react";
import ConfettiCannon from "react-native-confetti-cannon";
import { COLORS } from "../constants/colors";
import Button from "../components/Button";

const SuccessScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.image}
      source={require("../../assets/icons/successbackground.png")}
    >
      <StatusBar
        backgroundColor={"#FF573300"}
        translucent
        barStyle="light-content"
      />
      <ConfettiCannon
        zIndex={100}
        fallSpeed={10000}
        count={200}
        origin={{ x: -10, y: 0 }}
      />
      <View style={styles.card}>
        <Image
          style={{ height: 150, width: 150, alignSelf: "center" }}
          source={require("../../assets/icons/badge.png")}
        />
        <Text
          style={{
            marginBottom: 20,
            fontSize: 20,
            fontFamily: "Outfit_600SemiBold",
            textAlign: "center",
            marginTop: 30,
          }}
        >
          Your Donation was appreciated
        </Text>
        <Button
          onPress={() => navigation.navigate("Home")}
          text="Back to Home"
        />
        <Pressable
          onPress={() => navigation.navigate("MyDonations")}
          style={{ marginVertical: 20 }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Outfit_500Medium",
              textAlign: "center",
            }}
          >
            Show my Donations
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
