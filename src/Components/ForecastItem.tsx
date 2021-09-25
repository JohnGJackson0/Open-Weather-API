import React from "react";
import { View, Text } from "react-native";
import { getFarenheight } from "../Conversion";

const ForecastItem = (props: any) => {
  return (
    <View>
      <Text>The Tempature: {getFarenheight(props.item.main.temp)}</Text>
      <Text style={{ marginBottom: 5 }}>On Date: {props.item.dt_txt} </Text>
    </View>
  );
};

export default ForecastItem;
