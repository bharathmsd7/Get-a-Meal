/** @format */

import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { userStore } from "../store/userStore";
import { COLORS } from "../constants/colors";
import { navigateToScreen } from "../utils/commonutils";

const ProfileScreen = ({ navigation }) => {
  const [gender, setGender] = useState("male");
  const user = userStore((state) => state.data);
  useEffect(() => {
    if (user !== {}) {
      setGender(user?.prefs?.gender);
    }
  }, [user]);
  const isLoading = userStore((state) => state.isLoading);
  const isError = userStore((state) => state.isError);
  const userLogout = userStore((state) => state.userLogout);

  const handleLogout = () => {
    userLogout();
  };
  return (
    <Layout>
      <View style={styles.headerContainer}>
        <View style={{ width: 24 }} />
        <Text style={styles.title}>Profile</Text>
        <Feather name={"edit"} size={24} color={"gray"} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
          <View style={styles.profilePictureContainer}>
            <Image
              style={styles.profilePicture}
              source={
                gender === "male"
                  ? require("../../assets/icons/avatar.png")
                  : require("../../assets/icons/female.png")
              }
            />
          </View>
          <View style={{ gap: 4 }}>
            <Text
              style={[styles.username, { fontFamily: "Outfit_600SemiBold" }]}
            >
              {user?.name}
            </Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>

        <View style={{ gap: 16, paddingHorizontal: 16, marginTop: 32 }}>
          <View style={styles.item}>
            <MaterialCommunityIcons
              name={"shield-account"}
              size={32}
              color={"lightgrey"}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Outfit_600SemiBold",
                  color: "gray",
                }}
              >
                Username
              </Text>
              <Text style={{ fontSize: 16, fontFamily: "Outfit_500Medium" }}>
                {user?.name}
              </Text>
              <View
                style={{
                  height: 1,
                  backgroundColor: "lightgrey",
                  marginVertical: 5,
                  width: "100%",
                }}
              />
            </View>
          </View>

          <View style={styles.item}>
            <MaterialIcons name={"email"} size={32} color={"lightgrey"} />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Outfit_600SemiBold",
                  color: "gray",
                }}
              >
                Email
              </Text>
              <Text style={{ fontSize: 16, fontFamily: "Outfit_500Medium" }}>
                {user?.email}
              </Text>
              <View
                style={{
                  height: 1,
                  backgroundColor: "lightgrey",
                  marginVertical: 5,
                  width: "100%",
                }}
              />
            </View>
          </View>

          <View style={styles.item}>
            <MaterialCommunityIcons
              name={"shield-account"}
              size={32}
              color={"lightgrey"}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Outfit_600SemiBold",
                  color: "gray",
                }}
              >
                Phone
              </Text>
              <Text style={{ fontSize: 16, fontFamily: "Outfit_500Medium" }}>
                +91{" "}
                {user?.prefs?.contact ? user.prefs.contact : "Not Available"}
              </Text>
              <View
                style={{
                  height: 1,
                  backgroundColor: "lightgrey",
                  marginVertical: 5,
                  width: "100%",
                }}
              />
            </View>
          </View>

          <View style={styles.item}>
            <Ionicons name={"location"} size={32} color={"lightgrey"} />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Outfit_600SemiBold",
                  color: "gray",
                }}
              >
                Location
              </Text>
              <Text style={{ fontSize: 16, fontFamily: "Outfit_500Medium" }}>
                {user?.prefs?.state ? user.prefs.state : "Not Available"}
              </Text>
              <View
                style={{
                  height: 1,
                  backgroundColor: "lightgrey",
                  marginVertical: 5,
                  width: "100%",
                }}
              />
            </View>
          </View>

          {/* <Pressable
            onPress={() => navigateToScreen("MyDonations")}
            style={styles.item}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  marginLeft: 40,
                  fontSize: 16,
                  fontFamily: "Outfit_500Medium",
                }}
              >
                My Donations
              </Text>
              <Ionicons name={"arrow-forward"} size={32} color={"grey"} />
            </View>
          </Pressable> */}
        </View>
        <Button
          style={styles.logoutBtn}
          onPress={handleLogout}
          text={"Logout"}
        />
      </View>
    </Layout>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  email: {
    fontSize: 16,
    fontFamily: "Outfit_500Medium",
  },
  item: {
    alignItems: "center",
    gap: 8,
    flexDirection: "row",
  },
  username: {
    fontFamily: "Outfit_600SemiBold",
    fontSize: 20,
    letterSpacing: 0.5,
  },
  profilePictureContainer: {
    height: 100,
    width: 100,
    backgroundColor: "#E5E4E2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  profilePicture: {
    width: "80%",
    height: "80%",
  },
  logoutBtn: {
    marginTop: 50,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: COLORS.black,
    fontFamily: "Outfit_600SemiBold",
  },
  bodyContainer: {
    flex: 1,
    paddingVertical: 16,
    marginHorizontal: 16,
  },
});
