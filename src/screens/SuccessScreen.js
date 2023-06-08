/** @format */

import {
  StyleSheet,
  Image,
  View,
  StatusBar,
  Text,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import ConfettiCannon from "react-native-confetti-cannon";
import { COLORS } from "../constants/colors";
import Button from "../components/Button";
import { userStore } from "../store/userStore";

const SuccessScreen = ({ navigation }) => {
  const [gender, setGender] = useState("male");
  const user = userStore((state) => state.data);
  useEffect(() => {
    if (user !== {}) {
      setGender(user?.prefs?.gender);
    }
  }, [user]);
  return (
    <View style={styles.image}>
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
          style={{ height: 200, width: 200, alignSelf: "center" }}
          source={
            gender === "female"
              ? require("../../assets/icons/femaleparty.png")
              : require("../../assets/icons/maleparty.png")
          }
        />
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Outfit_600SemiBold",
            textAlign: "center",
            marginTop: 15,
          }}
        >
          Your Donation was appreciated
        </Text>

        <Pressable
          onPress={() => navigation.navigate("MyDonations")}
          style={{ marginVertical: 20 }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Outfit_500Medium",
              textAlign: "center",
              color: COLORS.primary,
            }}
          >
            Show my Donations
          </Text>
        </Pressable>
        <Button
          onPress={() => navigation.navigate("Home")}
          text="Back to Home"
        />
      </View>
    </View>
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
    elevation: 2,
    paddingVertical: 20,
  },
});
