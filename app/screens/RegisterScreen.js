import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(4).max(16).label("Password"),
});

export default function RegisterScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          keyboardType="email-address"
          placeholder="Email"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
        />
        <SubmitButton title="register" />
      </AppForm>
      <View
        style={{ flexDirection: "row", justifyContent: "center", padding: 20 }}
      >
        <Text>Already User?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(routes.LOGIN)}>
          <Text
            style={{
              marginLeft: 10,
              color: colors.primary,
              borderBottomColor: colors.primary,
              borderBottomWidth: 1,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
