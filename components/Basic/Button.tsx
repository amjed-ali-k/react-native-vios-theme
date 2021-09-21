import * as React from "react";
import { StyleSheet, View, TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Text, TextProps } from "../Themed";
import {hexToRGB} from "../../constants/Func";
import Colors, { gradient as GradientColors, PrimaryColorTypes } from "../../constants/Colors";
import {Fonts} from "../../constants/Typography";

interface ButtonProps {
    label: string;
    onPress: ()=> void;
    bold: boolean;
    outline: boolean;
    style: StyleProp<ViewStyle>;
    type: PrimaryColorTypes;
    gradient: keyof typeof GradientColors;
    icon: React.ComponentProps<typeof MaterialCommunityIcons>['name']
}

interface ChildrenProp {
    children: React.ReactChild
}

export default function Button({
  label,
  onPress,
  bold,
  outline,
  style,
  type,
  gradient,
  icon,
}: ButtonProps): JSX.Element {
  const Label = (props: TextProps): JSX.Element => (
    <>
      {icon && <MaterialCommunityIcons style={styles.icon} name={icon} />}
      <Text
        style={[
          styles.text,
          {
            fontFamily: bold ? Fonts.textBold : Fonts.text,
            color: outline ? Colors[type] : Colors.grey600,
          },
        ]}
      >
        {label}
      </Text>
    </>
  );

  const outlineBG = hexToRGB(Colors[type], 0.1);

  const Gradient = ({ children }: ChildrenProp): JSX.Element => (
    <LinearGradient
      // Button Linear Gradient
      colors={GradientColors[type]}
      locations={[0, 0.2, 1]}
      style={[styles.button, style]}
      start={[0, 0]}
      end={[1, 0]}
    >
      {children}
    </LinearGradient>
  );

  const NormalButton = ({ children }: ChildrenProp) => (
    <View style={[styles.button, { backgroundColor: Colors[type] }, style]}>
      {children}
    </View>
  );

  const OutlineButton = ({ children }: ChildrenProp) => (
    <View style={[styles.button, { backgroundColor: outlineBG }, style]}>
      {children}
    </View>
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.container}
    >
      {gradient ? (
        <Gradient>
          <Label />
        </Gradient>
      ) : outline ? (
        <OutlineButton>
          <Label />
        </OutlineButton>
      ) : (
        <NormalButton>
          <Label />
        </NormalButton>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    overflow: "hidden",
    borderRadius: 10,
    width: "100%",
  },
  text: {
    color: Colors.grey600,
    fontSize: 22,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  icon: {
    marginRight: 5,
  },
});