import React from "react";
import { StyleProp, StyleSheet, TextStyle } from "react-native";
import { Text, View, TextProps, ViewProps } from "../Themed";

import {hexToRGB} from "../../constants/Func";
import Colors from "../../constants/Colors";
import useColorScheme from '../../hooks/useColorScheme';

const theme = useColorScheme()

interface BadgeProps {
    color?: string;
    title?: string;
    outline?: boolean;
    textProps?: TextProps;
    viewProps?: ViewProps;
    style?: StyleProp<TextStyle>
} 

const Badge = ({
  color = Colors.primary,
  title = "Sample Badge",
  style,
  outline
}: BadgeProps): JSX.Element => {
  const borderWidth = outline ? 1 : 0;
  const borderColor = hexToRGB(color, 0.4);
  const backgroundColor = hexToRGB(color, 0.1);
  return (
    <View>
      <View
        style={[
          styles.container, 
          {
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: borderWidth,
          },
        ]}
      >
        <Text style={[styles.title, style, { color }]}>{title}</Text>
      </View>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginBottom: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    maxWidth: "100%",
    alignSelf: "flex-start",
  },
  title: {
    // fontWeight: "bold",
    fontSize: 15,
  },
});