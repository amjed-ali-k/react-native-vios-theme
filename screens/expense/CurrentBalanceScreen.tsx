import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import TextInput from "../../components/forms/FormTextInput";
import CurrentBalance from "../../components/misc/CurrentBalance";
import Colors from "../../constants/Colors";
import ExpenseList from "../../components/misc/ExpenseList";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Lime",
    date: "12 Jun 2021",
    subTitle: "Orange Bakery",
    amount: "10",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Egg Pufs",
    date: "09 Jun 2021",
    subTitle: "Orange Bakery",
    amount: "15",
  },
  {
    id: "ce38d924-b0f0-4aa7-9bfb-74d1edcc7c71",
    title: "Sandwitch",
    date: "11 Feb 2021",
    subTitle: "Orange Bakery",
    amount: "37",
  },
  {
    id: "3a779d14-e66b-4845-803b-9d06ee1c6dba",
    title: "Shavarma",
    date: "4 Feb 2021",
    subTitle: "Orange Bakery",
    amount: "16",
  },
  {
    id: "4b0ae010-0279-4abf-a9c7-14e0d9359d10",
    title: "Grape Juice",
    date: "15 Apr 2021",
    subTitle: "Orange Bakery",
    amount: "11",
  },
  {
    id: "d1c1eabf-9fdb-4149-ade9-add27ae3aa96",
    title: "Burger",
    date: "07 Jun 2021",
    subTitle: "Orange Bakery",
    amount: "61",
  },
  {
    id: "06f441bd-a386-4b5d-8761-db6493b19d14",
    title: "Chicken Roll",
    date: "04 Sep 2021",
    subTitle: "Orange Bakery",
    amount: "25",
  },
  {
    id: "e3b44614-3613-4a17-91f7-3e15e932089b",
    title: "Avacado Juice",
    date: "10 Jun 2021",
    subTitle: "Orange Bakery",
    amount: "62",
  },
  {
    id: "935303db-a43c-4e50-80d9-cffe16be23f1",
    title: "Mango Juice",
    date: "11 July 2021",
    subTitle: "Orange Bakery",
    amount: "34",
  },
  {
    id: "1a2c9b45-7426-4a07-914e-2518ac40ce70",
    title: "Vegitable Pufs",
    date: "02 Aug 2021",
    subTitle: "Orange Bakery",
    amount: "23",
  },
];

const CurrentBalanceScreen = (): React.ReactElement => {
  const renderItem = ({ item }: { item: typeof DATA[0] }) => {
    return (
      <ExpenseList
        date={item.date}
        title={item.title}
        subTitle={item.subTitle}
        amount={item.amount}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.searchContainer}>
              <TextInput
                backgroundColor={Colors.grey600}
                placeholder="Search"
                icon="search-web"
              />
            </View>
            <View>
              <CurrentBalance />
            </View>
          </>
        }
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CurrentBalanceScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.white,
  },
  searchContainer: {
    marginVertical: 10,
  },
});
