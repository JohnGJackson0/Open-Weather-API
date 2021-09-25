import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RequestingLocationScreen from "./src/screens/RequestingLocationScreen";
import Home from "./src/screens/Home";
import { SafeAreaView } from "react-native";
const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

export const AppStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Location Service"
  >
    <HomeStack.Screen
      name="Location Service"
      component={RequestingLocationScreen}
    />
    <HomeStack.Screen name="Home" component={Home} />
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
