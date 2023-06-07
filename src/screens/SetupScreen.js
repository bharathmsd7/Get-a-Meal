/** @format */

import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import InputText from "../components/InputText";
import Button from "../components/Button";
import * as Location from "expo-location";
import { userStore } from "../store/userStore";
import Spinner from "react-native-loading-spinner-overlay";

const SetupScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const updateUserPreferences = userStore(
    (state) => state.updateUserPreferences
  );
  const isLoading = userStore((state) => state.isLoading);
  const isError = userStore((state) => state.isError);

  const handleUpdateLocation = () => {
    console.log(address);
    updateUserPreferences(address[0]);
    if (isLoading == false && isError == false) {
      navigation.navigate("Tabs");
    }
  };
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      if (location) {
        let addresss = await Location.reverseGeocodeAsync(location.coords);
        setAddress(addresss);
      }
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (address) {
    text = JSON.stringify(address);
  }

  return (
    <Layout>
      <Spinner
        visible={isLoading}
        textContent={"Loading..."}
        textStyle={{ fontSize: 16, fontFamily: "Outfit_600SemiBold" }}
      />
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../assets/icons/location.png")}
        />
        <Text style={styles.title}>Allow us to find your location</Text>
      </View>
      <View style={styles.body}>
        {errorMsg && <Text>{errorMsg}</Text>}
        {address && (
          <>
            <InputText
              editable={false}
              title="City"
              value={address?.[0]?.city}
            />
            <InputText
              editable={false}
              title="District"
              value={address?.[0]?.district}
            />
            <InputText
              editable={false}
              title="Pincode"
              value={address?.[0]?.postalCode}
            />
            <Button
              style={{ marginTop: 16 }}
              text="Update Location"
              onPress={handleUpdateLocation}
            />
          </>
        )}
      </View>
    </Layout>
  );
};

export default SetupScreen;

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  logo: {
    height: 250,
    width: 250,
  },
  header: {
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: "Outfit_600SemiBold",
  },
});
