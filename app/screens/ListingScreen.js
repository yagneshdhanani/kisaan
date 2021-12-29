import React, { useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import AppText from "../components/AppText";
import Card from "../components/Card";
import colors from "../config/colors";
import listingApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import useApi from "../hooks/useApi";

export default function ListingScreen({ navigation }) {
  const { data: listing, error, loading, request: loadListings } = useApi(
    listingApi.getListings
  );

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.container}>
      {error && (
        <>
          <AppText>Could't get data</AppText>
          <AppButton title="Reload" onPress={loadListings()} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listing}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            imageUrl={item.images[0].url}
            title={item.title}
            subTitle={"$" + item.price}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    // padding: 20,
    backgroundColor: colors.light,
  },
});
