import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Fonts } from "../../constants/Typography";

interface HeadingProps extends React.ComponentProps<typeof View> {
    title: string
}

const Heading = ({ style, title = "Heading", ...otherProps }:HeadingProps) => {
  return (
    <View style={[styles.container, style]} {...otherProps}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  text: {
    fontSize: 30,
    fontFamily: Fonts.headingBold,
  },
});
