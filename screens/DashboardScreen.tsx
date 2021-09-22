import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Heading from "../components/basic/Heading";
import Badge from "../components/basic/Badge";
import Tags from "../components/basic/Tags";
import ProductGridItem from "../components/shop/ProductGridItem";
import Ticket from "../components/misc/Ticket";
import IconWithName from "../components/basic/LabeledIcon";
import Colors from "../constants/Colors";
import Carousal from "../components/basic/Carousel";

const DashboardScreen = () => {
  return (
    <ScrollView scrollsToTop style={styles.screens}>
      <View style={styles.container}>
        {/* <Header /> */}
        {/* Carousal */}
        <View>
          <Carousal height={200} delay={10000} />
        </View>
        {/* Menu */}
        <View style={styles.menuContainer}>
          <IconWithName
            icon="apps"
            text="Applications"
            size={50}
            color={Colors.secondary}
            style={styles.menuItem}
          />
          <IconWithName
            icon="ticket-percent"
            text="Coupons"
            color={Colors.green}
            size={50}
            style={styles.menuItem}
            badge="3"
          />
          <IconWithName
            icon="tag-multiple-outline"
            size={50}
            text="Sale Items"
            color={Colors.blue}
            style={styles.menuItem}
          />
          <IconWithName
            icon="sale"
            text="Flash Deal"
            color={Colors.orange}
            size={50}
            style={styles.menuItem}
            badge="New!"
          />
        </View>
        <View style={styles.menuContainer}>
          <IconWithName
            icon="apps"
            text="Applications"
            size={50}
            color={Colors.secondary}
            style={styles.menuItem}
          />
          <IconWithName
            icon="ticket-percent"
            text="Coupons"
            color={Colors.green}
            size={50}
            style={styles.menuItem}
          />
          <IconWithName
            icon="tag-multiple-outline"
            size={50}
            text="Sale Items"
            color={Colors.blue}
            style={styles.menuItem}
          />
          <IconWithName
            icon="sale"
            text="Flash Deal"
            color={Colors.orange}
            size={50}
            style={styles.menuItem}
          />
        </View>
        {/* Badges */}
        <View style={styles.headerContainer}>
          <Heading title="Badges" />
        </View>
        <View style={styles.badgeContainer}>
          <Badge outline title="Badges" />
          <Badge title="Can be" color={Colors.orange} />
          <Badge title="more prefect and pretty" color={Colors.green} />
        </View>
        {/* Tags */}
        <View style={styles.headerContainer}>
          <Heading title="Tags" />
        </View>
        <View style={styles.badgeContainer}>
          <Tags outline title="Amjed Ali" />
          <Tags title="is the author" color={Colors.danger} />
          <Tags title="more prefect and pretty" color={Colors.green} />
        </View>
        {/* Tickets */}
        <View style={styles.headerContainer}>
          <Heading title="Tickets" />
        </View>
        <View style={styles.badgeContainer}>
          <Ticket />
        </View>
        {/* Products */}
        <View style={styles.headerContainer}>
          <Heading title="Products you may like..." />
        </View>
        <View style={styles.badgeContainer}>
          <ScrollView horizontal>
            <ProductGridItem
              title="Canon 550D"
              subTitle="Digital Camera"
              rating={2.5}
              price="599$"
              priceSubTitle="3 Sold"
              imageUri="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <ProductGridItem
              title="Mocha Lipstick"
              subTitle="Pink Velvet"
              rating={4.5}
              wished
              count={2}
              price="5$"
              priceSubTitle="43 Sold"
              imageUri="https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <ProductGridItem />
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  screens: { backgroundColor: Colors.white },
  container: {
    backgroundColor: "#F6F6F6",
  },
  menuItem: {
    marginHorizontal: 20,
    flex: 1,
  },
  menuContainer: {
    backgroundColor: Colors.white,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    backgroundColor: Colors.grey600,
    paddingHorizontal: 10,
  },
  badgeContainer: {
    flexDirection: "row",
    backgroundColor: Colors.grey700,
    paddingHorizontal: 5,
  },
});