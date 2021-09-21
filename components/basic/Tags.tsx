import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity, StyleProp, TextStyle } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { hexToRGB } from '../../constants/Func';
import Colors from "../../constants/Colors";

interface TagsProps {
    title?: string;
    image?: string;
    color?: string;
    outline?: boolean;
    style?: StyleProp<TextStyle>,
    icon?: React.ComponentProps<typeof  MaterialCommunityIcons>["name"],
    onPress?: ()=>void
}

const Tags = ({
  title = "Amjed Ali",
  image = "https://avatars.githubusercontent.com/u/86785660",
  color = Colors.primary,
  outline,
  style,
  icon = "close-circle-outline",
  onPress,
}: TagsProps): JSX.Element => {
  const iconColor = hexToRGB(color, 0.7);
  const borderWidth = outline ? 1 : 0;
  const borderColor = hexToRGB(color, 0.4);
  const backgroundColor = hexToRGB(color, 0.1);
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
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
        <Image source={{ uri: image }} style={styles.avatar} />
        <Text style={[styles.title, style, { color }]}>{title}</Text>
        <MaterialCommunityIcons
          color={iconColor}
          size={17}
          name={icon}
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Tags;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginBottom: 5,
    paddingVertical: 2,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 15,
    maxWidth: "100%",
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    // fontWeight: "bold",
    fontSize: 17,
  },
  avatar: {
    borderWidth: 2,
    borderColor: Colors.white,
    height: 22,
    width: 22,
    borderRadius: 12,
    marginRight: 5,
  },
  icon: {
    marginLeft: 5,
  },
});