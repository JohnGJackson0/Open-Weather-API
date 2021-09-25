import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import * as Location from "expo-location";

export default function RequestingLocationScreen({ navigation }: any) {
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState({});

  useEffect(() => {
    setMessage("waiting for geo location...");

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log(status);
      if (status !== "granted") {
        setMessage("Permission to geo locate was denied");
        return;
      }
      setLocation((await Location.getCurrentPositionAsync({})).coords);
    })();
  }, []);

  useEffect(() => {
    console.log("The Location ", location);
    if (Object.keys(location).length !== 0) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Home", params: { location: location } }],
      });
    }
  }, [location]);

  return (
    <View testID="RequestingLocationScreen">
      <Text>Follow the prompt to get permission to find your location.</Text>
      <Text>{message}</Text>
    </View>
  );
}
