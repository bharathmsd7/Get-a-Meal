/** @format */

import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { COLORS } from "../constants/colors";

export const ButtonGroup = ({ selection, setSelection }) => {
  const category = [
    {
      index: 0,
      name: "All",
    },
    {
      index: 1,
      name: "cooked",
    },
    {
      index: 2,
      name: "vegetables",
    },
    {
      index: 3,
      name: "grocery",
    },
    {
      index: 4,
      name: "fruits",
    },
    {
      index: 5,
      name: "snacks",
    },
    {
      index: 6,
      name: "beverages",
    },
    {
      index: 7,
      name: "others",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={category}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.index}
        ItemSeparatorComponent={<View style={{ width: 12 }}></View>}
        renderItem={({ item }) => (
          <Pressable
            style={[
              {
                padding: 8,
                paddingHorizontal: 16,
                borderRadius: 5,
                borderWidth: 0.7,
              },
              selection === item.name
                ? {
                    backgroundColor: COLORS.primary,
                    borderColor: COLORS.primary,
                  }
                : {
                    borderColor: COLORS.grey,
                  },
            ]}
            onPress={() => setSelection(item.name)}
          >
            <Text
              style={[
                selection === item.name
                  ? { color: COLORS.white }
                  : { color: COLORS.grey },
                { fontFamily: "Outfit_500Medium" },
              ]}
            >
              {item.name}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: -16,
  },
});
