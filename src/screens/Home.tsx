import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import CurrentTemp from "../Components/CurrentTemp";
import { GetTempAPICall } from "../GetTempAPICall";
import { getFarenheight } from "../Conversion";

const Home = ({ route }: any) => {
  const { latitude, longitude } = route.params.location;
  const [todaysTemp, setTodaysTemp] = useState("");

  useEffect(() => {
    (async () => {
      const { data }: any = await GetTempAPICall(latitude, longitude);
      setTodaysTemp(getFarenheight(data.list[0].main.temp));
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
        </View>
      )}
    </>
  );
};

export default Home;
