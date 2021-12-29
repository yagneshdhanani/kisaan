import React from "react";
import { Image, TouchableOpacity, View, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";

function ListingScreenDetails({ route, navigation }) {
  const listing = route.params;
  return (
    <Screen style={styles.cardContainer}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(routes.IMAGE_SCREEN, {
            uri: listing.images[0].url,
          })
        }
      >
        <Image style={styles.image} source={{ uri: listing.images[0].url }} />
      </TouchableOpacity>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.subTitle}>${listing.price}</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          title="Saurashtra Club"
          subTitle="5 Listing"
          image={require("../assets/mosh.jpg")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  cardContainer: {},
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  subTitle: {
    fontSize: 20,
    marginVertical: 5,
    fontWeight: "bold",
    color: colors.secondary,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});

export default ListingScreenDetails;
