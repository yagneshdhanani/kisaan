import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import defaultStyle from "../config/styles";
import PickerItem from "./PickerItem";
import Screen from "./Screen";

export default function AppPicker({
  icon,
  items,
  numberOfColumns = 1,
  onSelectedItem,
  PickerItemComponent = PickerItem,
  placeholder,
  selectedItem,
  width = "100%",
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.inputCOntainer, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyle.colors.medium}
              style={styles.inputIcon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          {!selectedItem && (
            <MaterialCommunityIcons
              name="chevron-down"
              size={20}
              color={defaultStyle.colors.medium}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <MaterialCommunityIcons
            name="close"
            size={24}
            color={defaultStyle.colors.secondary}
            onPress={() => setModalVisible(false)}
            style={styles.closeIcon}
          />
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectedItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    alignSelf: "center",
  },
  inputCOntainer: {
    backgroundColor: defaultStyle.colors.light,
    borderRadius: 50,
    padding: 15,
    paddingVertical: 13,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  inputIcon: {
    marginRight: 10,
  },
  placeholder: {
    flex: 1,
    color: defaultStyle.colors.medium,
  },
});
