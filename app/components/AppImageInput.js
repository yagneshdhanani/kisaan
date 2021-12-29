import React, { useEffect } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

export default function AppImageInput({ imageUri, onChangeImage }) {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("Provide this you bitch");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const pressHandler = () => {
    if (!imageUri) pickImage();
    else {
      Alert.alert("Delete", "Are you sure you want to remove this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "cancel", onPress: () => console.log("Okay") },
      ]);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      onChangeImage(result.uri);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={pressHandler}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    borderRadius: 25,
    backgroundColor: colors.light,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
  },
});
