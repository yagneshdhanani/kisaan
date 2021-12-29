import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/Farmer.png")} style={styles.logo} />
        {/* <Text style={styles.tagline}>Sell That With Right Price</Text> */}
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",
    top: 70,
  },
  logo: {
    width: 190,
    height: 190,
  },
  tagline: {
    fontSize: 20,
    fontWeight: "700",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
