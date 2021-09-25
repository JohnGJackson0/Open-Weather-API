import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import CurrentTemp from "../Components/CurrentTemp";
import { GetTempAPICall } from "../GetTempAPICall";
import { getFarenheight } from "../Conversion";

const Home = ({ route, navigation }: any) => {
  const { latitude, longitude } = route.params.location;
  const [todaysTemp, setTodaysTemp] = useState("");
  const [forcast, setForcast] = useState("");

  useEffect(() => {
    (async () => {
      const { data }: any = await GetTempAPICall(latitude, longitude);
      setTodaysTemp(getFarenheight(data.list[0].main.temp));
      setForcast(data.list);
    })();
  }, []);

  return (
    <>
      {latitude == undefined || longitude == undefined ? (
        <View>
          <Text>Something went wrong.</Text>
        </View>
      ) : (
        <View testID="display">
          <CurrentTemp temp={todaysTemp} />
          {/* I would list both here but it says two different screen per spec */}
          <Button
            testID="forecastButton"
            title="See the Forecast"
            onPress={() => {
              navigation.navigate("Forecast", { forecast: forcast });
            }}
          ></Button>
        </View>
      )}
    </>
  );
};

export default Home;
