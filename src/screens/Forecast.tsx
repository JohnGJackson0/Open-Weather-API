import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import ForecastItem from "../Components/ForecastItem";

const Forecast = ({ navigation, route }: any) => {
  const { forecast } = route.params;

  const renderItem = ({ item }: any) => {
    return <ForecastItem item={item} />;
  };

  return (
    <View testID="forecast">
      <Text style={{ margin: 5 }}>Forecast</Text>

      <FlatList data={forecast} renderItem={renderItem} />

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
