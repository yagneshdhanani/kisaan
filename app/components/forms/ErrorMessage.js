import React from "react";
import { StyleSheet } from "react-native";

import AppText from "../AppText";

export default function ErrorMessage({ error, visible }) {
  if (!error || !visible) return null;
  return <AppText style={styles.text}>{error}</AppText>;
}

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontSize: 13,
    marginTop: -10,
    // marginBottom: 20,
  },
});
