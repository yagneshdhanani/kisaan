import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import AppText from "../AppText";

export default function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.listContainer}>
          {IconComponent}
          {image && <Image style={styles.image} source={image}></Image>}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={24}
            color={colors.medium}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    marginLeft: 10,
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  listContainer: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  subTitle: {
    color: colors.medium,
    fontSize: 15,
  },
  title: {
    fontWeight: "700",
  },
});
