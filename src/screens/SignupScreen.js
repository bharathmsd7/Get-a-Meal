/** @format */

import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import InputText from "../components/InputText";
import Button from "../components/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, userSignup } from "../redux/reducers/userReducer";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [disabled, setDisabled] = useState(true);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogin = () => {
    dispatch(userSignup({ email, password, name }));
  };

  useEffect(() => {
    console.log("SignupScreen User: " + JSON.stringify(user));
    if (user.data !== {} && user.data.$id && !user.isError) {
      navigation.replace("Setup");
    }
  }, [user]);

  useEffect(() => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (email && password && name) {
      let _email = email.toLowerCase();
      reg.test(_email) && password.length >= 8 && name.length > 0
        ? setDisabled(false)
        : setDisabled(true);
    }
  }, [email, password, name]);

  return (
    <Layout>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../../assets/icon.png")} />
        <Text style={styles.title}>Get a Meal</Text>
      </View>
      <View style={styles.body}>
        <InputText
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Cool Name"
          title="Enter Your Name"
        />
        <InputText
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="test@test.com"
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
          <Text style={styles.orText}>or</Text>
          <View style={styles.line}></View>
        </View>
        <View style={styles.socialContainer}>
          <Image
            style={{ width: 18, height: 18 }}
            source={require("../../assets/icons/google.png")}
          />
          <Text style={styles.socialText}>Sign in with Google</Text>
        </View>
        <View style={styles.socialContainer}>
          <Ionicons name={"logo-apple"} size={18} color={"gray"} />
          <Text style={styles.socialText}>Sign in with Apple</Text>
        </View>
      </View>
      <Pressable
        style={{
          position: "absolute",
          flexDirection: "row",
          top: 16,
          right: 16,
          gap: 4,
          backgroundColor: "#f5f5f5",
          padding: 8,
          borderRadius: 8,
        }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.socialText, { color: "#EE4544" }]}>Login</Text>
        <Ionicons name={"arrow-forward"} size={20} color={"#EE4544"} />
      </Pressable>
    </Layout>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
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
  },
  line: {
    height: 1,
    width: "45%",
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
