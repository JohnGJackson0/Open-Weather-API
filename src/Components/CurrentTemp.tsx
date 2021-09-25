import React from "react";
import { View, Text } from "react-native";

const CurrentTemp = ({ temp }: any) => {
  return (
    <View style={{ margin: 5 }}>
      <View>
        <Text>Welcome!</Text>
        <Text>The current tempature for today is:</Text>
        <Text>{temp}</Text>
      </View>
    </View>
  );
};

export default CurrentTemp;
