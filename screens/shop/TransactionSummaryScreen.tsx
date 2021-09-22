import React, { useRef, useEffect } from "react";
import LottieView from "lottie-react-native";

import Heading from "../../components/basic/Heading";
import { Text, View } from "../../components/Themed";
import Button from "../../components/basic/Button";
import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { Fonts } from "../../constants/Typography";

export default (): React.ReactElement => {
  const ref = useRef<LottieView>(null);
  useEffect(() => {
    ref.current?.play();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Heading style={styles.heading} title="Transaction Summary" />
        <View style={styles.animationContainer}>
          {/* Image | Lottie Animation for success */}
          <LottieView
            ref={ref}
            source={require("./../assets/lottie/success.json")}
            autoPlay
            loop={true}
            style={styles.animation}
          />
        </View>
        <View>
          {/* Container for Summary */}
          <Row name="Name" details="Amjed Ali" />
          <Row name="Transaction ID" details="64568-56486-655358" />
          <Row name="Amount Tranfered" details="$2556" />
          <Row name="Time" details="08:56 PM" />
          <Row name="Date" details="22 - September - 2021" />
          <Row name="Payment Method" details="UPI, Netbanking" />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        {/*  Button */}
        <Button label="Track Order" />
        <Button outline label="Go Home" />
      </View>
    </View>
  );
};

const Row = ({
  name,
  details,
}: {
  name: string;
  details: string;
}): JSX.Element => {
  return (
    <View style={styles.row}>
      {/* Row */}
      <View style={styles.colName}>
        {/* Column */}
        <Text style={styles.textName}>{name}</Text>
      </View>
      <View style={styles.colDetails}>
        {/* Column */}
        <Text style={styles.textDetails}>{details}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Dimensions.get("window").width * 0.05,
    flex: 1,
    backgroundColor: Colors.grey600,
  },
  topContainer: {
    flex: 1,
    marginVertical: 20,
    paddingTop: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
  bottomContainer: {
    backgroundColor: Colors.grey600,
  },
  heading: {
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey700,
  },
  animationContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: 150,
    zIndex: 1,
  },
  animation: {
    position: "absolute",
    width: 350,
    height: 350,
    alignSelf: "center",
  },
  colName: {
    width: "50%",
  },
  colDetails: {
    width: "50%",
  },
  textDetails: {
    fontFamily: Fonts.text,
    fontSize: 20,
    color: Colors.grey200,
  },
  textName: {
    fontFamily: Fonts.textBold,
    fontSize: 20,
    color: Colors.grey400,
  },
});
