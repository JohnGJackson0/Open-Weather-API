import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RequestingLocationScreen from "./src/screens/RequestingLocationScreen";
import Home from "./src/screens/Home";
import { SafeAreaView } from "react-native";
import Forecast from "./src/screens/Forecast";
const Stack = createNativeStackNavigator();

export const AppStack = () => (
  <Stack.Navigator
    initialRouteName="Location Service"
    screenOptions={{
      headerShown: true,
    }}
  >
    <Stack.Screen
      name="Location Service"
      component={RequestingLocationScreen}
    />
    <Stack.Screen
      name="Forecast"
      component={Forecast}
      options={{ title: "My home" }}
    />
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}
