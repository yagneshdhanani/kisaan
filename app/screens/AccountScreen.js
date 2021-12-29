import React, { useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import AuthContext from "../auth/context";

const menuItems = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

export default function AccountScreen({ navigation }) {
  const {
    user: { name, email },
  } = useContext(AuthContext);
  return (
    <View style={styles.screen}>
      <View style={styles.contactContainer}>
        <ListItem
          title={name}
          subTitle={email}
          image={require("../assets/mosh.jpg")}
        ></ListItem>
      </View>

      <View style={styles.contactContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>

      <View style={styles.contactContainer}>
        <ListItem
          title="Log Out"
          IconComponent={
            <Icon name="logout" backgroundColor="#ffb300" iconColor="white" />
          }
        ></ListItem>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contactContainer: {
    backgroundColor: colors.white,
    marginVertical: 15,
  },
  screen: {
    flex: 1,
    backgroundColor: colors.grey,
  },
});
