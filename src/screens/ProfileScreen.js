/** @format */

import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/reducers/userReducer";
import Layout from "../components/Layout";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { selectUser } from "../redux/reducers/userReducer";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <Layout>
      <View style={styles.headerContainer}>
        <Ionicons name={"arrow-back"} size={28} color={"gray"} />
        <Text style={styles.title}>ProfileScreen</Text>
        <Feather name={"edit"} size={24} color={"gray"} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
          <View style={styles.profilePictureContainer}>
            <Image
              style={styles.profilePicture}
              source={require("../../assets/icons/avatar.png")}
            />
          </View>
          <View style={{ gap: 4 }}>
            <Text style={styles.username}>Bharath</Text>
            <Text style={styles.email}>{user.data?.providerUid}</Text>
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
                  fontWeight: 500,
                  color: "gray",
                }}
              >
                Username
              </Text>
              <Text style={{ fontSize: 16, fontWeight: 500 }}>Bharath</Text>
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
                  fontWeight: 500,
                  color: "gray",
                }}
              >
                Email
              </Text>
              <Text style={{ fontSize: 16, fontWeight: 500 }}>
                bharath@test.com
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
                  fontWeight: 500,
                  color: "gray",
                }}
              >
                Phone
              </Text>
              <Text style={{ fontSize: 16, fontWeight: 500 }}>
                +91 880 717 0158
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
                  fontWeight: 500,
                  color: "gray",
                }}
              >
                Location
              </Text>
              <Text style={{ fontSize: 16, fontWeight: 500 }}>Pondicherry</Text>
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
        </View>
        {/* <Button
          style={styles.logoutBtn}
          onPress={() => dispatch(userLogout())}
          text={"Logout"}
        /> */}
      </View>
    </Layout>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  email: {
    fontSize: 16,
  },
  item: {
    alignItems: "center",
    gap: 8,
    flexDirection: "row",
  },
  username: {
    fontSize: 20,
    fontWeight: 500,
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
  logoutBtn: {},
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    color: "#000000",
    fontWeight: "500",
  },
  bodyContainer: {
    flex: 1,
    paddingVertical: 16,
    marginHorizontal: 16,
  },
});
