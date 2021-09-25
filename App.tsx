import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RequestingLocationScreen from "./src/screens/RequestingLocationScreen";
import Home from "./src/screens/Home";

const Stack = createNativeStackNavigator();

export const AppStack = () => (
  <Stack.Navigator initialRouteName="Location Service">
    <Stack.Screen
      name="Location Service"
      component={RequestingLocationScreen}
    />
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
