import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import { Fonts } from "../../constants/Typography";
import Icon from "../basic/Icons";
import { Text, View } from "../Themed";

interface ElementProps extends React.ComponentProps<typeof TouchableOpacity> {
  date: string;
  title: string;
  subTitle?: string;
  amount: string;
  sign?: boolean;
}

const ExpenseList = ({
  date,
  title,
  subTitle,
  amount,
  sign,
  ...otherProps
}: ElementProps): React.ReactElement => {
  return (
    <TouchableOpacity {...otherProps} style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.title}>{title}</Text>
        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>
          {sign ? "-" : ""}$ {amount}
        </Text>
        <View style={styles.iconContainer}>
          <Icon name="menu-right" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ExpenseList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopColor: Colors.grey400,
    borderTopWidth: 1,
    paddingVertical: 10,
  },
  textContainer: {},
  date: {
    textTransform: "uppercase",
    color: Colors.primary,
  },
  title: {
    fontFamily: Fonts.textBold,
    color: Colors.black,
    fontSize: 20,
  },
  subTitle: {
    color: Colors.grey300,
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  amount: {
    fontFamily: Fonts.headingBold,
    color: Colors.primary,
    fontSize: 25,
  },
  iconContainer: {},
});
