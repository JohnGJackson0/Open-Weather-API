import React from "react";
import { render } from "react-native-testing-library";
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
});
