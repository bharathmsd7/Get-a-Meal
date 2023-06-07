/** @format */

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
  ToastAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { COLORS } from "../constants/colors";
import { Dropdown } from "react-native-element-dropdown";
import { stateListData } from "../constants/state";
import InputText from "../components/InputText";
import Button from "../components/Button";
import { userStore } from "../store/userStore";
import Spinner from "react-native-loading-spinner-overlay";

const { width, height } = Dimensions.get("window");

const CreateProfileScreen = ({ navigation }) => {
  const updateUserPreferences = userStore(
    (state) => state.updateUserPreferences
  );
  const isLoading = userStore((state) => state.isLoading);
  const isError = userStore((state) => state.isError);

  const [gender, setGender] = useState(null);
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [local, setLocal] = useState("");
  const [contact, setContact] = useState("");
  const [districtData, setDistrictData] = useState([]);
  const [localData, setLocalData] = useState([]);

  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    if (
      gender &&
      state !== "" &&
      district !== "" &&
      local !== "" &&
      contact !== ""
    ) {
      setConfirm(true);
    } else {
      setConfirm(false);
    }
  }, [gender, state, district, local, contact]);

  const stateElements = Object.keys(stateListData);
  const stateData = stateElements.map((value) => {
    return { label: value, value: value };
  });

  useEffect(() => {
    function findChildObject(state) {
      const districtObject = stateListData[state];
      const districtElements = Object.keys(districtObject);
      const data = districtElements.map((value) => {
        return { label: value, value: value };
      });
      setDistrictData(data);
    }
    if (state !== "") {
      findChildObject(state);
    }
  }, [state]);

  useEffect(() => {
    function findChildObject(state) {
      const localObject = stateListData[state][district];
      const localElements = Object.keys(localObject);
      const data = localElements.map((value) => {
        return { label: value, value: value };
      });
      setLocalData(data);
    }
    if (state !== "") {
      findChildObject(state);
    }
  }, [district]);

  const handleConfirm = async () => {
    const preferences = {
      gender,
      state,
      district,
      local,
      contact,
    };
    updateUserPreferences(preferences);
    if (isError) {
      ToastAndroid.show("Something went wrong", ToastAndroid.LONG);
    }
    if (isLoading == false && isError == false) {
      ToastAndroid.show("Welcome to ShareAMeal", ToastAndroid.SHORT);
      navigation.navigate("Tabs");
    }
  };
  return (
    <>
      <Layout>
        <Spinner
          visible={isLoading}
          textContent={"Loading..."}
          textStyle={{ fontSize: 16, fontFamily: "Outfit_600SemiBold" }}
        />
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={{ fontSize: 20, fontFamily: "Outfit_600SemiBold" }}>
              Setup your Profile
            </Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Outfit_500Medium",
              marginVertical: 16,
            }}
          >
            Choose your Gender
          </Text>
          <View style={styles.genderContainer}>
            <Pressable
              onPress={() => setGender("male")}
              style={[
                styles.imageContainer,
                { opacity: gender === "male" ? 1 : 0.5 },
                {
                  backgroundColor:
                    gender === "male" ? "#82CFFD" : COLORS.background,
                },
              ]}
            >
              <Image
                style={{ height: "80%", width: "80%" }}
                source={require("../../assets/icons/male.png")}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Outfit_500Medium",
                }}
              >
                Male
              </Text>
            </Pressable>

            <Pressable
              onPress={() => setGender("female")}
              style={[
                styles.imageContainer,
                { opacity: gender === "female" ? 1 : 0.5 },
                {
                  backgroundColor:
                    gender === "female" ? "#ffc0cb" : COLORS.background,
                },
              ]}
            >
              <Image
                style={{ height: "80%", width: "80%" }}
                source={require("../../assets/icons/female.png")}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Outfit_500Medium",
                }}
              >
                Female
              </Text>
            </Pressable>
          </View>

          <InputText
            title="Contact"
            placeholder="987 654 3210"
            value={contact}
            onChangeText={setContact}
          />

          <Text
            style={{
              fontSize: 18,
              fontFamily: "Outfit_500Medium",
              marginVertical: 16,
            }}
          >
            Select your State
          </Text>
          <View style={[styles.input]}>
            <Dropdown
              search
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              data={stateData}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select State"
              value={state}
              onChange={(item) => {
                setState(item.value);
              }}
            />
          </View>

          <Text
            style={{
              fontSize: 18,
              fontFamily: "Outfit_500Medium",
              marginVertical: 16,
            }}
          >
            Select your District
          </Text>
          <View style={[styles.input]}>
            <Dropdown
              style={styles.dropdown}
              search
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              data={districtData}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select District"
              value={district}
              onChange={(item) => {
                setDistrict(item.value);
              }}
            />
          </View>

          <Text
            style={{
              fontSize: 18,
              fontFamily: "Outfit_500Medium",
              marginVertical: 16,
            }}
          >
            Select your Area
          </Text>
          <View style={[styles.input]}>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              data={localData}
              maxHeight={300}
              search
              labelField="label"
              valueField="value"
              placeholder="Select District"
              value={local}
              onChange={(item) => {
                setLocal(item.value);
              }}
            />
          </View>
        </View>
      </Layout>
      {confirm && (
        <View style={styles.bottomContainer}>
          <Button onPress={handleConfirm} style={{ flex: 1 }} text="Confirm" />
        </View>
      )}
    </>
  );
};

export default CreateProfileScreen;

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
  container: {
    paddingHorizontal: 16,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    height: width / 2.3,
    width: width / 2.3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 170,
  },
  input: {
    borderWidth: 1.5,
    borderColor: "lightgrey",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    fontSize: 16,
    paddingLeft: 24,
    paddingRight: 16,
    color: COLORS.inputText,
    fontFamily: "Outfit_600SemiBold",
  },
  placeholderStyle: {
    color: "lightgrey",
    fontFamily: "Outfit_500Medium",
  },
  selectedTextStyle: {
    color: COLORS.dark,
    fontFamily: "Outfit_600SemiBold",
  },
});
