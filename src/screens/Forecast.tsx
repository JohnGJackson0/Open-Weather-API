import React from "react";
import { View, Text, Button } from "react-native";

const Forecast = ({ navigation, route }: any) => {
  const { forecast } = route.params;
  return (
    <View testID="forecast">
      {console.log(forecast)}
      <Text>Forecast</Text>

      <Button
        title="return"
        onPress={() => {
          navigation.goBack();
        }}
      ></Button>
    </View>
  );
};

export default Forecast;
