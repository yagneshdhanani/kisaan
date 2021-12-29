import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppImageInput from "./AppImageInput";

export default function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}) {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <AppImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <AppImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginVertical: 10 },
  image: { marginRight: 10 },
});
