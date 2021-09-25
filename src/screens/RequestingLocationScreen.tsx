import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const RequestingLocationScreen = () => {
  const [message, setMessage] = useState("Waiting for GEO Location");

  useEffect(() => {
    //reset on render
    setMessage("Waiting for GEO Location");
  }, []);

  return (
    <View testID="RequestingLocationScreen">
      <Text>Please accept location permission.</Text>
    </View>
  );
};

export default RequestingLocationScreen;
