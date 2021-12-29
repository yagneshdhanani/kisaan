import React from "react";
import LottieView from "lottie-react-native";

export default function ActivityIndicator({ visible }) {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      loop
      source={require("../assets/animations/loader.json")}
    />
  );
}
