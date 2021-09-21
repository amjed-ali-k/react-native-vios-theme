import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";
import Typography, { Fonts } from "../../constants/Typography";

import Button from "../basic/Button";
import { Text } from "../Themed";

interface ElementProps {
    titleRight?: string;
    titleLeft?: string;
    content?: string;
    textLeft?: string;
    textRight?: string;
    btnLabelLeft?: string;
    btnLabelRight?: string;
    onPressLeft?: (()=>void) | undefined,
    onPressRight?:(()=>void) | undefined,
}


const Ticket = ({
  titleRight = "Diamond Plaza",
  titleLeft = "1st Flor - P220",
  content = "01 : 14 : 59",
  textLeft = "Alert me when",
  textRight = "15 Minutes Remain",
  btnLabelLeft = "Extend Time",
  btnLabelRight = "Check Out",
  onPressLeft,
  onPressRight,
}: ElementProps): React.ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={[Typography.h3, {}]}>{titleRight}</Text>
        <Text style={[Typography.h3, { color: Colors.blue }]}>
          {titleLeft}
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={[Typography.h1, {}]}>{content}</Text>
      </View>
      <View style={styles.headerContainer}>
        <Text
          style={{
            color: Colors.grey300,
            fontSize: 24,
            fontFamily: Fonts.heading,
          }}
        >
          {textLeft}
        </Text>
        <Text
          style={{
            color: Colors.greenAlt,
            fontSize: 24,
            fontFamily: Fonts.headingBold,
          }}
        >
          {textRight}
        </Text>
      </View>
      <View style={styles.footerContainer}>
        <View>
          <Button
            style={styles.button}
            onPress={onPressLeft}
            outline
            bold
            label={btnLabelLeft}
          />
        </View>
        <View>
          <Button
            style={styles.button}
            bold
            onPress={onPressRight}
            label={btnLabelRight}
          />
        </View>
      </View>
    </View>
  );
};

export default Ticket;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 30,
    width: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  contentContainer: {
    flexDirection: "column",
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: Colors.grey400,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },

  descriptionContainer: {
    flexDirection: "row",
  },
  button: {
    borderRadius: 40,
    paddingHorizontal: 25,
  },
  footerContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 10,
  },
});