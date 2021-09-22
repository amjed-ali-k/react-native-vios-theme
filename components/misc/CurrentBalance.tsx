import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { Fonts } from "../../constants/Typography";
import { IconName } from "../basic/Icons";
import IconWithName from "../basic/LabeledIcon";
import { hexToRGB } from "../../constants/Func";
import { Text, View } from "../Themed";
const IconWithContent = ({
  icon,
  title,
  amount,
  color,
}: {
  icon: IconName;
  title: string;
  amount: string;
  color: string;
}): React.ReactElement => (
  <View style={styles.iconSubElementContainer}>
    <IconWithName color={color} icon={icon} />
    <View style={styles.iconSubElementTextContainer}>
      <Text style={styles.iconSubElementTitle}>{title}</Text>
      <Text style={styles.iconSubElementAmount}>{amount}</Text>
    </View>
  </View>
);

const CurrentBalance = ({
  title = "Current Balance",
  amount = "232",
  incomeAmount = "341",
  expenseAmount = "843",
}): React.ReactElement => {
  return (
    <View>
      <View style={styles.cardContainer}>
        <View style={styles.cardHeaderContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          <View style={styles.amountContainer}>
            <Text style={styles.currency}>$</Text>
            <Text style={styles.amount}>{amount}</Text>
            <Text style={styles.amountSubscript}>.00</Text>
          </View>
        </View>
        <View style={styles.cardChildContainer}>
          <IconWithContent
            title="Total Income"
            amount={"$ " + incomeAmount}
            color={Colors.green}
            icon="arrow-bottom-left"
          />
          <IconWithContent
            title="Total Expense"
            amount={"$ " + expenseAmount}
            color={Colors.red}
            icon="arrow-top-right"
          />
        </View>
      </View>
    </View>
  );
};

export default CurrentBalance;

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 5,
    // alignItems: "center",
  },
  cardHeaderContainer: {
    alignItems: "center",
    borderBottomColor: Colors.grey600,
    borderBottomWidth: 1,
  },
  cardTitle: {
    fontFamily: Fonts.heading,
    fontSize: 20,
  },
  amountContainer: {
    marginVertical: 10,
    flexDirection: "row",
  },
  currency: {
    fontSize: 40,
    fontFamily: Fonts.headingBold,
    color: hexToRGB(Colors.primary, 0.5),
  },
  amount: {
    fontSize: 40,
    fontFamily: Fonts.headingBold,
    color: Colors.primary,
  },
  amountSubscript: {
    fontSize: 30,
    fontFamily: Fonts.headingBold,
    color: Colors.primary,
    alignSelf: "flex-end",
    paddingBottom: 2,
  },
  cardChildContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  iconSubElementContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconSubElementTextContainer: {
    alignContent: "center",
    paddingHorizontal: 10,
  },
  iconSubElementTitle: {
    fontFamily: Fonts.heading,
    paddingBottom: 5,
    fontSize: 18,
  },
  iconSubElementAmount: {
    fontFamily: Fonts.headingBold,
    paddingBottom: 5,
    fontSize: 20,
    color: Colors.primary,
  },
});
