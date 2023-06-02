/** @format */

import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState, useMemo, useEffect } from "react";
import RadioGroup from "react-native-radio-buttons-group";
import { Dropdown } from "react-native-element-dropdown";
import * as ImagePicker from "expo-image-picker";
import Layout from "../components/Layout";
import Header from "../components/Header";
import InputText from "../components/InputText";
import { COLORS } from "../constants/colors";
import Button from "../components/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import { donationStore } from "../store/donationStore";
import { userStore } from "../store/userStore";
import Spinner from "react-native-loading-spinner-overlay";
import DateTimePicker from "@react-native-community/datetimepicker";

const AddScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [veg, setVeg] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [donatedBy, setDonatedBy] = useState("");
  const [contact, setContact] = useState("");
  const [image, setImage] = useState("");
  const [expires, setExpires] = useState(new Date());
  const [confirm, setConfirm] = useState(false);
  const [show, setShow] = useState(false);

  const createDonation = donationStore((state) => state.createDonation);
  const isUploading = donationStore((state) => state.isUploading);
  const user = userStore((state) => state.data);

  useEffect(() => {
    if (
      veg != "" &&
      category != "" &&
      contact != "" &&
      image != "" &&
      contact.length == 10 &&
      title.length > 5 &&
      description.length > 10 &&
      location.length > 5 &&
      donatedBy.length > 2
    ) {
      setConfirm(true);
    } else {
      setConfirm(false);
    }
  }, [title, description, veg, category, location, donatedBy, contact, image]);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setExpires(currentDate);
  };

  const showMode = () => {
    setShow(true);
  };

  const handleImageUpload = async () => {
    const payload = {
      title,
      description,
      veg: veg == "Veg" ? true : false,
      category,
      url: image,
      location,
      createdBy: donatedBy,
      contactNumber: contact,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: user.userId,
      completed: false,
      expires,
    };
    if (payload) {
      const response = await createDonation(payload);
      if (response && response !== "error") {
        navigation.navigate("Success");
      }
    }
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const FoodType = useMemo(
    () => [
      {
        id: "1",
        label: "Veg",
        value: "Veg",
      },
      {
        id: "2",
        label: "Non Veg",
        value: "Non Veg",
      },
    ],
    []
  );
  const categoryData = [
    { label: "Cooked", value: "cooked" },
    { label: "Vegetables", value: "vegetables" },
    { label: "Grocery", value: "grocery" },
    { label: "Fruits", value: "fruits" },
    { label: "Snacks", value: "snacks" },
    { label: "Beverages", value: "beverages" },
    { label: "Milk", value: "milk" },
    { label: "Others", value: "Others" },
  ];
  return (
    <>
      <Layout>
        <Spinner
          visible={isUploading}
          textContent={"Donating your food..."}
          textStyle={{ fontSize: 16, fontFamily: "Outfit_600SemiBold" }}
        />
        <Header title={"Create New Donation"} />
        <View style={styles.container}>
          <InputText
            title="Title"
            placeholder="Give a Title like Wheat flour..."
            value={title}
            onChangeText={setTitle}
          />
          <InputText
            title="Description"
            placeholder="Write list of items you have"
            maxLength={200}
            value={description}
            onChangeText={setDescription}
          />
          <Text
            style={{
              marginTop: 8,
              marginBottom: 8,
              fontSize: 16,
              fontFamily: "Outfit_700Bold",
            }}
          >
            Food type
          </Text>
          <RadioGroup
            color={COLORS.primary}
            radioButtons={FoodType}
            onPress={setVeg}
            layout="row"
            selectedId={veg}
            descriptionStyle={{ fontFamily: "Outfit_500Medium" }}
          />
          <Text
            style={{
              marginTop: 8,
              marginBottom: 8,
              fontSize: 16,
              fontFamily: "Outfit_700Bold",
            }}
          >
            Expires on
          </Text>
          <Pressable onPress={showMode} style={[styles.input]}>
            <Text
              style={{
                fontSize: 16,

                color: COLORS.inputText,
                fontFamily: "Outfit_600SemiBold",
              }}
            >
              {expires.toLocaleString().split(",")[0]}
            </Text>
          </Pressable>
          {show && (
            <DateTimePicker
              value={expires}
              mode={"date"}
              onChange={onDateChange}
            />
          )}
          <Text
            style={{
              marginTop: 8,
              marginBottom: 8,
              fontSize: 16,
              fontFamily: "Outfit_700Bold",
            }}
          >
            Pick an Image
          </Text>
          <Pressable onPress={pickImage} style={styles.imageContainer}>
            {image ? (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
              />
            ) : (
              <Ionicons name={"image-outline"} size={100} color={"lightgrey"} />
            )}
          </Pressable>
          <View style={styles.categoryContainer}>
            <Text style={styles.label}>Category</Text>
            <View style={[styles.input]}>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={categoryData}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select Category"
                value={category}
                onChange={(item) => {
                  setCategory(item.value);
                }}
              />
            </View>
          </View>

          <InputText
            title="Location"
            placeholder="Enter Donator Location"
            value={location}
            onChangeText={setLocation}
          />
          <InputText
            title="Donated By"
            placeholder="Enter Donator Name"
            value={donatedBy}
            onChangeText={setDonatedBy}
          />
          <InputText
            title="Contact"
            placeholder="+91 *** **** ***"
            value={contact}
            onChangeText={setContact}
          />
        </View>
      </Layout>
      {confirm && (
        <View style={styles.bottomContainer}>
          <Button
            onPress={handleImageUpload}
            style={{ flex: 1 }}
            text="Donate"
          />
        </View>
      )}
    </>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  imageContainer: {
    borderWidth: 1.5,
    borderColor: "lightgrey",
    height: 210,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
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
    marginBottom: 100,
  },
  categoryContainer: {
    gap: 8,
    marginVertical: 8,
    marginBottom: 8,
    marginTop: 8,
  },
  label: {
    fontSize: 16,
    fontFamily: "Outfit_700Bold",
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
    color: COLORS.inputText,
    fontFamily: "Outfit_600SemiBold",
  },
});
