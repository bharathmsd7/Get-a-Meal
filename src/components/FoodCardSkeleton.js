/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";
import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";

const Spacer = ({ height = 16 }) => <View style={{ height }} />;
const FoodCardSkeleton = () => {
  return (
    <MotiView
      transition={{
        type: "timing",
      }}
      style={[styles.skeletonContainer]}
      animate={{ backgroundColor: "#fff" }}
    >
      <View style={{ flexDirection: "row" }}>
        <Skeleton colorMode={"light"} height={95} width={95} radius={16} />

        <View
          style={{
            paddingLeft: 16,
            justifyContent: "space-around",
            flex: 1,
            gap: 8,
          }}
        >
          <View>
            <Skeleton colorMode={"light"} height={17} width={"80%"} />
            <Spacer height={4} />
            <Skeleton colorMode={"light"} height={15} width={"100%"} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{}}>
              <View style={{ flexDirection: "row" }}>
                <Skeleton colorMode={"light"} height={15} width={"75%"} />
              </View>
              <Spacer height={4} />

              <Skeleton colorMode={"light"} height={15} width={"85%"} />
            </View>
            <Skeleton
              colorMode={"light"}
              height={20}
              width={20}
              radius="square"
            />
          </View>
        </View>
      </View>
    </MotiView>
  );
};

export default FoodCardSkeleton;

const styles = StyleSheet.create({
  shape: {
    justifyContent: "center",
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: "white",
  },
  skeletonContainer: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    borderColor: "lightgray",
    backgroundColor: COLORS.white,
    marginBottom: 16,
  },
});
