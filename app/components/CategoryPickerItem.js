import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

export default function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={60}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
