/** @format */

import React, { useRef } from "react";
import {
  StatusBar,
  Animated,
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import Button from "../components/Button";
import { setLocalStorage } from "../utils/commonutils";
const { width, height } = Dimensions.get("screen");

const bgs = ["#3c3a36", "#F74F68", "#6FB9DD", "#B98EFF"];
const DATA = [
  {
    key: "1",
    title: "Welcome to Share-a-Meal: Ending Hunger Together",
    description:
      "Join the Share-a-Meal community and make a difference by donating surplus food to those in need.",
    image: require(`../../assets/icons/thumbsup.png`),
  },
  {
    key: "2",
    title: "Together, we can combat hunger and reduce food waste.",
    description:
      "Through our app, you can effortlessly donate excess food and contribute to the well-being of your community. Start sharing the joy of giving today!",
    image: require(`../../assets/icons/food.png`),
  },
  {
    key: "3",
    title: "Become a Food Savior",
    description:
      "According to the United Nations, approximately 811 million people worldwide suffered from chronic undernourishment",
    image: require(`../../assets/icons/starvation.png`),
  },
  {
    key: "4",
    title: "Donate Food, Feed Hope!",
    description: "Tap on the Continue button to get started!",
    image: require(`../../assets/icons/give-food.png`),
  },
];

const Indicator = ({ scrollX }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        position: "absolute",
        bottom: 120,
      }}
    >
      {DATA.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.7, 1.1, 0.7],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 1, 0.6],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={i.toString()}
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "#fff",
              marginHorizontal: 7,
              opacity,
              transform: [{ scale }],
            }}
          />
        );
      })}
    </View>
  );
};

const BackDrop = ({ scrollX }) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map((bg) => bg),
    extrapolate: "clamp",
  });
  return (
    <Animated.View
      style={{
        ...StyleSheet.absoluteFillObject,
        backgroundColor,
      }}
    />
  );
};

const Square = ({ scrollX }) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1
  );

  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["35deg", "0deg", "35deg"],
  });

  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0],
  });
  return (
    <Animated.View
      style={{
        width: height,
        height,
        backgroundColor: "#fff",
        borderRadius: 86,
        position: "absolute",
        top: -height * 0.6,
        left: -height * 0.3,
        transform: [
          {
            rotate,
          },
          {
            translateX,
          },
        ],
      }}
    />
  );
};

export default function OnboardingScreen({ navigation }) {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#FF573300"} translucent />
      <BackDrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        horizontal
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{ width, alignItems: "center", paddingHorizontal: 16 }}
            >
              <View
                style={{
                  flex: 0.7,
                  justifyContent: "center",
                }}
              >
                <Image
                  source={item.image}
                  style={{
                    width: width / 2,
                    height: width / 2,
                    resizeMode: "contain",
                  }}
                />
              </View>
              <View style={{ flex: 0.3 }}>
                <Text
                  style={{
                    fontFamily: "Outfit_600SemiBold",
                    fontSize: 24,
                    marginBottom: 12,
                    color: "#fff",
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontFamily: "Outfit_500Medium",
                    fontSize: 18,
                    color: "#fff",
                  }}
                >
                  {item.description}
                </Text>
              </View>
              {index === DATA.length - 1 ? (
                <View
                  style={{
                    position: "absolute",
                    bottom: -55,
                  }}
                >
                  <Button
                    text={"Continue"}
                    style={{ width: width - 40 }}
                    onPress={() => {
                      setLocalStorage("@onboardingCompleted", true);
                      navigation.replace("Splash");
                    }}
                  />
                </View>
              ) : null}
            </View>
          );
        }}
      />

      <Indicator scrollX={scrollX} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
