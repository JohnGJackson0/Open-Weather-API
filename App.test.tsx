import React from "react";
import renderer from "react-test-renderer";
import App, { AppStack } from "./App";
import { NavigationContainer } from "@react-navigation/native";
import { render, waitFor } from "@testing-library/react-native";

describe("App Component", () => {
  it("routes to the correct screen", async () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    );

    await waitFor(() => {
      getByTestId("RequestingLocationScreen");
    });
  });
});
