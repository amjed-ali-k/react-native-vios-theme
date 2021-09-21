import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "../Themed";
import Colors from "../../constants/Colors";
import { Fonts } from "../../constants/Typography";
import { IconName } from "../basic/Icons";

interface ElementProps {
    title: string;
    subTitle: string;
    price: string;
    rating: number;
    wished: boolean;
    priceSubTitle: string;
    subTitleIcon: IconName;
    count: number;
    onPressImage: () => void;
    onPressCount: () => void;
    onPressMinus: () => void;
    onLongPressCount: () => void;
    onPressWish: () => void;
    imageUri: string
}

const ProductGridItem = ({
  title = "iPhone 12 ",
  subTitle = "128GB",
  price = "$799",
  rating = 2,
  wished,
  priceSubTitle = "150 Sold",
  subTitleIcon = "fire",
  count = 0,
  onPressImage = () => console.log("Pressed Image"),
  onPressCount = () => console.log("Pressed Count Increment"),
  onPressMinus = () => console.log("Pressed Count Decrement"),
  onLongPressCount = () => {
    console.log("Long Pressed Count");
  },
  onPressWish = () => console.log("Pressed Add to WishList"),
  imageUri = "https://images.pexels.com/photos/265658/pexels-photo-265658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
}: ElementProps): React.ReactElement => {
  const showPlus = count == 0;

  return (
    <View style={styles.container}>
      <View style={styles.productImage}>
        <TouchableOpacity activeOpacity={0.7} onPress={onPressImage}>
          <Image style={styles.image} source={{ uri: imageUri }} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onPressWish}
          style={styles.wishListButton}
        >
          <MaterialCommunityIcons
            name={wished ? "heart" : "heart-outline"}
            color={wished ? Colors.red : Colors.grey400}
            size={20}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.productTitle}>{title}</Text>
        <View style={styles.productHeader}>
          <View style={styles.productNameContainer}>
            <Text style={styles.productSubTitle}>{subTitle}</Text>
          </View>
          <View style={styles.productRatingContainer}>
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <MaterialCommunityIcons
                size={15}
                name={
                  rating > 4
                    ? "star"
                    : rating > 2
                    ? "star-half"
                    : "star-outline"
                }
                color={"gold"}
              />
              <Text>{rating}</Text>
            </View>
          </View>
        </View>
        <View style={styles.productValuesContainer}>
          <View style={styles.productPriceContainer}>
            <Text style={styles.productPriceTitle}>{price}</Text>
            <View style={styles.productPriceSubtitleContainer}>
              <MaterialCommunityIcons
                color={Colors.grey300}
                style={styles.fireIcon}
                name={subTitleIcon}
              />
              <Text style={styles.productPriceSubtitle}>{priceSubTitle}</Text>
            </View>
          </View>

          <View style={styles.productActionContainer}>
            {!showPlus ? (
              <>
                <TouchableOpacity
                  onPress={onPressMinus}
                  style={styles.productActionButton}
                >
                  <MaterialCommunityIcons name="minus" size={20} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={onPressCount}
                  style={styles.productActionButton}
                >
                  <Text style={styles.productActionCount}>{count}</Text>
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity
                onPress={onPressCount}
                style={styles.productActionButton}
              >
                <MaterialCommunityIcons name="cart-outline" size={20} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductGridItem;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 10,
    overflow: "hidden",
    width: 200,
    backgroundColor: Colors.white,
  },
  productImage: {
    height: 150,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  wishListButton: {
    position: "absolute",
    top: 7,
    right: 7,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  detailContainer: {
    padding: 7,
  },
  productHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productRatingContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  productNameContainer: {
    marginBottom: 5,
  },
  productTitle: {
    color: Colors.grey100,
    fontSize: 20,
    fontWeight: "bold",
  },
  productSubTitle: {
    color: Colors.grey200,
    fontSize: 18,
  },
  productValuesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productPriceContainer: {},
  productPriceTitle: {
    fontFamily: Fonts.textBold,
    fontSize: 30,
    color: Colors.grey100,
  },
  productPriceSubtitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  fireIcon: {
    marginRight: 1,
  },
  productPriceSubtitle: {
    color: Colors.grey300,
  },
  productActionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  productActionButton: {
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 4,
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
  },
  productActionCount: {},
});