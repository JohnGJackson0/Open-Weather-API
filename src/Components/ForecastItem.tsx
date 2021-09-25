import React from "react";
import { View, Text, Image } from "react-native";
import { getFarenheight } from "../Conversion";

//credits to so we don't have to make a million api calls
//https://github.com/yuvraaaj/openweathermap-api-icons
const ForecastItem = (props: any) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        style={{ width: 50, height: 50, resizeMode: "cover" }}
        source={require("../icons/" + props.item.weather[0].icon + ".png")}
      />
      <Text>Temp: {getFarenheight(props.item.main.temp)}</Text>
      <Text style={{ marginBottom: 5 }}> On Date: {props.item.dt_txt} </Text>
    </View>
  );
};

export default ForecastItem;
