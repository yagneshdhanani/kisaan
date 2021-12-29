import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyle from "../config/styles";

export default function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.inputContainer, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyle.colors.medium}
          style={styles.inputIcon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyle.colors.medium}
        style={defaultStyle.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: defaultStyle.colors.light,
    borderRadius: 50,
    padding: 15,
    paddingVertical: 13,
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  inputIcon: {
    marginRight: 10,
  },
});
