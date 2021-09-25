import React, { useState } from "react";
import { View, Text } from "react-native";

const Home = ({ route }: any) => {
  const { latitude, longitude } = route.params.location;

  return (
    <>
      {latitude == undefined || longitude == undefined ? (
        <View>
          <Text>Something went wrong.</Text>
        </View>
      ) : (
        <View testID="display">
          <Text>Todo - load current weather</Text>
        </View>
      )}
    </>
  );
};

export default Home;
