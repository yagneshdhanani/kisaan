import React from "react";
import { View, StyleSheet, Image, Button } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Card({ title, subTitle, imageUrl, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
    borderRadius: 20,
    backgroundColor: "white",
    marginVertical: 10,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});
