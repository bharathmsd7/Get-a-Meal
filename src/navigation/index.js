/** @format */

// In App.js in a new project

import * as React from "react";
import {
  View,
  Text,
  Animated,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import AddScreen from "../screens/AddScreen";
import ChatScreen from "../screens/ChatScreen";
import LoginScreen from "../screens/LoginScreen";
import LoginSplash from "../screens/LoginSplash";
import SignupScreen from "../screens/SignupScreen";
import SetupScreen from "../screens/SetupScreen";
import { COLORS } from "../constants/colors";

export const navigationRef = createNavigationContainerRef();

export function navigate(name) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name);
  }
}
export function navigateAndReplace(name) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(name);
  }
}
// Stack Navigator
const Stack = createNativeStackNavigator();

function Tabs({ navigation }) {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = "";

    switch (routeName) {
      case "Home":
        icon = "ios-home-outline";
        break;
      case "Favourite":
        icon = "heart-outline";
        break;
      case "Chat":
        icon = "chatbox-outline";
        break;
      case "Profile":
        icon = "person-outline";
        break;
    }

    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Ionicons
          name={icon}
          size={28}
          color={routeName === selectedTab ? COLORS.primary : "gray"}
        />
        <Text
          style={{
            color: routeName === selectedTab ? COLORS.primary : "gray",
            fontFamily: "Outfit_600SemiBold",
          }}
        >
          {routeName}
        </Text>
      </View>
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <CurvedBottomBarExpo.Navigator
      screenOptions={{ headerShown: false }}
      type='DOWN'
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
      height={65}
      circleWidth={50}
      bgColor='white'
      initialRouteName='Home'
      borderTopLeftRight
      renderCircle={({ selectedTab, navigate }) => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Add")}
          >
            <Ionicons name={"md-add"} color='white' size={35} />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}
    >
      <CurvedBottomBarExpo.Screen
        name='Home'
        position='LEFT'
        component={() => <HomeScreen />}
      />
      <CurvedBottomBarExpo.Screen
        name='Favourite'
        position='LEFT'
        component={() => <FavouriteScreen />}
      />
      <CurvedBottomBarExpo.Screen
        name='Chat'
        component={() => <ChatScreen />}
        position='RIGHT'
      />
      <CurvedBottomBarExpo.Screen
        name='Profile'
        component={() => <ProfileScreen />}
        position='RIGHT'
      />
    </CurvedBottomBarExpo.Navigator>
  );
}

function AppRouter({ onReady }) {
  return (
    <NavigationContainer onReady={onReady} ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Splash' component={LoginSplash} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Signup' component={SignupScreen} />
        <Stack.Screen name='Setup' component={SetupScreen} />
        <Stack.Screen name='Tabs' component={Tabs} />
        <Stack.Screen name='Search' component={SearchScreen} />
        <Stack.Screen name='Add' component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: "#DDDDDD",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: "center",
  },
  bottomBar: {
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 1.41,
  },
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    bottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: "gray",
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: "#BFEFFF",
  },
  screen2: {
    flex: 1,
    backgroundColor: "#FFEBCD",
  },
});
