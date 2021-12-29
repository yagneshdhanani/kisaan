import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ViewImageScreen({ route }) {
  const imageUri = route.params.uri;
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        style={styles.closeIcon}
        name="close"
        size={30}
        color="white"
      />
      <MaterialCommunityIcons
        style={styles.deleteIcon}
        name="trash-can-outline"
        size={30}
        color="white"
      />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{ uri: imageUri }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  deleteIcon: {
    position: "absolute",
    top: 50,
    right: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
