/** @format */

import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ToastAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import InputText from "../components/InputText";
import Button from "../components/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import { userStore } from "../store/userStore";
import Spinner from "react-native-loading-spinner-overlay";
import { COLORS } from "../constants/colors";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [disabled, setDisabled] = useState(true);

  const user = userStore((state) => state.data);
  const isLoading = userStore((state) => state.isLoading);
  const isError = userStore((state) => state.isError);
  const userLogin = userStore((state) => state.userLogin);

  const handleLogin = () => {
    userLogin(email, password);
    if (isError == true && isLoading == false) {
      ToastAndroid.show("Successfully Loggedin", ToastAndroid.SHORT);
      navigation.replace("Tabs");
    } else {
      ToastAndroid.show("Invalid credentials", ToastAndroid.LONG);
    }
  };

  // useEffect(() => {
  //   console.log("LoginScreen User: " + JSON.stringify(user));
  //   if (user !== {} && user.$id && !user.isError) {
  //     console.log("LOGIN SCREEN TO WHICH", user.prefs);
  //     if (user.prefs == undefined) {
  //       navigation.replace("Setup");
  //     } else {
  //       console.log("ELSE PART");
  //       navigation.replace("Tabs");
  //     }
  //   }
  // }, [user]);

  useEffect(() => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (email && password)
      reg.test(email) && password.length >= 8
        ? setDisabled(false)
        : setDisabled(true);
  }, [email, password]);

  return (
    <Layout>
      <Spinner
        visible={isLoading}
        textContent={"Loading..."}
        textStyle={{ fontSize: 16, fontFamily: "Outfit_600SemiBold" }}
      />
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../../assets/icon.png")} />
        <Text style={styles.title}>Share a Meal</Text>
      </View>
      <View style={styles.body}>
        <InputText
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="alex@appwrite.io"
          title="Enter email address"
        />
        <InputText
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Hint min. 8 characters"
          title="Enter password"
          password={true}
        />
        <Button
          onPress={handleLogin}
          disabled={disabled}
          style={{ marginTop: 16 }}
          text="Login"
        />
        <View style={styles.orContainer}>
          <View style={styles.line}></View>
        </View>
        {/* <View style={styles.socialContainer}>
          <Image
            style={{ width: 18, height: 18 }}
            source={require("../../assets/icons/google.png")}
          />
          <Text style={styles.socialText}>Sign in with Google</Text>
        </View>
        <View style={styles.socialContainer}>
          <Ionicons name={"logo-apple"} size={18} color={"gray"} />
          <Text style={styles.socialText}>Sign in with Apple</Text>
        </View> */}
        <Pressable
          onPress={() => navigation.navigate("Signup")}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <Text style={styles.bottomText}>New here?</Text>
          <Text style={[styles.bottomText, { color: COLORS.primary }]}>
            {" "}
            Click to Signup
          </Text>
        </Pressable>
      </View>
      {/* <Pressable
        style={{
          position: "absolute",
          flexDirection: "row",
          top: 8,
          right: 16,
          gap: 4,
          backgroundColor: COLORS.background,
          padding: 8,
          borderRadius: 8,
        }}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={[styles.socialText, { color: COLORS.primary }]}>
          SignUp
        </Text>
        <Ionicons name={"arrow-forward"} size={20} color={COLORS.primary} />
      </Pressable> */}
    </Layout>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  bottomText: {
    fontSize: 16,
    fontFamily: "Outfit_600SemiBold",
    textAlign: "center",
  },
  socialText: {
    fontSize: 16,
    fontFamily: "Outfit_600SemiBold",
  },
  socialContainer: {
    padding: 16,
    borderWidth: 1.5,
    borderColor: "lightgrey",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "white",
  },
  orContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
    marginTop: 24,
  },
  line: {
    height: 1,
    width: "95%",
    backgroundColor: "lightgrey",
  },
  orText: {
    fontSize: 16,
    fontFamily: "Outfit_600SemiBold",

    color: "lightgrey",
    paddingHorizontal: 8,
  },
  body: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  logo: {
    height: 150,
    width: 150,
  },
  header: {
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: "Outfit_600SemiBold",
  },
});
