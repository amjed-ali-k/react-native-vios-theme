import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "../Themed";
import Colors from "../../constants/Colors";

interface ElementTypes {
    error: string;
    visible: boolean
}

const ErrorMessage = ({ error, visible }:ElementTypes):JSX.Element|null => {
  if (!visible || !error) return null;
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons color={Colors.red} size={18} name="alert-box" />
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: Colors.red,
    marginLeft: 5,
  },
  container: {
    marginVertical: 3,
    flexDirection: "row",
    alignItems: "center",
  },
});