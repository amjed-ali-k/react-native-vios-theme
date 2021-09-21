import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";

import { hexToRGB } from '../../constants/Func';
import { Text } from "../Themed";
import Icon, { IconName } from "./Icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface ElementProps extends React.ComponentProps<typeof View> {
    icon: IconName;
    size?:number;
    color?:string;
    text?:string;
    badge?:string;
}

const IconWithName = ({
  icon='account',
  style,
  size = 35,
  color = "#DF405C",
  text = "My Icon",
  badge,
  ...otherProps
}: ElementProps): JSX.Element => {
  const bg = hexToRGB(color, 0.1);
  return (
    <View style={[styles.container, style]} {...otherProps}>
      {badge && (
         
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
      )}
      <View
        style={{
          borderRadius: size / 3,
          height: size * 1.3,
          padding: size / 10,
          width: size * 1.3,
          alignItems: "center",
          marginBottom: 7,
          justifyContent: "center",
          backgroundColor: bg,
        }}
      >
        <Icon name={icon} size={size * 0.8} color={color} />
      </View>

      <Text style={{ fontSize: size / 2.9 }}>{text}</Text>
    </View>
  );
};

export default IconWithName;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  badgeContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 5,
    height: 20,
    minWidth: 20,
    backgroundColor: Colors.red,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 11,
  },
});