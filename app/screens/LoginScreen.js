import React, { useState, useContext } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import jwtDecode from "jwt-decode";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import authApi from "../api/auth";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AuthContext from "../auth/context";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(4).max(16).label("Password"),
});

export default function LoginScreen({ navigation }) {
  const authContext = useContext(AuthContext);

  const [loginFaild, setLoginFaild] = useState(false);
  const handleSubmit = async ({ email, password }) => {
    setLoginFaild(false);
    const result = await authApi.login(email, password);

    if (!result.ok) return setLoginFaild(true);

    const user = jwtDecode(result.data);
    authContext.setUser(user);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/Farmer.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email or/and password"
          visible={loginFaild}
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
        <SubmitButton title="login" />
      </AppForm>
      <View
        style={{ flexDirection: "row", justifyContent: "center", padding: 20 }}
      >
        <Text>New Here?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(routes.REGISTER)}>
          <Text
            style={{
              marginLeft: 10,
              color: colors.primary,
              borderBottomColor: colors.primary,
              borderBottomWidth: 1,
            }}
          >
            Register
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
  logo: {
    width: 150,
    height: 150,
    marginTop: 10,
    marginBottom: 40,
    alignSelf: "center",
  },
});
