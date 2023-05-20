import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ActivityIndicator,
  ImageBackground,
  View,
} from "react-native";
import React, { useEffect } from "react";

const LoginSplash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate("Login"), 2500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/icons/loginBackground.png")}
      >
        <Image
          style={styles.logo}
          resizeMode='contain'
          source={require("../../assets/icon.png")}
        />
        <Text style={styles.title}>Get a Meal</Text>
        <ActivityIndicator
          style={styles.spinner}
          size='large'
          color={"#EE4544"}
        />
        <View style={styles.footerContainer}>
          <Text style={styles.footer}>Made with 💖</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginSplash;

const styles = StyleSheet.create({
  footerContainer: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  footer: {
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: 1.5,
  },
  spinner: {
    paddingBottom: 60,
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 150,
    width: 150,
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    paddingBottom: 20,
    letterSpacing: 1,
  },
});