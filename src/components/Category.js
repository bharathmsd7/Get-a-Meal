/** @format */

import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";

const data = [
  {
    name: "Cooked",
    url: "https://cdn-icons-png.flaticon.com/128/2276/2276931.png",
  },
  {
    name: "Vegetables",
    url: "https://cdn-icons-png.flaticon.com/128/2153/2153788.png",
  },

  {
    name: "Grocery",
    url: "https://cdn-icons-png.flaticon.com/128/869/869457.png",
  },
  {
    name: "Fruits",
    url: "https://cdn-icons-png.flaticon.com/512/3194/3194766.png",
  },
  {
    name: "Dry Fruits",
    url: "https://cdn-icons-png.flaticon.com/128/381/381090.png",
  },
  {
    name: "Snacks",
    url: "https://cdn-icons-png.flaticon.com/128/859/859293.png",
  },
  {
    name: "Beverages",
    url: "https://cdn-icons-png.flaticon.com/128/2979/2979526.png",
  },
];

const Category = () => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={<View style={{ width: 16 }} />}
        data={data}
        renderItem={({ item, index }) => (
          <View
            style={[
              index === 0 && styles.firstItem,
              index === data.length - 1 && styles.lastItem,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            <View
              style={{
                width: 90,
                height: 90,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.background,
                borderRadius: 50,
                borderWidth: 0.7,
                borderColor: "lightgray",
              }}
            >
              <Image
                style={{ width: 70, height: 70 }}
                source={{ uri: item.url }}
              />
            </View>
            <Text
              style={{
                marginTop: 8,
                fontSize: 14,
                fontFamily: "Outfit_600SemiBold",
              }}
            >
              {item.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  firstItem: {
    marginLeft: 16,
  },
  lastItem: {
    marginRight: 16,
  },
});
