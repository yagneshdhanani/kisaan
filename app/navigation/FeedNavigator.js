import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import ListingScreenDetails from "../screens/ListingScreenDetails";
import ListingScreen from "../screens/ListingScreen";
import ViewImageScreen from "../screens/ViewImageScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator
      // headerMode="screen"
      mode="modal"
      screenOptions={() => ({
        headerShown: false,
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.ModalSlideFromBottomIOS,
      })}
    >
      <Stack.Screen name="ListingScreen" component={ListingScreen} />
      <Stack.Screen name="ListingDetails" component={ListingScreenDetails} />
      <Stack.Screen name="ImageScreen" component={ViewImageScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
