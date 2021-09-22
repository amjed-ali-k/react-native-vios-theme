import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { ScrollView } from "react-native";
import TextInput from "../../components/forms/FormTextInput";
import CurrentBalance from "../../components/misc/CurrentBalance";
import Colors from "../../constants/Colors";
import ExpenseList from "../../components/misc/ExpenseList";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Lime",
    date: "12 Jun 2021",
    subTitle: "Orange Backery",
    amount: "10",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Egg Pufs",
    date: "12 Jun 2021",
    subTitle: "Orange Backery",
    amount: "15",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Sandwitch",
    date: "12 Jun 2021",
    subTitle: "Orange Backery",
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
    <ScrollView style={styles.container}>
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
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
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
