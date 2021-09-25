import { waitFor } from "@testing-library/react-native";
import React from "react";
import { fireEvent, render } from "react-native-testing-library";
import Home from "../Home";

describe("Home", () => {
  describe("Location", () => {
    it("loads it properly", () => {
      const fakeRoute = {
        params: {
          location: {
            latitude: 15,
            longitude: 15,
          },
        },
      };

      const { getByTestId } = render(<Home route={fakeRoute} />);
      getByTestId("display");
    });
    it("displays error message if it is not recieved", () => {
      const fakeRoute = {
        params: {
          location: {},
        },
      };

      const { getByText } = render(<Home route={fakeRoute} />);

      getByText("Something went wrong.");
    });
  });
  describe("Button to forecast screen", async () => {
    const fakeNavigator = {
      navigate: jest.fn(),
      getParam: jest.fn(),
    };
    const fakeRoute = {
      params: {
        location: { latitude: 5, longitude: 10 },
      },
    };

    //TODO mock the API request to avoid overload/random failing tests
    //due to external api responses
    it("routes correctly", async () => {
      const { getByTestId } = render(
        <Home navigation={fakeNavigator} route={fakeRoute} />
      );
      fireEvent.press(getByTestId("forecastButton"));

      await waitFor(() => {
        expect(fakeNavigator.navigate).toHaveBeenCalled();
      });
    });
  });
});
