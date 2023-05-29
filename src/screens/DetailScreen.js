import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  StatusBar,
  Text,
  ScrollView,
} from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";
import Symbol from "../components/Symbol";
import Button from "../components/Button";
import FavouriteButton from "../components/FavouriteButton";
import { userStore } from "../store/userStore";
import Ionicons from "@expo/vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");
const DetailScreen = ({ route }) => {
  const data = route.params;
  const user = userStore((state) => state.data);
  const favourite = data.usersEnquired.includes(user?.email);
  return (
    <>
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor={"#FF573300"} translucent />
        <View style={styles.imageContainer}>
          <Image
            style={{
              height: "100%",
              width: "100%",
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
            }}
            source={{ uri: data.url }}
          ></Image>
        </View>
        <View style={styles.bodyContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={styles.categoryTextContainer}>
              <Text style={styles.categoryText}>
                {data.category.toUpperCase()}
              </Text>
            </View>
            <Symbol veg={data.veg} />
          </View>
          <Text numberOfLines={1} style={styles.titleText}>
            {data.title}
          </Text>
          <Text numberOfLines={5} style={styles.descText}>
            {data.description}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name={"location-sharp"}
              size={20}
              color={COLORS.primary}
              style={{ marginTop: 8, marginRight: 4 }}
            />
            <Text style={styles.locationText}>{data.location}</Text>
          </View>

          <View
            style={{
              marginTop: 16,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={styles.donatedBy}>Donated By</Text>
              <Text style={styles.name}>{data.createdBy}</Text>
            </View>
            <View
              style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
            >
              <Text style={styles.chat}>Start chat</Text>
              <Ionicons name={"chatbubbles"} size={30} color={COLORS.primary} />
            </View>
          </View>

          <View
            style={{
              marginTop: 16,
            }}
          >
            <Text style={styles.donatedBy}>Created At</Text>
            <Text style={styles.name}>{data.createdAt}</Text>
          </View>
          <View
            style={{
              marginTop: 16,
            }}
          >
            <Text style={styles.donatedBy}>Expires By</Text>
            <Text style={styles.name}>
              {data.expires ? data.expires : "Not Available"}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Button style={{ flex: 1 }} text='Contact' />
        <FavouriteButton favourite={favourite} />
      </View>
    </>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    padding: 16,
    backgroundColor: COLORS.white,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
    borderTopColor: COLORS.background,
    borderTopWidth: 1.5,
  },
  bodyContainer: {
    marginTop: 16,
    flex: 1,
    paddingHorizontal: 16,
  },
  categoryTextContainer: {
    backgroundColor: COLORS.background,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  locationText: {
    marginTop: 8,
    fontFamily: "Outfit_500Medium",
    color: COLORS.inputText,
    fontSize: 16,
  },
  name: {
    marginTop: 4,
    fontFamily: "Outfit_500Medium",
    color: COLORS.inputText,
    fontSize: 16,
  },
  chat: {
    fontFamily: "Outfit_500Medium",
    color: COLORS.black,
    fontSize: 16,
  },
  donatedBy: {
    fontFamily: "Outfit_600SemiBold",
    color: COLORS.dark,
    fontSize: 18,
  },
  titleText: {
    marginTop: 16,
    fontFamily: "Outfit_600SemiBold",
    color: COLORS.black,
    fontSize: 20,
  },
  descText: {
    marginTop: 8,
    fontFamily: "Outfit_500Medium",
    color: COLORS.grey,
    fontSize: 16,
  },
  categoryText: {
    fontFamily: "Outfit_400Regular",
    color: COLORS.grey,
  },
  container: {
    flex: 1,

    backgroundColor: COLORS.white,
  },
  imageContainer: {
    width: width,
    height: height / 2.5,
  },
  body: {},
});
