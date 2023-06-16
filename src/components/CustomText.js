/** @format */

import { Text } from "react-native";
import React from "react";
import { themeStore } from "../store/themeStore";

const CustomText = ({ style, numberOfLines = 1, children }) => {
  const theme = themeStore((state) => state.theme);

  return (
    <Text
      style={[{ color: theme.textColor, ...style }]}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default CustomText;
